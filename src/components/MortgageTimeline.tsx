'use client';

import { useMemo } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend,
} from 'recharts';

interface TimelineProps {
  principal: number;
  interestRate: number;
  termYears: number;
  monthlyOverpayment?: number;
}

interface TimelineDataPoint {
  year: number;
  month: number;
  label: string;
  remainingBalance: number;
  totalPaid: number;
  totalInterest: number;
  totalPrincipal: number;
  equityPercent: number;
  isWithOverpayment?: boolean;
}

/**
 * Calculate the full amortization schedule
 */
function calculateAmortization(
  principal: number,
  annualRate: number,
  termYears: number,
  monthlyOverpayment: number = 0
): TimelineDataPoint[] {
  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = termYears * 12;

  // Calculate standard monthly payment
  const monthlyPayment = principal * (
    monthlyRate * Math.pow(1 + monthlyRate, totalMonths)
  ) / (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const data: TimelineDataPoint[] = [];
  let balance = principal;
  let totalInterest = 0;
  let totalPrincipal = 0;
  let totalPaid = 0;
  let month = 0;

  // Add starting point
  data.push({
    year: 0,
    month: 0,
    label: 'Start',
    remainingBalance: principal,
    totalPaid: 0,
    totalInterest: 0,
    totalPrincipal: 0,
    equityPercent: 0,
  });

  while (balance > 0 && month < totalMonths + 120) { // +120 as safety
    month++;
    const interestPayment = balance * monthlyRate;
    let principalPayment = monthlyPayment - interestPayment + monthlyOverpayment;

    // Don't overpay the balance
    if (principalPayment > balance) {
      principalPayment = balance;
    }

    balance -= principalPayment;
    totalInterest += interestPayment;
    totalPrincipal += principalPayment;
    totalPaid += interestPayment + principalPayment;

    // Only add yearly data points (or final point)
    if (month % 12 === 0 || balance <= 0) {
      const year = Math.ceil(month / 12);
      data.push({
        year,
        month,
        label: `Year ${year}`,
        remainingBalance: Math.max(0, balance),
        totalPaid,
        totalInterest,
        totalPrincipal,
        equityPercent: ((principal - Math.max(0, balance)) / principal) * 100,
        isWithOverpayment: monthlyOverpayment > 0,
      });
    }
  }

  return data;
}

/**
 * MortgageTimeline - Visual journey to mortgage freedom
 */
export function MortgageTimeline({
  principal,
  interestRate,
  termYears,
  monthlyOverpayment = 0,
}: TimelineProps) {
  const standardData = useMemo(
    () => calculateAmortization(principal, interestRate, termYears, 0),
    [principal, interestRate, termYears]
  );

  const overpaymentData = useMemo(
    () => monthlyOverpayment > 0
      ? calculateAmortization(principal, interestRate, termYears, monthlyOverpayment)
      : null,
    [principal, interestRate, termYears, monthlyOverpayment]
  );

  // Calculate key milestones
  const milestones = useMemo(() => {
    const payoffYear = standardData[standardData.length - 1]?.year || termYears;
    const twentyFivePercent = standardData.find(d => d.equityPercent >= 25);
    const fiftyPercent = standardData.find(d => d.equityPercent >= 50);
    const seventyFivePercent = standardData.find(d => d.equityPercent >= 75);

    return {
      payoffYear,
      twentyFivePercent: twentyFivePercent?.year || 0,
      fiftyPercent: fiftyPercent?.year || 0,
      seventyFivePercent: seventyFivePercent?.year || 0,
      totalInterest: standardData[standardData.length - 1]?.totalInterest || 0,
    };
  }, [standardData, termYears]);

  // Savings from overpayment
  const savings = useMemo(() => {
    if (!overpaymentData) return null;
    const standardFinal = standardData[standardData.length - 1];
    const overpaymentFinal = overpaymentData[overpaymentData.length - 1];

    return {
      yearsSaved: standardFinal.year - overpaymentFinal.year,
      interestSaved: standardFinal.totalInterest - overpaymentFinal.totalInterest,
    };
  }, [standardData, overpaymentData]);

  const formatCurrency = (value: number) =>
    `£${value.toLocaleString('en-GB', { maximumFractionDigits: 0 })}`;

  return (
    <div className="w-full space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          label="Mortgage Free In"
          value={`${milestones.payoffYear} years`}
          subtext={savings ? `${savings.yearsSaved} years earlier with overpayments` : undefined}
          highlight={!!savings}
        />
        <StatCard
          label="50% Equity"
          value={`Year ${milestones.fiftyPercent}`}
          subtext="Halfway to ownership"
        />
        <StatCard
          label="Total Interest"
          value={formatCurrency(milestones.totalInterest)}
          subtext={savings ? `Save ${formatCurrency(savings.interestSaved)}` : undefined}
          highlight={!!savings}
        />
        <StatCard
          label="Interest/Principal"
          value={`${Math.round((milestones.totalInterest / principal) * 100)}%`}
          subtext="Cost of borrowing"
        />
      </div>

      {/* Main Timeline Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Your Journey to Mortgage Freedom
        </h3>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={standardData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="equityGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="overpaymentGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="label"
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
              />
              <YAxis
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                tickFormatter={(value) => `£${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ strokeDasharray: '3 3' }}
              />
              <Legend />

              {/* Milestone reference lines */}
              <ReferenceLine
                x={`Year ${milestones.fiftyPercent}`}
                stroke="#10b981"
                strokeDasharray="5 5"
                label={{ value: '50%', position: 'top', fill: '#10b981', fontSize: 10 }}
              />

              {/* Areas */}
              <Area
                type="monotone"
                dataKey="remainingBalance"
                name="Balance Remaining"
                stroke="#ef4444"
                fillOpacity={1}
                fill="url(#balanceGradient)"
              />

              {overpaymentData && (
                <Area
                  type="monotone"
                  data={overpaymentData}
                  dataKey="remainingBalance"
                  name="With Overpayments"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#overpaymentGradient)"
                  strokeDasharray="5 5"
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Milestones Timeline */}
      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Key Milestones
        </h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-blue-500" />
          <div className="space-y-6">
            <MilestoneItem
              year={milestones.twentyFivePercent}
              title="25% Equity"
              description="You've built significant equity - time to review your options"
              icon="🏠"
            />
            <MilestoneItem
              year={milestones.fiftyPercent}
              title="50% Equity"
              description="Halfway point - you own half your home!"
              icon="🎯"
            />
            <MilestoneItem
              year={milestones.seventyFivePercent}
              title="75% Equity"
              description="The home stretch - freedom is in sight"
              icon="🚀"
            />
            <MilestoneItem
              year={milestones.payoffYear}
              title="Mortgage Free!"
              description="Congratulations - you own your home outright"
              icon="🎉"
              isLast
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function StatCard({
  label,
  value,
  subtext,
  highlight,
}: {
  label: string;
  value: string;
  subtext?: string;
  highlight?: boolean;
}) {
  return (
    <div className={`p-4 rounded-xl ${
      highlight
        ? 'bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 border border-emerald-200 dark:border-emerald-700'
        : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
    }`}>
      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{label}</p>
      <p className={`text-2xl font-bold ${highlight ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-900 dark:text-white'}`}>
        {value}
      </p>
      {subtext && (
        <p className={`text-xs mt-1 ${highlight ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-500 dark:text-gray-400'}`}>
          {subtext}
        </p>
      )}
    </div>
  );
}

function MilestoneItem({
  year,
  title,
  description,
  icon,
  isLast,
}: {
  year: number;
  title: string;
  description: string;
  icon: string;
  isLast?: boolean;
}) {
  return (
    <div className="relative flex items-start gap-4 pl-8">
      <div className={`absolute left-2 w-4 h-4 rounded-full bg-white dark:bg-gray-700 border-2 ${
        isLast ? 'border-emerald-500 bg-emerald-500' : 'border-blue-500'
      } flex items-center justify-center`}>
        {isLast && <div className="w-2 h-2 rounded-full bg-white" />}
      </div>
      <div className="flex-1 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">Year {year}</span>
        </div>
        <h4 className="font-semibold text-gray-800 dark:text-white">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      <p className="font-semibold text-gray-800 dark:text-white mb-2">{label}</p>
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
          <span className="text-gray-600 dark:text-gray-300">{entry.name}:</span>
          <span className="font-medium text-gray-800 dark:text-white">
            £{entry.value.toLocaleString('en-GB', { maximumFractionDigits: 0 })}
          </span>
        </div>
      ))}
    </div>
  );
}

export default MortgageTimeline;
