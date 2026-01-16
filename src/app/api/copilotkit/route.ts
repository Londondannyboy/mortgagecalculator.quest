import {
  CopilotRuntime,
  ExternalAgentRuntime,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { NextRequest } from "next/server";

const runtime = new CopilotRuntime({
  agents: {
    mortgage_agent: new ExternalAgentRuntime({
      url: (process.env.AGENT_URL || "http://localhost:8000") + "/ag-ui",
    }),
  },
});

export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};
