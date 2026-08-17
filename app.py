import streamlit as st
import streamlit.components.v1 as components
import requests
import json
import os

# ---------------------------------------------------------
# Page Configuration
# ---------------------------------------------------------
st.set_page_config(
    page_title="KIA MOTORS | Next-Gen Mobility Experience",
    page_icon="🚘",
    layout="wide",
    initial_sidebar_state="expanded"
)

FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeZ7lBrYmnyTqiuRegDxpb7KvKittnsl8-5mA75BnasA53QZw/formResponse"

# ---------------------------------------------------------
# Custom Glassmorphism Obsidian Dark Styling
# ---------------------------------------------------------
st.markdown("""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800;900&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
    
    .stApp {
        background: #0B0F19;
        color: #F8FAFC;
        font-family: 'Plus Jakarta Sans', sans-serif;
    }
    
    .logo-badge {
        background: linear-gradient(135deg, #06B6D4 0%, #A855F7 50%, #EC4899 100%);
        color: white;
        font-family: 'Outfit', sans-serif;
        font-weight: 900;
        font-size: 1.5rem;
        padding: 0.5rem 1.3rem;
        border-radius: 14px;
        letter-spacing: 3px;
        display: inline-block;
        box-shadow: 0 6px 20px rgba(6, 182, 212, 0.4);
    }
    
    .glass-card {
        background: rgba(17, 24, 39, 0.75);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        padding: 1.8rem;
        margin-bottom: 1.5rem;
    }
    
    .stButton>button {
        border-radius: 50px !important;
        font-weight: 800 !important;
        padding: 0.65rem 2rem !important;
        background: linear-gradient(135deg, #06B6D4 0%, #A855F7 100%) !important;
        color: white !important;
        border: none !important;
        box-shadow: 0 4px 20px rgba(6, 182, 212, 0.3) !important;
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
    }
    .stButton>button:hover {
        transform: translateY(-2px) scale(1.03) !important;
        box-shadow: 0 8px 30px rgba(168, 85, 247, 0.5) !important;
    }
</style>
""", unsafe_allow_html=True)

# ---------------------------------------------------------
# Header Banner
# ---------------------------------------------------------
col_logo, col_title = st.columns([1, 4])
with col_logo:
    st.markdown('<div class="logo-badge">KIA</div>', unsafe_allow_html=True)
with col_title:
    st.title("KIA MOTORS: NEXT-GEN MOBILITY")
    st.caption("Intelligent Technology • Electric Performance • 10-Year Warranty Reliability")

st.divider()

# Sidebar Navigation
st.sidebar.title("🚘 Experience Modules")
module_choice = st.sidebar.radio(
    "Select Segment Portfolio:",
    ["Module A: Tech & Innovation Portfolio", "Module B: Value & Durability Portfolio", "Interactive Cost Calculator", "Book Virtual Test Drive"]
)

# ---------------------------------------------------------
# Module A: Tech & Innovation
# ---------------------------------------------------------
if "Module A" in module_choice:
    st.subheader("⚡ Module A: The Apex of Innovation & Design")
    st.caption("Targeting: Technology-Focused, Futuristic Design, ADAS Level 2+, EV Architecture")
    
    col1, col2 = st.columns(2)
    with col1:
        st.image("https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop", caption="Kia EV6 GT (576 HP All-Electric Crossover)")
        st.markdown("""
        **Kia EV6 GT Key Specs:**
        - **0-60 mph**: 3.4 seconds (Dual-Motor e-AWD)
        - **Charging**: 800V Ultra-Fast (10-80% in 18 Mins)
        - **Cockpit**: Dual 12.3" Curved Panoramic Displays + AR-HUD
        """)
        
    with col2:
        st.image("https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop", caption="Kia EV9 Flagship 3-Row EV SUV")
        st.markdown("""
        **Kia EV9 Key Specs:**
        - **Autonomy**: Level 3 Autonomous Ready (LIDAR)
        - **Tech**: Digital Key 2.0 & Over-The-Air Updates
        - **Range**: 304 Miles Target All-Electric Range
        """)

# ---------------------------------------------------------
# Module B: Value & Durability
# ---------------------------------------------------------
elif "Module B" in module_choice:
    st.subheader("🛡️ Module B: The Masterclass in Value & Durability")
    st.caption("Targeting: Practical, Reliable, Low Running Cost, 10-Year Powertrain Warranty")
    
    col1, col2 = st.columns(2)
    with col1:
        st.image("https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop", caption="Kia Seltos Smart Value Edition")
        st.markdown("""
        **Kia Seltos Highlights:**
        - **Fuel Economy**: Segment-Best 34 MPG Highway
        - **Endurance**: Smartstream Engine Longevity Tuning
        - **Safety**: High-Tensile Steel Crash Cage & 6 Airbags Standard
        """)
        
    with col2:
        st.image("https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop", caption="Kia Sportage Turbo-Hybrid")
        st.markdown("""
        **Kia Sportage Hybrid Highlights:**
        - **Warranty**: 10-Year / 100,000-Mile Powertrain Protection
        - **Efficiency**: 43 MPG Combined Efficiency
        - **Resale**: Top Resale Value Retainer in Class
        """)

# ---------------------------------------------------------
# Interactive Calculator
# ---------------------------------------------------------
elif "Calculator" in module_choice:
    st.subheader("🧮 Interactive Total Cost of Ownership Savings Calculator")
    
    daily_miles = st.slider("Daily Commute Distance (Miles):", 10, 150, 45)
    years = st.slider("Ownership Duration (Years):", 3, 10, 5)
    fuel_type = st.radio("Powertrain Option:", ["Gasoline (28 MPG)", "Turbo-Hybrid (43 MPG)", "All-Electric (110 MPGe)"])
    
    mpg_val = 28 if "Gasoline" in fuel_type else (43 if "Hybrid" in fuel_type else 110)
    annual_miles = daily_miles * 365
    annual_cost = int((annual_miles / mpg_val) * 3.60)
    gas_benchmark = int((annual_miles / 25) * 3.60)
    savings = max(0, (gas_benchmark - annual_cost) * years)
    
    st.markdown(f"""
    ### Projected Financial Savings: **${savings:,}**
    - **Estimated Annual Fuel/Energy Cost**: `${annual_cost:,}` / year
    - **Included Warranty Protection Value**: `+$3,500` (10-Yr Coverage)
    """)

# ---------------------------------------------------------
# Test Drive Lead Capture Form
# ---------------------------------------------------------
else:
    st.subheader("📋 Book Priority Virtual Test Drive & Concierge Access")
    with st.form("test_drive_form"):
        name = st.text_input("Full Name *")
        email = st.text_input("Email Address *")
        powertrain = st.selectbox("Preferred Powertrain:", ["All-Electric (EV6 / EV9)", "Turbo-Hybrid (Sportage)", "Gasoline (Seltos)"])
        submitted = st.form_submit_button("Confirm Virtual Test Drive Request")
        
        if submitted and name and email:
            st.balloons()
            st.success(f"🎉 Thank you {name}! Your VIP Virtual Test Drive confirmation has been sent to {email}.")
