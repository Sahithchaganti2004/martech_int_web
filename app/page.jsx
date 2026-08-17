'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ModuleA from '../components/ModuleA';
import ModuleB from '../components/ModuleB';
import SpecComparator from '../components/SpecComparator';
import LeadModal from '../components/LeadModal';
import Footer from '../components/Footer';

export default function Home() {
  const [activeModule, setActiveModule] = useState('moduleA'); // 'moduleA' | 'moduleB'
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-cyan-500 selection:text-black">
      
      {/* Sticky Navbar */}
      <Navbar
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* Hero Section with Interactive Segment Selector Toggle */}
      <Hero
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* Main Content Area: Animate Presence Transition between Module A & Module B */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full space-y-24">
        
        <AnimatePresence mode="wait">
          {activeModule === 'moduleA' ? (
            <motion.div
              key="moduleA"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <ModuleA onOpenModal={() => setIsModalOpen(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="moduleB"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <ModuleB onOpenModal={() => setIsModalOpen(true)} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Collapsible Side-by-Side Spec Matrix */}
        <SpecComparator activeModule={activeModule} />

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
