import React, { useState } from "react";
import { Link } from "react-router-dom";
import heroBannerImg from "../../assets/places/him.jpg";
import rishikeshImg from "../../assets/places/rishikesh.jpg";
import joshimathImg from "../../assets/places/auli.webp";
import dehradunImg from "../../assets/places/banner.webp";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Compass,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  Headphones,
  Users,
  Award,
  ShieldAlert,
  Navigation,
  Radio,
  FileText,
  Mountain,
} from "lucide-react";

// Inquiry category chips
const INQUIRY_CATEGORIES = [
  { id: "trek", label: "High-Altitude Trek", icon: Mountain, desc: "Kuari Pass, Kedartal, Chandrashila" },
  { id: "chardham", label: "Char Dham & Pilgrimage", icon: Sparkles, desc: "Kedarnath, Badrinath, Gangotri VIP" },
  { id: "rafting", label: "Rafting & Rishikesh Camping", icon: Compass, desc: "Ganga rapids, cliff jumps, beach camps" },
  { id: "custom", label: "Custom Private Expedition", icon: Users, desc: "Tailored family or private group departure" },
  { id: "corporate", label: "Corporate / Institutional", icon: Award, desc: "Team-building & mountaineering camps" },
  { id: "support", label: "Existing Booking / SOS", icon: ShieldAlert, desc: "Permits, rescheduling, trail status" },
];

// Basecamp Hubs data (Project Demo Details)
const BASECAMP_HUBS = [
  {
    id: "rishikesh",
    name: "Rishikesh Basecamp HQ",
    role: "Primary Operations, Rafting & Expedition Launchpad",
    address: "HimTrip Basecamp, High Bank, Tapovan (Near Laxman Jhula), Rishikesh, Uttarakhand 249192",
    phone: "+91 98765 43210",
    email: "tapovan@himtrip-demo.com",
    hours: "Open Daily: 6:30 AM – 10:00 PM IST",
    image: rishikeshImg,
    badge: "Main Headquarters",
    stats: "Trek Briefings • Gear Rental Depot • Fleet Hub",
    mapQuery: "Tapovan+Rishikesh+Uttarakhand",
    coordinates: "30.1332° N, 78.3248° E",
    transit: "21 km from Jolly Grant Airport (DED) • 25 km from Haridwar Junction (HW)",
  },
  {
    id: "dehradun",
    name: "Dehradun Transit Terminal",
    role: "Airport Transfers, Forest Permits & Guest Lounge",
    address: "HimTrip Transit Lounge, Rajpur Road, Dehradun, Uttarakhand 248001",
    phone: "+91 98765 43211",
    email: "dehradun@himtrip-demo.com",
    hours: "Open Daily: 7:00 AM – 9:00 PM IST",
    image: dehradunImg,
    badge: "Transit & Permits",
    stats: "Luggage Deposit • Inner Line Permits • Airport Shuttle",
    mapQuery: "Rajpur+Road+Dehradun+Uttarakhand",
    coordinates: "30.3421° N, 78.0664° E",
    transit: "28 km from Jolly Grant Airport (DED) • 4 km from Dehradun Railway Station (DDN)",
  },
  {
    id: "joshimath",
    name: "Joshimath High-Altitude Outpost",
    role: "Extreme Trek Depot, Oxygen Logistics & Trailheads",
    address: "Upper Bazaar, Near Nanda Devi Biosphere Office, Joshimath, Chamoli, Uttarakhand 246443",
    phone: "+91 98765 43212",
    email: "joshimath@himtrip-demo.com",
    hours: "Open 24/7 during Trekking Seasons",
    image: joshimathImg,
    badge: "Alpine Forward Post",
    stats: "Medical Oxygen Bank • Sub-zero Gear • Mountain Rescue Link",
    mapQuery: "Joshimath+Chamoli+Uttarakhand",
    coordinates: "30.5574° N, 79.5662° E",
    transit: "Gateway to Kuari Pass, Valley of Flowers, Badrinath & Nanda Devi",
  },
];

// FAQs Data
const CONTACT_FAQS = [
  {
    q: "How fast will an expedition coordinator respond to my inquiry?",
    a: "During regular hours (7:00 AM – 10:00 PM IST), our certified mountain coordinators respond within 15 to 30 minutes via WhatsApp or phone. For custom expeditions requiring special forest permits or helicopter slots, a formal custom PDF itinerary is delivered within 4 hours.",
  },
  {
    q: "Can I drop by your Rishikesh basecamp before my trek begins?",
    a: "Absolutely! Our Tapovan basecamp is designed as an open traveler lounge. You can meet your trek leader, get your high-altitude boots and technical gear checked, rent sub-zero down jackets or trekking poles, and join our evening trail briefing over hot Himalayan chai.",
  },
  {
    q: "How does HimTrip handle high-altitude emergencies and AMS?",
    a: "Every departure carries emergency medical oxygen cylinders, pulse oximeters, hyperbaric safety protocols, and a comprehensive Wilderness First Aid kit. Our trek leaders are graduates of the Nehru Institute of Mountaineering (NIM) Uttarkashi. We maintain direct satellite links and emergency heli-evacuation coordination with the Uttarakhand Disaster Management SDRF unit.",
  },
  {
    q: "Do you arrange seamless transfers from Delhi or Dehradun Airport?",
    a: "Yes. We coordinate our own fleet of sanitized Toyota Innova Crysta, Tempo Travelers, and 4x4 mountain vehicles. We provide prompt pickups directly from Dehradun Jolly Grant Airport (DED), Haridwar Junction, or New Delhi terminals straight to your mountain basecamp.",
  },
  {
    q: "What if I need to modify my travel dates or cancel due to weather?",
    a: "Mountain weather is dynamic. HimTrip offers our signature 'Alpine Flexibility Shield': if extreme weather or landslide alerts close a pass, you can reschedule to any future batch within 12 months with 0% penalty, or switch immediately to an alternative safe Himalayan circuit.",
  },
];

export default function Contact() {
  // Form State
  const [selectedCategory, setSelectedCategory] = useState("trek");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    groupSize: "2",
    travelMonth: "October 2026",
    message: "",
    whatsappUpdates: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState(null);
  const [copiedKey, setCopiedKey] = useState(null);
  const [activeHubId, setActiveHubId] = useState("rishikesh");
  const [openFaq, setOpenFaq] = useState(0);

  const activeHub = BASECAMP_HUBS.find((h) => h.id === activeHubId) || BASECAMP_HUBS[0];

  const handleCopy = (text, key) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and contact phone number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const ticketNumber = "HT-" + Math.floor(100000 + Math.random() * 900000);
      setSubmittedTicket({
        ticket: ticketNumber,
        name: formData.name,
        category: INQUIRY_CATEGORIES.find((c) => c.id === selectedCategory)?.label || "Expedition Inquiry",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      });
    }, 900);
  };

  const resetForm = () => {
    setSubmittedTicket(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      countryCode: "+91",
      groupSize: "2",
      travelMonth: "October 2026",
      message: "",
      whatsappUpdates: true,
    });
  };

  return (
    <div className="relative w-full min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* 1. HERO HEADER SECTION */}
      <section className="relative w-full bg-slate-950 text-white overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
        {/* Background Image with Dark & Warm Glow Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBannerImg}
            alt="Himalayan Mountain Range"
            className="w-full h-full object-cover object-center brightness-[0.32] contrast-110 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/45" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Live Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <Link to="/" className="hover:text-orange-400 transition-colors">
                Home
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-orange-400">Contact & Basecamp Hubs</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-500/40 text-orange-300 text-xs font-medium backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
              <span>Project Demo • 15-Min Response Guarantee</span>
            </div>
          </div>

          {/* Heading */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-600/20 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>Connect with Himalayan Specialists</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-heading leading-tight">
              We're Here to Guide Your{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                Himalayan Dream
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Planning a high-altitude trek, sacred Char Dham yatra, or adrenaline weekend in Rishikesh?
              Connect directly with native trek captains, route coordinators, and logistics leads.
            </p>
          </div>

          {/* Quick Stats / Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-8 border-t border-slate-800/80">
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
              <div className="text-orange-400 font-bold text-lg sm:text-2xl font-heading">&lt; 15 Mins</div>
              <div className="text-xs text-slate-400">Average WhatsApp Response</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
              <div className="text-orange-400 font-bold text-lg sm:text-2xl font-heading">24/7 SOS</div>
              <div className="text-xs text-slate-400">Ground Emergency Hotline</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
              <div className="text-orange-400 font-bold text-lg sm:text-2xl font-heading">3 Basecamps</div>
              <div className="text-xs text-slate-400">Rishikesh • Dehradun • Joshimath</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
              <div className="text-orange-400 font-bold text-lg sm:text-2xl font-heading">100% Certified</div>
              <div className="text-xs text-slate-400">NIM & HMI Qualified Leaders</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIRECT CONTACT CHANNELS (CARDS ROW) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: 24/7 Traveler Help & SOS */}
          <div className="bg-white rounded-2xl p-5 shadow-xl shadow-slate-900/5 border border-slate-200/80 hover:border-orange-500/50 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                  Live 24/7
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base font-heading">Traveler SOS & Calls</h3>
              <p className="text-xs text-slate-500 mt-1 mb-3">
                For active trips, immediate flight coordination, or high-altitude updates.
              </p>
            </div>
            <div>
              <a
                href="tel:+919876543210"
                className="font-bold text-orange-600 hover:text-orange-700 text-sm block tracking-wide font-mono"
              >
                +91 98765 43210
              </a>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-100">
                <a
                  href="tel:+919876543210"
                  className="flex-1 py-1.5 px-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold text-center transition-colors shadow-sm"
                >
                  Call Demo
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy("+91 98765 43210", "phone")}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedKey === "phone" ? <Check className="w-4 h-4 text-orange-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Email & Formal Itineraries */}
          <div className="bg-white rounded-2xl p-5 shadow-xl shadow-slate-900/5 border border-slate-200/80 hover:border-orange-500/50 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  &lt; 2h Reply
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base font-heading">Expedition Inquiries</h3>
              <p className="text-xs text-slate-500 mt-1 mb-3">
                Custom dates, high-altitude gear lists, and group booking quotations.
              </p>
            </div>
            <div>
              <a
                href="mailto:contact@himtrip-demo.com"
                className="font-bold text-orange-600 hover:text-orange-700 text-sm block truncate font-mono"
              >
                contact@himtrip-demo.com
              </a>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-100">
                <a
                  href="mailto:contact@himtrip-demo.com"
                  className="flex-1 py-1.5 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold text-center transition-colors"
                >
                  Write Email
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy("contact@himtrip-demo.com", "email")}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                  title="Copy Email"
                >
                  {copiedKey === "email" ? <Check className="w-4 h-4 text-orange-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: WhatsApp Direct Line */}
          <div className="bg-white rounded-2xl p-5 shadow-xl shadow-slate-900/5 border border-slate-200/80 hover:border-orange-500/50 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                  Instant
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base font-heading">WhatsApp Direct Chat</h3>
              <p className="text-xs text-slate-500 mt-1 mb-3">
                Chat straight with our Lead Trek Captain. Send photos, get live trail weather.
              </p>
            </div>
            <div>
              <div className="font-bold text-slate-800 text-sm block">Chat with Lead Captain</div>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-100">
                <a
                  href="https://wa.me/919876543210?text=Hi%20HimTrip%2C%20I%20am%20planning%20a%20trip%20to%20Uttarakhand%20and%20would%20like%20more%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1.5 px-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Start WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 4: Rishikesh Basecamp HQ */}
          <div className="bg-white rounded-2xl p-5 shadow-xl shadow-slate-900/5 border border-slate-200/80 hover:border-orange-500/50 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  Tapovan HQ
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base font-heading">Visit Our Basecamp</h3>
              <p className="text-xs text-slate-500 mt-1 mb-3">
                Tapovan, Rishikesh. Walk-ins welcome for gear checks and chai.
              </p>
            </div>
            <div>
              <div className="text-xs font-medium text-slate-700 line-clamp-1">High Bank, Tapovan, Rishikesh</div>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("basecamp-hubs-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-1.5 px-2.5 rounded-lg bg-slate-100 hover:bg-orange-50 hover:text-orange-700 text-slate-700 text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
                >
                  <Navigation className="w-3.5 h-3.5 text-orange-600" />
                  <span>View All Hubs</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN INTERACTIVE CONTACT SECTION (SPLIT: FORM + LIVE HUB STATUS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT COLUMN: THE INTERACTIVE INQUIRY FORM (7 COLS) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-2xl shadow-slate-900/5 border border-slate-200/80">
            {submittedTicket ? (
              // SUBMITTED SUCCESS CARD
              <div className="text-center py-8 px-4 animate-fadeIn space-y-6">
                <div className="w-16 h-16 rounded-full bg-orange-100 border border-orange-300 text-orange-600 mx-auto flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-800 text-xs font-bold border border-orange-200">
                    <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                    <span>Inquiry Logged Successfully</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                    Dhanyawad, {submittedTicket.name}!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Your request for{" "}
                    <span className="font-semibold text-slate-900">{submittedTicket.category}</span> has been simulated
                    and dispatched to our Rishikesh Basecamp operations room.
                  </p>
                </div>

                {/* Ticket Details Box */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-md mx-auto text-left space-y-3">
                  <div className="flex justify-between items-center text-xs text-slate-500 pb-2 border-b border-slate-200">
                    <span>Reference Ticket</span>
                    <span className="font-mono font-bold text-orange-600">{submittedTicket.ticket}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-500 pb-2 border-b border-slate-200">
                    <span>Logged At</span>
                    <span className="font-semibold text-slate-800">{submittedTicket.timestamp} IST</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span>Expected Callback</span>
                    <span className="font-bold text-orange-600">Within 15–30 minutes (Demo)</span>
                  </div>
                </div>

                {/* Immediate WhatsApp Follow-up CTA */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <a
                    href={`https://wa.me/919876543210?text=Hi%20HimTrip%2C%20I%20just%20submitted%20inquiry%20ticket%20${submittedTicket.ticket}%20for%20${encodeURIComponent(
                      submittedTicket.category
                    )}.%20Please%20connect%20me%20with%20a%20trek%20captain.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md transition-all duration-200"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Fast-Track on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              // ACTIVE INQUIRY FORM
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2 font-heading">
                    <FileText className="w-3.5 h-3.5 text-orange-600" />
                    <span>Quick Trip Planner & Inquiry</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading tracking-tight">
                    Tell Us What You're Seeking
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Fill in your details below and our mountain coordinator will customize your route, permits, and team.
                  </p>
                </div>

                {/* 1. Trip Type Pill Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    1. Select Experience Type <span className="text-orange-600">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {INQUIRY_CATEGORIES.map((cat) => {
                      const Icon = cat.icon;
                      const isSelected = selectedCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`flex flex-col items-start p-3 rounded-xl text-left border transition-all duration-200 ${
                            isSelected
                              ? "bg-orange-600 text-white border-orange-600 shadow-md shadow-orange-600/20 scale-[1.02]"
                              : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-orange-300"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <Icon className={`w-4 h-4 ${isSelected ? "text-white" : "text-orange-600"}`} />
                            <span className="font-bold text-xs leading-snug">{cat.label}</span>
                          </div>
                          <span
                            className={`text-[10px] leading-tight line-clamp-1 ${
                              isSelected ? "text-orange-100" : "text-slate-400"
                            }`}
                          >
                            {cat.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Personal Info (Name, Email, Phone) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name <span className="text-orange-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aarav Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-3.5 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-orange-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="e.g. traveler@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-3.5 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Phone & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      WhatsApp / Phone Number <span className="text-orange-600">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        className="w-24 px-2 py-2.5 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
                      >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+65">🇸🇬 +65</option>
                      </select>
                      <input
                        type="tel"
                        required
                        placeholder="98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="flex-1 px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Tentative Travel Window
                    </label>
                    <select
                      value={formData.travelMonth}
                      onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                    >
                      <option value="October 2026">October 2026 (Autumn Clear Skies)</option>
                      <option value="November 2026">November 2026 (Early Snow & Pass Crossings)</option>
                      <option value="December 2026">December 2026 (Winter Snow Treks & Camping)</option>
                      <option value="January 2027">January 2027 (Deep Snow Kedarkantha / Kuari)</option>
                      <option value="February 2027">February 2027 (Winter Alpine)</option>
                      <option value="March-April 2027">March – April 2027 (Spring Rhododendron Bloom)</option>
                      <option value="May-June 2027">May – June 2027 (Char Dham & High Summer)</option>
                      <option value="Flexible">I'm Flexible / Need Captain's Recommendation</option>
                    </select>
                  </div>
                </div>

                {/* 4. Group Size */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    How Many Travelers?
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: "1", label: "Solo Nomad" },
                      { id: "2", label: "Duo / Couple" },
                      { id: "3-5", label: "3–5 Friends/Family" },
                      { id: "6+", label: "6+ Big Team" },
                    ].map((group) => (
                      <button
                        key={group.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, groupSize: group.id })}
                        className={`py-2 px-2 text-center rounded-xl text-xs font-semibold border transition-all ${
                          formData.groupSize === group.id
                            ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                        }`}
                      >
                        {group.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 5. Special Notes / Custom Requirements */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message / Specific Requirements (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. We need rental boots, interested in Kedartal or Kuari Pass, arriving at Dehradun airport on Friday morning..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* 6. WhatsApp Updates Checkbox */}
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.whatsappUpdates}
                    onChange={(e) => setFormData({ ...formData, whatsappUpdates: e.target.checked })}
                    className="w-4 h-4 text-orange-600 rounded border-slate-300 focus:ring-orange-500"
                  />
                  <span className="text-xs text-slate-600">
                    Send me customized itinerary PDF and trail conditions via WhatsApp
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-orange-600 hover:bg-orange-700 active:scale-[0.99] text-white font-bold text-sm shadow-lg shadow-orange-600/25 flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Connecting with Operations Desk...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request Custom Itinerary & Call Back</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
                  <span>100% Privacy. Zero spam. Directly received by our Tapovan Operations Team.</span>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT COLUMN: BASECAMP REAL-TIME STATUS & SAFETY INFORMATION (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Operational Bulletin */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-orange-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                    Live Trail Status Bulletin
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Updated Daily 06:00 IST</span>
              </div>

              <div className="mt-4 space-y-3.5">
                <div className="flex items-start gap-3 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Garhwal Passes Open</h4>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      Kuari Pass, Chandrashila, and Dayara Bugyal are fully operational with clear autumn skies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Rishikesh River Rafting</h4>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      Ganga water discharge is at prime Class III+ rapids. Shivpuri & Marine Drive stretches active.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Char Dham Highway Status</h4>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      All-weather Char Dham corridor clear for Kedarnath and Badrinath passenger vehicles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Weather quick card */}
              <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                  <div className="text-slate-400 text-[10px]">Rishikesh Base</div>
                  <div className="font-bold text-orange-400 text-sm">24°C • Sunny</div>
                </div>
                <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                  <div className="text-slate-400 text-[10px]">Joshimath Outpost</div>
                  <div className="font-bold text-amber-400 text-sm">14°C • Crisp</div>
                </div>
              </div>
            </div>

            {/* Why Contact Us Direct Box */}
            <div className="bg-orange-50/80 border border-orange-200/80 rounded-3xl p-6 text-slate-800 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-600 text-white flex items-center justify-center font-bold text-sm">
                  HT
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-heading">
                    The Direct Mountain Advantage
                  </h3>
                  <p className="text-[11px] text-orange-950/70">No third-party aggregators or call centers</p>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Talk directly to Native Mountain Captains</strong> who have personally climbed every route.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Official Forest Department Inner Line Permits</strong> processed in advance with zero broker fee.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Basecamp Pickups</strong> from Dehradun airport or Haridwar station in clean private fleet.
                  </span>
                </li>
              </ul>
            </div>

            {/* Emergency SOS Quick Contact */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm font-heading">Mountain Emergency / SOS</h4>
                  <p className="text-[11px] text-slate-500">24/7 dedicated rescue & medical dispatch line</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If you have an active traveler currently on trail or need urgent high-altitude medical assistance:
              </p>
              <div className="mt-3 flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="font-mono font-bold text-orange-700 text-sm">+91 98765 43210</span>
                <a
                  href="tel:+919876543210"
                  className="px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition-colors"
                >
                  Direct SOS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE BASECAMP LOCATOR & HUBS SHOWCASE */}
      <section id="basecamp-hubs-section" className="w-full bg-slate-100 py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs font-bold uppercase tracking-wider font-heading">
              <MapPin className="w-3.5 h-3.5 text-orange-600" />
              <span>Physical Presence Across Devbhoomi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading tracking-tight">
              Our Basecamp & Transit Hubs
            </h2>
            <p className="text-sm text-slate-600">
              We operate three dedicated physical facilities across Uttarakhand. Drop by to rent gear, meet your
              expedition crew, or store luggage before ascending.
            </p>
          </div>

          {/* Interactive Hub Switcher Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {BASECAMP_HUBS.map((hub) => (
              <button
                key={hub.id}
                type="button"
                onClick={() => setActiveHubId(hub.id)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
                  activeHubId === hub.id
                    ? "bg-orange-600 text-white shadow-lg shadow-orange-600/25 scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200"
                }`}
              >
                <MapPin className={`w-4 h-4 ${activeHubId === hub.id ? "text-white" : "text-orange-600"}`} />
                <span>{hub.name}</span>
              </button>
            ))}
          </div>

          {/* Active Hub Card Display */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 transition-all duration-300">
            {/* Hub Photo & Visuals (5 Cols) */}
            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[340px] overflow-hidden bg-slate-950">
              <img
                src={activeHub.image}
                alt={activeHub.name}
                className="w-full h-full object-cover brightness-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  {activeHub.badge}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-mono text-orange-300 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>GPS: {activeHub.coordinates}</span>
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">{activeHub.stats}</div>
              </div>
            </div>

            {/* Hub Info & Actions (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 font-heading">{activeHub.name}</h3>
                  <p className="text-xs font-bold text-orange-600 uppercase tracking-wider mt-1">{activeHub.role}</p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                    <span>{activeHub.address}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>{activeHub.hours}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                    <a href={`tel:${activeHub.phone}`} className="font-semibold text-slate-900 hover:text-orange-600 font-mono">
                      {activeHub.phone}
                    </a>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <Navigation className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">Connectivity & Transit:</span>
                      <span className="text-xs text-slate-600">{activeHub.transit}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${activeHub.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href={`tel:${activeHub.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-orange-600" />
                  <span>Call Station</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs font-bold uppercase tracking-wider font-heading">
            <Headphones className="w-3.5 h-3.5 text-orange-600" />
            <span>Common Queries Before Contacting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600">
            Got a quick question about bookings, gears, or safety? Here are answers to what travelers ask us most.
          </p>
        </div>

        <div className="space-y-3">
          {CONTACT_FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 font-heading">{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-orange-100 text-orange-600" : "text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. BOTTOM CALL-TO-ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="relative rounded-3xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 text-white p-8 sm:p-12 shadow-2xl overflow-hidden">
          {/* Subtle Decorative Elements */}
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-60 h-60 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                <span>Ready to Explore Devbhoomi?</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black font-heading tracking-tight">
                Prefer an Immediate Voice Conversation?
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Skip the contact form. Call our Lead Mountain Captain directly right now or drop by our Tapovan
                basecamp for fresh ginger-lemon tea and trail stories.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="tel:+919876543210"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-orange-700 font-black text-sm shadow-xl transition-all duration-200 font-mono"
              >
                <Phone className="w-4 h-4 text-orange-600" />
                <span>+91 98765 43210</span>
              </a>

              <a
                href="https://wa.me/919876543210?text=Hi%20HimTrip%2C%20I%20am%20looking%20to%20plan%20a%20trek%20or%20trip%20in%20Uttarakhand."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950/80 hover:bg-slate-950 text-white font-bold text-sm shadow-xl transition-all duration-200 backdrop-blur-sm"
              >
                <MessageSquare className="w-4 h-4 text-orange-400" />
                <span>WhatsApp Captain</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
