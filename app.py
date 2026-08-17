import streamlit as st
import streamlit.components.v1 as components

# ---------------------------------------------------------
# Page Configuration - Full Width & Collapsed Streamlit Chrome
# ---------------------------------------------------------
st.set_page_config(
    page_title="KIA MOTORS | Next-Gen Mobility Portfolio",
    page_icon="🚘",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Hide Streamlit Default UI Elements
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
# Embedded Ultra-Vibrant Single-Page Web Application
# ---------------------------------------------------------
html_app = """
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>KIA MOTORS | Next-Gen Mobility Portfolio</title>
  
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
            cyber: {
              dark: '#0A0E1A',
              card: '#121829',
              border: '#1E293B',
              cyan: '#00F2FE',
              violet: '#7000FF',
              pink: '#FF007A',
              emerald: '#00E676',
              gold: '#FFB300'
            }
          }
        }
      }
    }
  </script>
  
  <!-- React & Babel CDN -->
  <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js"></script>
  
  <style>
    body { background-color: #0A0E1A; color: #F8FAFC; font-family: 'Plus Jakarta Sans', sans-serif; }
    .glass-card { background: rgba(18, 24, 41, 0.82); backdrop-filter: blur(25px); border: 1.5px solid rgba(255, 255, 255, 0.1); }
    .glass-nav { background: rgba(10, 14, 26, 0.92); backdrop-filter: blur(20px); border-bottom: 1.5px solid rgba(0, 242, 254, 0.2); }
    .neon-text-gradient { background: linear-gradient(135deg, #00F2FE 0%, #7000FF 50%, #FF007A 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .neon-border-glow { box-shadow: 0 0 25px rgba(0, 242, 254, 0.3); }
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #0A0E1A; }
    ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #00F2FE, #7000FF); border-radius: 4px; }
  </style>
</head>
<body class="bg-cyber-dark text-slate-100 min-h-screen antialiased">
  <div id="root"></div>

  <script type="text/babel">
    const { useState } = React;

    const MODULE_A_VEHICLES = [
      {
        id: "ev6-gt",
        name: "Kia EV6 GT",
        tagline: "576 HP All-Electric High-Performance Crossover",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop",
        price: "$61,600", mpge: 110, maint: 280, warranty: "10-Yr / 100k-Mi EV Battery",
        badges: ["Dual-Motor e-AWD (0-60 in 3.4s)", "800V Ultra-Fast Charging (10-80% in 18 mins)", "V2L Vehicle-to-Load Power Outlets"],
        features: ["Dual 12.3-inch curved panoramic display cockpit", "Augmented Reality Head-Up Display (AR-HUD)", "Highway Driving Assist 2 (HDA2) ADAS Suite"],
        accent: "border-cyan-400/50 shadow-cyan-500/30"
      },
      {
        id: "ev9-flagship",
        name: "Kia EV9 (Flagship 3-Row SUV)",
        tagline: "Ultra-Luxury All-Electric SUV with Swivel Lounge Seats",
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop",
        price: "$54,900", mpge: 102, maint: 310, warranty: "10-Yr / 100k-Mi EV Battery",
        badges: ["Level 3 Autonomous Ready (LIDAR)", "Digital Key 2.0 Touchless Entry", "Over-The-Air (OTA) System Updates"],
        features: ["Digital Tiger Face with Star-Map LED Projection", "VIP 2nd-Row Captain Chairs with Power Footrests", "304 Miles Target All-Electric Range (EPA)"],
        accent: "border-purple-500/50 shadow-purple-500/30"
      },
      {
        id: "ev3-concept",
        name: "Kia EV3 / Concept EV4",
        tagline: "Next-Gen Compact Electric Fastback & Urban Crossover",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop",
        price: "$34,900", mpge: 125, maint: 240, warranty: "10-Yr / 100k-Mi EV Battery",
        badges: ["Next-Gen Bio-Polymer Eco Interior", "AI Assistant Voice Control & ChatGPT Integration", "300+ Miles Urban Range Target"],
        features: ["Minimalist floating center console & sliding table", "Automated Remote Smart Parking Assist 2", "Sustainable recycled ocean plastic trim accents"],
        accent: "border-pink-500/50 shadow-pink-500/30"
      },
      {
        id: "stinger-tribute",
        name: "Kia Stinger GT Tribute Edition",
        tagline: "368 HP Twin-Turbo V6 Grand Tourer Legend",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
        price: "$53,390", mpge: 25, maint: 460, warranty: "10-Yr / 100k-Mi Powertrain",
        badges: ["3.3L Twin-Turbo V6 (368 HP / 376 lb-ft)", "Brembo Brakes & Mechanical Limited Slip Differential", "Exclusive Moonscape Matte Gray Paint"],
        features: ["Terracotta Brown Nappa Leather with GT Custom Stitching", "Launch Control & Electronic Variable Exhaust Valve", "Electronically Controlled Suspension Tuning"],
        accent: "border-cyan-400/50 shadow-cyan-400/30"
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
        accent: "border-emerald-500/50 shadow-emerald-500/30"
      },
      {
        id: "sportage-hybrid",
        name: "Kia Sportage Turbo-Hybrid",
        tagline: "Maximum Family Space with 43 MPG Combined Efficiency",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop",
        price: "$28,590", mpg: 43, maint: 340, warranty: "10-Yr / 100k-Mi Powertrain",
        badges: ["10-Year / 100,000-Mile Powertrain Warranty", "Top Resale Value Retainer in Class", "5-Star Overall Safety Profile"],
        features: ["Turbo-Hybrid Powertrain (227 Net HP)", "Best-in-Class 2nd & 3rd Row Legroom", "Smart Power Tailgate & Drive Wise Safety"],
        accent: "border-gold-500/50 shadow-gold-500/30"
      },
      {
        id: "carens-carnival",
        name: "Kia Carens / Carnival MPV",
        tagline: "Premium Multi-Utility Vehicle with VIP Slide-Flex Seating",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1200&auto=format&fit=crop",
        price: "$33,600", mpg: 26, maint: 410, warranty: "10-Yr / 100k-Mi Powertrain",
        badges: ["Best-in-Class 145.1 cu ft Cargo Capacity", "Dual Power Sliding Doors & Dual Sunroofs", "Rear Passenger Voice Control"],
        features: ["Slide-Flex 2nd-Row Seating & VIP Lounge Option", "12.3-inch Dual Panoramic Displays", "Standard Safe Exit Assist"],
        accent: "border-cyan-500/50 shadow-cyan-500/30"
      },
      {
        id: "telluride-flagship",
        name: "Kia Telluride (Award-Winning SUV)",
        tagline: "The Benchmark 3-Row Family SUV with 5,500 lbs Towing",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop",
        price: "$36,190", mpg: 26, maint: 430, warranty: "10-Yr / 100k-Mi Powertrain",
        badges: ["3.8L V6 Engine (291 HP / 5,500 lbs Towing)", "Kelly Blue Book #1 Best Buy Award Winner", "All-Wheel Drive with Lock & Snow Mode"],
        features: ["Nappa Leather Seating with Heated & Ventilated Rows", "Head-Up Display & Surround View Monitor", "Self-Leveling Rear Suspension"],
        accent: "border-emerald-400/50 shadow-emerald-400/30"
      }
    ];

    function App() {
      const [activePage, setActivePage] = useState('home'); 
      const [activeModule, setActiveModule] = useState('moduleA');
      const [activeCalcCar, setActiveCalcCar] = useState(null);
      const [calcMiles, setCalcMiles] = useState(40);
      const [calcYears, setCalcYears] = useState(5);
      const [testDriveSubmitted, setTestDriveSubmitted] = useState(false);
      const [formData, setFormData] = useState({ name: '', email: '', car: 'Kia EV6 GT' });

      const handleTestDriveSubmit = (e) => {
        e.preventDefault();
        setTestDriveSubmitted(true);
        try { confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } }); } catch(err){}
      };

      return (
        <div className="min-h-screen flex flex-col relative">
          
          {/* Cyber Glass Navbar */}
          <header className="sticky top-0 z-50 glass-nav">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
              <div onClick={() => setActivePage('home')} className="flex items-center gap-3 cursor-pointer">
                <div className="bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-500 text-black font-heading font-black text-xl px-4 py-1.5 rounded-xl tracking-[0.25em] shadow-lg shadow-cyan-500/30">
                  KIA
                </div>
                <div className="hidden sm:block border-l border-slate-700 pl-3">
                  <span className="text-xs font-black text-cyan-400 tracking-widest uppercase block">Next-Gen Mobility</span>
                  <span className="text-[10px] text-slate-400 font-medium">Kantar Perception Research</span>
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

              <button onClick={() => setActivePage('testdrive')} className="bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-500 hover:scale-105 text-black font-black text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-lg shadow-cyan-500/30 transition-all">
                Virtual Test Drive
              </button>
            </div>
          </header>

          {/* MAIN HOME PAGE WITH DETAILED WELCOME PORTFOLIO MESSAGE */}
          {activePage === 'home' && (
            <div className="space-y-16 py-10 max-w-7xl mx-auto px-4">
              
              {/* Detailed Welcome Portfolio Hero Section */}
              <div className="glass-card rounded-3xl p-8 sm:p-14 border border-cyan-500/30 relative overflow-hidden text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 uppercase tracking-widest mb-4">
                  ✨ Welcome to Kia&apos;s Next-Gen Mobility Portfolio
                </div>
                
                <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight mb-6">
                  Welcome to Our <span className="neon-text-gradient">Next-Gen Automotive Portfolio</span>
                </h1>
                
                <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                  Driven by Kantar Research insights, our portfolio is engineered around two distinct consumer perception pillars: 
                  <strong> Innovation & Futuristic Tech (Module A)</strong> vs. <strong>Unrivaled Value & Long-Term Reliability (Module B)</strong>. 
                  Whether you seek 800V ultra-fast electric charging or a 10-Year Powertrain Warranty guarantee, explore our full 8-vehicle lineup below.
                </p>

                {/* Hero Toggle Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => { setActiveModule('moduleA'); setActivePage('moduleA'); }}
                    className="px-8 py-4 rounded-full font-black text-sm text-black bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform"
                  >
                    ⚡ Explore Module A: Tech & Innovation (4 Cars)
                  </button>
                  <button
                    onClick={() => { setActiveModule('moduleB'); setActivePage('moduleB'); }}
                    className="px-8 py-4 rounded-full font-black text-sm text-black bg-gradient-to-r from-emerald-400 to-teal-400 shadow-lg shadow-emerald-500/30 hover:scale-105 transition-transform"
                  >
                    🛡️ Explore Module B: Value & Reliability (4 Cars)
                  </button>
                </div>
              </div>

              {/* Detailed Portfolio Highlights Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card rounded-3xl p-8 border border-cyan-500/30 hover:border-cyan-400 transition-all">
                  <span className="text-xs font-black text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 uppercase tracking-wider">Module A Segment</span>
                  <h3 className="font-heading font-black text-2xl text-white mt-3 mb-2">The Apex of Innovation & Design</h3>
                  <p className="text-slate-300 text-sm mb-4">Featuring Kia EV6 GT, Kia EV9, Kia EV3/EV4, and Stinger GT Tribute. Equipped with Level 3 autonomous readiness, AR-HUD, and 800V charging.</p>
                  <button onClick={() => { setActiveModule('moduleA'); setActivePage('moduleA'); }} className="text-xs font-black text-cyan-400 hover:text-cyan-300">View All 4 Tech Models ➔</button>
                </div>

                <div className="glass-card rounded-3xl p-8 border border-emerald-500/30 hover:border-emerald-400 transition-all">
                  <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 uppercase tracking-wider">Module B Segment</span>
                  <h3 className="font-heading font-black text-2xl text-white mt-3 mb-2">The Masterclass in Value & Durability</h3>
                  <p className="text-slate-300 text-sm mb-4">Featuring Kia Seltos, Sportage Hybrid, Carens MPV, and Telluride SUV. Backed by 10-Year / 100,000-Mile warranty and low maintenance index.</p>
                  <button onClick={() => { setActiveModule('moduleB'); setActivePage('moduleB'); }} className="text-xs font-black text-emerald-400 hover:text-emerald-300">View All 4 Value Models ➔</button>
                </div>
              </div>

            </div>
          )}

          {/* ABOUT US PAGE */}
          {activePage === 'about' && (
            <div className="space-y-12 py-10 max-w-5xl mx-auto px-4">
              <div className="text-center">
                <span className="text-xs font-black text-purple-400 uppercase tracking-widest bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/30">Kantar Research & Kia Insight</span>
                <h1 className="font-heading font-black text-4xl sm:text-5xl text-white mt-4">About Kia Next-Gen Mobility</h1>
                <p className="text-slate-300 mt-3 text-base">Bridging cutting-edge automotive technology with long-term owner value.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card rounded-3xl p-8 border border-cyan-500/30">
                  <h3 className="font-heading font-black text-2xl text-white mb-3">Module A: Innovation Focus</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">Targeting tech-forward buyers prioritizing electric performance, Level 3 autonomy, ultra-fast 800V charging, and AR cockpits.</p>
                </div>
                <div className="glass-card rounded-3xl p-8 border border-emerald-500/30">
                  <h3 className="font-heading font-black text-2xl text-white mb-3">Module B: Value Focus</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">Targeting practical buyers demanding low running costs, high-tensile safety, class-leading maintenance economy, and a 10-Year Warranty.</p>
                </div>
              </div>
            </div>
          )}

          {/* VIRTUAL TEST DRIVE PAGE */}
          {activePage === 'testdrive' && (
            <div className="py-10 max-w-2xl mx-auto px-4">
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
                    <button type="submit" className="w-full py-3.5 rounded-xl font-black text-sm text-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
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
          {activePage === 'moduleA' && (
            <div className="space-y-10 max-w-7xl mx-auto px-4 py-6">
              <div className="text-center">
                <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">Module A: Tech & Innovation Portfolio (4 Models)</h2>
                <p className="text-slate-400 text-sm mt-1">Each car includes its own dedicated Total Cost of Ownership calculator.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {MODULE_A_VEHICLES.map(car => (
                  <div key={car.id} className={`glass-card rounded-3xl overflow-hidden border ${car.accent} p-6 flex flex-col justify-between`}>
                    <div>
                      <img src={car.image} alt={car.name} className="w-full h-52 object-cover rounded-2xl mb-4" />
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
                      <button onClick={() => setActivePage('testdrive')} className="w-full py-3 rounded-xl font-extrabold text-xs text-black bg-gradient-to-r from-cyan-400 to-purple-500">
                        Book Test Drive
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODULE B (VALUE) VEHICLES */}
          {activePage === 'moduleB' && (
            <div className="space-y-10 max-w-7xl mx-auto px-4 py-6">
              <div className="text-center">
                <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">Module B: Value & Durability Portfolio (4 Models)</h2>
                <p className="text-slate-400 text-sm mt-1">Backed by 10-Year Warranty & Segment-Best Maintenance Index.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {MODULE_B_VEHICLES.map(car => (
                  <div key={car.id} className={`glass-card rounded-3xl overflow-hidden border ${car.accent} p-6 flex flex-col justify-between`}>
                    <div>
                      <img src={car.image} alt={car.name} className="w-full h-52 object-cover rounded-2xl mb-4" />
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
                      <button onClick={() => setActivePage('testdrive')} className="w-full py-3 rounded-xl font-extrabold text-xs text-black bg-gradient-to-r from-emerald-400 to-teal-400">
                        Download 10-Yr Warranty Packet
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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

                <button onClick={() => { setActiveCalcCar(null); setActivePage('testdrive'); }} className="w-full py-3 rounded-xl font-extrabold text-sm text-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  Book Virtual Test Drive for {activeCalcCar.name}
                </button>
              </div>
            </div>
          )}

          {/* Footer */}
          <footer className="border-t border-slate-800 bg-cyber-dark py-10 mt-20 text-center text-xs text-slate-500">
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
components.html(html_app, height=1700, scrolling=True)
