'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Calendar, Clock, MapPin, Car, Send, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { MODULE_A_VEHICLES, MODULE_B_VEHICLES } from '../data/kiaData';

export default function TestDrivePage() {
  const allVehicles = [...MODULE_A_VEHICLES, ...MODULE_B_VEHICLES];

  const [selectedVehicle, setSelectedVehicle] = useState(allVehicles[0].id);
  const [testDriveType, setTestDriveType] = useState('virtual'); // 'virtual' | 'dealer'
  const [date, setDate] = useState('2026-08-20');
  const [timeSlot, setTimeSlot] = useState('10:00 AM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti error:', err);
    }
  };

  const selectedCarObj = allVehicles.find(v => v.id === selectedVehicle) || allVehicles[0];

  return (
    <div className="space-y-12 animate-fade">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" /> VIP Concierge Booking
        </div>
        <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight">
          Virtual & Dealer Test Drive
        </h1>
        <p className="text-slate-300 mt-3 text-base sm:text-lg">
          Schedule a live 3D virtual cockpit preview with a Kia Specialist or book a physical test drive at your nearest showroom.
        </p>
      </div>

      {!submitted ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Selected Vehicle Preview Card */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-slate-700">
            <h3 className="font-heading font-black text-xl text-white mb-4 flex items-center gap-2">
              <Car className="w-5 h-5 text-cyan-400" /> Selected Vehicle
            </h3>
            
            <div className="rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-slate-800">
              <img
                src={selectedCarObj.image}
                alt={selectedCarObj.name}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-heading font-bold text-lg text-white">{selectedCarObj.name}</h4>
                  <span className="text-xs font-extrabold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/30">
                    {selectedCarObj.price}
                  </span>
                </div>
                <p className="text-xs text-slate-400">{selectedCarObj.tagline}</p>
              </div>
            </div>

            <div className="space-y-3 border-t border-slate-800 pt-4 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Warranty: {selectedCarObj.warranty}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Certified Product Specialist Assigned</span>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Vehicle Select */}
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Select Kia Model:</label>
                <select
                  value={selectedVehicle}
                  onChange={(e) => setSelectedVehicle(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                >
                  {allVehicles.map(car => (
                    <option key={car.id} value={car.id}>
                      {car.name} ({car.price})
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience Type */}
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-2">Test Drive Mode:</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTestDriveType('virtual')}
                    className={`py-3 px-4 rounded-xl border text-xs font-extrabold transition-all flex items-center justify-center gap-2 ${
                      testDriveType === 'virtual'
                        ? 'bg-cyan-500 text-white border-cyan-400 shadow-lg shadow-cyan-500/25'
                        : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>3D Virtual Cockpit</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTestDriveType('dealer')}
                    className={`py-3 px-4 rounded-xl border text-xs font-extrabold transition-all flex items-center justify-center gap-2 ${
                      testDriveType === 'dealer'
                        ? 'bg-purple-500 text-white border-purple-400 shadow-lg shadow-purple-500/25'
                        : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Physical Dealer Drive</span>
                  </button>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Preferred Date:</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Preferred Time Slot:</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="10:00 AM">10:00 AM - Morning</option>
                    <option value="02:00 PM">02:00 PM - Afternoon</option>
                    <option value="05:30 PM">05:30 PM - Evening</option>
                  </select>
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Sahith Chaganti"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="sahith@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-400 hover:to-pink-400 shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Test Drive Reservation</span>
                </button>
              </div>

            </form>
          </div>

        </div>
      ) : (
        /* Confirmation Screen */
        <div className="glass-card rounded-3xl p-10 text-center max-w-xl mx-auto border border-emerald-500/40 space-y-4">
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="font-heading font-black text-3xl text-white">
            Test Drive Confirmed!
          </h2>
          <p className="text-slate-300 text-sm">
            Thank you <strong>{name}</strong>! Your {testDriveType === 'virtual' ? '3D Virtual Cockpit Experience' : 'Dealer Test Drive'} for the <strong>{selectedCarObj.name}</strong> is scheduled for <strong>{date} at {timeSlot}</strong>.
          </p>
          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-xs text-slate-400">
            A calendar invitation and confirmation packet have been dispatched to <strong>{email}</strong>.
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 rounded-full bg-slate-800 text-slate-200 text-xs font-bold hover:bg-slate-700 transition-colors"
          >
            Schedule Another Reservation
          </button>
        </div>
      )}

    </div>
  );
}
