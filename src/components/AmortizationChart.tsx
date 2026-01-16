'use client';

import { useMemo, useState } from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from 'recharts';

interface AmortizationProps {
  principal: number;
  interestRate: number;
  termYears: number;
}

interface AmortizationDataPoint {
  year: number;
  principal: number;
  interest: number;
  total: number;
  balance: number;
  cumulativeInterest: number;
  principalPercent: number;
}

/**
 * Calculate yearly amortization breakdown
 */
function calculateYearlyAmortization(
  principal: number,
  annualRate: number,
  termYears: number
): AmortizationDataPoint[] {
  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = termYears * 12;

  const monthlyPayment = principal * (
    monthlyRate * Math.pow(1 + monthlyRate, totalMonths)
  ) / (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const data: AmortizationDataPoint[] = [];
  let balance = principal;
  let cumulativeInterest = 0;

  for (let year = 1; year <= termYears; year++) {
    let yearlyPrincipal = 0;
    let yearlyInterest = 0;

    for (let month = 1; month <= 12; month++) {
      if (balance <= 0) break;

      const interestPayment = balance * monthlyRate;
      let principalPayment = monthlyPayment - interestPayment;

      if (principalPayment > balance) {
        principalPayment = balance;
      }

      yearlyPrincipal += principalPayment;
      yearlyInterest += interestPayment;
      balance -= principalPayment;
    }

    cumulativeInterest += yearlyInterest;

    data.push({
      year,
      principal: Math.round(yearlyPrincipal),
      interest: Math.round(yearlyInterest),
      total: Math.round(yearlyPrincipal + yearlyInterest),
      balance: Math.max(0, Math.round(balance)),
      cumulativeInterest: Math.round(cumulativeInterest),
      principalPercent: Math.round((yearlyPrincipal / (yearlyPrincipal + yearlyInterest)) * 100),
    });
  }

  return data;
}

/**
 * AmortizationChart - Visualize principal vs interest breakdown
 */
export function AmortizationChart({ principal, interestRate, termYears }: AmortizationProps) {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  const data = useMemo(
    () => calculateYearlyAmortization(principal, interestRate, termYears),
    [principal, interestRate, termYears]
  );

  // Calculate totals
  const totals = useMemo(() => {
    const totalInterest = data.reduce((sum, d) => sum + d.interest, 0);
    const totalPrincipal = data.reduce((sum, d) => sum + d.principal, 0);
    const totalPaid = totalInterest + totalPrincipal;
    const interestRatio = (totalInterest / totalPaid) * 100;

    // Find the crossover point (where principal > interest)
    const crossoverYear = data.findIndex(d => d.principal > d.interest) + 1;

    return {
      totalInterest,
      totalPrincipal,
      totalPaid,
      interestRatio,
      crossoverYear: crossoverYear > 0 ? crossoverYear : termYears,
    };
  }, [data, termYears]);

  const formatCurrency = (value: number) =>
    `£${value.toLocaleString('en-GB', { maximumFractionDigits: 0 })}`;

  return (
    <div className="w-full space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-4 border border-red-100 dark:border-red-800">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide">Total Interest</span>
          </div>
          <p className="text-2xl font-bold text-red-600 dark:text-red-400">
            {formatCurrency(totals.totalInterest)}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {totals.interestRatio.toFixed(1)}% of total payments
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-4 border border-emerald-100 dark:border-emerald-800">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide">Total Principal</span>
          </div>
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
            {formatCurrency(totals.totalPrincipal)}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Building your equity
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide">Crossover Point</span>
          </div>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Year {totals.crossoverYear}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            When principal {">"} interest
          </p>
        </div>
      </div>

      {/* Main Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Payment Breakdown by Year
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Watch how your payments shift from interest-heavy to principal-heavy over time
        </p>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              onMouseMove={(e) => {
                if (e && typeof e.activeTooltipIndex === 'number') {
                  setHoveredYear(e.activeTooltipIndex + 1);
                }
              }}
              onMouseLeave={() => setHoveredYear(null)}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="year"
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                tickFormatter={(value: number) => `Y${value}`}
              />
              <YAxis
                yAxisId="left"
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                tickFormatter={(value: number) => `£${(value / 1000).toFixed(0)}k`}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#3b82f6"
                fontSize={12}
                tickLine={false}
                tickFormatter={(value: number) => `£${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />

              {/* Stacked bars for principal and interest */}
              <Bar
                yAxisId="left"
                dataKey="principal"
                name="Principal"
                stackId="payment"
                fill="#10b981"
                radius={[0, 0, 0, 0]}
              >
                {data.map((_, index) => (
                  <Cell
                    key={`principal-${index}`}
                    fill={hoveredYear === index + 1 ? '#059669' : '#10b981'}
                    opacity={hoveredYear && hoveredYear !== index + 1 ? 0.5 : 1}
                  />
                ))}
              </Bar>
              <Bar
                yAxisId="left"
                dataKey="interest"
                name="Interest"
                stackId="payment"
                fill="#ef4444"
                radius={[4, 4, 0, 0]}
              >
                {data.map((_, index) => (
                  <Cell
                    key={`interest-${index}`}
                    fill={hoveredYear === index + 1 ? '#dc2626' : '#ef4444'}
                    opacity={hoveredYear && hoveredYear !== index + 1 ? 0.5 : 1}
                  />
                ))}
              </Bar>

              {/* Line for remaining balance */}
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="balance"
                name="Balance"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Principal Percentage Visualization */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Principal Ratio Over Time
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Percentage of each year&apos;s payments going towards building equity
        </p>

        <div className="space-y-2">
          {data.filter((_, i) => i % Math.ceil(termYears / 10) === 0 || i === termYears - 1).map((point) => (
            <div key={point.year} className="flex items-center gap-3">
              <span className="text-sm text-gray-500 w-16">Year {point.year}</span>
              <div className="flex-1 h-6 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-500"
                  style={{ width: `${point.principalPercent}%` }}
                />
              </div>
              <span className={`text-sm font-medium w-12 text-right ${
                point.principalPercent > 50 ? 'text-emerald-600' : 'text-red-500'
              }`}>
                {point.principalPercent}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string; dataKey: string }>; label?: string }) {
  if (!active || !payload?.length) return null;

  const principalEntry = payload.find(p => p.dataKey === 'principal');
  const interestEntry = payload.find(p => p.dataKey === 'interest');
  const balanceEntry = payload.find(p => p.dataKey === 'balance');

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 min-w-48">
      <p className="font-semibold text-gray-800 dark:text-white mb-3">Year {label}</p>

      <div className="space-y-2">
        {principalEntry && (
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Principal</span>
            </div>
            <span className="font-medium text-emerald-600">
              £{principalEntry.value.toLocaleString()}
            </span>
          </div>
        )}
        {interestEntry && (
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Interest</span>
            </div>
            <span className="font-medium text-red-500">
              £{interestEntry.value.toLocaleString()}
            </span>
          </div>
        )}
        <div className="border-t border-gray-200 dark:border-gray-600 pt-2 mt-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-300">Total</span>
            <span className="font-bold text-gray-800 dark:text-white">
              £{((principalEntry?.value || 0) + (interestEntry?.value || 0)).toLocaleString()}
            </span>
          </div>
        </div>
        {balanceEntry && (
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Remaining</span>
            </div>
            <span className="font-medium text-blue-500">
              £{balanceEntry.value.toLocaleString()}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default AmortizationChart;
