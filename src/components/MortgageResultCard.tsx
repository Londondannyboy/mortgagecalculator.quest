"use client";

interface Props {
  monthlyPayment: number;
  totalInterest: number;
  totalPaid: number;
}

export function MortgageResultCard({ monthlyPayment, totalInterest, totalPaid }: Props) {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 p-4 rounded-lg border border-green-200 dark:border-green-700">
      <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">
        Mortgage Calculation Result
      </h3>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Monthly Payment</p>
          <p className="text-lg font-bold text-green-600 dark:text-green-300">
            £{monthlyPayment?.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Total Interest</p>
          <p className="text-lg font-bold text-orange-600 dark:text-orange-300">
            £{totalInterest?.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Total Repayment</p>
          <p className="text-lg font-bold text-blue-600 dark:text-blue-300">
            £{totalPaid?.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
