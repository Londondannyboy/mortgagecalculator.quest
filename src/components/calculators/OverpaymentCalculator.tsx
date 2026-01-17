"use client";

import { useState, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#6b7280", "#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

interface ChartDataPoint {
  month: number;
  year: number;
  [key: string]: number;
}

function calculateScenario(
  principal: number,
  annualRate: number,
  termYears: number,
  monthlyOverpayment: number
) {
  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = termYears * 12;

  const baseMonthlyPayment =
    (principal *
      (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  let balance = principal;
  let totalInterest = 0;
  let month = 0;
  const balanceByMonth: number[] = [principal];

  while (balance > 0.01 && month < totalMonths + 120) {
    month++;
    const interestPayment = balance * monthlyRate;
    let principalPayment =
      baseMonthlyPayment - interestPayment + monthlyOverpayment;

    if (principalPayment > balance) {
      principalPayment = balance;
    }

    totalInterest += interestPayment;
    balance -= principalPayment;
    balanceByMonth.push(Math.max(0, balance));
  }

  return { months: month, totalInterest, balanceByMonth, baseMonthlyPayment };
}

export function OverpaymentCalculator() {
  const [principal, setPrincipal] = useState(250000);
  const [interestRate, setInterestRate] = useState(4.5);
  const [termYears, setTermYears] = useState(25);
  const [customOverpayment, setCustomOverpayment] = useState(200);

  const overpaymentOptions = [0, 100, customOverpayment, 300, 500];

  const scenarios = useMemo(() => {
    const baseScenario = calculateScenario(principal, interestRate, termYears, 0);

    return overpaymentOptions.map((overpayment, index) => {
      const scenario = calculateScenario(
        principal,
        interestRate,
        termYears,
        overpayment
      );

      return {
        monthlyOverpayment: overpayment,
        newTermMonths: scenario.months,
        totalInterestSaved: baseScenario.totalInterest - scenario.totalInterest,
        baseMonthlyPayment: scenario.baseMonthlyPayment,
        totalInterest: scenario.totalInterest,
        yearsSaved:
          Math.round(((baseScenario.months - scenario.months) / 12) * 10) / 10,
        color: COLORS[index],
      };
    });
  }, [principal, interestRate, termYears, customOverpayment]);

  const chartData = useMemo(() => {
    const data: ChartDataPoint[] = [];
    const maxMonths = Math.max(
      ...scenarios.map((s) => {
        const scenario = calculateScenario(
          principal,
          interestRate,
          termYears,
          s.monthlyOverpayment
        );
        return scenario.months;
      })
    );

    for (let month = 0; month <= maxMonths; month += 6) {
      const point: ChartDataPoint = {
        month,
        year: Math.round((month / 12) * 10) / 10,
      };

      scenarios.forEach((s) => {
        const scenario = calculateScenario(
          principal,
          interestRate,
          termYears,
          s.monthlyOverpayment
        );
        const balance = scenario.balanceByMonth[month] ?? 0;
        point[`£${s.monthlyOverpayment}`] = Math.round(balance);
      });

      data.push(point);
    }

    return data;
  }, [principal, interestRate, termYears, scenarios]);

  const formatCurrency = (value: number) =>
    `£${value.toLocaleString("en-GB", { maximumFractionDigits: 0 })}`;

  const baseScenario = scenarios[0];
  const recommendedScenario = scenarios[2]; // Custom overpayment scenario

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Your Mortgage Details
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Outstanding Balance
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">£</span>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                min="10000"
                step="5000"
              />
            </div>
          </div>

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
              Remaining Term (years)
            </label>
            <input
              type="number"
              value={termYears}
              onChange={(e) => setTermYears(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              min="1"
              max="40"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Monthly Overpayment
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">£</span>
              <input
                type="number"
                value={customOverpayment}
                onChange={(e) => setCustomOverpayment(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
                min="0"
                step="50"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Current monthly payment:</strong>{" "}
            {formatCurrency(baseScenario?.baseMonthlyPayment || 0)} (without
            overpayments)
          </p>
        </div>
      </div>

      {/* Results Summary */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-6 text-white">
        <h3 className="text-xl font-semibold mb-4">
          Impact of {formatCurrency(customOverpayment)}/month Overpayments
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <p className="text-emerald-100 text-sm">Time Saved</p>
            <p className="text-3xl font-bold">
              {recommendedScenario?.yearsSaved || 0} years
            </p>
          </div>
          <div>
            <p className="text-emerald-100 text-sm">Interest Saved</p>
            <p className="text-3xl font-bold">
              {formatCurrency(recommendedScenario?.totalInterestSaved || 0)}
            </p>
          </div>
          <div>
            <p className="text-emerald-100 text-sm">New Term</p>
            <p className="text-3xl font-bold">
              {Math.round(((recommendedScenario?.newTermMonths || 0) / 12) * 10) / 10}{" "}
              years
            </p>
          </div>
          <div>
            <p className="text-emerald-100 text-sm">New Monthly Payment</p>
            <p className="text-3xl font-bold">
              {formatCurrency(
                (baseScenario?.baseMonthlyPayment || 0) + customOverpayment
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Overpayment Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="text-left p-3">Monthly Overpayment</th>
                <th className="text-right p-3">New Term</th>
                <th className="text-right p-3">Years Saved</th>
                <th className="text-right p-3">Interest Saved</th>
                <th className="text-right p-3">Total Monthly</th>
              </tr>
            </thead>
            <tbody>
              {scenarios.map((scenario, idx) => (
                <tr
                  key={scenario.monthlyOverpayment}
                  className={`border-t border-gray-200 dark:border-gray-600 ${
                    idx === 2
                      ? "bg-emerald-50 dark:bg-emerald-900/20"
                      : ""
                  }`}
                >
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: scenario.color }}
                      />
                      {formatCurrency(scenario.monthlyOverpayment)}
                      {idx === 0 && (
                        <span className="text-xs text-gray-500">(baseline)</span>
                      )}
                      {idx === 2 && (
                        <span className="text-xs text-emerald-600 font-medium">
                          (your choice)
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="text-right p-3">
                    {Math.round((scenario.newTermMonths / 12) * 10) / 10} years
                  </td>
                  <td className="text-right p-3 text-emerald-600 font-medium">
                    {scenario.yearsSaved > 0
                      ? `${scenario.yearsSaved} years`
                      : "-"}
                  </td>
                  <td className="text-right p-3 text-emerald-600 font-medium">
                    {scenario.totalInterestSaved > 0
                      ? formatCurrency(scenario.totalInterestSaved)
                      : "-"}
                  </td>
                  <td className="text-right p-3">
                    {formatCurrency(
                      (baseScenario?.baseMonthlyPayment || 0) +
                        scenario.monthlyOverpayment
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          Mortgage Balance Over Time
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          See how different overpayment amounts accelerate your path to mortgage
          freedom
        </p>

        <div className="h-80">
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
              <Tooltip
                content={({ active, payload, label }) => {
                  if (!active || !payload?.length) return null;
                  return (
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                      <p className="font-semibold text-gray-800 dark:text-white mb-2">
                        Year {label}
                      </p>
                      {payload.map((entry, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: entry.color }}
                          />
                          <span className="text-gray-600 dark:text-gray-300">
                            {entry.name}:
                          </span>
                          <span className="font-medium text-gray-800 dark:text-white">
                            £{Number(entry.value).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  );
                }}
              />
              <Legend />

              {scenarios.map((scenario) => (
                <Line
                  key={scenario.monthlyOverpayment}
                  type="monotone"
                  dataKey={`£${scenario.monthlyOverpayment}`}
                  name={
                    scenario.monthlyOverpayment === 0
                      ? "Standard"
                      : `+£${scenario.monthlyOverpayment}/mo`
                  }
                  stroke={scenario.color}
                  strokeWidth={
                    scenario.monthlyOverpayment === customOverpayment ? 3 : 2
                  }
                  dot={false}
                  strokeDasharray={
                    scenario.monthlyOverpayment === 0 ? "5 5" : undefined
                  }
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Warning about ERCs */}
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-4">
        <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
          Early Repayment Charges (ERCs)
        </h4>
        <p className="text-sm text-amber-700 dark:text-amber-300">
          Most mortgages allow you to overpay up to 10% of your outstanding
          balance each year without penalty. Check your mortgage terms before
          making large overpayments, as exceeding this limit may incur early
          repayment charges.
        </p>
      </div>
    </div>
  );
}
