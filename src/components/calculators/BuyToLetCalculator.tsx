"use client";

import { useState, useEffect } from "react";

interface BTLResult {
  monthlyPayment: number;
  monthlyRentalYield: number;
  annualRentalYield: number;
  interestCoverageRatio: number;
  minimumRentRequired: number;
  cashflow: number;
  stampDuty: number;
  totalInitialCosts: number;
  ltv: number;
}

export function BuyToLetCalculator() {
  const [propertyValue, setPropertyValue] = useState(250000);
  const [deposit, setDeposit] = useState(62500); // 25% default for BTL
  const [interestRate, setInterestRate] = useState(5.5);
  const [monthlyRent, setMonthlyRent] = useState(1200);
  const [isInterestOnly, setIsInterestOnly] = useState(true);
  const [termYears, setTermYears] = useState(25);
  const [result, setResult] = useState<BTLResult | null>(null);

  const calculateBTL = () => {
    const loanAmount = propertyValue - deposit;
    const ltv = (loanAmount / propertyValue) * 100;
    const monthlyRate = interestRate / 100 / 12;

    // Monthly payment calculation
    let monthlyPayment: number;
    if (isInterestOnly) {
      monthlyPayment = loanAmount * monthlyRate;
    } else {
      const totalMonths = termYears * 12;
      monthlyPayment =
        (loanAmount *
          (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
    }

    // Rental yield calculations
    const annualRent = monthlyRent * 12;
    const annualRentalYield = (annualRent / propertyValue) * 100;
    const monthlyRentalYield = annualRentalYield / 12;

    // Interest Coverage Ratio (ICR) - lenders typically require 125-145%
    const interestCoverageRatio = (monthlyRent / monthlyPayment) * 100;

    // Minimum rent required (based on 145% ICR at stressed rate of 5.5%)
    const stressedRate = Math.max(interestRate, 5.5);
    const stressedMonthlyPayment = loanAmount * (stressedRate / 100 / 12);
    const minimumRentRequired = stressedMonthlyPayment * 1.45;

    // Monthly cashflow
    const cashflow = monthlyRent - monthlyPayment;

    // Stamp duty (with 3% surcharge for additional property)
    let stampDuty = 0;
    const bands = [
      { threshold: 250000, rate: 0.03 },
      { threshold: 925000, rate: 0.08 },
      { threshold: 1500000, rate: 0.13 },
      { threshold: Infinity, rate: 0.15 },
    ];

    let remaining = propertyValue;
    let previousThreshold = 0;

    for (const band of bands) {
      if (remaining <= 0) break;
      const bandSize = band.threshold - previousThreshold;
      const taxableInBand = Math.min(remaining, bandSize);
      stampDuty += taxableInBand * band.rate;
      remaining -= taxableInBand;
      previousThreshold = band.threshold;
    }

    const totalInitialCosts = deposit + stampDuty + 3000; // +3000 for typical fees

    setResult({
      monthlyPayment: Math.round(monthlyPayment * 100) / 100,
      monthlyRentalYield: Math.round(monthlyRentalYield * 100) / 100,
      annualRentalYield: Math.round(annualRentalYield * 100) / 100,
      interestCoverageRatio: Math.round(interestCoverageRatio),
      minimumRentRequired: Math.round(minimumRentRequired),
      cashflow: Math.round(cashflow * 100) / 100,
      stampDuty: Math.round(stampDuty),
      totalInitialCosts: Math.round(totalInitialCosts),
      ltv: Math.round(ltv),
    });
  };

  useEffect(() => {
    calculateBTL();
  }, [propertyValue, deposit, interestRate, monthlyRent, isInterestOnly, termYears]);

  // Auto-adjust deposit to 25% when property value changes
  useEffect(() => {
    setDeposit(Math.round(propertyValue * 0.25));
  }, [propertyValue]);

  const formatCurrency = (value: number) =>
    `£${value.toLocaleString("en-GB", { maximumFractionDigits: 0 })}`;

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Property Details
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Property Purchase Price
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">£</span>
                <input
                  type="number"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  min="50000"
                  step="5000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Deposit (typically 25% minimum for BTL)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">£</span>
                <input
                  type="number"
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  min="0"
                  step="1000"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                LTV: {result?.ltv || 75}% (Loan amount: {formatCurrency(propertyValue - deposit)})
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Expected Monthly Rent
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">£</span>
                <input
                  type="number"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  min="0"
                  step="50"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Interest Rate (% per year)
              </label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                min="0.1"
                max="15"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mortgage Type
              </label>
              <div className="flex gap-4">
                <label className={`flex-1 p-3 rounded-lg border cursor-pointer transition-colors ${
                  isInterestOnly
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-gray-200 dark:border-gray-600"
                }`}>
                  <input
                    type="radio"
                    checked={isInterestOnly}
                    onChange={() => setIsInterestOnly(true)}
                    className="mr-2"
                  />
                  <span className="text-gray-800 dark:text-white">Interest Only</span>
                </label>
                <label className={`flex-1 p-3 rounded-lg border cursor-pointer transition-colors ${
                  !isInterestOnly
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-gray-200 dark:border-gray-600"
                }`}>
                  <input
                    type="radio"
                    checked={!isInterestOnly}
                    onChange={() => setIsInterestOnly(false)}
                    className="mr-2"
                  />
                  <span className="text-gray-800 dark:text-white">Repayment</span>
                </label>
              </div>
            </div>

            {!isInterestOnly && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mortgage Term: {termYears} years
                </label>
                <input
                  type="range"
                  min="5"
                  max="35"
                  value={termYears}
                  onChange={(e) => setTermYears(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="space-y-4">
            {result && (
              <>
                {/* Main Metrics */}
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-5 text-white">
                  <h3 className="text-lg font-semibold mb-3">Monthly Summary</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-purple-100 text-sm">Mortgage Payment</p>
                      <p className="text-2xl font-bold">{formatCurrency(result.monthlyPayment)}</p>
                    </div>
                    <div>
                      <p className="text-purple-100 text-sm">Expected Rent</p>
                      <p className="text-2xl font-bold">{formatCurrency(monthlyRent)}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-purple-400">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-100">Monthly Cashflow</span>
                      <span className={`text-2xl font-bold ${result.cashflow >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                        {result.cashflow >= 0 ? '+' : ''}{formatCurrency(result.cashflow)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rental Yield */}
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Rental Yield</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Gross Annual Yield</span>
                    <span className={`text-xl font-bold ${result.annualRentalYield >= 5 ? 'text-green-600' : 'text-amber-600'}`}>
                      {result.annualRentalYield.toFixed(1)}%
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {result.annualRentalYield >= 5 ? 'Good yield for BTL investment' : 'Consider if yield meets your goals'}
                  </p>
                </div>

                {/* ICR Check */}
                <div className={`rounded-xl p-4 border ${
                  result.interestCoverageRatio >= 145
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700'
                    : result.interestCoverageRatio >= 125
                    ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700'
                    : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700'
                }`}>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Interest Coverage Ratio (ICR)
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Your ICR</span>
                    <span className={`text-xl font-bold ${
                      result.interestCoverageRatio >= 145 ? 'text-green-600' :
                      result.interestCoverageRatio >= 125 ? 'text-amber-600' : 'text-red-600'
                    }`}>
                      {result.interestCoverageRatio}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {result.interestCoverageRatio >= 145
                      ? 'Excellent - meets most lender requirements'
                      : result.interestCoverageRatio >= 125
                      ? 'May qualify with some lenders'
                      : `Below typical requirement. Minimum rent needed: ${formatCurrency(result.minimumRentRequired)}/month`}
                  </p>
                </div>

                {/* Initial Costs */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Initial Investment Required</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Deposit</span>
                      <span className="font-medium text-gray-800 dark:text-white">{formatCurrency(deposit)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Stamp Duty (+3% surcharge)</span>
                      <span className="font-medium text-gray-800 dark:text-white">{formatCurrency(result.stampDuty)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Estimated fees</span>
                      <span className="font-medium text-gray-800 dark:text-white">£3,000</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-600">
                      <span className="font-semibold text-gray-800 dark:text-white">Total</span>
                      <span className="font-bold text-lg text-gray-800 dark:text-white">
                        {formatCurrency(result.totalInitialCosts)}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
          Understanding BTL Mortgage Requirements
        </h4>
        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
          <li>• Minimum deposit typically 25% (some lenders accept 20%)</li>
          <li>• Interest Coverage Ratio (ICR) typically 125-145% at stressed rate of 5.5%</li>
          <li>• Higher interest rates than residential mortgages (typically 0.5-1% more)</li>
          <li>• Additional 3% stamp duty surcharge on all property value</li>
        </ul>
      </div>
    </div>
  );
}
