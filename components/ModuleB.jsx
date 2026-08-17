'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Calculator, CheckCircle2, DollarSign, Award, ChevronRight, TrendingUp, ShieldCheck } from 'lucide-react';
import { MODULE_B_VEHICLES } from '../data/kiaData';

export default function ModuleB({ onOpenModal }) {
  // Calculator State
  const [dailyCommute, setDailyCommute] = useState(40); // km/miles per day
  const [ownershipYears, setOwnershipYears] = useState(5); // 3-7 years
  const [powertrain, setPowertrain] = useState('hybrid'); // 'gas' | 'hybrid' | 'ev'

  // Live Savings Formula calculations
  const annualMiles = dailyCommute * 365;
  const gasCostPerGallon = 3.60;
  
  // Fuel MPG benchmarks
  const mpgMap = { gas: 28, hybrid: 43, ev: 110 }; // EV MPGe equivalent
  const maintenancePerYear = { gas: 420, hybrid: 340, ev: 280 };

  const selectedMPG = mpgMap[powertrain];
  const annualFuelCost = Math.round((annualMiles / selectedMPG) * gasCostPerGallon);
  const baselineGasCost = Math.round((annualMiles / 25) * gasCostPerGallon); // Standard gas SUV benchmark
  
  const annualSavings = Math.max(0, baselineGasCost - annualFuelCost);
  const totalSavingsOverOwnership = annualSavings * ownershipYears;
  const maintenanceSavings = Math.round((480 - maintenancePerYear[powertrain]) * ownershipYears);
  const totalFinancialValue = totalSavingsOverOwnership + maintenanceSavings + 3500; // Includes 10-Yr warranty value retention

  return (
    <div className="space-y-20">
      
      {/* 1. Vehicle Showcase Section */}
      <section id="vehicles">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 uppercase tracking-widest mb-3">
            <Shield className="w-3.5 h-3.5" /> High-Efficiency & Durable Utility Lineup
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            Smart Value & Reliability Models
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Engineered for long-term endurance with low running expenses and backed by Kia&apos;s 10-Year Warranty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {MODULE_B_VEHICLES.map((car) => (
            <motion.div
              key={car.id}
              whileHover={{ y: -6 }}
              className={`glass-card rounded-3xl overflow-hidden border ${car.accent} transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                {/* Vehicle Image Container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700 text-xs font-black text-emerald-400">
                    {car.price}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">
                    {car.name}
                  </h3>
                  <p className="text-emerald-400 text-sm font-semibold mb-6">
                    {car.tagline}
                  </p>

                  {/* Badges */}
                  <div className="space-y-2 mb-6">
                    {car.badges.map((badge, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-200 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-800">
                        <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span>{badge}</span>
                      </div>
                    ))}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5">
                    {car.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action CTA */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={onOpenModal}
                  className="w-full py-3.5 rounded-2xl font-extrabold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Download 10-Yr Warranty & Brochure</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. Interactive Cost-of-Ownership & Savings Calculator */}
      <section id="simulator" className="glass-card rounded-3xl p-6 sm:p-10 border border-emerald-500/30 relative overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 uppercase tracking-widest mb-3">
            <Calculator className="w-3.5 h-3.5" /> Total Cost of Ownership (TCO) Calculator
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white">
            Calculate Your Ownership Savings
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Adjust your daily driving habits below to calculate projected fuel, maintenance, and warranty savings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Slider Inputs */}
          <div className="lg:col-span-6 space-y-6 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
            
            {/* Powertrain Selection */}
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                Preferred Powertrain Type:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'gas', label: 'Gasoline' },
                  { id: 'hybrid', label: 'Turbo-Hybrid' },
                  { id: 'ev', label: 'All-Electric' }
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPowertrain(p.id)}
                    className={`py-2.5 text-xs font-extrabold rounded-xl border transition-all ${
                      powertrain === p.id
                        ? 'bg-emerald-500 text-white border-emerald-400 shadow-md'
                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Daily Commute Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                <span>Daily Commute Distance:</span>
                <span className="text-emerald-400 text-sm font-extrabold">{dailyCommute} miles / day</span>
              </div>
              <input
                type="range"
                min="10"
                max="120"
                step="5"
                value={dailyCommute}
                onChange={(e) => setDailyCommute(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>10 mi</span>
                <span>60 mi</span>
                <span>120 mi</span>
              </div>
            </div>

            {/* Ownership Duration Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                <span>Ownership Duration:</span>
                <span className="text-emerald-400 text-sm font-extrabold">{ownershipYears} Years</span>
              </div>
              <input
                type="range"
                min="3"
                max="7"
                step="1"
                value={ownershipYears}
                onChange={(e) => setOwnershipYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>3 Years</span>
                <span>5 Years</span>
                <span>7 Years (10-Yr Covered)</span>
              </div>
            </div>

          </div>

          {/* Live Calculated Output Card */}
          <div className="lg:col-span-6 bg-slate-950 rounded-2xl border border-emerald-500/40 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[340px] shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                Projected TCO Value Savings
              </span>
              <div className="text-4xl sm:text-5xl font-heading font-black text-white mb-6">
                ${totalFinancialValue.toLocaleString()}
                <span className="text-xs font-normal text-slate-400 block mt-1">Total estimated savings over {ownershipYears} years</span>
              </div>

              <div className="space-y-3.5 border-t border-slate-800 pt-4">
                <div className="flex justify-between text-xs sm:text-sm text-slate-300">
                  <span>Fuel / Energy Savings:</span>
                  <span className="font-bold text-emerald-400">+${totalSavingsOverOwnership.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm text-slate-300">
                  <span>Maintenance Index Savings (vs segment avg):</span>
                  <span className="font-bold text-emerald-400">+${maintenanceSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm text-slate-300">
                  <span>10-Yr Powertrain Warranty Protection Value:</span>
                  <span className="font-bold text-amber-400">+$3,500 (Included)</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenModal}
                className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2"
              >
                <span>Get Customized Lease & Purchase Quote</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
