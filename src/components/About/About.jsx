import React, { useState } from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/places/him.jpg";
import bannerImg from "../../assets/places/banner.webp";
import auliImg from "../../assets/places/auli.webp";
import kedarnathImg from "../../assets/places/kedarnath.png";
import {
  Mountain,
  Compass,
  Users,
  ShieldCheck,
  Award,
  Heart,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Briefcase,
  Newspaper,
  Star,
  Eye,
  Target,
  Leaf,
  ExternalLink,
  ChevronRight,
  MapPin,
  Calendar,
  Clock,
  Send,
} from "lucide-react";

// Key Stats Data
const KEY_FACTS = [
  {
    value: "50,000+",
    label: "Happy Travelers",
    sublabel: "From 70+ Countries",
    icon: Users,
    color: "from-orange-500 to-amber-500",
  },
  {
    value: "300+",
    label: "Curated Expeditions",
    sublabel: "Across Garhwal & Kumaon",
    icon: Compass,
    color: "from-amber-500 to-yellow-500",
  },
  {
    value: "10+ Years",
    label: "Local Experience",
    sublabel: "Native Mountain Captains",
    icon: Mountain,
    color: "from-emerald-500 to-teal-500",
  },
  {
    value: "4.8 / 5.0",
    label: "Verified Ratings",
    sublabel: "14,500+ Reviews",
    icon: Star,
    color: "from-rose-500 to-orange-500",
  },
];

// --- Tab 1: Our Story Content ---
const OurStoryContent = () => (
  <div className="space-y-16 animate-fadeIn">
    {/* Story Hero Split Section */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <div className="lg:col-span-7 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-700 text-xs font-bold tracking-wide uppercase font-heading">
          <Sparkles className="w-3.5 h-3.5 text-orange-600" />
          <span>The HimTrip Journey</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading leading-tight">
          Born in the Shadow of the{" "}
          <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            Garhwal Himalayas
          </span>
        </h2>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          HimTrip was founded with a singular conviction: to share the sacred, adventurous, and untamed spirit of Uttarakhand while protecting its delicate ecological and cultural heritage.
        </p>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          We saw commercial tourism flattening the Himalayan experience into crowded bus tours and cookie-cutter packages. We wanted something deeper — journeys where travelers sip wild herbal tea with local shepherds in high bugyals, listen to ancient folklore by temple fires, and navigate glacial rapids with captains who have known these waters since childhood.
        </p>

        {/* Highlighted Quote Box */}
        <div className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-orange-50/90 via-amber-50/70 to-orange-50/90 border-l-4 border-orange-500 shadow-sm">
          <p className="text-slate-800 font-semibold text-base sm:text-lg italic leading-relaxed">
            "We don't just guide you through Devbhoomi; we welcome you into our home, our culture, and our sacred mountains."
          </p>
          <div className="mt-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-xs">
              HT
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 font-heading">HimTrip Collective Founding Team</p>
              <p className="text-[11px] text-slate-500">Rishikesh & Dehradun, Uttarakhand</p>
            </div>
          </div>
        </div>

        {/* Checkpoint Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>100% Native Mountain Captains</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>80%+ Revenue to Remote Villages</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Leave No Trace Certified Operations</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>IMF & High-Altitude Medical Safety</span>
          </div>
        </div>
      </div>

      {/* Visual Showcase Card with Overlay Badges */}
      <div className="lg:col-span-5 relative">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 group">
          <img
            src={aboutImg}
            alt="Himalayan ridge and explorer"
            className="w-full h-[440px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

          {/* Floating Badges */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wide">
              <Mountain className="w-3.5 h-3.5 text-orange-400" />
              <span>Devbhoomi Uttarakhand</span>
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-orange-400 text-xs font-bold uppercase tracking-wider block mb-1">
              Pure Local Spirit
            </span>
            <h4 className="text-xl sm:text-2xl font-bold font-heading leading-snug">
              Every Ridge, River & Shrine Has a Story Waiting For You
            </h4>
            <p className="text-xs text-slate-300 mt-2 line-clamp-2">
              From the thunderous sangam at Devprayag to the quiet meadows of Ali Bugyal, we lead you beyond the ordinary.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Mission, Vision, and Sustainability Pledge */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Mission */}
      <div className="relative bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-[0_6px_25px_-6px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
        <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 to-amber-500 absolute top-0 left-0" />
        <div>
          <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/70 flex items-center justify-center text-orange-600 mb-5 group-hover:scale-110 transition-transform">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
            Our Mission
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            To provide safe, sustainable, and spiritually uplifting Himalayan travel experiences that deeply enrich visitors while preserving local mountain ecosystems and empowering village communities.
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-orange-600 flex items-center gap-1">
          <span>Safe • Soulful • Sustainable</span>
        </div>
      </div>

      {/* Vision */}
      <div className="relative bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-[0_6px_25px_-6px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
        <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 to-teal-500 absolute top-0 left-0" />
        <div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-emerald-600 mb-5 group-hover:scale-110 transition-transform">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
            Our Vision
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            To be India's most respected, ethical, and authentic travel collective — inspiring a global generation of conscious adventurers who cherish Uttarakhand as sacred natural heritage.
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-600 flex items-center gap-1">
          <span>Ethical • Revered • Global Standard</span>
        </div>
      </div>

      {/* Eco-Conservation Pledge */}
      <div className="relative bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-[0_6px_25px_-6px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-cyan-500 absolute top-0 left-0" />
        <div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-blue-600 mb-5 group-hover:scale-110 transition-transform">
            <Leaf className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
            Eco Pledge
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Strict Zero-Single-Use-Plastic on all trails. We conduct monthly cleanup treks, supply stainless steel bottles, and contribute a portion of every booking directly to local Himalayan rewilding efforts.
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-blue-600 flex items-center gap-1">
          <span>Leave No Trace • Zero Plastic</span>
        </div>
      </div>
    </div>

    {/* Core Pillars / Values Section */}
    <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
        <span className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-2 block font-heading">
          What Guides Every Step We Take
        </span>
        <h3 className="text-2xl sm:text-4xl font-black font-heading text-white">
          Our Four Non-Negotiable Pillars
        </h3>
        <p className="text-slate-400 text-sm sm:text-base mt-3">
          Behind every trek permit, temple darshan, and high-altitude campsite is our unwavering commitment to these principles.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: ShieldCheck,
            title: "Uncompromising Safety",
            desc: "NIM certified mountain leaders, daily health vitals checks, pulse oximeters, and medical oxygen on high passes.",
            tag: "NIM & IMF Certified",
          },
          {
            icon: Mountain,
            title: "Pahadi Heritage First",
            desc: "Immersive village stays, organic regional cuisines, and cultural storytelling passed through generations.",
            tag: "100% Authentic",
          },
          {
            icon: Heart,
            title: "Community Equity",
            desc: "Direct, fair compensation for mountain porters, local drivers, and homestay hosts without extortionate margins.",
            tag: "Direct Local Benefit",
          },
          {
            icon: Sparkles,
            title: "Bespoke Curation",
            desc: "No rushed timetables. Meticulously designed itineraries with ample acclimatization and private group flexibility.",
            tag: "Tailored For You",
          },
        ].map((pillar, idx) => {
          const PillarIcon = pillar.icon;
          return (
            <div
              key={idx}
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/70 hover:border-orange-500/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <PillarIcon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-heading">
                  {pillar.title}
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {pillar.desc}
                </p>
              </div>
              <span className="inline-block self-start text-[11px] font-bold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-500/20">
                {pillar.tag}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

// --- Tab 2: Our Team Content ---
const OurTeamContent = () => {
  const teamMembers = [
    {
      name: "Rajeshwar Negi",
      role: "Founder & Chief Expedition Director",
      experience: "16+ Years Exploring Garhwal",
      credentials: "NIM Uttarkashi Mountaineering Advance Certified",
      bio: "Born in Chamoli, Rajeshwar has scaled over 40 Himalayan passes and led expeditions to Kedartal, Roopkund, and Kalindi Khal.",
      specialty: "High-Altitude Logistics & Route Scouting",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Ananya Bhatt",
      role: "Head of Safety & High-Altitude Medical Response",
      experience: "11+ Years Wilderness Rescue",
      credentials: "Wilderness First Responder (WFR) & IRF River Captain",
      bio: "Ananya oversees mountain safety protocols, acclimatization strategies, and satellite communication for all trekking groups.",
      specialty: "Altitude Sickness Prevention & Emergency SOS",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Virendra Singh Rawat",
      role: "Director of Pilgrimage & Cultural Circuits",
      experience: "18+ Years Char Dham Heritage",
      credentials: "Historian & Master of Himalayan Temple Legends",
      bio: "Virendra curates our sacred yatras to Kedarnath, Badrinath, Gangotri, and hidden Shaivite temples across the Kumaon hills.",
      specialty: "Sacred Shrines, Puja Logistics & Local Lore",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Priya Joshi",
      role: "Lead Homestay & Village Empowerment Coordinator",
      experience: "8+ Years Rural Tourism",
      credentials: "Responsible Tourism Advocate & Naturalist",
      bio: "Priya connects travelers with over 65 verified traditional family homestays across Almora, Chopta, and Munsiari.",
      specialty: "Farm-to-Table Dining & Local Host Partnerships",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="space-y-12 animate-fadeIn">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-700 text-xs font-bold tracking-wide uppercase font-heading mb-3">
          <Users className="w-3.5 h-3.5 text-orange-600" />
          <span>Mountain Leaders & Local Pioneers</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
          Meet the People Behind Your Journey
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          From certified mountaineers trained at the Nehru Institute of Mountaineering to native village leaders — our team treats you like family on the trail.
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_6px_25px_-6px_rgba(0,0,0,0.06)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Member Image */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="inline-block text-[11px] font-bold bg-orange-600/90 backdrop-blur-md px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                    {member.experience}
                  </span>
                </div>
              </div>

              {/* Member Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 font-heading mb-1 group-hover:text-orange-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-orange-600 mb-3">
                  {member.role}
                </p>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-3 border-t border-slate-100">
              <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Specialty
              </span>
              <p className="text-xs font-semibold text-slate-800">
                {member.specialty}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Guide Credentials Strip */}
      <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-base sm:text-lg text-slate-900 font-heading">
              100% Certified Mountain Captains
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              All HimTrip trek leaders hold NIM (Uttarkashi) or HMI (Darjeeling) certifications with Wilderness First Aid training.
            </p>
          </div>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-sm"
        >
          <span>Ask Our Guides</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

// --- Tab 3: Careers & Culture Content ---
const CareersContent = () => {
  const openPositions = [
    {
      title: "Senior Himalayan Trek Leader",
      type: "Full-Time • On-Trail",
      location: "Rishikesh / Joshimath",
      experience: "3+ Years High-Altitude Trekking",
      desc: "Lead 5–10 day trekking expeditions across Valley of Flowers, Kedarkantha, and Kuari Pass with highest safety standards.",
    },
    {
      title: "Tour Operations & Dispatch Manager",
      type: "Full-Time • HQ",
      location: "Dehradun / Tapovan",
      experience: "2+ Years Travel Operations",
      desc: "Coordinate mountain transport, tempo traveler fleets, temple darshan permits, and homestay inventory seamlessly.",
    },
    {
      title: "Adventure Content Creator & Drone Pilot",
      type: "Contract / Full-Time",
      location: "Field Across Uttarakhand",
      experience: "Portfolio of Alpine Videography",
      desc: "Capture the raw magic of Himalayan sunrises, pilgrim trails, and river rafting for our global travel community.",
    },
    {
      title: "Travel Concierge & Support Specialist",
      type: "Full-Time • Hybrid",
      location: "Rishikesh or Remote (India)",
      experience: "1+ Years Travel Customer Care",
      desc: "Provide 24/7 personalized WhatsApp assistance, itinerary consultations, and emergency coordination to travelers.",
    },
  ];

  return (
    <div className="space-y-12 animate-fadeIn">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-700 text-xs font-bold tracking-wide uppercase font-heading mb-3">
          <Briefcase className="w-3.5 h-3.5 text-orange-600" />
          <span>Work In The Mountains You Love</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
          Join the HimTrip Collective
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          We are looking for passionate explorers, certified mountaineers, and logistics wizards who want to redefine Himalayan travel.
        </p>
      </div>

      {/* Perks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: Mountain,
            title: "Trail Workdays",
            desc: "Spend your working season breathing pure Himalayan pine air.",
          },
          {
            icon: ShieldCheck,
            title: "Health & Gear Coverage",
            desc: "High-altitude medical insurance + top-tier gear allowance.",
          },
          {
            icon: Award,
            title: "Sponsored Certifications",
            desc: "We sponsor NIM, WFR, and IRF mountaineering courses.",
          },
          {
            icon: Heart,
            title: "Meaningful Impact",
            desc: "Directly improve livelihoods across remote Uttarakhand villages.",
          },
        ].map((perk, idx) => {
          const PerkIcon = perk.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mx-auto mb-3.5">
                <PerkIcon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1 font-heading">
                {perk.title}
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                {perk.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Open Positions List */}
      <div className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
          Current Openings
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {openPositions.map((job, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-orange-300 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-lg font-bold text-slate-900 font-heading">
                    {job.title}
                  </h4>
                  <span className="text-[11px] font-semibold text-orange-700 bg-orange-100/70 border border-orange-200 px-2.5 py-0.5 rounded-full">
                    {job.type}
                  </span>
                </div>
                <p className="text-xs text-slate-500 flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {job.location}
                  </span>
                  <span>•</span>
                  <span>{job.experience}</span>
                </p>
                <p className="text-xs sm:text-sm text-slate-600 pt-1">
                  {job.desc}
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-sm active:scale-95"
              >
                <span>Apply Now</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Tab 4: Press & Media Content ---
const PressContent = () => (
  <div className="space-y-12 animate-fadeIn">
    <div className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-700 text-xs font-bold tracking-wide uppercase font-heading mb-3">
        <Newspaper className="w-3.5 h-3.5 text-orange-600" />
        <span>In The News & Recognition</span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
        HimTrip in the Spotlight
      </h2>
      <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
        Our pioneering work in community-based ecotourism and high-altitude safety has been featured in leading national publications.
      </p>
    </div>

    {/* Press Quotes Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          publication: "Outlook Traveller",
          tag: "Feature Article",
          quote:
            "“How HimTrip is quietly rewriting the rules of sustainable Himalayan exploration by channeling over 80% of trip value straight into remote Kumaoni villages.”",
          author: "Travel Desk",
          year: "2025",
        },
        {
          publication: "Nat Geo Traveller India",
          tag: "Editor's Pick",
          quote:
            "“Secret Trails of Devbhoomi: An unforgettable look inside HimTrip's offbeat trekking circuits away from the crowded pilgrim buses.”",
          author: "Adventure Section",
          year: "2025",
        },
        {
          publication: "Uttarakhand Tourism Department",
          tag: "Special Recognition",
          quote:
            "“Commended for exemplary adherence to high-altitude medical safety protocols, Leave-No-Trace trail management, and youth employment.”",
          author: "State Tourism Directorate",
          year: "2026",
        },
        {
          publication: "The Hindu BusinessLine",
          tag: "Eco-Hospitality",
          quote:
            "“HimTrip proves that high-altitude thrills and reverent pilgrimage do not have to come at the expense of fragile Himalayan ecosystems.”",
          author: "Tourism Spotlight",
          year: "2025",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-black text-lg text-slate-900 font-heading">
                {item.publication}
              </span>
              <span className="text-[11px] font-bold text-orange-700 bg-orange-50 border border-orange-200/80 px-2.5 py-0.5 rounded-full">
                {item.tag}
              </span>
            </div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-4">
              {item.quote}
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>{item.author}</span>
            <span className="font-semibold text-slate-400">{item.year}</span>
          </div>
        </div>
      ))}
    </div>

    {/* Media Inquiries Card */}
    <div className="bg-slate-900 rounded-3xl p-8 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
      <div>
        <h4 className="text-xl font-bold font-heading">
          Journalist, Blogger or Travel Creator?
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          For interview requests, high-res press assets, or sponsored expedition invites, connect with our media team.
        </p>
      </div>
      <a
        href="mailto:press@himtrip.com"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-md"
      >
        <Mail className="w-4 h-4" />
        <span>press@himtrip.com</span>
      </a>
    </div>
  </div>
);

// --- Main AboutPage Component ---
export default function AboutPage() {
  const TABS = [
    { id: "story", label: "Our Story", icon: Mountain },
    { id: "team", label: "Mountain Team", icon: Users },
    { id: "careers", label: "Careers", icon: Briefcase },
    { id: "press", label: "Press & Media", icon: Newspaper },
  ];

  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const renderContent = () => {
    switch (activeTab) {
      case "story":
        return <OurStoryContent />;
      case "team":
        return <OurTeamContent />;
      case "careers":
        return <CareersContent />;
      case "press":
        return <PressContent />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-16">
      {/* 1. Dramatic Hero Banner with Rich Overlay */}
      <div className="relative w-full overflow-hidden bg-slate-950 text-white pt-24 sm:pt-32 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        {/* Banner Background Image with Multi-layer Dark Gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(#EA580C_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        {/* Ambient Top Glow Blob */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent blur-3xl rounded-full pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-5">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-600/30 backdrop-blur-md border border-orange-400/40 text-orange-200 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 animate-fadeUp">
            <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
            <span>ESTABLISHED 2018 • DEVBHOOMI UTTARAKHAND</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight drop-shadow-lg font-heading animate-fadeUp">
            Your Himalayan Journey,{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
              Crafted by Experts
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md animate-fadeUp"
            style={{ animationDelay: "0.2s" }}
          >
            HimTrip shares the spiritual majesty, adrenaline adventures, and untouched natural beauty of Uttarakhand with the world.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-fadeUp"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              to="/tours"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-bold text-sm shadow-lg shadow-orange-600/30 transition-all duration-200 active:scale-95"
            >
              <span>Explore All Tours</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-sm border border-white/20 hover:border-white/40 transition-all duration-200 active:scale-95"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Talk to a Mountain Guide</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Floating Stats Bar (KEY_FACTS) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-12 sm:-mt-16 relative z-20">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.12)] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {KEY_FACTS.map((fact, idx) => {
            const FactIcon = fact.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-4 ${idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${fact.color} text-white flex items-center justify-center shrink-0 shadow-md`}
                >
                  <FactIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                    {fact.value}
                  </span>
                  <span className="block text-xs font-bold text-slate-700">
                    {fact.label}
                  </span>
                  <span className="block text-[11px] text-slate-400 font-medium">
                    {fact.sublabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Modern Sticky Segmented Tab Navigation */}
      <div className="sticky top-0 z-30 bg-slate-50/95 backdrop-blur-md border-b border-slate-200/80 py-4 my-8 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300/60 overflow-x-auto max-w-full">
            {TABS.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-white text-orange-600 shadow-md shadow-orange-500/10"
                      : "text-slate-600 hover:text-slate-950 hover:bg-white/50"
                  }`}
                >
                  <TabIcon
                    className={`w-4 h-4 ${isActive ? "text-orange-600" : "text-slate-500"}`}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Tab Content Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        {renderContent()}
      </div>

      {/* 5. Inspiring Himalayan CTA Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div
          className="relative rounded-3xl overflow-hidden p-8 sm:p-16 text-center text-white shadow-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${auliImg})` }}
        >
          {/* Dark Glass Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/90 backdrop-blur-[1px]" />
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-orange-600/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6 animate-fadeIn">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-600/40 border border-orange-400/50 text-orange-300 text-xs font-bold uppercase tracking-wider">
              Start Your Journey Today
            </span>

            <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight">
              Ready to Discover the Magic of Uttarakhand?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              From the sacred heights of Kedarnath and Badrinath to the snowfields of Auli and white-water rapids of Rishikesh — your bespoke Himalayan adventure begins here.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                to="/tours"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-xl shadow-orange-600/30 transition-all duration-200 active:scale-95"
              >
                <span>View All 50+ Tours</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm shadow-md transition-all duration-200 active:scale-95"
              >
                <Phone className="w-4 h-4 text-orange-600" />
                <span>Request Custom Plan</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
