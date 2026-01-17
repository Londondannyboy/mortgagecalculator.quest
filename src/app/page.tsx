"use client";

import { useState } from "react";
import { CopilotSidebar } from "@copilotkit/react-ui";
import { useCoAgent, useRenderToolCall } from "@copilotkit/react-core";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { MortgageResultCard } from "@/components/MortgageResultCard";
import { MortgageTimeline } from "@/components/MortgageTimeline";
import { AmortizationChart } from "@/components/AmortizationChart";
import { OverpaymentSimulator } from "@/components/OverpaymentSimulator";

interface MortgageState {
  principal: number;
  interest_rate: number;
  term_years: number;
  monthly_payment: number | null;
  total_interest: number | null;
  property_value: number | null;
  stamp_duty: number | null;
}

type TabType = 'calculator' | 'timeline' | 'amortization' | 'overpayment';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('calculator');

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

  // Calculate monthly payment for visualizations
  const monthlyPayment = state?.monthly_payment || calculateMonthlyPayment(
    state?.principal || 300000,
    state?.interest_rate || 4.5,
    state?.term_years || 25
  );

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
          {result.is_first_time_buyer && (
            <p className="text-xs text-green-600 mt-1">First-time buyer relief applied</p>
          )}
          {result.is_additional_property && result.surcharge > 0 && (
            <p className="text-xs text-orange-600 mt-1">+£{result.surcharge.toLocaleString()} additional property surcharge</p>
          )}
        </div>
      );
    },
  });

  // Render mortgage comparison results
  useRenderToolCall({
    name: "compare_mortgages",
    render: ({ result }) => {
      if (!result || !result.scenarios) return <></>;
      return (
        <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg space-y-3">
          <h3 className="font-semibold text-purple-800 dark:text-purple-200">Mortgage Comparison</h3>
          <div className="grid gap-2">
            {result.scenarios.map((scenario: { scenario: number; principal: number; annual_rate: number; term_years: number; monthly_payment: number; total_interest: number; monthly_diff?: number }, idx: number) => (
              <div key={idx} className={`p-3 rounded ${idx === 0 ? 'bg-purple-100 dark:bg-purple-800' : 'bg-white dark:bg-gray-800'}`}>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Scenario {scenario.scenario}</span>
                  <span className="text-lg font-bold text-purple-600">£{scenario.monthly_payment?.toLocaleString()}/mo</span>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  £{scenario.principal?.toLocaleString()} at {scenario.annual_rate}% for {scenario.term_years} years
                </div>
                {scenario.monthly_diff !== undefined && scenario.monthly_diff !== 0 && (
                  <div className={`text-xs mt-1 ${scenario.monthly_diff > 0 ? 'text-red-500' : 'text-green-500'}`}>
                    {scenario.monthly_diff > 0 ? '+' : ''}£{scenario.monthly_diff}/mo vs baseline
                  </div>
                )}
              </div>
            ))}
          </div>
          {result.lowest_total_interest && (
            <p className="text-xs text-green-600 dark:text-green-400">
              Best for total cost: Scenario {result.lowest_total_interest.scenario}
            </p>
          )}
        </div>
      );
    },
  });

  // Render affordability calculation
  useRenderToolCall({
    name: "calculate_affordability",
    render: ({ result }) => {
      if (!result) return <></>;
      return (
        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg">
          <h3 className="font-semibold text-emerald-800 dark:text-emerald-200">Affordability Estimate</h3>
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Standard (4x income)</p>
              <p className="text-xl font-bold text-emerald-600">£{result.standard_mortgage?.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Maximum (4.5x income)</p>
              <p className="text-xl font-bold text-emerald-700">£{result.max_mortgage?.toLocaleString()}</p>
            </div>
          </div>
          {result.deposit > 0 && (
            <div className="mt-3 pt-3 border-t border-emerald-200 dark:border-emerald-700">
              <p className="text-xs text-gray-600 dark:text-gray-400">With your £{result.deposit?.toLocaleString()} deposit:</p>
              <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
                Property budget: £{result.standard_property_price?.toLocaleString()} - £{result.max_property_price?.toLocaleString()}
              </p>
            </div>
          )}
          <p className="text-xs text-gray-500 mt-2 italic">{result.note}</p>
        </div>
      );
    },
  });

  const instructions = `
    You are a UK mortgage calculator assistant helping homebuyers understand their mortgage options.

    Current calculator values:
    - Loan Amount: £${state?.principal?.toLocaleString() || 'Not set'}
    - Interest Rate: ${state?.interest_rate || 'Not set'}%
    - Term: ${state?.term_years || 'Not set'} years
    ${state?.monthly_payment ? `- Monthly Payment: £${state.monthly_payment.toLocaleString()}` : ''}

    You can help users:
    1. Calculate monthly mortgage payments
    2. Calculate UK stamp duty
    3. Compare different mortgage scenarios
    4. Explain mortgage concepts
    5. Show timeline to mortgage freedom
    6. Analyze overpayment scenarios

    Always use the appropriate tools to perform calculations rather than estimating.
    Be conversational and helpful. Speak naturally for voice interactions.
  `;

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'calculator', label: 'Calculator', icon: '🧮' },
    { id: 'timeline', label: 'Timeline', icon: '📈' },
    { id: 'amortization', label: 'Breakdown', icon: '📊' },
    { id: 'overpayment', label: 'Overpayments', icon: '💰' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <CopilotSidebar
        instructions={instructions}
        labels={{
          title: "Mortgage Assistant",
          initial: "Hi! I can help you calculate mortgage payments, stamp duty, and plan your path to mortgage freedom. What would you like to know?",
        }}
      >
        <main className="container mx-auto px-4 py-8 max-w-6xl">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
              Mortgage Calculator
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Calculate your UK mortgage payments with AI assistance
            </p>
          </header>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white dark:bg-gray-800 rounded-xl p-1 shadow-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-all
                    ${activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  <span className="mr-1">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {activeTab === 'calculator' && state && (
              <MortgageCalculator
                state={state}
                onStateChange={(updates) => setState((prev) => ({ ...state, ...prev, ...updates }))}
              />
            )}

            {activeTab === 'timeline' && (
              <MortgageTimeline
                principal={state?.principal || 300000}
                interestRate={state?.interest_rate || 4.5}
                termYears={state?.term_years || 25}
              />
            )}

            {activeTab === 'amortization' && (
              <AmortizationChart
                principal={state?.principal || 300000}
                interestRate={state?.interest_rate || 4.5}
                termYears={state?.term_years || 25}
              />
            )}

            {activeTab === 'overpayment' && (
              <OverpaymentSimulator
                principal={state?.principal || 300000}
                interestRate={state?.interest_rate || 4.5}
                termYears={state?.term_years || 25}
                monthlyPayment={monthlyPayment}
              />
            )}
          </div>

          {/* Quick Stats Footer */}
          {state && (
            <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">Loan Amount</p>
                  <p className="text-lg font-bold text-gray-800 dark:text-white">
                    £{(state.principal || 0).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">Interest Rate</p>
                  <p className="text-lg font-bold text-gray-800 dark:text-white">
                    {state.interest_rate || 0}%
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">Term</p>
                  <p className="text-lg font-bold text-gray-800 dark:text-white">
                    {state.term_years || 0} years
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">Monthly Payment</p>
                  <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    £{monthlyPayment.toLocaleString('en-GB', { maximumFractionDigits: 0 })}
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>
      </CopilotSidebar>
    </div>
  );
}

// Helper function to calculate monthly payment
function calculateMonthlyPayment(principal: number, annualRate: number, termYears: number): number {
  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = termYears * 12;

  if (monthlyRate === 0) {
    return principal / totalMonths;
  }

  return principal * (
    monthlyRate * Math.pow(1 + monthlyRate, totalMonths)
  ) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
}
