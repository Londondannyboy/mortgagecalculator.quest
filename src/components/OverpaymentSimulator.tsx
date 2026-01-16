'use client';

import { useMemo, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface SimulatorProps {
  principal: number;
  interestRate: number;
  termYears: number;
  monthlyPayment: number;
}

// Scenario result structure (used internally)

interface ChartDataPoint {
  month: number;
  year: number;
  [key: string]: number;
}

const COLORS = ['#6b7280', '#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

/**
 * Calculate mortgage payoff for different overpayment scenarios
 */
function calculateScenario(
  principal: number,
  annualRate: number,
  termYears: number,
  monthlyOverpayment: number
): { months: number; totalInterest: number; balanceByMonth: number[] } {
  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = termYears * 12;

  const baseMonthlyPayment = principal * (
    monthlyRate * Math.pow(1 + monthlyRate, totalMonths)
  ) / (Math.pow(1 + monthlyRate, totalMonths) - 1);

  let balance = principal;
  let totalInterest = 0;
  let month = 0;
  const balanceByMonth: number[] = [principal];

  while (balance > 0.01 && month < totalMonths + 120) {
    month++;
    const interestPayment = balance * monthlyRate;
    let principalPayment = baseMonthlyPayment - interestPayment + monthlyOverpayment;

    if (principalPayment > balance) {
      principalPayment = balance;
    }

    totalInterest += interestPayment;
    balance -= principalPayment;
    balanceByMonth.push(Math.max(0, balance));
  }

  return { months: month, totalInterest, balanceByMonth };
}

/**
 * OverpaymentSimulator - Interactive tool to explore overpayment impact
 */
export function OverpaymentSimulator({
  principal,
  interestRate,
  termYears,
  monthlyPayment,
}: SimulatorProps) {
  const [selectedOverpayments] = useState([0, 100, 200, 300, 500]);

  // Calculate all scenarios
  const scenarios = useMemo(() => {
    const baseScenario = calculateScenario(principal, interestRate, termYears, 0);

    return selectedOverpayments.map((overpayment, index) => {
      const scenario = calculateScenario(principal, interestRate, termYears, overpayment);

      return {
        monthlyOverpayment: overpayment,
        newTermMonths: scenario.months,
        totalInterestSaved: baseScenario.totalInterest - scenario.totalInterest,
        totalSaved: (baseScenario.totalInterest - scenario.totalInterest) + (overpayment * scenario.months),
        newMonthlyPayment: monthlyPayment + overpayment,
        yearsSaved: Math.round((baseScenario.months - scenario.months) / 12 * 10) / 10,
        color: COLORS[index],
      };
    });
  }, [principal, interestRate, termYears, monthlyPayment, selectedOverpayments]);

  // Build chart data
  const chartData = useMemo(() => {
    const data: ChartDataPoint[] = [];
    const maxMonths = Math.max(...scenarios.map(s => {
      const scenario = calculateScenario(principal, interestRate, termYears, s.monthlyOverpayment);
      return scenario.months;
    }));

    // Sample every 6 months for cleaner chart
    for (let month = 0; month <= maxMonths; month += 6) {
      const point: ChartDataPoint = {
        month,
        year: Math.round(month / 12 * 10) / 10,
      };

      scenarios.forEach((s) => {
        const scenario = calculateScenario(principal, interestRate, termYears, s.monthlyOverpayment);
        const balance = scenario.balanceByMonth[month] ?? 0;
        point[`£${s.monthlyOverpayment}`] = Math.round(balance);
      });

      data.push(point);
    }

    return data;
  }, [principal, interestRate, termYears, scenarios]);

  const formatCurrency = (value: number) =>
    `£${value.toLocaleString('en-GB', { maximumFractionDigits: 0 })}`;

  return (
    <div className="w-full space-y-6">
      {/* Scenario Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {scenarios.map((scenario, index) => (
          <div
            key={scenario.monthlyOverpayment}
            className={`relative p-4 rounded-xl border-2 transition-all ${
              index === 0
                ? 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800'
                : 'border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20'
            }`}
          >
            {index === 0 && (
              <span className="absolute -top-2 left-3 px-2 bg-gray-100 dark:bg-gray-700 text-xs text-gray-500 dark:text-gray-400">
                Current
              </span>
            )}
            {index === 2 && (
              <span className="absolute -top-2 left-3 px-2 bg-emerald-100 dark:bg-emerald-800 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                Recommended
              </span>
            )}

            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: scenario.color }}
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                +{formatCurrency(scenario.monthlyOverpayment)}/mo
              </span>
            </div>

            <div className="space-y-1">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Pay off in{' '}
                <span className="font-semibold text-gray-800 dark:text-white">
                  {Math.round(scenario.newTermMonths / 12 * 10) / 10} years
                </span>
              </p>
              {scenario.yearsSaved > 0 && (
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  {scenario.yearsSaved} years earlier
                </p>
              )}
              {scenario.totalInterestSaved > 0 && (
                <p className="text-xs text-emerald-600 dark:text-emerald-400">
                  Save {formatCurrency(scenario.totalInterestSaved)}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Balance Over Time Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          Balance Over Time
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          See how different overpayment amounts accelerate your path to mortgage freedom
        </p>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="year"
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                tickFormatter={(value) => `${value}y`}
              />
              <YAxis
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                tickFormatter={(value) => `£${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />

              {scenarios.map((scenario) => (
                <Line
                  key={scenario.monthlyOverpayment}
                  type="monotone"
                  dataKey={`£${scenario.monthlyOverpayment}`}
                  name={scenario.monthlyOverpayment === 0 ? 'Standard' : `+£${scenario.monthlyOverpayment}/mo`}
                  stroke={scenario.color}
                  strokeWidth={scenario.monthlyOverpayment === 200 ? 3 : 2}
                  dot={false}
                  strokeDasharray={scenario.monthlyOverpayment === 0 ? '5 5' : undefined}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Impact Summary */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          The Power of £200/month Overpayments
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ImpactCard
            icon="⏱️"
            title="Time Saved"
            value={`${scenarios[2]?.yearsSaved || 0} years`}
            description="Become mortgage-free sooner"
          />
          <ImpactCard
            icon="💰"
            title="Interest Saved"
            value={formatCurrency(scenarios[2]?.totalInterestSaved || 0)}
            description="Money kept in your pocket"
          />
          <ImpactCard
            icon="📈"
            title="Cost"
            value={formatCurrency(200 * (scenarios[2]?.newTermMonths || 0))}
            description={`Total extra over ${Math.round((scenarios[2]?.newTermMonths || 0) / 12)} years`}
          />
        </div>

        <div className="mt-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">Net benefit: </span>
            By paying an extra £200/month, you&apos;ll save{' '}
            <span className="font-semibold">
              {formatCurrency((scenarios[2]?.totalInterestSaved || 0) - (200 * (scenarios[2]?.newTermMonths || 0)))}
            </span>
            {' '}overall and be mortgage-free {scenarios[2]?.yearsSaved || 0} years earlier.
          </p>
        </div>
      </div>
    </div>
  );
}

function ImpactCard({
  icon,
  title,
  value,
  description,
}: {
  icon: string;
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <span className="text-3xl">{icon}</span>
      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-2">{title}</p>
      <p className="text-2xl font-bold text-gray-800 dark:text-white">{value}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: number }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      <p className="font-semibold text-gray-800 dark:text-white mb-2">Year {label}</p>
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
          <span className="text-gray-600 dark:text-gray-300">{entry.name}:</span>
          <span className="font-medium text-gray-800 dark:text-white">
            £{entry.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}

export default OverpaymentSimulator;
