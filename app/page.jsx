'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ModuleA from '../components/ModuleA';
import ModuleB from '../components/ModuleB';
import AboutUs from '../components/AboutUs';
import TestDrivePage from '../components/TestDrivePage';
import SpecComparator from '../components/SpecComparator';
import LeadModal from '../components/LeadModal';
import Footer from '../components/Footer';
import { Sparkles, ChevronRight, Zap, Shield } from 'lucide-react';

export default function Home() {
  const [activePage, setActivePage] = useState('home'); // 'home' | 'about' | 'moduleA' | 'moduleB' | 'testdrive'
  const [activeModule, setActiveModule] = useState('moduleA'); // 'moduleA' | 'moduleB'
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-cyan-400 selection:text-black bg-[#0A0E1A] text-slate-100">
      
      {/* Sticky Multi-Page Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full space-y-16 pt-6">
        
        <AnimatePresence mode="wait">
          
          {/* HOME PAGE WITH DETAILED WELCOME PORTFOLIO HERO */}
          {activePage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-16 py-6"
            >
              {/* Welcome Card */}
              <div className="glass-card rounded-3xl p-8 sm:p-14 border border-cyan-500/30 text-center relative overflow-hidden">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 uppercase tracking-widest mb-4">
                  <Sparkles className="w-3.5 h-3.5" /> Welcome to Kia&apos;s Next-Gen Mobility Portfolio
                </div>

                <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight mb-6">
                  Welcome to Our <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Next-Gen Automotive Portfolio</span>
                </h1>

                <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                  Driven by Kantar Research consumer insights, our portfolio is engineered around two distinct perception pillars: 
                  <strong> Innovation & Futuristic Tech (Module A)</strong> vs. <strong>Unrivaled Value & Long-Term Reliability (Module B)</strong>. 
                  Whether you seek 800V ultra-fast electric charging or a 10-Year Powertrain Warranty guarantee, explore our full 8-vehicle lineup below.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => { setActiveModule('moduleA'); setActivePage('moduleA'); }}
                    className="px-8 py-4 rounded-full font-black text-sm text-black bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Explore Module A: Tech & Innovation (4 Cars)</span>
                  </button>

                  <button
                    onClick={() => { setActiveModule('moduleB'); setActivePage('moduleB'); }}
                    className="px-8 py-4 rounded-full font-black text-sm text-black bg-gradient-to-r from-emerald-400 to-teal-400 shadow-lg shadow-emerald-500/30 hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    <Shield className="w-4 h-4" />
                    <span>Explore Module B: Value & Reliability (4 Cars)</span>
                  </button>
                </div>
              </div>

              {/* Module Segment Highlight Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card rounded-3xl p-8 border border-cyan-500/30 hover:border-cyan-400 transition-all">
                  <span className="text-xs font-black text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 uppercase tracking-wider">Module A Segment</span>
                  <h3 className="font-heading font-black text-2xl text-white mt-3 mb-2">The Apex of Innovation & Design</h3>
                  <p className="text-slate-300 text-sm mb-4">Featuring Kia EV6 GT, Kia EV9, Kia EV3/EV4, and Stinger GT Tribute. Equipped with Level 3 autonomous readiness, AR-HUD, and 800V charging.</p>
                  <button onClick={() => { setActiveModule('moduleA'); setActivePage('moduleA'); }} className="text-xs font-black text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                    <span>View All 4 Tech Models</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="glass-card rounded-3xl p-8 border border-emerald-500/30 hover:border-emerald-400 transition-all">
                  <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 uppercase tracking-wider">Module B Segment</span>
                  <h3 className="font-heading font-black text-2xl text-white mt-3 mb-2">The Masterclass in Value & Durability</h3>
                  <p className="text-slate-300 text-sm mb-4">Featuring Kia Seltos, Sportage Hybrid, Carens MPV, and Telluride SUV. Backed by 10-Year / 100,000-Mile warranty and low maintenance index.</p>
                  <button onClick={() => { setActiveModule('moduleB'); setActivePage('moduleB'); }} className="text-xs font-black text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                    <span>View All 4 Value Models</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* ABOUT US PAGE */}
          {activePage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <AboutUs onOpenModal={() => setIsModalOpen(true)} />
            </motion.div>
          )}

          {/* VIRTUAL TEST DRIVE PAGE */}
          {activePage === 'testdrive' && (
            <motion.div
              key="testdrive"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TestDrivePage />
            </motion.div>
          )}

          {/* MODULE A PAGE */}
          {activePage === 'moduleA' && (
            <motion.div
              key="moduleA"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ModuleA onOpenModal={() => setIsModalOpen(true)} />
            </motion.div>
          )}

          {/* MODULE B PAGE */}
          {activePage === 'moduleB' && (
            <motion.div
              key="moduleB"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ModuleB onOpenModal={() => setIsModalOpen(true)} />
            </motion.div>
          )}

        </AnimatePresence>

        {/* Spec Comparison Matrix */}
        {(activePage === 'home' || activePage === 'moduleA' || activePage === 'moduleB') && (
          <SpecComparator activeModule={activeModule} />
        )}

      </main>

      {/* Footer */}
      <Footer onOpenModal={() => setIsModalOpen(true)} />

      {/* Lead Capture Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        activeModule={activeModule}
      />

    </div>
  );
}
