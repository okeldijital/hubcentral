'use client';

import { FC } from 'react';

interface TableRow {
  provider: string;
  startingPrice: string;
  renewalPrice: string;
  speed: string;
  aiFeatures: string;
  support: string;
  bestFor: string;
  drawback: string;
}

interface ComparisonTableProps {
  data: TableRow[];
  caption?: string;
}

export const ComparisonTable: FC<ComparisonTableProps> = ({ data, caption }) => {
  const safeData = Array.isArray(data) ? data : [];

  return (
    <div className="my-8 overflow-x-auto">
      {caption && <p className="text-sm text-gray-500 mb-2 text-center">{caption}</p>}
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Provider</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Starting Price</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Renewal Price</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Speed (TTFB)</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">AI Features</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Support</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Best For</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Main Drawback</th>
          </tr>
        </thead>
        <tbody>
          {safeData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-3 font-medium">{row.provider}</td>
              <td className="border border-gray-300 px-4 py-3">{row.startingPrice}</td>
              <td className="border border-gray-300 px-4 py-3">{row.renewalPrice}</td>
              <td className="border border-gray-300 px-4 py-3">{row.speed}</td>
              <td className="border border-gray-300 px-4 py-3">{row.aiFeatures}</td>
              <td className="border border-gray-300 px-4 py-3">{row.support}</td>
              <td className="border border-gray-300 px-4 py-3">{row.bestFor}</td>
              <td className="border border-gray-300 px-4 py-3 text-red-600">{row.drawback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
