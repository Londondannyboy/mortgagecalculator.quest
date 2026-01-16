"use client";

import { CopilotSidebar } from "@copilotkit/react-ui";
import { useCoAgent, useRenderToolCall } from "@copilotkit/react-core";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { MortgageResultCard } from "@/components/MortgageResultCard";

interface MortgageState {
  principal: number;
  interest_rate: number;
  term_years: number;
  monthly_payment: number | null;
  total_interest: number | null;
  property_value: number | null;
  stamp_duty: number | null;
}

export default function Home() {
  const { state, setState } = useCoAgent<MortgageState>({
    name: "mortgage_agent",
    initialState: {
      principal: 300000,
      interest_rate: 4.5,
      term_years: 25,
      monthly_payment: null,
      total_interest: null,
      property_value: null,
      stamp_duty: null,
    },
  });

  // Render mortgage calculation results in chat
  useRenderToolCall({
    name: "calculate_mortgage",
    render: ({ result }) => {
      if (!result) return <></>;
      return (
        <MortgageResultCard
          monthlyPayment={result.monthly_payment}
          totalInterest={result.total_interest}
          totalPaid={result.total_paid}
        />
      );
    },
  });

  // Render stamp duty results in chat
  useRenderToolCall({
    name: "calculate_stamp_duty",
    render: ({ result }) => {
      if (!result) return <></>;
      return (
        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200">Stamp Duty Calculation</h3>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-300">
            £{result.stamp_duty?.toLocaleString()}
          </p>
          <p className="text-sm text-blue-600 dark:text-blue-400">
            Effective rate: {result.effective_rate}%
          </p>
        </div>
      );
    },
  });

  const instructions = `
    You are a UK mortgage calculator assistant helping homebuyers understand their mortgage options.

    Current calculator values:
    - Loan Amount: £${state.principal?.toLocaleString() || 'Not set'}
    - Interest Rate: ${state.interest_rate || 'Not set'}%
    - Term: ${state.term_years || 'Not set'} years

    You can help users:
    1. Calculate monthly mortgage payments
    2. Calculate UK stamp duty
    3. Compare different mortgage scenarios
    4. Explain mortgage concepts

    Always use the appropriate tools to perform calculations rather than estimating.
  `;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <CopilotSidebar
        instructions={instructions}
        labels={{
          title: "Mortgage Assistant",
          initial: "Hi! I can help you calculate mortgage payments, stamp duty, and more. What would you like to know?",
        }}
      >
        <main className="container mx-auto px-4 py-8">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
              Mortgage Calculator
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Calculate your UK mortgage payments with AI assistance
            </p>
          </header>

          <MortgageCalculator
            state={state}
            onStateChange={(updates) => setState((prev) => ({ ...prev, ...updates }))}
          />
        </main>
      </CopilotSidebar>
    </div>
  );
}
