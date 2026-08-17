'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, Send, ShieldCheck, Sparkles } from 'lucide-react';

export default function LeadModal({ isOpen, onClose, activeModule }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    powertrain: activeModule === 'moduleA' ? 'EV' : 'Hybrid',
    decisionFactor: activeModule === 'moduleA' ? 'Tech Innovation & Design' : 'Total Cost of Ownership & Reliability'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti trigger note:', err);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade">
      <div 
        className="glass-card max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Priority Concierge Access
            </div>
            <h3 className="font-heading font-black text-2xl text-white">
              {activeModule === 'moduleA' ? 'Book Priority Digital Cockpit Test Drive' : 'Download 10-Yr Warranty & Savings Guide'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 mb-6">
              Connect with a certified Kia Product Specialist for a live 1-on-1 virtual preview or local dealer test drive.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sahith Chaganti"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="sahith@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Preferred Powertrain</label>
                <select
                  value={formData.powertrain}
                  onChange={(e) => setFormData({ ...formData, powertrain: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="EV">All-Electric (EV6 / EV9)</option>
                  <option value="Hybrid">Turbo-Hybrid (Sportage / Carens)</option>
                  <option value="Gas">Gasoline Smartstream (Seltos)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Primary Decision Factor</label>
                <select
                  value={formData.decisionFactor}
                  onChange={(e) => setFormData({ ...formData, decisionFactor: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="Tech Innovation & Design">Tech Innovation & ADAS Cockpit</option>
                  <option value="Total Cost of Ownership & Reliability">Total Cost of Ownership & 10-Yr Warranty</option>
                  <option value="Both Factor Equally">Both Factor Equally</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-400 hover:to-pink-400 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Priority Request</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-black text-2xl text-white">
              VIP Request Confirmed!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
              Thank you, <strong>{formData.fullName}</strong>. A Kia Product Specialist will contact you at <strong>{formData.email}</strong> with your customized vehicle packet.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-slate-800 text-slate-200 text-xs font-bold hover:bg-slate-700 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
