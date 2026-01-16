import {
  CopilotRuntime,
  copilotRuntimeNextJSAppRouterEndpoint,
  OpenAIAdapter,
} from "@copilotkit/runtime";
import { LangGraphHttpAgent } from "@copilotkit/runtime/langgraph";
import { NextRequest } from "next/server";

// Use OpenAI adapter as fallback for non-agent interactions
const serviceAdapter = new OpenAIAdapter();

// Create the HTTP agent that connects to our Pydantic AI backend
const mortgageAgent = new LangGraphHttpAgent({
  url: (process.env.AGENT_URL || "http://localhost:8000") + "/ag-ui",
  agentId: "mortgage_agent",
  description: "UK Mortgage Calculator Agent",
});

const runtime = new CopilotRuntime({
  agents: {
    mortgage_agent: mortgageAgent,
  },
});

export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter,
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};
