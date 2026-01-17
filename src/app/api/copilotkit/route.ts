import {
  CopilotRuntime,
  copilotRuntimeNextJSAppRouterEndpoint,
  ExperimentalEmptyAdapter,
} from "@copilotkit/runtime";
import { HttpAgent } from "@ag-ui/client";
import { NextRequest } from "next/server";

// Use empty adapter since we're only using our Pydantic AI agent
const serviceAdapter = new ExperimentalEmptyAdapter();

// Create the HTTP agent that connects to our Pydantic AI backend
// The agent exposes AG-UI protocol at /ag-ui endpoint
const agentUrl = process.env.AGENT_URL || "http://localhost:8000";
const mortgageAgent = new HttpAgent({
  url: `${agentUrl}/ag-ui/`
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
