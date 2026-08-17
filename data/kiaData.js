export const HERO_CONTENT = {
  moduleA: {
    tag: "MODULE A • INNOVATION & STYLE",
    headline: "Engineered for Tomorrow: Intelligent Tech, Bold Aesthetics.",
    subheadline: "Experience 800V ultra-fast charging, Level 3 Autonomous readiness, dual panoramic displays, and V2L bi-directional power.",
    accentGradient: "from-cyan-400 via-purple-500 to-pink-500",
    glowColor: "rgba(6, 182, 212, 0.4)",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  },
  moduleB: {
    tag: "MODULE B • VALUE & RELIABILITY",
    headline: "Confidence in Every Mile: Unrivaled Value, Long-Term Reliability.",
    subheadline: "Backed by an industry-leading 10-Year / 100,000-Mile Powertrain Warranty, segment-best fuel economy, and 5-Star safety rating.",
    accentGradient: "from-emerald-400 via-amber-400 to-teal-300",
    glowColor: "rgba(16, 185, 129, 0.4)",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  }
};

export const MODULE_A_VEHICLES = [
  {
    id: "ev6-gt",
    name: "Kia EV6 GT",
    tagline: "576 HP All-Electric High-Performance Crossover",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop",
    price: "From $61,600",
    badges: [
      "Dual-Motor e-AWD (0-60 in 3.4s)",
      "800V Ultra-Fast Charging (10-80% in 18 mins)",
      "V2L Vehicle-to-Load Power Outlets"
    ],
    features: [
      "Dual 12.3-inch curved panoramic display cockpit",
      "Augmented Reality Head-Up Display (AR-HUD)",
      "Highway Driving Assist 2 (HDA2) ADAS Suite",
      "Meridian 14-Speaker Premium Surround Sound"
    ],
    accent: "border-cyan-500/50 shadow-cyan-500/20"
  },
  {
    id: "ev9-flagship",
    name: "Kia EV9 (Flagship 3-Row SUV)",
    tagline: "Ultra-Luxury All-Electric SUV with Swivel Lounge Seats",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop",
    price: "From $54,900",
    badges: [
      "Level 3 Autonomous Ready (LIDAR)",
      "Digital Key 2.0 Touchless Entry",
      "Over-The-Air (OTA) System Updates"
    ],
    features: [
      "Digital Tiger Face with Star-Map LED Projection",
      "VIP 2nd-Row Captain Chairs with Power Footrests",
      "304 Miles Target All-Electric Range (EPA)",
      "Ultra-High Tensile Steel Frame Architecture"
    ],
    accent: "border-purple-500/50 shadow-purple-500/20"
  }
];

export const MODULE_B_VEHICLES = [
  {
    id: "seltos-value",
    name: "Kia Seltos (Smart Value Edition)",
    tagline: "Rugged Versatility & Low Total Cost of Ownership",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop",
    price: "From $24,490",
    badges: [
      "Segment-Best 34 MPG Highway",
      "Smartstream Engine Longevity Tuning",
      "Lowest-in-Class Maintenance Cost Index"
    ],
    features: [
      "High-Tensile Advanced Steel Crash Cage",
      "6 Standard Airbags & Electronic Stability Control",
      "Accessible Genuine Spare Parts Nationwide Network",
      "10.25-inch Touchscreen with Apple CarPlay & Android Auto"
    ],
    accent: "border-emerald-500/50 shadow-emerald-500/20"
  },
  {
    id: "carens-hybrid",
    name: "Kia Sportage / Carens Hybrid",
    tagline: "Maximum Family Space with 43 MPG Combined Efficiency",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop",
    price: "From $28,590",
    badges: [
      "10-Year / 100,000-Mile Powertrain Warranty",
      "Top Resale Value Retainer in Class",
      "5-Star Overall Safety Profile"
    ],
    features: [
      "Turbo-Hybrid Powertrain (227 Net HP)",
      "Best-in-Class 2nd & 3rd Row Legroom",
      "Smart Power Tailgate & Multi-Zone Climate",
      "Drive Wise Safety Technology Package"
    ],
    accent: "border-amber-500/50 shadow-amber-500/20"
  }
];

export const ADAS_SIMULATOR_DATA = [
  {
    id: "blind-spot",
    title: "Blind-Spot View Monitor (BVM)",
    desc: "Projects live high-definition video feed of adjacent lanes right into your gauge cluster when activating turn signals.",
    icon: "Eye"
  },
  {
    id: "remote-park",
    title: "Remote Smart Parking Assist 2 (RSPA)",
    desc: "Park or pull out of tight parking spaces remotely using your smart key fob while standing outside the vehicle.",
    icon: "Navigation"
  },
  {
    id: "ambient-lighting",
    title: "Dynamic 64-Color Ambient Mood Lighting",
    desc: "Customizable cockpit illumination synchronized with drive modes, speed warnings, and cabin climate controls.",
    icon: "Sparkles"
  },
  {
    id: "hda2",
    title: "Highway Driving Assist 2 (HDA2)",
    desc: "Combines Adaptive Cruise Control with Lane Centering and Automatic Lane Change Assist on highway routes.",
    icon: "ShieldAlert"
  }
];

export const SPEC_MATRIX = [
  {
    metric: "Horsepower / Torque",
    ev6: "576 HP / 545 lb-ft",
    ev9: "379 HP / 516 lb-ft",
    seltos: "195 HP / 195 lb-ft",
    sportage: "227 HP (Hybrid)"
  },
  {
    metric: "Fuel Economy / Range",
    ev6: "Up to 310 Miles (EPA)",
    ev9: "Up to 304 Miles (EPA)",
    seltos: "34 MPG Highway",
    sportage: "43 MPG Combined"
  },
  {
    metric: "Charging / Refuel Speed",
    ev6: "10-80% in 18 Mins (800V DC)",
    ev9: "10-80% in 24 Mins (800V DC)",
    seltos: "5 Mins Gas Refuel",
    sportage: "Fast Hybrid Self-Charge"
  },
  {
    metric: "Warranty Package",
    ev6: "10-Yr / 100k-Mi EV Battery",
    ev9: "10-Yr / 100k-Mi EV Battery",
    seltos: "10-Yr / 100k-Mi Powertrain",
    sportage: "10-Yr / 100k-Mi Hybrid"
  },
  {
    metric: "Autonomous ADAS Rating",
    ev6: "Level 2+ (HDA2)",
    ev9: "Level 3 Ready (LIDAR)",
    seltos: "Level 2 (Drive Wise)",
    sportage: "Level 2 (Drive Wise)"
  },
  {
    metric: "Estimated Annual Maint. Cost",
    ev6: "$280 / Year",
    ev9: "$320 / Year",
    seltos: "$390 / Year",
    sportage: "$340 / Year"
  }
];
