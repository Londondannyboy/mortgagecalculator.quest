/**
 * Zep User Memory API
 *
 * Manages user memory and facts in Zep graph
 * - GET: Retrieve user profile and facts
 * - POST: Add a message to user's memory graph
 */

import { NextRequest, NextResponse } from "next/server";
import { ZepClient } from "@getzep/zep-cloud";

const GRAPH_ID = "mortgage_calculator";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "userId is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.ZEP_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "ZEP_API_KEY not configured" },
        { status: 500 }
      );
    }

    const client = new ZepClient({ apiKey });

    // Try to search for facts about this user in the mortgage graph
    let userFacts: { edges?: Array<{ fact?: string }> } = { edges: [] };
    try {
      userFacts = await client.graph.search({
        graphId: GRAPH_ID,
        userId,
        query: "user name mortgage property budget first-time buyer",
        limit: 20,
        scope: "edges",
      });
    } catch (searchError) {
      // User may not exist yet or have no data
      console.log("[Zep User] No facts found for user:", userId);
    }

    // Extract user profile from facts
    const profile = {
      userId,
      isReturningUser: (userFacts.edges?.length || 0) > 0,
      facts: userFacts.edges || [],
      userName: extractUserName(userFacts.edges || []),
      mortgagePreferences: extractMortgagePrefs(userFacts.edges || []),
    };

    return NextResponse.json(profile);
  } catch (error) {
    console.error("[Zep User] GET Error:", error);
    return NextResponse.json({
      userId: "",
      isReturningUser: false,
      facts: [],
      userName: undefined,
      mortgagePreferences: {},
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId, message, role = "user", name } = await request.json();

    if (!userId || !message) {
      return NextResponse.json(
        { error: "userId and message are required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.ZEP_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "ZEP_API_KEY not configured" },
        { status: 500 }
      );
    }

    const client = new ZepClient({ apiKey });

    // Ensure user exists
    try {
      await client.user.get(userId);
    } catch {
      await client.user.add({ userId });
    }

    // Format message with speaker attribution
    const formattedMessage = name
      ? `${name} (${role}): ${message}`
      : `${role}: ${message}`;

    // Add message to mortgage graph (Zep automatically extracts facts)
    const result = await client.graph.add({
      graphId: GRAPH_ID,
      userId,
      type: "message",
      data: formattedMessage,
    });

    return NextResponse.json({
      success: true,
      episodeId: result.uuid,
    });
  } catch (error) {
    console.error("[Zep User] POST Error:", error);
    return NextResponse.json(
      { error: "Failed to store message", details: String(error) },
      { status: 500 }
    );
  }
}

// Helper: Extract user name from facts
function extractUserName(edges: Array<{ fact?: string }>): string | undefined {
  for (const edge of edges) {
    const fact = edge.fact?.toLowerCase() || "";
    const namePatterns = [
      /name is (\w+)/i,
      /called (\w+)/i,
      /user (\w+)/i,
    ];
    for (const pattern of namePatterns) {
      const match = fact.match(pattern);
      if (match && match[1]) {
        return match[1].charAt(0).toUpperCase() + match[1].slice(1);
      }
    }
  }
  return undefined;
}

// Helper: Extract mortgage preferences from facts
function extractMortgagePrefs(edges: Array<{ fact?: string }>): Record<string, string> {
  const prefs: Record<string, string> = {};

  for (const edge of edges) {
    const fact = edge.fact || "";

    // Budget patterns
    if (/budget|afford|spend/i.test(fact)) {
      const budgetMatch = fact.match(/£?([\d,]+)/);
      if (budgetMatch) prefs.budget = budgetMatch[1].replace(/,/g, '');
    }

    // First-time buyer
    if (/first[- ]?time buyer/i.test(fact)) {
      prefs.firstTimeBuyer = 'true';
    }

    // Property type
    if (/flat|apartment|house|property/i.test(fact)) {
      const typeMatch = fact.match(/(flat|apartment|house|terraced|detached|semi)/i);
      if (typeMatch) prefs.propertyType = typeMatch[1].toLowerCase();
    }

    // Location
    if (/london|manchester|birmingham|leeds|bristol/i.test(fact)) {
      const locMatch = fact.match(/(london|manchester|birmingham|leeds|bristol)/i);
      if (locMatch) prefs.location = locMatch[1];
    }
  }

  return prefs;
}
