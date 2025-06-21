import { Menu, X } from "lucide-react";
import React, { useState } from "react";

import AboutSection from "./components/AboutSection";
import BernieSection from "./components/BernieSection";
import CallBotSection from "./components/CallBotSection";
import MemeGenSection from "./components/MemeGenSection";
import NpcsSection from "./components/NpcSection";
import WaylessSection from "./components/Wayless";

// Define your sections in one place
const SECTIONS = [
  { key: "about", label: "About", Component: AboutSection },
  { key: "npcs", label: "NPCs", Component: NpcsSection },
  { key: "callbot", label: "Call Bot", Component: CallBotSection },
  { key: "bernie", label: "Bernie", Component: BernieSection },
  { key: "memeGPT", label: "MemeGPT", Component: MemeGenSection },
  { key: "wayless", label: "Wayless", Component: WaylessSection },
] as const;

type SectionKey = (typeof SECTIONS)[number]["key"];

type SectionItem = (typeof SECTIONS)[number];

function App() {
  const [activeSection, setActiveSection] = useState<SectionKey>("about");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Get the component for the active section
  const ActiveComponent = SECTIONS.find(
    (s) => s.key === activeSection
  )?.Component;

  // Render navigation buttons from the SECTIONS array
  const renderNavButtons = (onClick: (key: SectionKey) => void) =>
    SECTIONS.map(({ key, label }) => (
      <button
        key={key}
        onClick={() => onClick(key)}
        className={`w-full text-left px-3 py-2 rounded transition-colors ${
          activeSection === key
            ? "bg-gray-100 text-gray-900"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        }`}
      >
        {label}
      </button>
    ));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="w-64 min-h-screen bg-white border-r border-gray-200 fixed lg:relative hidden lg:block">
          <div className="p-6">
            <h1 className="text-xl font-medium text-gray-900 mb-8">
              Prateek Sane
            </h1>
            <nav className="space-y-2">
              {renderNavButtons(setActiveSection)}
            </nav>
          </div>
        </aside>

        {/* Mobile Sidebar */}
        <div className="lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md border border-gray-200"
          >
            <Menu size={20} className="text-gray-600" />
          </button>

          {sidebarOpen && (
            <div className="fixed inset-0 z-40 flex">
              <div
                className="fixed inset-0 bg-black bg-opacity-25"
                onClick={() => setSidebarOpen(false)}
              />
              <aside className="relative w-64 bg-white border-r border-gray-200 shadow-lg">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <h1 className="text-xl font-medium text-gray-900">
                      Prateek Sane
                    </h1>
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className="p-1 text-gray-400 hover:text-gray-600"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <nav className="space-y-2">
                    {renderNavButtons(setActiveSection)}
                  </nav>
                </div>
              </aside>
            </div>
          )}
        </div>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-6 lg:p-12 lg:pt-12 pt-16">
          {ActiveComponent && <ActiveComponent />}
        </main>
      </div>
    </div>
  );
}

export default App;
