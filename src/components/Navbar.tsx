import { Menu, X, Cpu, GraduationCap, Award, Briefcase, FileText, User, FlaskConical, Layers, BookOpen, Mail } from 'lucide-react';
import { useState } from 'react';

type TabId = 'home' | 'about' | 'research' | 'products' | 'experience' | 'contact';

interface NavbarProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  personalName: string;
}

export default function Navbar({ activeTab, setActiveTab, personalName }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs: { id: TabId; label: string; icon: any }[] = [
    { id: 'home', label: 'Home', icon: Cpu },
    { id: 'about', label: 'About', icon: User },
    { id: 'research', label: 'Research', icon: GraduationCap },
    { id: 'products', label: 'Products', icon: Layers },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Connect', icon: Mail }
  ];

  const handleTabClick = (tabId: TabId) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="main-sticky-navbar"
      className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-stone-50/90 backdrop-blur-md transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left identity block */}
          <div className="flex flex-col select-none">
            <span
              id="navbar-full-name"
              className="text-lg font-bold tracking-tight text-slate-900 cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-1.5"
              onClick={() => handleTabClick('home')}
            >
              <span>{personalName}</span>
              <span className="text-xs font-medium text-slate-400 lowercase">(she/her)</span>
            </span>
            <span className="text-[10px] font-mono tracking-wider uppercase text-accent font-bold">
              AI Engineer & CV Researcher
            </span>
          </div>

          {/* Desktop Tab navigation */}
          <div className="hidden md:ml-6 md:flex md:space-x-1.5 items-center">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              const isConnect = tab.id === 'contact';

              if (isConnect) {
                return (
                  <button
                    key={tab.id}
                    id={`tab-btn-${tab.id}`}
                    onClick={() => handleTabClick(tab.id)}
                    className={`ml-2 flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full shadow-sm transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-accent text-white ring-4 ring-accent/15 hover:bg-accent-hover'
                        : 'bg-slate-900 text-white hover:bg-accent hover:shadow-md hover:-translate-y-0.5'
                    }`}
                  >
                    <TabIcon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              }

              return (
                <button
                  key={tab.id}
                  id={`tab-btn-${tab.id}`}
                  onClick={() => handleTabClick(tab.id)}
                  className={`relative flex items-center gap-1.5 px-3 py-2 text-sm font-semibold transition-all duration-300 rounded-lg cursor-pointer ${
                    isActive
                      ? 'text-accent bg-white shadow-xs border border-slate-100'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/50'
                  }`}
                >
                  <TabIcon className={`h-4 w-4 ${isActive ? 'text-accent' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile hamburger menu trigger */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-hamburger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus:outline-none cursor-pointer"
              aria-label="Open global menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu list */}
      {isMobileMenuOpen && (
        <div id="mobile-menu-drawer" className="md:hidden border-t border-slate-200/60 bg-stone-50 px-3 pt-3 pb-5 space-y-1.5">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            const isConnect = tab.id === 'contact';

            if (isConnect) {
              return (
                <div key={tab.id} className="pt-2 px-1">
                  <button
                    id={`mobile-tab-btn-${tab.id}`}
                    onClick={() => handleTabClick(tab.id)}
                    className={`flex w-full items-center justify-center gap-2.5 px-4 py-3 text-base font-bold rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-accent text-white shadow-md'
                        : 'bg-slate-900 text-white hover:bg-accent'
                    }`}
                  >
                    <TabIcon className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                </div>
              );
            }

            return (
              <button
                key={tab.id}
                id={`mobile-tab-btn-${tab.id}`}
                onClick={() => handleTabClick(tab.id)}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-base font-semibold rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-white text-accent border-l-4 border-accent shadow-xs'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <TabIcon className={`h-5 w-5 ${isActive ? 'text-accent' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
