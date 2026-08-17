import streamlit as st
import requests
import json
import random

# ---------------------------------------------------------
# Page Configuration
# ---------------------------------------------------------
st.set_page_config(
    page_title="KIA MOTORS | Next-Gen Mobility",
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
st.sidebar.title("🚘 Experience Navigation")
page = st.sidebar.radio(
    "Select Page:",
    [
        "🏠 Home",
        "ℹ️ About Us",
        "⚡ Module A: Tech & Innovation (4 Vehicles)",
        "🛡️ Module B: Value & Durability (4 Vehicles)",
        "🏎️ Virtual Test Drive Concierge"
    ]
)

# ---------------------------------------------------------
# PAGE 1: HOME
# ---------------------------------------------------------
if "Home" in page:
    st.subheader("Welcome to Kia Next-Gen Mobility")
    st.markdown("""
    Explore our dual product portfolio derived directly from consumer perception clusters:
    - **Module A (Innovation & Style)**: Flagship Electric EVs, Level 3 Autonomous readiness, AR Head-Up Displays.
    - **Module B (Value & Durability)**: Smartstream High-MPG, Turbo-Hybrids, 10-Year / 100,000-Mile Powertrain Warranty.
    """)
    
    col1, col2 = st.columns(2)
    with col1:
        st.info("⚡ **Module A Highlight**\n\nKia EV6 GT (576 HP, 0-60 in 3.4s) & Kia EV9 Flagship 3-Row SUV.")
    with col2:
        st.success("🛡️ **Module B Highlight**\n\nKia Seltos (34 MPG) & Sportage Turbo-Hybrid (43 MPG) backed by 10-Yr Warranty.")

# ---------------------------------------------------------
# PAGE 2: ABOUT US
# ---------------------------------------------------------
elif "About Us" in page:
    st.subheader("ℹ️ About Kia & Kantar Market Research")
    st.markdown("""
    ### Dual Portfolio Philosophy
    Our consumer research study identified two prominent automotive buyer personas:
    1. **Tech-Forward Pioneers**: Seeking electric powertrains, OTA updates, and Level 2+/3 ADAS safety suites.
    2. **Endurance Value Champions**: Demanding low total cost of ownership, reliable spare parts networks, and long warranty coverage.
    
    ### The 10-Year Guarantee
    Every Kia powertrain comes backed by an industry-leading 10-Year / 100,000-Mile Powertrain Warranty.
    """)

# ---------------------------------------------------------
# PAGE 3: MODULE A (TECH & INNOVATION)
# ---------------------------------------------------------
elif "Module A" in page:
    st.subheader("⚡ Module A: The Apex of Innovation & Design")
    st.caption("Featuring 4 Flagship Models + Individual Car Cost Calculators")
    
    cars = [
        {"name": "Kia EV6 GT", "price": "$61,600", "mpge": 110, "maint": 280, "img": "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop", "desc": "576 HP Dual-Motor e-AWD Crossover • 800V Ultra-Fast Charging (10-80% in 18m)"},
        {"name": "Kia EV9 (3-Row SUV)", "price": "$54,900", "mpge": 102, "maint": 310, "img": "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop", "desc": "Level 3 Autonomous Ready • Digital Key 2.0 • 304 Miles Range"},
        {"name": "Kia EV3 / Concept EV4", "price": "$34,900", "mpge": 125, "maint": 240, "img": "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop", "desc": "Next-Gen Urban EV Fastback • ChatGPT AI Assistant • Bio-Polymer Cockpit"},
        {"name": "Kia Stinger GT Tribute", "price": "$53,390", "mpge": 25, "maint": 460, "img": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop", "desc": "3.3L Twin-Turbo V6 (368 HP) • Brembo Brakes • Launch Control"}
    ]
    
    for car in cars:
        with st.expander(f"🏎️ {car['name']} - {car['price']}", expanded=True):
            c1, c2 = st.columns([1, 1])
            with c1:
                st.image(car['img'], caption=car['name'])
            with c2:
                st.write(f"**Description**: {car['desc']}")
                st.write(f"**Base Price**: {car['price']}")
                
                # Dedicated Car Calculator
                miles = st.slider(f"Daily Commute for {car['name']} (Miles):", 10, 120, 40, key=f"sl_{car['name']}")
                years = st.slider(f"Ownership Duration for {car['name']} (Years):", 3, 7, 5, key=f"yr_{car['name']}")
                
                annual_cost = int(((miles * 365) / car['mpge']) * 3.60)
                savings = int(((((miles * 365) / 25) * 3.60) - annual_cost + (480 - car['maint'])) * years)
                
                st.success(f"💰 Estimated {years}-Year Total Savings: **${savings:,}** (Est Energy Cost: ${annual_cost:,}/yr)")

# ---------------------------------------------------------
# PAGE 4: MODULE B (VALUE & DURABILITY)
# ---------------------------------------------------------
elif "Module B" in page:
    st.subheader("🛡️ Module B: Smart Value & Practical Reliability")
    st.caption("Featuring 4 High-Efficiency Models + Individual Car Cost Calculators")
    
    cars_b = [
        {"name": "Kia Seltos (Smart Value)", "price": "$24,490", "mpg": 34, "maint": 390, "img": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop", "desc": "Segment-Best 34 MPG Highway • Smartstream Engine • 6 Standard Airbags"},
        {"name": "Kia Sportage Hybrid", "price": "$28,590", "mpg": 43, "maint": 340, "img": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop", "desc": "43 MPG Combined Efficiency • 227 HP Turbo Hybrid • 10-Yr Powertrain Warranty"},
        {"name": "Kia Carens / Carnival MPV", "price": "$33,600", "mpg": 26, "maint": 410, "img": "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1200&auto=format&fit=crop", "desc": "VIP Lounge Seating • 145 cu ft Cargo • Dual Sunroofs & Power Sliding Doors"},
        {"name": "Kia Telluride Flagship SUV", "price": "$36,190", "mpg": 26, "maint": 430, "img": "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop", "desc": "3.8L V6 (291 HP / 5,500 lbs Towing) • #1 KBB Best Buy • Heated/Ventilated Rows"}
    ]
    
    for car in cars_b:
        with st.expander(f"🛡️ {car['name']} - {car['price']}", expanded=True):
            c1, c2 = st.columns([1, 1])
            with c1:
                st.image(car['img'], caption=car['name'])
            with c2:
                st.write(f"**Description**: {car['desc']}")
                st.write(f"**Base Price**: {car['price']}")
                
                miles = st.slider(f"Daily Commute for {car['name']} (Miles):", 10, 120, 40, key=f"sl_b_{car['name']}")
                years = st.slider(f"Ownership Duration for {car['name']} (Years):", 3, 7, 5, key=f"yr_b_{car['name']}")
                
                annual_cost = int(((miles * 365) / car['mpg']) * 3.60)
                savings = int(((((miles * 365) / 25) * 3.60) - annual_cost + (480 - car['maint'])) * years)
                
                st.success(f"💰 Estimated {years}-Year Total Savings: **${savings:,}** (Est Fuel Cost: ${annual_cost:,}/yr)")

# ---------------------------------------------------------
# PAGE 5: VIRTUAL TEST DRIVE
# ---------------------------------------------------------
else:
    st.subheader("🏎️ Book Priority Virtual & Dealer Test Drive")
    with st.form("test_drive_form_page"):
        car_name = st.selectbox("Select Kia Model:", ["Kia EV6 GT", "Kia EV9", "Kia EV3 / Concept EV4", "Kia Stinger GT", "Kia Seltos", "Kia Sportage Hybrid", "Kia Carens", "Kia Telluride"])
        name = st.text_input("Full Name *")
        email = st.text_input("Email Address *")
        drive_type = st.radio("Test Drive Format:", ["3D Virtual Cockpit Experience (Online)", "Physical Showroom Test Drive"])
        
        submitted = st.form_submit_button("Confirm Test Drive Reservation")
        if submitted and name and email:
            st.balloons()
            st.success(f"🎉 Thank you {name}! Your test drive reservation for {car_name} has been confirmed. Confirmation details sent to {email}.")
