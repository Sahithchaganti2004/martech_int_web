'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Shield, ChevronRight, Award, Cpu, ShieldCheck, Sparkles } from 'lucide-react';
import { HERO_CONTENT } from '../data/kiaData';

export default function Hero({ activeModule, setActiveModule, onOpenModal }) {
  const content = HERO_CONTENT[activeModule];

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Dynamic Ambient Background Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="orb-glow w-[500px] h-[500px] -top-20 -left-20 transition-all duration-700"
          style={{
            background: activeModule === 'moduleA' 
              ? 'radial-gradient(circle, rgba(6, 182, 212, 0.35) 0%, rgba(168, 85, 247, 0.2) 70%, transparent 100%)'
              : 'radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(245, 158, 11, 0.2) 70%, transparent 100%)'
          }}
        />
        <div 
          className="orb-glow w-[600px] h-[600px] -bottom-40 -right-20 transition-all duration-700"
          style={{
            background: activeModule === 'moduleA' 
              ? 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(6, 182, 212, 0.15) 70%, transparent 100%)'
              : 'radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, rgba(16, 185, 129, 0.15) 70%, transparent 100%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Core Segment Selector Switcher (The Hero Toggle) */}
        <div className="inline-flex items-center p-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-2xl mb-10 max-w-2xl w-full sm:w-auto">
          <button
            onClick={() => setActiveModule('moduleA')}
            className={`relative flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 ${
              activeModule === 'moduleA'
                ? 'text-white shadow-lg'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {activeModule === 'moduleA' && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-lg shadow-cyan-500/30"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Zap className={`w-4 h-4 ${activeModule === 'moduleA' ? 'text-white' : 'text-cyan-400'}`} />
              <span>⚡ INNOVATION & STYLE</span>
            </span>
          </button>

          <button
            onClick={() => setActiveModule('moduleB')}
            className={`relative flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 ${
              activeModule === 'moduleB'
                ? 'text-white shadow-lg'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {activeModule === 'moduleB' && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full shadow-lg shadow-emerald-500/30"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Shield className={`w-4 h-4 ${activeModule === 'moduleB' ? 'text-white' : 'text-emerald-400'}`} />
              <span>🛡️ VALUE & RELIABILITY</span>
            </span>
          </button>
        </div>

        {/* Dynamic Transitioning Headline & Subheadline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            {/* Tag Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border mb-6 ${content.badgeColor}`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>{content.tag}</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.1] mb-6">
              <span className={`bg-gradient-to-r ${content.accentGradient} bg-clip-text text-transparent`}>
                {content.headline.split(':')[0]}:
              </span>
              <br className="hidden sm:block" />
              <span className="text-white">
                {content.headline.split(':')[1]}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
              {content.subheadline}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <button
                onClick={onOpenModal}
                className={`px-8 py-4 rounded-full font-extrabold text-sm sm:text-base text-white bg-gradient-to-r ${content.accentGradient} shadow-xl hover:scale-105 transition-all flex items-center gap-2`}
              >
                <span>{activeModule === 'moduleA' ? 'Experience Digital Cockpit' : 'Calculate Total Cost of Ownership'}</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              <a
                href="#specs"
                className="px-8 py-4 rounded-full font-bold text-sm sm:text-base text-slate-200 bg-slate-900/80 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                <span>Compare Full Lineup</span>
              </a>
            </div>

            {/* Quick Stat Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {activeModule === 'moduleA' ? (
                <>
                  <div className="glass-card p-4 rounded-2xl border-cyan-500/20 text-center">
                    <div className="text-2xl font-black text-cyan-400 font-heading">800V</div>
                    <div className="text-xs text-slate-400 font-semibold mt-1">Ultra-Fast Charging</div>
                  </div>
                  <div className="glass-card p-4 rounded-2xl border-purple-500/20 text-center">
                    <div className="text-2xl font-black text-purple-400 font-heading">Level 3</div>
                    <div className="text-xs text-slate-400 font-semibold mt-1">Autonomous Ready</div>
                  </div>
                  <div className="glass-card p-4 rounded-2xl border-pink-500/20 text-center">
                    <div className="text-2xl font-black text-pink-400 font-heading">576 HP</div>
                    <div className="text-xs text-slate-400 font-semibold mt-1">Dual Motor e-AWD</div>
                  </div>
                  <div className="glass-card p-4 rounded-2xl border-cyan-500/20 text-center">
                    <div className="text-2xl font-black text-cyan-400 font-heading">OTA</div>
                    <div className="text-xs text-slate-400 font-semibold mt-1">Cloud Updates</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="glass-card p-4 rounded-2xl border-emerald-500/20 text-center">
                    <div className="text-2xl font-black text-emerald-400 font-heading">10-Year</div>
                    <div className="text-xs text-slate-400 font-semibold mt-1">100k-Mi Warranty</div>
                  </div>
                  <div className="glass-card p-4 rounded-2xl border-amber-500/20 text-center">
                    <div className="text-2xl font-black text-amber-400 font-heading">43 MPG</div>
                    <div className="text-xs text-slate-400 font-semibold mt-1">Combined Efficiency</div>
                  </div>
                  <div className="glass-card p-4 rounded-2xl border-teal-500/20 text-center">
                    <div className="text-2xl font-black text-teal-400 font-heading">5-Star</div>
                    <div className="text-xs text-slate-400 font-semibold mt-1">Overall Safety Profile</div>
                  </div>
                  <div className="glass-card p-4 rounded-2xl border-emerald-500/20 text-center">
                    <div className="text-2xl font-black text-emerald-400 font-heading">30% Lower</div>
                    <div className="text-xs text-slate-400 font-semibold mt-1">Maintenance Cost</div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
