'use client';

import React from 'react';
import { ShieldCheck, MapPin, ExternalLink } from 'lucide-react';

export default function Footer({ onOpenModal }) {
  return (
    <footer className="border-t border-slate-800 bg-obsidian-900 pt-16 pb-12 mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer CTA Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-heading font-black text-lg px-3 py-1 rounded-lg tracking-widest">
                KIA
              </div>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Next-Gen Mobility</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pioneering sustainable all-electric mobility, intelligent connected car technology, and class-leading long-term reliability.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 10-Year Warranty Promise
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every new Kia powertrain is protected by an industry-leading 10-Year / 100,000-Mile warranty program, including 24/7 Roadside Assistance.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" /> Authorized Dealer Network
            </h4>
            <button
              onClick={onOpenModal}
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
            >
              <span>Locate Nearest Kia Dealership & Service Center</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Kia America, Inc. & Kantar Research. All rights reserved. 
          </div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-400 transition-colors">Terms of Use</a>
            <a href="#accessibility" className="hover:text-slate-400 transition-colors">Accessibility Statements</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
