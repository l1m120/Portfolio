import { Mail, Phone, MapPin, Github, Linkedin, Award, Database, Terminal, Cpu, Zap, ArrowRight, FileText, Download, Target, ChevronRight, CheckCircle, ExternalLink, HelpCircle, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data';
import { motion } from 'motion/react';

interface HomeTabProps {
  onOpenLightbox: (src: string, alt: string) => void;
  setActiveTab: (tab: 'home' | 'about' | 'research' | 'products' | 'experience' | 'contact') => void;
}

export default function HomeTab({ onOpenLightbox, setActiveTab }: HomeTabProps) {
  // Statistics as listed in prompts
  const quickStats = [
    { label: "CGPA", value: "3.98/4.00", desc: "Top overall graduation merit" },
    { label: "Research Publications", value: "2+", desc: "Q2 Journal Co-first and preparation" },
    { label: "Dataset Size", value: "9,000+", desc: "Local bounding annotations (MY-VID)" },
    { label: "Conference Presentations", value: "2+", desc: "UoW WREN and IWAIT events" },
    { label: "Years AI R&D Experience", value: "2+", desc: "Cooperative research and analytics" },
    { label: "AI Models Developed", value: "100+", desc: "CV, Object Trackers and MLOps APIs" },
  ];

  // Specific Featured Highlights
  const featuredHighlights = [
    {
      id: "my-vid",
      title: "1. MY-VID Dataset",
      desc: "First open-source Malaysian vehicle dataset hosting 9,000 annotated targets to bridge Southeast Asian ITS gaps.",
      badge: "Open Source",
      actionText: "Check Dataset",
      tab: "research" as const,
      href: "https://doi.org/10.5281/zenodo.16866508",
    },
    {
      id: "wise-ai",
      title: "2. AI Engineering Internship",
      desc: "Industrial deployment at WISE AI Malaysia. Achieved 40% inference speed speed-up through open-source model optimization and Dockerization.",
      badge: "MLOps",
      actionText: "View Internship Experience",
      tab: "experience" as const,
    },
    {
      id: "traffic-detect",
      title: "3. Traffic Detection Research",
      desc: "Custom YOLO-based intelligent transportation architectures fine-tuned directly for local lanes and tropical storm scenarios.",
      badge: "ITS Systems",
      actionText: "See Benchmarks",
      tab: "research" as const,
    },
    {
      id: "uav-flood",
      title: "4. UAV Flood Response Research",
      desc: "Assessing computer vision tracking algorithms on high-debris flood water maps for Malaysian rescue operations.",
      badge: "Disaster Management",
      actionText: "See Systematic Review",
      tab: "research" as const,
    },
    {
      id: "open-source",
      title: "5. Open Source Contributions",
      desc: "Publishing localized weights, evaluation notebooks, and public database baselines to Zenodo repositories.",
      badge: "Contributions",
      actionText: "Explore Publications",
      tab: "research" as const,
    }
  ];

  return (
    <div id="home-tab-container" className="space-y-16 py-4">
      {/* SECTION 1: Two Column Hero banner */}
      <section id="hero-two-column-section" className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
        {/* Left Column: Text, Subtitle, Bullet objective, Action Buttons */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 border border-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></span>
              Bridging Academic Rigor + Product Deployment
            </span>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Hi, I'm Zi Xuan
            </h1>

            <h3 className="text-lg sm:text-xl font-bold text-accent">
              AI Engineer | Computer Vision Researcher | Future PhD Candidate
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
              Building intelligent systems for Smart Cities, Transportation, and Disaster Response using Artificial Intelligence, Computer Vision, and Multimodal Learning.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setActiveTab('research')}
              className="group flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-slate-900 rounded-lg hover:bg-accent hover:border-accent shadow-md cursor-pointer transition-all"
            >
              <span>View Research</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => setActiveTab('experience')}
              className="flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition-all"
            >
              <span>View Experience</span>
            </button>

            <a
              href="/ZiXuanLim_CV.pdf"
              download="ZiXuanLim_CV.pdf"
              className="flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer transition-all"
            >
              <Download className="h-4 w-4 text-slate-400" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Elegant row of social and contact icons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-200">
            <div className="flex flex-row gap-5 items-center text-slate-500">
              <a
                href="https://www.linkedin.com/in/z-l-660b66188/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="hover:text-accent hover:scale-110 transition-all duration-200 cursor-pointer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/l1m120"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repositories"
                className="hover:text-accent hover:scale-110 transition-all duration-200 cursor-pointer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://scholar.google.com/citations?hl=en&user=IWveSXYAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                title="Google Scholar Profile"
                className="hover:text-accent hover:scale-110 transition-all duration-200 cursor-pointer flex items-center"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 11.233c-3.085 0-5.586 2.5-5.586 5.585s2.5 5.586 5.586 5.586 5.586-2.5 5.586-5.586-2.5-5.585-5.586-5.585zM12 0l-12 9.5 5.586 4.43c1.063-2.43 3.498-4.135 6.414-4.135s5.351 1.705 6.414 4.135l5.586-4.43z" />
                </svg>
              </a>
              <a
                href="https://orcid.org/0009-0003-7356-3912"
                target="_blank"
                rel="noopener noreferrer"
                title="ORCID iD Profile"
                className="hover:text-accent hover:scale-110 transition-all duration-200 cursor-pointer flex items-center"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM8.207 18.69H6.77V7.12h1.437v11.57zM7.488 5.36c-.469 0-.85-.381-.85-.85 0-.469.381-.85.85-.85.47 0 .85.381.85.85 0 .469-.38.85-.85.85zm10.302 7.02c0 3.75-2.58 6.31-6.17 6.31h-3.41v-11.57h3.41c3.54 0 6.17 2.47 6.17 6.31-1.025-1.025 0 0 0 0zm-1.42 0c0-2.81-1.63-4.87-4.43-4.87h-1.92v9.74h1.92c2.81 0 4.43-2.07 4.43-4.87z" />
                </svg>
              </a>
              <a
                href={`mailto:lzx040921@gmail.com`}
                title="Email Address"
                className="hover:text-accent hover:scale-110 transition-all duration-200 cursor-pointer"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            {/* Location row */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 font-mono">
              <MapPin className="h-3.5 w-3.5 text-slate-300" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Education Snapshot */}
          <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-col xl:flex-row xl:items-center justify-between gap-x-6 gap-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-600">
                <GraduationCap className="h-4.5 w-4.5 text-accent shrink-0" />
                <span>
                  <span className="font-semibold text-slate-900">BSc (Hons) Computer Science</span>, Sunway University <span className="text-slate-300 font-normal mx-1">|</span> CGPA: <span className="font-bold text-slate-800">3.98/4.00</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-600 sm:border-l sm:border-slate-200 sm:pl-6">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                <span className="font-semibold text-slate-900">Incoming Direct PhD Candidate</span>
              </div>
            </div>

            <button
              onClick={() => {
                sessionStorage.setItem('scrollToEducationGallery', 'true');
                setActiveTab('about');
              }}
              className="self-start xl:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 hover:bg-accent text-accent hover:text-white border border-accent/20 hover:border-accent text-xs font-bold rounded-lg cursor-pointer transition-all duration-200 shadow-xs hover:shadow-md shrink-0"
              title="Explore academic credentials and certificates"
            >
              <span>Explore Education</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Right Column: Premium Portrait Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative">
            {/* Aesthetic architectural outlines */}
            <div className="absolute -top-3 -left-3 h-full w-full rounded-2xl border-2 border-dashed border-accent/40 bg-radial from-stone-100 to-transparent"></div>
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-purple-200/10 blur-xl"></div>

            <div
              id="hero-image-frame"
              className="relative overflow-hidden rounded-2xl border-4 border-white bg-slate-50 p-1 shadow-xl transition-all duration-300 select-none"
              onContextMenu={(e) => e.preventDefault()}
            >
              {/* Invisible shield to prevent target context right-clicking, copying, or dragging the image */}
              <div className="absolute inset-0 z-10 bg-transparent" />

              <img
                src="/zx.jpeg"
                alt="Zi Xuan Lim"
                referrerPolicy="no-referrer"
                className="h-80 w-80 sm:h-96 sm:w-96 rounded-xl object-cover select-none pointer-events-none"
                draggable="false"
                onDragStart={(e) => e.preventDefault()}
                onContextMenu={(e) => e.preventDefault()}
                onError={(e) => {
                  e.currentTarget.src = 'https://picsum.photos/seed/zixuan/600/600';
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/40 backdrop-blur-md p-3 border border-white/10 text-white shadow-lg z-20">
                <p className="text-sm font-bold tracking-wide">Zi Xuan Lim</p>
                <div className="flex justify-between items-center text-[10px] text-slate-200">
                  <span>Sunway CS Alumna</span>
                  <span className="font-mono font-bold text-accent-light">CGPA: 3.98</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Quick Statistics Section */}
      <section id="statistics-metric-section" className="space-y-6">
        <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
          <h3 className="text-xl font-extrabold text-slate-900 font-sans">Research & Project Statistics</h3>
          <span className="text-[10px] font-mono text-slate-400">BENCHMARK PERFORMANCE INDEX</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {quickStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-slate-200 rounded-xl p-4 space-y-2 text-left shadow-xs hover:border-accent/40 transition-colors"
            >
              <span className="block text-2xl sm:text-3xl font-mono font-extrabold text-slate-900 tracking-tight">{stat.value}</span>
              <div className="space-y-0.5">
                <span className="block text-xs font-bold text-slate-600 leading-tight">{stat.label}</span>
                <span className="block text-[10px] text-slate-400">{stat.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Featured Highlights Selection */}
      <section id="featured-highlights-section" className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h3 className="text-xl font-extrabold text-slate-900 font-sans">Featured Highlights</h3>
          <p className="text-xs text-slate-500">Selected portfolios documenting core publications, active datasets, and industrial optimizations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredHighlights.map((high) => (
            <div
              key={high.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-accent/10 text-accent border border-accent/20">
                    {high.badge}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm tracking-tight">{high.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  {high.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                {high.href ? (
                  <a
                    href={high.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-accent hover:text-accent-hover transition-colors cursor-pointer"
                  >
                    <span>{high.actionText}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      setActiveTab(high.tab);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-1.5 text-[11px] font-bold text-accent hover:text-accent-hover transition-colors cursor-pointer"
                  >
                    <span>{high.actionText}</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: Current Focus Timeline */}
      <section id="current-focus-timeline-section" className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h3 className="text-xl font-extrabold text-slate-900 font-sans">Current Focus (2026 Roadmap)</h3>
          <p className="text-xs text-slate-500">Continuous execution target nodes matching postgraduate scopes</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Year Badge */}
            <div className="md:col-span-3 text-left md:text-center space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-slate-900 font-mono">2026</span>
              <span className="block text-[10px] text-accent uppercase font-mono tracking-widest font-bold">Continuous Track</span>
            </div>

            {/* Target Checklist bullets */}
            <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-blue-50/50 border border-blue-100 rounded-xl shadow-xs">
                <Target className="h-4.5 w-4.5 text-blue-500 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h5 className="font-bold text-slate-800 text-xs sm:text-sm">AI Engineering</h5>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">Continuous validation of lightweight face classifiers and eKYC security layers under high speed requirements.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-purple-50/50 border border-purple-100 rounded-xl shadow-xs">
                <Target className="h-4.5 w-4.5 text-purple-500 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h5 className="font-bold text-slate-800 text-xs sm:text-sm">Computer Vision</h5>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">Publishing YOLO11 evaluation weights and comparing on-board drone frame latency thresholds.</p>
                </div>
              </div>

              {/*<div className="flex items-start gap-3 p-4 bg-amber-50/40 border border-amber-100 rounded-xl">
                <Target className="h-4.5 w-4.5 text-amber-500 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h5 className="font-bold text-slate-800 text-xs sm:text-sm">Smart Cities</h5>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">Co-developing intelligent local transportation frameworks with regional government engineering divisions.</p>
                </div>
              </div> */}

              <div className="flex items-start gap-3 p-4 bg-amber-50/40 border border-amber-100 rounded-xl shadow-xs">
                <Target className="h-4.5 w-4.5 text-amber-500 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h5 className="font-bold text-slate-800 text-xs sm:text-sm">Direct PhD Preparation</h5>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">Writing postgraduate proposals targeting Sunway Labs under industry eKYC/VLM sponsorships.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-rose-50/50 border border-rose-100 rounded-xl shadow-xs">
                <Target className="h-4.5 w-4.5 text-rose-500 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h5 className="font-bold text-slate-800 text-xs sm:text-sm">Flood Response Research</h5>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">Completing systematic literature review mapping deep learning models under flash monsoon water scenarios.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
