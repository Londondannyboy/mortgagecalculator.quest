/**
 * Initialize ZEP Graph for Mortgage Calculator
 *
 * Run with: npx tsx scripts/init-zep-graph.ts
 */

import { ZepClient } from "@getzep/zep-cloud";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const GRAPH_ID = "mortgage_calculator";

async function initGraph() {
  const apiKey = process.env.ZEP_API_KEY;

  if (!apiKey) {
    console.error("ZEP_API_KEY not found in .env.local");
    process.exit(1);
  }

  const client = new ZepClient({ apiKey });

  console.log(`Creating ZEP graph: ${GRAPH_ID}...`);

  try {
    // Check if graph already exists
    try {
      const existing = await client.graph.get(GRAPH_ID);
      console.log("Graph already exists:", existing);
      return;
    } catch {
      // Graph doesn't exist, create it
    }

    // Create the graph
    const result = await client.graph.create({
      graphId: GRAPH_ID,
    });

    console.log("Graph created successfully:", result);
  } catch (error) {
    console.error("Error creating graph:", error);
    process.exit(1);
  }
}

initGraph();
