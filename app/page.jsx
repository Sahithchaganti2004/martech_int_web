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

export default function Home() {
  const [activePage, setActivePage] = useState('home'); // 'home' | 'about' | 'moduleA' | 'moduleB' | 'testdrive'
  const [activeModule, setActiveModule] = useState('moduleA'); // 'moduleA' | 'moduleB'
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-cyan-500 selection:text-black">
      
      {/* Multi-Page Sticky Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* Hero Section (Rendered on Home or Module pages) */}
      {(activePage === 'home' || activePage === 'moduleA' || activePage === 'moduleB') && (
        <Hero
          activeModule={activeModule}
          setActiveModule={(mod) => {
            setActiveModule(mod);
            setActivePage(mod);
          }}
          onOpenModal={() => setIsModalOpen(true)}
        />
      )}

      {/* Main Multi-Page Content Router */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full space-y-24 pt-6">
        
        <AnimatePresence mode="wait">
          
          {/* 1. About Us Page */}
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

          {/* 2. Virtual Test Drive Page */}
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

          {/* 3. Module A Page */}
          {(activePage === 'home' && activeModule === 'moduleA') || activePage === 'moduleA' ? (
            <motion.div
              key="moduleA"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ModuleA onOpenModal={() => setIsModalOpen(true)} />
            </motion.div>
          ) : null}

          {/* 4. Module B Page */}
          {(activePage === 'home' && activeModule === 'moduleB') || activePage === 'moduleB' ? (
            <motion.div
              key="moduleB"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ModuleB onOpenModal={() => setIsModalOpen(true)} />
            </motion.div>
          ) : null}

        </AnimatePresence>

        {/* Spec Comparison Matrix (on Home and Module pages) */}
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
