import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LuArrowRight,
  LuPhone,
  LuSparkles,
  LuChevronDown,
  LuCheck,
  LuGlobe,
  LuShield,
  LuCpu,
  LuUsers,
  LuClock,
  LuFileSpreadsheet,
  LuDollarSign,
  LuMenu,
  LuX,
  LuUserCheck,
  LuSmartphone,
  LuFileText,
  LuDatabase,
  LuAward,
  LuMapPin,
  LuMail,
  LuBinary,
  LuLayers,
  LuFileCheck,
  LuActivity
} from "react-icons/lu";

export default function LandingPage() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrollPos, setScrollPos] = useState(0);

  // Monitor scroll for website header opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navLinks = [
    {
      name: "Products",
      items: [
        { title: "FINAMAN ERP", desc: "The Operating System for Process Manufacturing Enterprises." },
        { title: "BMR & BPR Automation", desc: "Digital Batch Manufacturing & Batch Packing Records." },
        { title: "QA & QC Lab Suite", desc: "Laboratory information system with automatic ROA/COA." },
        { title: "WMS Pro", desc: "Advanced warehouse & barcode-scanned location tracking." },
        { title: "Inventory Batch Engine", desc: "Real-time stock aging, FIFO allocations & tracking." }
      ]
    },
    {
      name: "Industries",
      items: [
        { title: "Pharmaceuticals", desc: "USFDA, WHO-GMP and Schedule M regulatory compliance." },
        { title: "Food & Beverages", desc: "FSSAI compliance, expiration batches, and recipe scaling." },
        { title: "Chemical & Cosmetics", desc: "MSDS records, formulation checks and weight parameters." },
        { title: "API & Bulk Drugs", desc: "Yield optimization, solvent recovery, and trace ledgers." }
      ]
    },
    {
      name: "About Us",
      items: [
        { title: "Who we are", desc: "Pioneering manufacturing technology since 2009." },
        { title: "Our Mission", desc: "Arming Indian manufacturers with world-class technology." },
        { title: "Corporate Team", desc: "Logically inspired engineers and ERP consultants." }
      ]
    }
  ];

  const modules = [
    { name: "Planning", icon: <LuLayers size={20} className="text-blue-600" />, desc: "Master Production Schedule." },
    { name: "Production", icon: <LuBinary size={20} className="text-[#F15A24]" />, desc: "BMR/BPR & Batch Traceability." },
    { name: "QA & QC", icon: <LuFileCheck size={20} className="text-blue-600" />, desc: "Lab Management & ROA/COA." },
    { name: "Inventory", icon: <LuDatabase size={20} className="text-[#F15A24]" />, desc: "Batch & FIFO Stock audits." },
    { name: "Purchase", icon: <LuFileSpreadsheet size={20} className="text-blue-600" />, desc: "Vendor & RFQ Cycles." },
    { name: "Warehouse", icon: <LuSmartphone size={20} className="text-[#F15A24]" />, desc: "Location WMS barcode trace." },
    { name: "Sales", icon: <LuUsers size={20} className="text-blue-600" />, desc: "Customer Order & Dispatch cycles." },
    { name: "Accounting", icon: <LuDollarSign size={20} className="text-[#F15A24]" />, desc: "GST tax, e-Way, ledger sync." },
    { name: "Logistics", icon: <LuClock size={20} className="text-blue-600" />, desc: "Dispatch tracks & shipping routes." }
  ];

  return (
    <div className="bg-slate-50/50 text-slate-800 font-sans selection:bg-[#1E3A8A] selection:text-white">

      {/* --- HERO SECTION --- */}
      <section className="relative px-6 py-16 lg:py-24 max-w-7xl mx-auto">
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-100/40 mix-blend-multiply filter blur-3xl -z-10 animate-pulse-slow" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-[#10B981]/10 mix-blend-multiply filter blur-3xl -z-10 animate-pulse-slow" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left select-none animate-fade-up">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-[12px] font-bold text-[#1E3A8A] shadow-xs">
              <LuSparkles size={13} className="animate-spin-slow text-[#F15A24]" /> Process Manufacturing Solution
            </div>
            
            <h1 className="text-[36px] sm:text-[46px] lg:text-[52px] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              The operating system for Indian <span className="bg-gradient-to-r from-blue-700 to-green-600 bg-clip-text text-transparent">Pharmaceutical & Process Manufacturing</span>
            </h1>
            
            <p className="text-[17px] font-bold text-[#0F223D]">
              Arming manufacturers with world-class FINAMAN ERP technology.
            </p>

            <div className="space-y-4 text-[14.5px] text-slate-600 leading-relaxed font-semibold">
              <p>
                FINAMAN ERP ensures complete compliance validation covering USFDA, WHO-GMP, and FSSAI parameters. We reduce manual errors, automate batch formulation scaling, and secure document records under role-based control limits.
              </p>
              <p>
                From Batch Manufacturing Records (BMR) and Batch Packing Records (BPR) to Laboratory Reports of Analysis (ROA/COA), FINAMAN integrates shop floor and compliance directly into a single automated engine.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <button
                onClick={() => navigate("/dashboard/overview")}
                className="flex items-center justify-center gap-2 rounded-full bg-[#1E3A8A] hover:bg-blue-900 px-7 py-4 text-[14.5px] font-bold text-white shadow-lg-blue transition-[#1E3A8A] duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                Log In & Get Free Trial
                <LuArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Key Modules Grid */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-[18px] font-bold text-[#0F223D] text-center lg:text-left">
              FINAMAN ERP Core Functional Modules
            </h3>
            
            <div className="grid grid-cols-3 gap-3">
              {modules.map((m) => (
                <div 
                  key={m.name} 
                  onClick={() => navigate("/dashboard/overview")}
                  className="bg-white rounded-xl border border-slate-200 p-3.5 flex flex-col items-center justify-center text-center shadow-xs cursor-pointer hover:border-blue-600 hover:shadow-md transition-all duration-305 aspect-square lg:aspect-auto group"
                >
                  <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-slate-50 group-hover:bg-blue-50 transition-colors mb-2">
                    {m.icon}
                  </div>
                  <span className="text-[12.5px] font-black text-[#0F223D] group-hover:text-blue-600">
                    {m.name}
                  </span>
                  <span className="text-[9.5px] text-slate-400 mt-1 select-none leading-tight font-medium hidden sm:block">
                    {m.desc}
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-dashed border-slate-350 p-4.5 bg-white/50 text-[13.5px] text-slate-550 leading-relaxed font-semibold">
              ⭐ **Compliance-First:** Master schedules and batch traceability systems developed specifically for API, Chemical, Cosmetics, Food, and Drug enterprises.
            </div>
          </div>

        </div>
      </section>

      {/* --- PHARMA & MANUFACTURING PROCESS --- */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#1E3A8A]">Target Verticals</span>
            <h2 className="text-[30px] font-extrabold text-slate-900 mt-2">Tailored Process Industries</h2>
            <p className="text-[14.5px] text-slate-550 mt-2 leading-relaxed">Built for manufacturers operating under strict local and international audits.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pharma */}
            <div className="bg-slate-50 border border-slate-150 rounded-xl p-5 hover:border-blue-600 transition-all">
              <span className="h-8 w-8 flex items-center justify-center rounded bg-blue-50 text-blue-600 font-bold mb-3">01</span>
              <h3 className="text-[16px] font-extrabold text-[#0F223D]">Pharmaceuticals</h3>
              <p className="text-[12px] text-slate-500 mt-2 font-semibold">
                WHO-GMP, USFDA, and Schedule M compliance. Automates Batch packing specifications, weight logs, and lab COA tests.
              </p>
            </div>

            {/* API */}
            <div className="bg-slate-50 border border-slate-150 rounded-xl p-5 hover:border-[#F15A24] transition-all">
              <span className="h-8 w-8 flex items-center justify-center rounded bg-orange-50 text-[#F15A24] font-bold mb-3">02</span>
              <h3 className="text-[16px] font-extrabold text-[#0F223D]">API & Bulk Drugs</h3>
              <p className="text-[12px] text-slate-500 mt-2 font-semibold">
                Solvent recovery calculations, raw material yield limits, and complete lot history controls.
              </p>
            </div>

            {/* Food */}
            <div className="bg-slate-50 border border-slate-150 rounded-xl p-5 hover:border-blue-600 transition-all">
              <span className="h-8 w-8 flex items-center justify-center rounded bg-blue-50 text-blue-600 font-bold mb-3">03</span>
              <h3 className="text-[16px] font-extrabold text-[#0F223D]">Food & Beverages</h3>
              <p className="text-[12px] text-slate-500 mt-2 font-semibold">
                Expiration alert systems, FSSAI quality parameters, chemical formulations, and allergen warnings.
              </p>
            </div>

            {/* Chemical */}
            <div className="bg-slate-50 border border-slate-150 rounded-xl p-5 hover:border-[#F15A24] transition-all">
              <span className="h-8 w-8 flex items-center justify-center rounded bg-orange-50 text-[#F15A24] font-bold mb-3">04</span>
              <h3 className="text-[16px] font-extrabold text-[#0F223D]">Chemical & Cosmetics</h3>
              <p className="text-[12px] text-slate-500 mt-2 font-semibold">
                Safety data sheets (MSDS) vaults, custom recipe scaling parameters, and weight metrics integration.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- BUSINESS ADVANTAGES PROMO --- */}
      <section className="bg-slate-900 text-white py-16 px-6 relative select-none">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#F15A24]">Logix Advantage</span>
            <h2 className="text-[32px] font-extrabold leading-tight">Elevating Global Quality and Cost Standards</h2>
            <p className="text-[15.5px] text-slate-400 leading-relaxed">
              We arm pharmaceutical and process manufacturing enterprises with tools to eliminate manual entries, run real-time checks, and verify material usage.
            </p>
            
            <div className="space-y-3.5">
              {[
                "USFDA Grade 21 CFR Part 11 electronic records readiness",
                "Strict batch control to guarantee zero contamination recalls",
                "Advanced Lab QA & Laboratory ROA/COA automation",
                "WMS Pro Location-based multi-tier warehouse barcodes"
              ].map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <LuCheck size={16} className="text-green-500" />
                  <span className="text-[13.5px] font-bold text-slate-200">{f}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate("/dashboard/overview")}
              className="mt-6 flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-3 font-semibold text-white transition-all duration-200"
            >
              Enter ERP Dashboard Portal
              <LuArrowRight size={15} />
            </button>
          </div>

          <div className="relative flex justify-center">
            {/* Detailed UI dashboard vector mockup representation */}
            <div className="w-full max-w-md bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700 p-4">
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <span className="text-[12px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
                  <LuActivity size={12} className="text-[#F15A24] animate-pulse" /> FINAMAN Lab QC Audit
                </span>
                <span className="text-[9.5px] bg-[#10B981]/20 text-[#10B981] font-bold px-2 py-0.5 rounded">Passed</span>
              </div>
              <div className="space-y-3 mt-4 text-[11px] text-slate-350 leading-relaxed font-mono">
                <p className="bg-slate-900/50 p-2 rounded">
                  Lot ID: <span className="text-white font-bold">API-2026-07Y</span><br />
                  Batch Yield: <span className="text-green-400 font-bold">98.4% Outturn</span>
                </p>
                <p className="bg-slate-900/50 p-2 rounded">
                  USFDA Audit trail: <span className="text-blue-400 font-bold flex items-center gap-1.5 mt-0.5"><LuShield size={12} /> Logged in SQL Vault</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- STATISTICS COUNTER SECTION --- */}
      <section className="bg-white border-t border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-2">
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#F15A24]">Track Record</span>
            <h3 className="text-[28px] font-extrabold text-slate-900">Proven ERP Operational Expertise</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-150">
              <LuAward size={24} className="mx-auto text-blue-600" />
              <span className="block text-[28px] font-black text-slate-900 mt-2 font-mono">15+</span>
              <span className="text-[10.5px] font-bold text-slate-450 uppercase mt-1 block">Years of Excellence</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-150">
              <LuUsers size={24} className="mx-auto text-[#F15A24]" />
              <span className="block text-[28px] font-black text-slate-900 mt-2 font-mono">135+</span>
              <span className="text-[10.5px] font-bold text-slate-450 uppercase mt-1 block">Active Enterprise Clients</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-150">
              <LuBinary size={24} className="mx-auto text-blue-600" />
              <span className="block text-[28px] font-black text-slate-900 mt-2 font-mono">100%</span>
              <span className="text-[10.5://] font-bold text-[#10B981] uppercase mt-1 block">USFDA / GMP Compliance</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-150">
              <LuBinary size={24} className="mx-auto text-[#F15A24]" />
              <span className="block text-[28px] font-black text-slate-900 mt-2 font-mono">15+</span>
              <span className="text-[10.5px] font-bold text-slate-450 uppercase mt-1 block">Integrated Modules</span>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER SITE --- */}
      <footer id="contact" className="border-t border-slate-205 bg-[#0F223D] text-slate-350 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 select-none">
          
          <div className="col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#10B981] text-white font-black text-[15px]">L</div>
              <span className="text-[18px] font-black text-white">Logix Infotech</span>
            </Link>
            <p className="text-[12.5px] text-slate-400 leading-relaxed max-w-sm">
              Logix Infotech has been arming process manufacturing enterprises with custom ERP products since 2009. We ensure zero batch contamination, clear inventory audits, and WHO-GMP audit readiness.
            </p>
          </div>

          <div>
            <p className="text-[12px] font-extrabold text-white mb-4 tracking-wider uppercase">Industries</p>
            <ul className="space-y-2 text-[12.5px] text-slate-400 font-semibold">
              <li><Link to="/dashboard/overview" className="hover:text-white">Pharmaceuticals</Link></li>
              <li><Link to="/dashboard/overview" className="hover:text-white">Chemical & Cosmetics</Link></li>
              <li><Link to="/dashboard/overview" className="hover:text-white">API Bulk Drugs</Link></li>
              <li><Link to="/dashboard/overview" className="hover:text-white">Food & Beverages</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-extrabold text-white mb-4 tracking-wider uppercase">Quick Links</p>
            <ul className="space-y-2 text-[12.5px] text-slate-400 font-semibold">
              <li><Link to="/dashboard/overview" className="hover:text-white">About Us</Link></li>
              <li><Link to="/dashboard/overview" className="hover:text-white">Our Clients</Link></li>
              <li><Link to="/dashboard/overview" className="hover:text-white">Careers</Link></li>
              <li><Link to="/dashboard/overview" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-extrabold text-white mb-4 tracking-wider uppercase">Contact Details</p>
            <div className="space-y-3 text-[12.5px] text-slate-400 font-semibold">
              <p className="flex items-center gap-1.5"><LuPhone size={13} className="text-white" /> (+91) 999 006 0300</p>
              <p className="flex items-center gap-1.5"><LuMail size={13} className="text-white" /> info@logixinfotech.in</p>
              <p className="leading-relaxed">
                <span className="block font-bold mt-1 text-white">Noida Office:</span>
                2nd floor, 213, C Block, Sector 63, Noida, Chotpur, Uttar Pradesh 201310.
              </p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] text-slate-500 font-semibold">
          <span>&copy; {new Date().getFullYear()} Logix Infotech. All Rights Reserved.</span>
          <div className="flex gap-4">
            <a href="#terms" className="hover:text-slate-350">Privacy Policy</a>
            <a href="#sitemap" className="hover:text-slate-350">Sitemap</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
