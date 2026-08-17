import streamlit as st
import streamlit.components.v1 as components
import json

# ---------------------------------------------------------
# Page Configuration - Full Width & Collapsed Streamlit Chrome
# ---------------------------------------------------------
st.set_page_config(
    page_title="KIA MOTORS | Next-Gen Mobility",
    page_icon="🚘",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Hide Streamlit Default UI Elements for Full Luxury Website Experience
st.markdown("""
<style>
    #MainMenu {visibility: hidden !important;}
    header {visibility: hidden !important;}
    footer {visibility: hidden !important;}
    .stApp > header {display: none !important;}
    .block-container {
        padding-top: 0rem !important;
        padding-bottom: 0rem !important;
        padding-left: 0rem !important;
        padding-right: 0rem !important;
        max-width: 100% !important;
    }
    section[data-testid="stSidebar"] {
        display: none !important;
    }
</style>
""", unsafe_allow_html=True)

# ---------------------------------------------------------
# Embedded Ultra-Luxury Single-Page Web Application
# ---------------------------------------------------------
html_app = """
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>KIA MOTORS | Next-Gen Mobility</title>
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800;900&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            heading: ['Outfit', 'sans-serif'],
            sans: ['Plus Jakarta Sans', 'sans-serif'],
          },
          colors: {
            obsidian: { 900: '#07090E', 800: '#0B0F19', 700: '#111827', 600: '#1E293B' },
            moduleA: { cyan: '#06B6D4', purple: '#A855F7', pink: '#EC4899' },
            moduleB: { emerald: '#10B981', gold: '#F59E0B', silver: '#E2E8F0' }
          }
        }
      }
    }
  </script>
  
  <!-- React & ReactDOM CDN -->
  <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
  <!-- Babel CDN for JSX -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <!-- Canvas Confetti CDN -->
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js"></script>
  
  <style>
    body { background-color: #0B0F19; color: #F8FAFC; font-family: 'Plus Jakarta Sans', sans-serif; }
    .glass-card { background: rgba(17, 24, 39, 0.75); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.08); }
    .glass-nav { background: rgba(11, 15, 25, 0.85); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
    .orb-glow { position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none; }
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #0B0F19; }
    ::-webkit-scrollbar-thumb { background: #06B6D4; border-radius: 4px; }
  </style>
</head>
<body class="bg-obsidian-800 text-slate-100 min-h-screen antialiased selection:bg-cyan-500 selection:text-black">
  <div id="root"></div>

  <script type="text/babel">
    const { useState, useEffect } = React;

    // --- DATA ---
    const MODULE_A_VEHICLES = [
      {
        id: "ev6-gt",
        name: "Kia EV6 GT",
        tagline: "576 HP All-Electric High-Performance Crossover",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop",
        price: "$61,600", mpge: 110, maint: 280, warranty: "10-Yr / 100k-Mi EV Battery",
        badges: ["Dual-Motor e-AWD (0-60 in 3.4s)", "800V Ultra-Fast Charging (10-80% in 18 mins)", "V2L Vehicle-to-Load Power Outlets"],
        features: ["Dual 12.3-inch curved panoramic display cockpit", "Augmented Reality Head-Up Display (AR-HUD)", "Highway Driving Assist 2 (HDA2) ADAS Suite"],
        accent: "border-cyan-500/50 shadow-cyan-500/20"
      },
      {
        id: "ev9-flagship",
        name: "Kia EV9 (Flagship 3-Row SUV)",
        tagline: "Ultra-Luxury All-Electric SUV with Swivel Lounge Seats",
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop",
        price: "$54,900", mpge: 102, maint: 310, warranty: "10-Yr / 100k-Mi EV Battery",
        badges: ["Level 3 Autonomous Ready (LIDAR)", "Digital Key 2.0 Touchless Entry", "Over-The-Air (OTA) System Updates"],
        features: ["Digital Tiger Face with Star-Map LED Projection", "VIP 2nd-Row Captain Chairs with Power Footrests", "304 Miles Target All-Electric Range (EPA)"],
        accent: "border-purple-500/50 shadow-purple-500/20"
      },
      {
        id: "ev3-concept",
        name: "Kia EV3 / Concept EV4",
        tagline: "Next-Gen Compact Electric Fastback & Urban Crossover",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop",
        price: "$34,900", mpge: 125, maint: 240, warranty: "10-Yr / 100k-Mi EV Battery",
        badges: ["Next-Gen Bio-Polymer Eco Interior", "AI Assistant Voice Control & ChatGPT Integration", "300+ Miles Urban Range Target"],
        features: ["Minimalist floating center console & sliding table", "Automated Remote Smart Parking Assist 2", "Sustainable recycled ocean plastic trim accents"],
        accent: "border-pink-500/50 shadow-pink-500/20"
      },
      {
        id: "stinger-tribute",
        name: "Kia Stinger GT Tribute Edition",
        tagline: "368 HP Twin-Turbo V6 Grand Tourer Legend",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
        price: "$53,390", mpge: 25, maint: 460, warranty: "10-Yr / 100k-Mi Powertrain",
        badges: ["3.3L Twin-Turbo V6 (368 HP / 376 lb-ft)", "Brembo Brakes & Mechanical Limited Slip Differential", "Exclusive Moonscape Matte Gray Paint"],
        features: ["Terracotta Brown Nappa Leather with GT Custom Stitching", "Launch Control & Electronic Variable Exhaust Valve", "Electronically Controlled Suspension Tuning"],
        accent: "border-cyan-400/50 shadow-cyan-400/20"
      }
    ];

    const MODULE_B_VEHICLES = [
      {
        id: "seltos-value",
        name: "Kia Seltos (Smart Value Edition)",
        tagline: "Rugged Versatility & Low Total Cost of Ownership",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop",
        price: "$24,490", mpg: 34, maint: 390, warranty: "10-Yr / 100k-Mi Powertrain",
        badges: ["Segment-Best 34 MPG Highway", "Smartstream Engine Longevity Tuning", "Lowest-in-Class Maintenance Cost Index"],
        features: ["High-Tensile Advanced Steel Crash Cage", "6 Standard Airbags & Electronic Stability Control", "10.25-inch Touchscreen with Apple CarPlay"],
        accent: "border-emerald-500/50 shadow-emerald-500/20"
      },
      {
        id: "sportage-hybrid",
        name: "Kia Sportage Turbo-Hybrid",
        tagline: "Maximum Family Space with 43 MPG Combined Efficiency",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop",
        price: "$28,590", mpg: 43, maint: 340, warranty: "10-Yr / 100k-Mi Powertrain",
        badges: ["10-Year / 100,000-Mile Powertrain Warranty", "Top Resale Value Retainer in Class", "5-Star Overall Safety Profile"],
        features: ["Turbo-Hybrid Powertrain (227 Net HP)", "Best-in-Class 2nd & 3rd Row Legroom", "Smart Power Tailgate & Drive Wise Safety"],
        accent: "border-amber-500/50 shadow-amber-500/20"
      },
      {
        id: "carens-carnival",
        name: "Kia Carens / Carnival MPV",
        tagline: "Premium Multi-Utility Vehicle with VIP Slide-Flex Seating",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1200&auto=format&fit=crop",
        price: "$33,600", mpg: 26, maint: 410, warranty: "10-Yr / 100k-Mi Powertrain",
        badges: ["Best-in-Class 145.1 cu ft Cargo Capacity", "Dual Power Sliding Doors & Dual Sunroofs", "Rear Passenger Voice Control"],
        features: ["Slide-Flex 2nd-Row Seating & VIP Lounge Option", "12.3-inch Dual Panoramic Displays", "Standard Safe Exit Assist"],
        accent: "border-teal-500/50 shadow-teal-500/20"
      },
      {
        id: "telluride-flagship",
        name: "Kia Telluride (Award-Winning SUV)",
        tagline: "The Benchmark 3-Row Family SUV with 5,500 lbs Towing",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop",
        price: "$36,190", mpg: 26, maint: 430, warranty: "10-Yr / 100k-Mi Powertrain",
        badges: ["3.8L V6 Engine (291 HP / 5,500 lbs Towing)", "Kelly Blue Book #1 Best Buy Award Winner", "All-Wheel Drive with Lock & Snow Mode"],
        features: ["Nappa Leather Seating with Heated & Ventilated Rows", "Head-Up Display & Surround View Monitor", "Self-Leveling Rear Suspension"],
        accent: "border-emerald-400/50 shadow-emerald-400/20"
      }
    ];

    function App() {
      const [activePage, setActivePage] = useState('home'); // 'home' | 'about' | 'moduleA' | 'moduleB' | 'testdrive'
      const [activeModule, setActiveModule] = useState('moduleA'); // 'moduleA' | 'moduleB'
      const [activeCalcCar, setActiveCalcCar] = useState(null);
      const [calcMiles, setCalcMiles] = useState(40);
      const [calcYears, setCalcYears] = useState(5);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [testDriveSubmitted, setTestDriveSubmitted] = useState(false);

      // Form State
      const [formData, setFormData] = useState({ name: '', email: '', car: 'Kia EV6 GT', date: '2026-08-20', time: '10:00 AM' });

      const handleTestDriveSubmit = (e) => {
        e.preventDefault();
        setTestDriveSubmitted(true);
        try { confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } }); } catch(err){}
      };

      return (
        <div className="min-h-screen flex flex-col relative">
          
          {/* Glass Navbar */}
          <header className="sticky top-0 z-50 glass-nav">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
              <div onClick={() => setActivePage('home')} className="flex items-center gap-3 cursor-pointer">
                <div className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-heading font-black text-xl px-4 py-1.5 rounded-xl tracking-[0.25em] shadow-lg shadow-cyan-500/20">
                  KIA
                </div>
                <div className="hidden sm:block border-l border-slate-700 pl-3">
                  <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase block">Next-Gen Mobility</span>
                  <span className="text-[10px] text-slate-400 font-medium">Automotive Excellence</span>
                </div>
              </div>

              <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-extrabold text-slate-300">
                <button onClick={() => setActivePage('home')} className={`hover:text-cyan-400 transition-colors ${activePage === 'home' ? 'text-cyan-400 font-black border-b-2 border-cyan-400 pb-1' : ''}`}>
                  🏠 Home
                </button>
                <button onClick={() => setActivePage('about')} className={`hover:text-purple-400 transition-colors ${activePage === 'about' ? 'text-purple-400 font-black border-b-2 border-purple-400 pb-1' : ''}`}>
                  ℹ️ About Us
                </button>
                <button onClick={() => { setActivePage('moduleA'); setActiveModule('moduleA'); }} className={`hover:text-cyan-400 transition-colors ${activePage === 'moduleA' ? 'text-cyan-400 font-black border-b-2 border-cyan-400 pb-1' : ''}`}>
                  ⚡ Module A (Tech)
                </button>
                <button onClick={() => { setActivePage('moduleB'); setActiveModule('moduleB'); }} className={`hover:text-emerald-400 transition-colors ${activePage === 'moduleB' ? 'text-emerald-400 font-black border-b-2 border-emerald-400 pb-1' : ''}`}>
                  🛡️ Module B (Value)
                </button>
                <button onClick={() => setActivePage('testdrive')} className={`hover:text-pink-400 transition-colors ${activePage === 'testdrive' ? 'text-pink-400 font-black border-b-2 border-pink-400 pb-1' : ''}`}>
                  🏎️ Virtual Test Drive
                </button>
              </nav>

              <button onClick={() => setActivePage('testdrive')} className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg shadow-cyan-500/25 transition-all">
                Virtual Test Drive
              </button>
            </div>
          </header>

          {/* Hero Section */}
          {(activePage === 'home' || activePage === 'moduleA' || activePage === 'moduleB') && (
            <section className="relative pt-12 pb-16 text-center max-w-5xl mx-auto px-4">
              <div className="inline-flex items-center p-1.5 rounded-full bg-slate-900/90 border border-slate-700 shadow-2xl mb-8">
                <button
                  onClick={() => { setActiveModule('moduleA'); setActivePage('moduleA'); }}
                  className={`px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all ${activeModule === 'moduleA' ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/30' : 'text-slate-400'}`}
                >
                  ⚡ INNOVATION & STYLE (Tech Focus)
                </button>
                <button
                  onClick={() => { setActiveModule('moduleB'); setActivePage('moduleB'); }}
                  className={`px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all ${activeModule === 'moduleB' ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30' : 'text-slate-400'}`}
                >
                  🛡️ VALUE & RELIABILITY (10-Yr Warranty)
                </button>
              </div>

              <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight mb-4">
                {activeModule === 'moduleA' ? 'Engineered for Tomorrow: Intelligent Tech, Bold Aesthetics.' : 'Confidence in Every Mile: Unrivaled Value, Long-Term Reliability.'}
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
                {activeModule === 'moduleA' ? 'Experience 800V ultra-fast charging, Level 3 Autonomous readiness, dual panoramic displays, and V2L bi-directional power.' : 'Backed by an industry-leading 10-Year / 100,000-Mile Warranty, segment-best fuel economy, and 5-Star safety.'}
              </p>
            </section>
          )}

          {/* Main Content Router */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full space-y-16">
            
            {/* ABOUT US PAGE */}
            {activePage === 'about' && (
              <div className="space-y-12 py-8">
                <div className="text-center max-w-3xl mx-auto">
                  <span className="text-xs font-black text-purple-400 uppercase tracking-widest bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/30">Kantar Research & Kia Insight</span>
                  <h1 className="font-heading font-black text-4xl sm:text-5xl text-white mt-4">About Kia Next-Gen Mobility</h1>
                  <p className="text-slate-300 mt-3">Bridging cutting-edge automotive technology with long-term owner value.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="glass-card rounded-3xl p-8 border border-cyan-500/30">
                    <h3 className="font-heading font-black text-2xl text-white mb-3">Module A: Innovation & Style</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">Targeting tech-forward buyers who prioritize electric performance, Level 3 autonomous readiness, ultra-fast 800V charging, and AR cockpits.</p>
                    <ul className="space-y-2 text-xs font-semibold text-cyan-400">
                      <li>✔ Dedicated E-GMP All-Electric Architecture</li>
                      <li>✔ Over-The-Air (OTA) Cloud Ecosystem</li>
                      <li>✔ Highway Driving Assist 2 (HDA2) Sensor Suite</li>
                    </ul>
                  </div>

                  <div className="glass-card rounded-3xl p-8 border border-emerald-500/30">
                    <h3 className="font-heading font-black text-2xl text-white mb-3">Module B: Value & Durability</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">Targeting practical buyers who demand low running costs, high-tensile crash safety, class-leading maintenance economy, and a 10-Year Warranty.</p>
                    <ul className="space-y-2 text-xs font-semibold text-emerald-400">
                      <li>✔ 10-Year / 100,000-Mile Powertrain Warranty</li>
                      <li>✔ 30% Lower Maintenance Index vs Segment Average</li>
                      <li>✔ Nationwide Genuine Parts Network</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* VIRTUAL TEST DRIVE PAGE */}
            {activePage === 'testdrive' && (
              <div className="py-8 max-w-2xl mx-auto">
                {!testDriveSubmitted ? (
                  <div className="glass-card rounded-3xl p-8 border border-purple-500/30">
                    <h2 className="font-heading font-black text-3xl text-white mb-2">Book Virtual or Dealer Test Drive</h2>
                    <p className="text-xs text-slate-400 mb-6">Schedule a 3D virtual cockpit preview or local showroom drive with a Kia Specialist.</p>

                    <form onSubmit={handleTestDriveSubmit} className="space-y-4">
                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1">Select Model *</label>
                        <select value={formData.car} onChange={e=>setFormData({...formData, car:e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white">
                          {[...MODULE_A_VEHICLES, ...MODULE_B_VEHICLES].map(c => <option key={c.id} value={c.name}>{c.name} ({c.price})</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1">Full Name *</label>
                        <input type="text" required placeholder="Sahith Chaganti" value={formData.name} onChange={e=>setFormData({...formData, name:e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1">Email Address *</label>
                        <input type="email" required placeholder="sahith@example.com" value={formData.email} onChange={e=>setFormData({...formData, email:e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white" />
                      </div>
                      <button type="submit" className="w-full py-3.5 rounded-xl font-black text-sm text-white bg-gradient-to-r from-cyan-500 to-purple-600">
                        Confirm Reservation
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="glass-card rounded-3xl p-10 text-center border border-emerald-500/40 space-y-4">
                    <h2 className="font-heading font-black text-3xl text-emerald-400">🎉 Test Drive Confirmed!</h2>
                    <p className="text-sm text-slate-300">Thank you <strong>{formData.name}</strong>. Reservation for <strong>{formData.car}</strong> sent to <strong>{formData.email}</strong>.</p>
                    <button onClick={()=>setTestDriveSubmitted(false)} className="px-6 py-2 rounded-full bg-slate-800 text-xs font-bold text-slate-200">Book Another</button>
                  </div>
                )}
              </div>
            )}

            {/* MODULE A (TECH) VEHICLES */}
            {((activePage === 'home' && activeModule === 'moduleA') || activePage === 'moduleA') && (
              <div className="space-y-10">
                <div className="text-center">
                  <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">Module A: Tech & Innovation Portfolio (4 Models)</h2>
                  <p className="text-slate-400 text-sm mt-1">Each car includes its own dedicated Total Cost of Ownership calculator.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {MODULE_A_VEHICLES.map(car => (
                    <div key={car.id} className={`glass-card rounded-3xl overflow-hidden border ${car.accent} p-6 flex flex-col justify-between`}>
                      <div>
                        <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-2xl mb-4" />
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-heading font-extrabold text-xl text-white">{car.name}</h3>
                          <span className="text-xs font-black text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">{car.price}</span>
                        </div>
                        <p className="text-xs text-cyan-300 font-semibold mb-4">{car.tagline}</p>
                        <div className="space-y-2 text-xs text-slate-300 mb-6">
                          {car.badges.map((b,i) => <div key={i} className="bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">⚡ {b}</div>)}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <button onClick={() => setActiveCalcCar(car)} className="w-full py-2.5 rounded-xl font-bold text-xs text-cyan-300 bg-cyan-500/10 border border-cyan-500/30">
                          🧮 Calculate TCO Savings for {car.name}
                        </button>
                        <button onClick={() => setActivePage('testdrive')} className="w-full py-3 rounded-xl font-extrabold text-xs text-white bg-gradient-to-r from-cyan-500 to-purple-600">
                          Book Test Drive
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MODULE B (VALUE) VEHICLES */}
            {((activePage === 'home' && activeModule === 'moduleB') || activePage === 'moduleB') && (
              <div className="space-y-10">
                <div className="text-center">
                  <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">Module B: Value & Durability Portfolio (4 Models)</h2>
                  <p className="text-slate-400 text-sm mt-1">Backed by 10-Year Warranty & Segment-Best Maintenance Index.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {MODULE_B_VEHICLES.map(car => (
                    <div key={car.id} className={`glass-card rounded-3xl overflow-hidden border ${car.accent} p-6 flex flex-col justify-between`}>
                      <div>
                        <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-2xl mb-4" />
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-heading font-extrabold text-xl text-white">{car.name}</h3>
                          <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">{car.price}</span>
                        </div>
                        <p className="text-xs text-emerald-300 font-semibold mb-4">{car.tagline}</p>
                        <div className="space-y-2 text-xs text-slate-300 mb-6">
                          {car.badges.map((b,i) => <div key={i} className="bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">🛡️ {b}</div>)}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <button onClick={() => setActiveCalcCar(car)} className="w-full py-2.5 rounded-xl font-bold text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/30">
                          🧮 Calculate TCO Savings for {car.name}
                        </button>
                        <button onClick={() => setActivePage('testdrive')} className="w-full py-3 rounded-xl font-extrabold text-xs text-white bg-gradient-to-r from-emerald-500 to-teal-600">
                          Download 10-Yr Warranty Packet
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </main>

          {/* Car-Specific Calculator Drawer Modal */}
          {activeCalcCar && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <div className="glass-card max-w-lg w-full rounded-3xl p-6 border border-cyan-500/40 relative">
                <button onClick={() => setActiveCalcCar(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white">✕</button>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">Vehicle TCO Calculator</span>
                <h3 className="font-heading font-black text-2xl text-white">{activeCalcCar.name}</h3>
                <p className="text-xs text-slate-400 mb-4">Base Price: {activeCalcCar.price}</p>

                <div className="space-y-4 bg-slate-900 p-4 rounded-2xl border border-slate-800 mb-6">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-300 mb-1">
                      <span>Daily Commute:</span>
                      <span className="text-cyan-400">{calcMiles} miles / day</span>
                    </div>
                    <input type="range" min="10" max="120" step="5" value={calcMiles} onChange={e=>setCalcMiles(Number(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none accent-cyan-400" />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-300 mb-1">
                      <span>Ownership Duration:</span>
                      <span className="text-cyan-400">{calcYears} Years</span>
                    </div>
                    <input type="range" min="3" max="7" step="1" value={calcYears} onChange={e=>setCalcYears(Number(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none accent-cyan-400" />
                  </div>

                  <div className="pt-2 border-t border-slate-800 text-xs space-y-1">
                    <div className="flex justify-between text-slate-300">
                      <span>Est. Annual Fuel/Energy:</span>
                      <span className="font-bold text-white">${Math.round(((calcMiles*365)/(activeCalcCar.mpge || activeCalcCar.mpg))*3.60)}/yr</span>
                    </div>
                    <div className="flex justify-between text-cyan-400 font-bold pt-2 border-t border-slate-800 text-sm">
                      <span>Est. Total {calcYears}-Yr Savings:</span>
                      <span>${Math.round((((calcMiles*365)/25)*3.60 - ((calcMiles*365)/(activeCalcCar.mpge || activeCalcCar.mpg))*3.60 + (480 - activeCalcCar.maint))*calcYears).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <button onClick={() => { setActiveCalcCar(null); setActivePage('testdrive'); }} className="w-full py-3 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-cyan-500 to-purple-600">
                  Book Virtual Test Drive for {activeCalcCar.name}
                </button>
              </div>
            </div>
          )}

          {/* Footer */}
          <footer className="border-t border-slate-800 bg-obsidian-900 py-10 mt-20 text-center text-xs text-slate-500">
            <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>© 2026 Kia America, Inc. & Kantar Research. All rights reserved.</div>
              <div className="flex gap-4">
                <a href="#" onClick={() => setActivePage('about')} className="hover:text-slate-300">About Us</a>
                <a href="#" onClick={() => setActivePage('testdrive')} className="hover:text-slate-300">Virtual Test Drive</a>
              </div>
            </div>
          </footer>

        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  </script>
</body>
</html>
"""

# Render Full Width High-Performance Interactive Application inside Streamlit
components.html(html_app, height=1600, scrolling=True)
