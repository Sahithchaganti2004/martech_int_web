'use client';

import React from 'react';
import { ShieldCheck, Award, Zap, Heart, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export default function AboutUs({ onOpenModal }) {
  return (
    <div className="space-y-16 animate-fade">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black text-purple-400 bg-purple-500/10 border border-purple-500/30 uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Kantar Research & Kia Strategic Insight
        </div>
        <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight">
          About Kia Next-Gen Mobility
        </h1>
        <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
          Bridging the gap between cutting-edge automotive technology and long-term owner value.
        </p>
      </div>

      {/* Dual Philosophy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Module A Vision */}
        <div className="glass-card rounded-3xl p-8 border border-cyan-500/30 relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-black text-2xl text-white mb-3">
            Module A: Innovation & Style Focus
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Designed for forward-thinking drivers who prioritize groundbreaking electric performance, Level 3 autonomous readiness, ultra-fast 800V charging, and futuristic design language.
          </p>
          <div className="space-y-3 border-t border-slate-800 pt-4 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Dedicated E-GMP All-Electric Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Over-The-Air (OTA) Software Ecosystem</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Augmented Reality Cockpit & ADAS Sensor Suite</span>
            </div>
          </div>
        </div>

        {/* Module B Vision */}
        <div className="glass-card rounded-3xl p-8 border border-emerald-500/30 relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-black text-2xl text-white mb-3">
            Module B: Value & Durability Focus
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Tailored for practical buyers who demand low running costs, robust high-tensile crash safety, class-leading maintenance economy, and the peace of mind of a 10-Year Warranty.
          </p>
          <div className="space-y-3 border-t border-slate-800 pt-4 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>10-Year / 100,000-Mile Powertrain Warranty Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>30% Lower Maintenance Index vs Segment Average</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Nationwide Genuine Parts & Service Accessibility</span>
            </div>
          </div>
        </div>

      </div>

      {/* Kantar Research Statistics Card */}
      <div className="glass-card rounded-3xl p-8 sm:p-10 border border-purple-500/30 text-center relative overflow-hidden">
        <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-3">
          Consumer Perception Study Benchmark (Kantar Research)
        </h3>
        <p className="text-slate-300 text-sm max-w-2xl mx-auto mb-8">
          Based on independent automotive market study clusters evaluating owner satisfaction, brand perception, and technology adoption.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
            <div className="text-3xl font-heading font-black text-cyan-400">94%</div>
            <div className="text-xs text-slate-400 font-bold mt-1">Tech Perception Score</div>
          </div>
          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
            <div className="text-3xl font-heading font-black text-emerald-400">10-Yr</div>
            <div className="text-xs text-slate-400 font-bold mt-1">Powertrain Warranty</div>
          </div>
          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
            <div className="text-3xl font-heading font-black text-purple-400">#1</div>
            <div className="text-xs text-slate-400 font-bold mt-1">KBB Best Buy Winner</div>
          </div>
          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
            <div className="text-3xl font-heading font-black text-amber-400">5-Star</div>
            <div className="text-xs text-slate-400 font-bold mt-1">Overall Crash Rating</div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800">
          <button
            onClick={onOpenModal}
            className="px-8 py-3.5 rounded-full font-extrabold text-sm text-white bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 shadow-xl hover:scale-105 transition-transform"
          >
            Connect with Product Specialist
          </button>
        </div>
      </div>

    </div>
  );
}
