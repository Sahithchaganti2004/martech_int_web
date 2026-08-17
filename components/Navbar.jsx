'use client';

import React from 'react';
import { Shield, Zap, Compass, Car, Sparkles, PhoneCall } from 'lucide-react';

export default function Navbar({ activeModule, setActiveModule, onOpenModal }) {
  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-heading font-black text-xl px-4 py-1.5 rounded-xl tracking-[0.25em] shadow-lg shadow-cyan-500/20">
            KIA
          </div>
          <div className="hidden sm:block border-l border-slate-700 pl-3">
            <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase block">Next-Gen Mobility</span>
            <span className="text-[10px] text-slate-400 font-medium">Automotive Excellence</span>
          </div>
        </div>

        {/* Quick Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <a href="#hero" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <Compass className="w-4 h-4" /> Overview
          </a>
          <a href="#vehicles" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <Car className="w-4 h-4" /> Vehicles
          </a>
          <a href="#simulator" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> Smart Tech
          </a>
          <a href="#specs" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <Shield className="w-4 h-4" /> Compare
          </a>
        </nav>

        {/* Action Button & Segment Indicator */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveModule(activeModule === 'moduleA' ? 'moduleB' : 'moduleA')}
            className="hidden lg:flex items-center gap-2 text-xs font-bold px-3.5 py-2 rounded-full border border-slate-700 bg-slate-900/60 hover:bg-slate-800 transition-all text-slate-200"
            title="Toggle Segment Module"
          >
            {activeModule === 'moduleA' ? (
              <>
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Switch to Value & Reliability</span>
              </>
            ) : (
              <>
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Switch to Tech & Innovation</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenModal}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Book Virtual Test Drive</span>
          </button>
        </div>
      </div>
    </header>
  );
}
