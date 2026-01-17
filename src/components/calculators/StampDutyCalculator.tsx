"use client";

import { useState, useEffect } from "react";

interface StampDutyResult {
  totalDuty: number;
  effectiveRate: number;
  breakdown: { band: string; rate: string; amount: number }[];
}

type BuyerType = "standard" | "first-time" | "additional";

export function StampDutyCalculator() {
  const [propertyValue, setPropertyValue] = useState(350000);
  const [buyerType, setBuyerType] = useState<BuyerType>("standard");
  const [result, setResult] = useState<StampDutyResult | null>(null);

  const calculateStampDuty = () => {
    let duty = 0;
    const breakdown: { band: string; rate: string; amount: number }[] = [];

    if (buyerType === "first-time" && propertyValue <= 625000) {
      // First-time buyer rates (properties up to £625,000)
      if (propertyValue <= 425000) {
        breakdown.push({ band: "£0 - £425,000", rate: "0%", amount: 0 });
      } else {
        breakdown.push({ band: "£0 - £425,000", rate: "0%", amount: 0 });
        const taxable = propertyValue - 425000;
        const tax = taxable * 0.05;
        breakdown.push({ band: "£425,001 - £625,000", rate: "5%", amount: tax });
        duty = tax;
      }
    } else {
      // Standard rates (or first-time buyer over £625k pays standard)
      const bands = [
        { threshold: 250000, rate: 0, label: "£0 - £250,000" },
        { threshold: 925000, rate: 0.05, label: "£250,001 - £925,000" },
        { threshold: 1500000, rate: 0.1, label: "£925,001 - £1,500,000" },
        { threshold: Infinity, rate: 0.12, label: "Over £1,500,000" },
      ];

      let remaining = propertyValue;
      let previousThreshold = 0;

      for (const band of bands) {
        if (remaining <= 0) break;

        const bandSize = band.threshold - previousThreshold;
        const taxableInBand = Math.min(remaining, bandSize);
        const taxInBand = taxableInBand * band.rate;

        if (taxableInBand > 0 || band.threshold === 250000) {
          breakdown.push({
            band: band.label,
            rate: `${band.rate * 100}%`,
            amount: taxInBand,
          });
        }

        duty += taxInBand;
        remaining -= taxableInBand;
        previousThreshold = band.threshold;
      }
    }

    // Additional property surcharge (3% on entire value)
    if (buyerType === "additional") {
      const surcharge = propertyValue * 0.03;
      breakdown.push({
        band: "Additional property surcharge",
        rate: "+3%",
        amount: surcharge,
      });
      duty += surcharge;
    }

    const effectiveRate = propertyValue > 0 ? (duty / propertyValue) * 100 : 0;

    setResult({
      totalDuty: Math.round(duty),
      effectiveRate: Math.round(effectiveRate * 100) / 100,
      breakdown,
    });
  };

  useEffect(() => {
    calculateStampDuty();
  }, [propertyValue, buyerType]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Property Value
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">£</span>
              <input
                type="number"
                value={propertyValue}
                onChange={(e) => setPropertyValue(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 text-lg border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                min="0"
                step="5000"
              />
            </div>
            <input
              type="range"
              min="50000"
              max="2000000"
              step="10000"
              value={propertyValue}
              onChange={(e) => setPropertyValue(Number(e.target.value))}
              className="w-full mt-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>£50k</span>
              <span>£2m</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Buyer Type
            </label>
            <div className="space-y-2">
              {[
                { value: "standard", label: "Standard Buyer", desc: "Second or subsequent property purchase" },
                { value: "first-time", label: "First-Time Buyer", desc: "Your first residential property (up to £625k)" },
                { value: "additional", label: "Additional Property", desc: "Buy-to-let or second home (+3% surcharge)" },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex items-start p-3 rounded-lg border cursor-pointer transition-colors ${
                    buyerType === option.value
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                      : "border-gray-200 dark:border-gray-600 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="buyerType"
                    value={option.value}
                    checked={buyerType === option.value}
                    onChange={(e) => setBuyerType(e.target.value as BuyerType)}
                    className="mt-1 mr-3"
                  />
                  <div>
                    <span className="font-medium text-gray-800 dark:text-white">{option.label}</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{option.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div>
          {result && (
            <div className="space-y-6">
              {/* Main Result */}
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-6 text-white">
                <p className="text-emerald-100 text-sm mb-1">Total Stamp Duty</p>
                <p className="text-4xl font-bold">£{result.totalDuty.toLocaleString()}</p>
                <p className="text-emerald-100 mt-2">
                  Effective rate: {result.effectiveRate}%
                </p>
              </div>

              {/* Breakdown Table */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Breakdown</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-500 dark:text-gray-400">
                      <th className="text-left pb-2">Band</th>
                      <th className="text-right pb-2">Rate</th>
                      <th className="text-right pb-2">Tax</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    {result.breakdown.map((row, idx) => (
                      <tr key={idx} className="border-t border-gray-200 dark:border-gray-600">
                        <td className="py-2">{row.band}</td>
                        <td className="text-right">{row.rate}</td>
                        <td className="text-right font-medium">£{row.amount.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Info Box */}
              {buyerType === "first-time" && propertyValue > 625000 && (
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-4">
                  <p className="text-amber-800 dark:text-amber-200 text-sm">
                    <strong>Note:</strong> First-time buyer relief only applies to properties up to £625,000.
                    Standard rates have been applied.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
