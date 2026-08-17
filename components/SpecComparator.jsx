'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Layers, CheckCircle } from 'lucide-react';
import { SPEC_MATRIX } from '../data/kiaData';

export default function SpecComparator({ activeModule }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id="specs" className="pt-10">
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-slate-300 bg-slate-800 border border-slate-700 uppercase tracking-widest mb-2">
              <Layers className="w-3.5 h-3.5 text-cyan-400" /> Side-by-Side Data Matrix
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white">
              Full Portfolio Spec Comparison
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Cross-compare horsepower, range, charging speeds, warranty terms, and maintenance indices.
            </p>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 rounded-full border border-slate-700 bg-slate-900/80 text-xs font-bold text-slate-300 hover:bg-slate-800 transition-all flex items-center gap-2"
          >
            <span>{isOpen ? 'Collapse Table' : 'Expand Full Table'}</span>
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Collapsible Table Content */}
        {isOpen && (
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-800 text-xs font-black text-slate-400 uppercase tracking-wider">
                  <th className="py-4 px-4 bg-slate-950/40 rounded-tl-xl">Specification Metric</th>
                  <th className="py-4 px-4 text-cyan-400 bg-slate-950/60">Kia EV6 GT (EV)</th>
                  <th className="py-4 px-4 text-purple-400 bg-slate-950/60">Kia EV9 (EV SUV)</th>
                  <th className="py-4 px-4 text-emerald-400 bg-slate-950/60">Kia Seltos (Smart Value)</th>
                  <th className="py-4 px-4 text-amber-400 bg-slate-950/40 rounded-tr-xl">Sportage Hybrid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm">
                {SPEC_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-200 bg-slate-950/30">
                      {row.metric}
                    </td>
                    <td className="py-4 px-4 text-slate-300 font-semibold bg-slate-950/40">
                      {row.ev6}
                    </td>
                    <td className="py-4 px-4 text-slate-300 font-semibold bg-slate-950/40">
                      {row.ev9}
                    </td>
                    <td className="py-4 px-4 text-slate-300 font-semibold bg-slate-950/40">
                      {row.seltos}
                    </td>
                    <td className="py-4 px-4 text-slate-300 font-semibold bg-slate-950/30">
                      {row.sportage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
}
