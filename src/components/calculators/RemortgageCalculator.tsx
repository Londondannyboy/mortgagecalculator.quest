"use client";

import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface RemortgageResult {
  currentMonthlyPayment: number;
  newMonthlyPayment: number;
  monthlySavings: number;
  annualSavings: number;
  totalSavingsOverDeal: number;
  breakEvenMonths: number;
  worthSwitching: boolean;
  currentTotalCost: number;
  newTotalCost: number;
}

export function RemortgageCalculator() {
  const [outstandingBalance, setOutstandingBalance] = useState(200000);
  const [currentRate, setCurrentRate] = useState(5.5);
  const [newRate, setNewRate] = useState(4.5);
  const [remainingTerm, setRemainingTerm] = useState(20);
  const [newDealLength, setNewDealLength] = useState(5);
  const [arrangementFee, setArrangementFee] = useState(999);
  const [valuationFee, setValuationFee] = useState(300);
  const [legalFees, setLegalFees] = useState(500);
  const [earlyRepaymentCharge, setEarlyRepaymentCharge] = useState(0);
  const [result, setResult] = useState<RemortgageResult | null>(null);

  const calculateRemortgage = () => {
    const totalFees = arrangementFee + valuationFee + legalFees + earlyRepaymentCharge;
    const monthlyCurrentRate = currentRate / 100 / 12;
    const monthlyNewRate = newRate / 100 / 12;
    const totalMonths = remainingTerm * 12;
    const dealMonths = newDealLength * 12;

    // Current monthly payment
    const currentMonthlyPayment =
      (outstandingBalance *
        (monthlyCurrentRate * Math.pow(1 + monthlyCurrentRate, totalMonths))) /
      (Math.pow(1 + monthlyCurrentRate, totalMonths) - 1);

    // New monthly payment
    const newMonthlyPayment =
      (outstandingBalance *
        (monthlyNewRate * Math.pow(1 + monthlyNewRate, totalMonths))) /
      (Math.pow(1 + monthlyNewRate, totalMonths) - 1);

    const monthlySavings = currentMonthlyPayment - newMonthlyPayment;
    const annualSavings = monthlySavings * 12;
    const totalSavingsOverDeal = monthlySavings * dealMonths - totalFees;

    // Break-even calculation
    const breakEvenMonths = totalFees > 0 ? Math.ceil(totalFees / monthlySavings) : 0;

    // Total cost comparison over deal period
    const currentTotalCost = currentMonthlyPayment * dealMonths;
    const newTotalCost = newMonthlyPayment * dealMonths + totalFees;

    setResult({
      currentMonthlyPayment: Math.round(currentMonthlyPayment),
      newMonthlyPayment: Math.round(newMonthlyPayment),
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      totalSavingsOverDeal: Math.round(totalSavingsOverDeal),
      breakEvenMonths,
      worthSwitching: totalSavingsOverDeal > 0,
      currentTotalCost: Math.round(currentTotalCost),
      newTotalCost: Math.round(newTotalCost),
    });
  };

  useEffect(() => {
    calculateRemortgage();
  }, [
    outstandingBalance,
    currentRate,
    newRate,
    remainingTerm,
    newDealLength,
    arrangementFee,
    valuationFee,
    legalFees,
    earlyRepaymentCharge,
  ]);

  const formatCurrency = (value: number) =>
    `£${value.toLocaleString("en-GB", { maximumFractionDigits: 0 })}`;

  const chartData = result
    ? [
        { name: "Current Deal", cost: result.currentTotalCost, fill: "#ef4444" },
        { name: "New Deal", cost: result.newTotalCost, fill: "#10b981" },
      ]
    : [];

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Your Current Mortgage
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Outstanding Balance
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">£</span>
                  <input
                    type="number"
                    value={outstandingBalance}
                    onChange={(e) => setOutstandingBalance(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Remaining Term (years)
                </label>
                <input
                  type="number"
                  value={remainingTerm}
                  onChange={(e) => setRemainingTerm(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  min="1"
                  max="40"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Current Interest Rate (%)
                </label>
                <input
                  type="number"
                  value={currentRate}
                  onChange={(e) => setCurrentRate(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  step="0.1"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  New Interest Rate (%)
                </label>
                <input
                  type="number"
                  value={newRate}
                  onChange={(e) => setNewRate(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  step="0.1"
                  min="0"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                New Deal Length: {newDealLength} years
              </label>
              <input
                type="range"
                min="2"
                max="10"
                value={newDealLength}
                onChange={(e) => setNewDealLength(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>2 years</span>
                <span>10 years</span>
              </div>
            </div>

            <h4 className="text-md font-semibold text-gray-800 dark:text-white pt-4 border-t border-gray-200 dark:border-gray-700">
              Remortgage Costs
            </h4>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Arrangement Fee
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">£</span>
                  <input
                    type="number"
                    value={arrangementFee}
                    onChange={(e) => setArrangementFee(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Valuation Fee
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">£</span>
                  <input
                    type="number"
                    value={valuationFee}
                    onChange={(e) => setValuationFee(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Legal Fees
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">£</span>
                  <input
                    type="number"
                    value={legalFees}
                    onChange={(e) => setLegalFees(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Early Repayment Charge
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">£</span>
                  <input
                    type="number"
                    value={earlyRepaymentCharge}
                    onChange={(e) => setEarlyRepaymentCharge(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Total Fees:</strong>{" "}
                {formatCurrency(arrangementFee + valuationFee + legalFees + earlyRepaymentCharge)}
              </p>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {result && (
              <>
                {/* Main Result */}
                <div
                  className={`rounded-xl p-6 ${
                    result.worthSwitching
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600"
                      : "bg-gradient-to-r from-amber-500 to-orange-600"
                  } text-white`}
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {result.worthSwitching
                      ? "Remortgaging Could Save You Money"
                      : "Remortgaging May Not Be Worth It"}
                  </h3>
                  <p className="text-4xl font-bold">
                    {result.worthSwitching ? "+" : ""}
                    {formatCurrency(result.totalSavingsOverDeal)}
                  </p>
                  <p className="text-sm opacity-90 mt-1">
                    Net savings over {newDealLength} year deal (after fees)
                  </p>
                </div>

                {/* Payment Comparison */}
                <div className="bg-white dark:bg-gray-700 rounded-xl p-5 border border-gray-200 dark:border-gray-600">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-4">
                    Monthly Payment Comparison
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <p className="text-sm text-red-600 dark:text-red-400">Current</p>
                      <p className="text-2xl font-bold text-red-700 dark:text-red-300">
                        {formatCurrency(result.currentMonthlyPayment)}
                      </p>
                      <p className="text-xs text-red-500">at {currentRate}%</p>
                    </div>
                    <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                      <p className="text-sm text-emerald-600 dark:text-emerald-400">New</p>
                      <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                        {formatCurrency(result.newMonthlyPayment)}
                      </p>
                      <p className="text-xs text-emerald-500">at {newRate}%</p>
                    </div>
                  </div>
                  <div className="mt-4 text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm text-blue-600 dark:text-blue-400">Monthly Savings</p>
                    <p className="text-xl font-bold text-blue-700 dark:text-blue-300">
                      {formatCurrency(result.monthlySavings)}/month
                    </p>
                  </div>
                </div>

                {/* Chart */}
                <div className="bg-white dark:bg-gray-700 rounded-xl p-5 border border-gray-200 dark:border-gray-600">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-4">
                    Total Cost Over {newDealLength} Years
                  </h4>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" tickFormatter={(v) => `£${(v / 1000).toFixed(0)}k`} />
                        <YAxis type="category" dataKey="name" width={80} />
                        <Tooltip
                          formatter={(value) => formatCurrency(Number(value))}
                          labelStyle={{ color: "#374151" }}
                        />
                        <Bar dataKey="cost" radius={[0, 4, 4, 0]}>
                          {chartData.map((entry, index) => (
                            <Cell key={index} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Break-even */}
                {result.breakEvenMonths > 0 && (
                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                      Break-Even Point
                    </h4>
                    <p className="text-amber-700 dark:text-amber-300">
                      You&apos;ll recoup the remortgage fees after{" "}
                      <strong>{result.breakEvenMonths} months</strong> (
                      {Math.round(result.breakEvenMonths / 12 * 10) / 10} years).
                      {result.breakEvenMonths > newDealLength * 12
                        ? " This is longer than your deal period - consider if it's worth it."
                        : " You'll be in profit before your deal ends."}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
          When Should You Remortgage?
        </h4>
        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
          <li>• Your fixed rate deal is ending soon (start looking 3-6 months before)</li>
          <li>• You&apos;re on your lender&apos;s Standard Variable Rate (SVR)</li>
          <li>• Interest rates have dropped significantly since your last deal</li>
          <li>• Your property value has increased, giving you a lower LTV</li>
          <li>• You want to release equity or change your mortgage term</li>
        </ul>
      </div>
    </div>
  );
}
