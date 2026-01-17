"use client";

import { useState, useEffect } from "react";

interface MortgageState {
  principal: number;
  interest_rate: number;
  term_years: number;
  monthly_payment: number | null;
  total_interest: number | null;
  property_value: number | null;
  stamp_duty: number | null;
}

interface Props {
  state: MortgageState;
  onStateChange: (updates: Partial<MortgageState>) => void;
}

export function MortgageCalculator({ state, onStateChange }: Props) {
  const [deposit, setDeposit] = useState(60000);

  // Calculate locally for instant UI feedback
  const calculateMortgage = () => {
    const { principal, interest_rate, term_years } = state;
    if (!principal || !interest_rate || !term_years) return;

    const monthlyRate = interest_rate / 100 / 12;
    const numPayments = term_years * 12;

    if (monthlyRate === 0) {
      const monthly = principal / numPayments;
      onStateChange({
        monthly_payment: Math.round(monthly * 100) / 100,
        total_interest: 0,
      });
      return;
    }

    const monthly =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);

    const totalPaid = monthly * numPayments;
    const totalInterest = totalPaid - principal;

    onStateChange({
      monthly_payment: Math.round(monthly * 100) / 100,
      total_interest: Math.round(totalInterest * 100) / 100,
    });
  };

  useEffect(() => {
    calculateMortgage();
  }, [state.principal, state.interest_rate, state.term_years]);

  // Update principal when property value or deposit changes
  useEffect(() => {
    if (state.property_value) {
      const newPrincipal = state.property_value - deposit;
      if (newPrincipal > 0) {
        onStateChange({ principal: newPrincipal });
      }
    }
  }, [state.property_value, deposit]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Mortgage Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Property Value */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Property Value
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-500">£</span>
              <input
                type="number"
                value={state.property_value || ""}
                onChange={(e) =>
                  onStateChange({ property_value: Number(e.target.value) })
                }
                className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="360,000"
              />
            </div>
          </div>

          {/* Deposit */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Deposit
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-500">£</span>
              <input
                type="number"
                value={deposit}
                onChange={(e) => setDeposit(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="60,000"
              />
            </div>
          </div>

          {/* Loan Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Loan Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-500">£</span>
              <input
                type="number"
                value={state.principal}
                onChange={(e) =>
                  onStateChange({ principal: Number(e.target.value) })
                }
                className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="300,000"
              />
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Interest Rate (% per year)
            </label>
            <div className="relative">
              <input
                type="number"
                step="0.1"
                value={state.interest_rate}
                onChange={(e) =>
                  onStateChange({ interest_rate: Number(e.target.value) })
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="4.5"
              />
              <span className="absolute right-3 top-2.5 text-gray-500">%</span>
            </div>
          </div>

          {/* Term */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Mortgage Term: {state.term_years} years
            </label>
            <input
              type="range"
              min="5"
              max="40"
              value={state.term_years}
              onChange={(e) =>
                onStateChange({ term_years: Number(e.target.value) })
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>5 years</span>
              <span>40 years</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      {state.monthly_payment && (
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-4 sm:p-6 text-white">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Your Monthly Payment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center sm:text-left">
              <p className="text-blue-100 text-xs sm:text-sm">Monthly Payment</p>
              <p className="text-2xl sm:text-3xl font-bold truncate">
                £{state.monthly_payment.toLocaleString('en-GB', { maximumFractionDigits: 0 })}
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-blue-100 text-xs sm:text-sm">Total Interest</p>
              <p className="text-2xl sm:text-3xl font-bold truncate">
                £{state.total_interest?.toLocaleString('en-GB', { maximumFractionDigits: 0 })}
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-blue-100 text-xs sm:text-sm">Total Repayment</p>
              <p className="text-2xl sm:text-3xl font-bold truncate">
                £{(state.principal + (state.total_interest || 0)).toLocaleString('en-GB', { maximumFractionDigits: 0 })}
              </p>
            </div>
          </div>
        </div>
      )}

      <p className="text-center text-sm text-gray-500 mt-6">
        Ask the AI assistant for stamp duty calculations, comparisons, and more!
      </p>
    </div>
  );
}
