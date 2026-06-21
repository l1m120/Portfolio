import { useState } from 'react';
import Navbar from './components/Navbar';
import HomeTab from './components/HomeTab';
import AboutTab from './components/AboutTab';
import ResearchTab from './components/ResearchTab';
import ProductsTab from './components/ProductsTab';
import ExperienceTab from './components/ExperienceTab';
import ContactTab from './components/ContactTab';
import Lightbox from './components/Lightbox';
import { personalInfo } from './data';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Cpu } from 'lucide-react';

type TabId = 'home' | 'about' | 'research' | 'products' | 'experience' | 'contact';

export default function App() {
  // Tab selector state
  const [activeTab, setActiveTab] = useState<TabId>('home');

  // Image zoom lightbox states
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>('');

  const handleOpenLightbox = (src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div
      id="applet-viewport-root"
      className="min-h-screen bg-stone-50 text-slate-900 font-sans flex flex-col justify-between selection:bg-accent/30 selection:text-slate-950"
    >
      {/* Sticky Top-level navigation bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        personalName={personalInfo.name}
      />

      {/* Main Content Area Stage wrapped in animated container */}
      <main id="app-content-frame" className="flex-grow py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {activeTab === 'home' && (
                <HomeTab
                  onOpenLightbox={handleOpenLightbox}
                  setActiveTab={setActiveTab}
                />
              )}
              {activeTab === 'about' && (
                <AboutTab onOpenLightbox={handleOpenLightbox} />
              )}
              {activeTab === 'research' && (
                <ResearchTab onOpenLightbox={handleOpenLightbox} />
              )}
              {activeTab === 'products' && (
                <ProductsTab />
              )}
              {activeTab === 'experience' && (
                <ExperienceTab onOpenLightbox={handleOpenLightbox} />
              )}
              {activeTab === 'contact' && (
                <ContactTab />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Premium Multi-column Footer */}
      <footer
        id="global-academic-footer"
        className="bg-white border-t border-slate-200 py-12 mt-16 text-slate-500"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Identity Column */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-slate-100 p-1.5 text-accent">
                  <Cpu className="h-5 w-5" />
                </div>
                <span className="font-bold text-slate-800 text-base tracking-tight">{personalInfo.name}</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
                AI Engineer and Computer Science researcher specializing in Computer Vision, Vision-Language Models, and edge deployment automation. Currently pursuing academic and industry research pathways.
              </p>
            </div>

            {/* Quick Navigation Links */}
            <div className="md:col-span-4 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-2">
                  Directory
                </span>
                <ul className="space-y-1.5 text-xs font-semibold">
                  <li>
                    <button
                      onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="hover:text-accent transition-colors cursor-pointer"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="hover:text-accent transition-colors cursor-pointer"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => { setActiveTab('research'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="hover:text-accent transition-colors cursor-pointer"
                    >
                      Research
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-transparent selection:text-transparent mb-2">
                  _
                </span>
                <ul className="space-y-1.5 text-xs font-semibold">
                  <li>
                    <button
                      onClick={() => { setActiveTab('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="hover:text-accent transition-colors cursor-pointer"
                    >
                      Products
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => { setActiveTab('experience'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="hover:text-accent transition-colors cursor-pointer"
                    >
                      Experience
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="hover:text-accent transition-colors cursor-pointer"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Reach out and Contact details */}
            <div className="md:col-span-4 space-y-3">
              <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1">
                Academic & Industry Contact
              </span>
              <div className="space-y-2.5 text-xs font-semibold text-slate-400">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0 text-slate-300" />
                  <span className="text-slate-600">{personalInfo.email}</span>
                </a>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-slate-300" />
                  <span className="text-slate-600">{personalInfo.phone}</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-slate-300" />
                  <span className="text-slate-600">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-slate-400">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </span>
            <div className="flex gap-4">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-slate-800 transition-colors">
                <Github className="h-4.5 w-4.5" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-800 transition-colors">
                <Linkedin className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Image Zooming Lightbox Modal */}
      <Lightbox
        isOpen={isLightboxOpen}
        src={lightboxSrc}
        alt={lightboxAlt}
        onClose={handleCloseLightbox}
      />
    </div>
  );
}
