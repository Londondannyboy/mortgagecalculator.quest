"use client";

import { useState, useEffect } from "react";

interface AffordabilityResult {
  standardBorrowing: number;
  maxBorrowing: number;
  withDeposit: {
    standardPropertyPrice: number;
    maxPropertyPrice: number;
  };
  monthlyPaymentStandard: number;
  monthlyPaymentMax: number;
  incomeMultiple: number;
}

export function AffordabilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState(50000);
  const [secondIncome, setSecondIncome] = useState(0);
  const [deposit, setDeposit] = useState(30000);
  const [monthlyCommitments, setMonthlyCommitments] = useState(0);
  const [interestRate, setInterestRate] = useState(4.5);
  const [termYears, setTermYears] = useState(25);
  const [isFirstTimeBuyer, setIsFirstTimeBuyer] = useState(true);
  const [result, setResult] = useState<AffordabilityResult | null>(null);

  const calculateAffordability = () => {
    const totalIncome = annualIncome + secondIncome;

    // Standard multiple is 4x, max is 4.5x (some lenders go to 5x for professionals)
    const standardMultiple = 4;
    const maxMultiple = 4.5;

    // Reduce borrowing based on monthly commitments (rough estimate)
    const commitmentReduction = monthlyCommitments * 12 * 4;

    const standardBorrowing = Math.max(0, (totalIncome * standardMultiple) - commitmentReduction);
    const maxBorrowing = Math.max(0, (totalIncome * maxMultiple) - commitmentReduction);

    // Property prices including deposit
    const standardPropertyPrice = standardBorrowing + deposit;
    const maxPropertyPrice = maxBorrowing + deposit;

    // Calculate monthly payments
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = termYears * 12;

    const calculatePayment = (principal: number) => {
      if (monthlyRate === 0) return principal / totalMonths;
      return (principal * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
    };

    const monthlyPaymentStandard = calculatePayment(standardBorrowing);
    const monthlyPaymentMax = calculatePayment(maxBorrowing);

    // Effective income multiple
    const incomeMultiple = totalIncome > 0 ? standardBorrowing / totalIncome : 0;

    setResult({
      standardBorrowing: Math.round(standardBorrowing),
      maxBorrowing: Math.round(maxBorrowing),
      withDeposit: {
        standardPropertyPrice: Math.round(standardPropertyPrice),
        maxPropertyPrice: Math.round(maxPropertyPrice),
      },
      monthlyPaymentStandard: Math.round(monthlyPaymentStandard),
      monthlyPaymentMax: Math.round(monthlyPaymentMax),
      incomeMultiple: Math.round(incomeMultiple * 10) / 10,
    });
  };

  useEffect(() => {
    calculateAffordability();
  }, [annualIncome, secondIncome, deposit, monthlyCommitments, interestRate, termYears, isFirstTimeBuyer]);

  const formatCurrency = (value: number) =>
    `£${value.toLocaleString("en-GB", { maximumFractionDigits: 0 })}`;

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Your Financial Details
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Annual Income (before tax)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">£</span>
                <input
                  type="number"
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  min="0"
                  step="1000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Second Applicant&apos;s Income (optional)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">£</span>
                <input
                  type="number"
                  value={secondIncome}
                  onChange={(e) => setSecondIncome(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  min="0"
                  step="1000"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Combined income: {formatCurrency(annualIncome + secondIncome)}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Deposit
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
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Monthly Debt Commitments (loans, cards, etc.)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">£</span>
                <input
                  type="number"
                  value={monthlyCommitments}
                  onChange={(e) => setMonthlyCommitments(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  min="0"
                  step="50"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Include car finance, credit cards, student loans, etc.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Interest Rate (%)
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
                  Term (years)
                </label>
                <input
                  type="number"
                  value={termYears}
                  onChange={(e) => setTermYears(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  min="5"
                  max="40"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isFirstTimeBuyer}
                  onChange={(e) => setIsFirstTimeBuyer(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  I&apos;m a first-time buyer
                </span>
              </label>
              {isFirstTimeBuyer && (
                <p className="text-sm text-green-600 mt-1">
                  You may qualify for stamp duty relief and special schemes
                </p>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-4">
            {result && (
              <>
                {/* Main Result */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
                  <h3 className="text-lg font-semibold mb-4">How Much Could You Borrow?</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-blue-100 text-sm">Standard (4x income)</p>
                      <p className="text-4xl font-bold">{formatCurrency(result.standardBorrowing)}</p>
                    </div>
                    <div className="pt-4 border-t border-blue-400">
                      <p className="text-blue-100 text-sm">Maximum (4.5x income)</p>
                      <p className="text-3xl font-bold">{formatCurrency(result.maxBorrowing)}</p>
                    </div>
                  </div>
                </div>

                {/* Property Budget */}
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 rounded-xl p-5">
                  <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-3">
                    Your Property Budget (with {formatCurrency(deposit)} deposit)
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-emerald-600 dark:text-emerald-400">Standard</p>
                      <p className="text-2xl font-bold text-emerald-800 dark:text-emerald-200">
                        {formatCurrency(result.withDeposit.standardPropertyPrice)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-emerald-600 dark:text-emerald-400">Maximum</p>
                      <p className="text-2xl font-bold text-emerald-800 dark:text-emerald-200">
                        {formatCurrency(result.withDeposit.maxPropertyPrice)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Monthly Payments */}
                <div className="bg-white dark:bg-gray-700 rounded-xl p-5 border border-gray-200 dark:border-gray-600">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                    Estimated Monthly Payments
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">At standard borrowing</p>
                      <p className="text-xl font-bold text-gray-800 dark:text-white">
                        {formatCurrency(result.monthlyPaymentStandard)}/mo
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">At max borrowing</p>
                      <p className="text-xl font-bold text-gray-800 dark:text-white">
                        {formatCurrency(result.monthlyPaymentMax)}/mo
                      </p>
                    </div>
                  </div>
                </div>

                {/* LTV Info */}
                {result.withDeposit.standardPropertyPrice > 0 && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Loan-to-Value (LTV):</strong>{" "}
                      {Math.round((result.standardBorrowing / result.withDeposit.standardPropertyPrice) * 100)}%
                      {" "}
                      {deposit >= result.withDeposit.standardPropertyPrice * 0.1 ? (
                        <span className="text-green-600">(Minimum 10% deposit met)</span>
                      ) : (
                        <span className="text-amber-600">(May need larger deposit)</span>
                      )}
                    </p>
                  </div>
                )}

                {/* Affordability Warning */}
                {monthlyCommitments > 0 && (
                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-4">
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      Your existing commitments of {formatCurrency(monthlyCommitments)}/month may reduce
                      your borrowing capacity. Consider paying these down before applying.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Info Boxes */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
            Income Multiples Explained
          </h4>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Most lenders offer 4-4.5x your annual income. Some offer up to 5x for certain professions
            (doctors, lawyers, accountants) or with larger deposits. Joint applications combine both incomes.
          </p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-4">
          <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
            What Affects Your Borrowing?
          </h4>
          <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
            <li>• Credit score and history</li>
            <li>• Employment type (permanent vs contract)</li>
            <li>• Existing debts and commitments</li>
            <li>• Deposit size (larger = better rates)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
