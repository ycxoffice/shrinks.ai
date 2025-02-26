import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Brain,
  Search,
  Sparkles,
  ArrowRight,
  Braces,
  Lightbulb,
  Workflow,
  Heart,
  Dna,
  Activity,
  Globe2,
} from "lucide-react";

const InnovativeDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("digital");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-violet-500/30 rounded-full blur-[100px] -top-20 -left-20" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] top-40 right-0" />
        <div className="absolute w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-[100px] bottom-0 left-60" />
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Navigation - Split Design */}
        <nav className="fixed w-full z-50 bg-slate-900/50 backdrop-blur-xl">
          <div className="container mx-auto">
            <div className="flex items-center justify-between h-20 px-6">
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-3">
                  <Brain className="h-8 w-8 text-violet-400" />
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400">
                    Shrinks.ai
                  </span>
                </div>
                <div className="hidden md:flex space-x-1">
                  <NavPill active={true}>Directory</NavPill>
                  <NavPill>Research</NavPill>
                  <NavPill>Analytics</NavPill>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section - Asymmetric Design */}
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  The Future of
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400">
                    Health Tech
                  </span>
                </h1>
                <p className="text-slate-400 text-lg mb-8">
                  Discover and analyze innovative companies revolutionizing
                  healthcare through AI and technology.
                </p>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 rounded-2xl blur opacity-20" />
                  <div className="relative flex items-center justify-center bg-slate-800 rounded-2xl p-4">
                    <button
                      onClick={() => navigate("/companies")}
                      className="px-6 py-3 bg-gradient-to-r from-violet-500 to-blue-500 rounded-xl text-white font-medium shadow-lg hover:scale-105 transition-transform"
                    >
                      Explore Companies
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats Cluster */}
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <StatBox
                    number="500+"
                    label="HealthTech Companies"
                    icon={<Activity />}
                  />
                  <StatBox
                    number="250+"
                    label="AI Solutions"
                    icon={<Brain />}
                  />
                  <StatBox
                    number="1000+"
                    label="Clinical Studies"
                    icon={<Dna />}
                  />
                  <StatBox number="50+" label="Countries" icon={<Globe2 />} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs - Modern Design */}
        <div className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="flex space-x-4 mb-12 overflow-x-auto pb-4">
              <CategoryTab
                active={activeTab === "digital"}
                onClick={() => setActiveTab("digital")}
                icon={<Sparkles />}
                label="Digital Therapeutics"
              />
              <CategoryTab
                active={activeTab === "ai"}
                onClick={() => setActiveTab("ai")}
                icon={<Brain />}
                label="AI Solutions"
              />
              <CategoryTab
                active={activeTab === "telemed"}
                onClick={() => setActiveTab("telemed")}
                icon={<Activity />}
                label="Telemedicine"
              />
            </div>

            {/* Dynamic Content Area */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CompanyCluster
                title="Treatment Focus"
                items={["Depression & Anxiety", "PTSD", "Addiction Recovery"]}
                icon={<Heart />}
              />
              <CompanyCluster
                title="Tech Stack"
                items={[
                  "Machine Learning",
                  "Natural Language Processing",
                  "Predictive Analytics",
                ]}
                icon={<Braces />}
              />
              <CompanyCluster
                title="Integration"
                items={["EHR Systems", "Wearable Devices", "Healthcare APIs"]}
                icon={<Workflow />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavPill = ({ children, active }) => (
  <button
    className={`px-4 py-2 rounded-full text-sm transition-all ${
      active
        ? "bg-violet-500/20 text-violet-400"
        : "text-slate-400 hover:text-white"
    }`}
  >
    {children}
  </button>
);

const StatBox = ({ number, label, icon }) => (
  <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 rounded-lg bg-violet-500/20 text-violet-400">
        {icon}
      </div>
      <span className="text-2xl font-bold">{number}</span>
    </div>
    <p className="text-slate-400 text-sm">{label}</p>
  </div>
);

const CategoryTab = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-3 rounded-xl whitespace-nowrap transition-all ${
      active
        ? "bg-gradient-to-r from-violet-500 to-blue-500 text-white"
        : "bg-slate-800 text-slate-400 hover:text-white"
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const CompanyCluster = ({ title, items, icon }) => (
  <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-violet-500/50 transition-all group cursor-pointer">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-violet-500/20 text-violet-400">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-center text-slate-400 group-hover:text-white transition-colors"
        >
          <ArrowRight className="h-4 w-4 mr-2 text-violet-400" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default InnovativeDirectory;
