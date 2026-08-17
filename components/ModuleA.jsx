'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, Eye, Navigation, Sparkles, ShieldAlert, CheckCircle2, ChevronRight } from 'lucide-react';
import { MODULE_A_VEHICLES, ADAS_SIMULATOR_DATA } from '../data/kiaData';

export default function ModuleA({ onOpenModal }) {
  const [activeSimId, setActiveSimId] = useState('blind-spot');
  const [ambientColor, setAmbientColor] = useState('#06B6D4'); // Cyan default

  const activeSim = ADAS_SIMULATOR_DATA.find(s => s.id === activeSimId) || ADAS_SIMULATOR_DATA[0];

  const ambientColors = [
    { name: "Electric Cyan", hex: "#06B6D4" },
    { name: "Neon Purple", hex: "#A855F7" },
    { name: "Crimson Rose", hex: "#EC4899" },
    { name: "Solar Gold", hex: "#F59E0B" },
    { name: "Emerald Glow", hex: "#10B981" }
  ];

  return (
    <div className="space-y-20">
      
      {/* 1. Vehicle Showcase Section */}
      <section id="vehicles">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5" /> High-Performance Electric & Autonomous Lineup
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            Flagship Innovation Models
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Built on Kia&apos;s Dedicated Electric Global Modular Platform (E-GMP) with 800V ultra-fast architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {MODULE_A_VEHICLES.map((car) => (
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
                  <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700 text-xs font-black text-cyan-400">
                    {car.price}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">
                    {car.name}
                  </h3>
                  <p className="text-cyan-400 text-sm font-semibold mb-6">
                    {car.tagline}
                  </p>

                  {/* Badges */}
                  <div className="space-y-2 mb-6">
                    {car.badges.map((badge, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-200 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-800">
                        <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{badge}</span>
                      </div>
                    ))}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5">
                    {car.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
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
                  className="w-full py-3.5 rounded-2xl font-extrabold text-sm text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Priority Tech Test Drive</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. Interactive ADAS Safety & Smart Cockpit Simulator */}
      <section id="simulator" className="glass-card rounded-3xl p-6 sm:p-10 border border-purple-500/30 relative overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-purple-400 bg-purple-500/10 border border-purple-500/30 uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" /> Interactive Digital Cockpit Simulator
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white">
            Experience Next-Gen ADAS Technology
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Click on any intelligent feature below to preview how Kia&apos;s smart sensor suite works in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Feature Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {ADAS_SIMULATOR_DATA.map((item) => {
              const isActive = activeSimId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSimId(item.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                    isActive
                      ? 'bg-purple-600/20 border-purple-500 text-white shadow-lg shadow-purple-500/20'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${isActive ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{item.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Cockpit Display Canvas */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-6 relative overflow-hidden flex flex-col justify-between min-h-[340px]">
            
            {/* Ambient Lighting Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-30 transition-all duration-500"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${ambientColor} 0%, transparent 75%)`
              }}
            />

            {/* Display Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Cockpit Display • ADAS Active</span>
              </div>
              <span className="text-xs text-slate-500 font-mono">12.3-Inch Curved OLED</span>
            </div>

            {/* Feature Active Info */}
            <div className="my-6 relative z-10">
              <h3 className="text-xl sm:text-2xl font-heading font-black text-white mb-2">
                {activeSim.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeSim.desc}
              </p>
            </div>

            {/* Ambient Mood Lighting Customizer */}
            <div className="relative z-10 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-bold text-slate-400">Test Cockpit Mood Lighting:</span>
              <div className="flex items-center gap-2">
                {ambientColors.map((color) => (
                  <button
                    key={color.hex}
                    onClick={() => setAmbientColor(color.hex)}
                    style={{ backgroundColor: color.hex }}
                    className={`w-6 h-6 rounded-full border-2 transition-transform ${
                      ambientColor === color.hex ? 'border-white scale-125 shadow-lg' : 'border-transparent hover:scale-110'
                    }`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
