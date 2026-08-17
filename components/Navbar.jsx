'use client';

import React from 'react';
import { Compass, Car, Sparkles, Shield, Info, PhoneCall, Zap } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, activeModule, setActiveModule, onOpenModal }) {
  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => setActivePage('home')}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-heading font-black text-xl px-4 py-1.5 rounded-xl tracking-[0.25em] shadow-lg shadow-cyan-500/20">
            KIA
          </div>
          <div className="hidden sm:block border-l border-slate-700 pl-3">
            <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase block">Next-Gen Mobility</span>
            <span className="text-[10px] text-slate-400 font-medium">Automotive Excellence</span>
          </div>
        </div>

        {/* Multi-Page Nav Bar Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-extrabold text-slate-300">
          <button
            onClick={() => setActivePage('home')}
            className={`hover:text-cyan-400 transition-colors flex items-center gap-1.5 ${
              activePage === 'home' ? 'text-cyan-400 font-black border-b-2 border-cyan-400 pb-1' : ''
            }`}
          >
            <Compass className="w-4 h-4" /> Home
          </button>

          <button
            onClick={() => setActivePage('about')}
            className={`hover:text-purple-400 transition-colors flex items-center gap-1.5 ${
              activePage === 'about' ? 'text-purple-400 font-black border-b-2 border-purple-400 pb-1' : ''
            }`}
          >
            <Info className="w-4 h-4" /> About Us
          </button>

          <button
            onClick={() => {
              setActivePage('moduleA');
              setActiveModule('moduleA');
            }}
            className={`hover:text-cyan-400 transition-colors flex items-center gap-1.5 ${
              activePage === 'moduleA' ? 'text-cyan-400 font-black border-b-2 border-cyan-400 pb-1' : ''
            }`}
          >
            <Zap className="w-4 h-4 text-cyan-400" /> Module A (Tech)
          </button>

          <button
            onClick={() => {
              setActivePage('moduleB');
              setActiveModule('moduleB');
            }}
            className={`hover:text-emerald-400 transition-colors flex items-center gap-1.5 ${
              activePage === 'moduleB' ? 'text-emerald-400 font-black border-b-2 border-emerald-400 pb-1' : ''
            }`}
          >
            <Shield className="w-4 h-4 text-emerald-400" /> Module B (Value)
          </button>

          <button
            onClick={() => setActivePage('testdrive')}
            className={`hover:text-pink-400 transition-colors flex items-center gap-1.5 ${
              activePage === 'testdrive' ? 'text-pink-400 font-black border-b-2 border-pink-400 pb-1' : ''
            }`}
          >
            <Sparkles className="w-4 h-4 text-pink-400" /> Virtual Test Drive
          </button>
        </nav>

        {/* Call to Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActivePage('testdrive')}
            className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Virtual Test Drive</span>
          </button>
        </div>

      </div>
    </header>
  );
}
