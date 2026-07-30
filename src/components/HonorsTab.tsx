import React, { useState, useEffect } from 'react';
import {
  Award,
  GraduationCap,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Search,
  Sparkles,
  Trophy,
  Landmark,
  Calendar,
  Camera,
  Medal,
  FileCheck,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkle
} from 'lucide-react';
import { honorsAwards } from '../data';
import { AwardItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface HonorsTabProps {
  onOpenLightbox: (src: string, alt: string) => void;
}

function WrenWinnerSlideshow({ onOpenLightbox, awardTitle }: { onOpenLightbox: (src: string, alt: string) => void; awardTitle: string }) {
  const slides = [
    { path: "./WREN preface.png", label: "Website Winner Announcement - Preface", filename: "WREN_PREFACE.PNG" },
    { path: "./WREN web.png", label: "Website Winner Announcement - Detail", filename: "WREN_WEB.PNG" }
  ];
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSlideIdx((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSlideIdx((prev) => (prev + 1) % slides.length);
  };

  const activeSlide = slides[slideIdx];

  return (
    <div
      onClick={() => onOpenLightbox(activeSlide.path, `${awardTitle} - ${activeSlide.label}`)}
      className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 p-2 shadow-xs hover:shadow-md transition-all duration-300 hover:scale-[1.01] cursor-zoom-in"
      title="Click to zoom in"
    >
      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-white relative flex items-center justify-center select-none">
        <AnimatePresence mode="wait">
          <motion.img
            key={slideIdx}
            src={activeSlide.path}
            alt={activeSlide.label}
            referrerPolicy="no-referrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full object-contain"
          />
        </AnimatePresence>

        <div className="absolute top-3 right-3 rounded-full bg-black/60 backdrop-blur-md p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <ZoomIn className="h-4 w-4" />
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-3 p-1.5 rounded-full bg-black/50 hover:bg-black/75 text-white hover:scale-105 active:scale-95 transition-all opacity-0 group-hover:opacity-100 duration-200 z-10 cursor-pointer"
          title="Previous Image"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 p-1.5 rounded-full bg-black/50 hover:bg-black/75 text-white hover:scale-105 active:scale-95 transition-all opacity-0 group-hover:opacity-100 duration-200 z-10 cursor-pointer"
          title="Next Image"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full z-10" onClick={(e) => e.stopPropagation()}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlideIdx(idx)}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                idx === slideIdx ? 'bg-white scale-110 px-1' : 'bg-white/40 hover:bg-white/80'
              }`}
              title={`Switch to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs px-1">
        <span className="font-bold text-slate-800 leading-none">{activeSlide.label}</span>
        <span className="text-[10px] font-mono font-bold text-slate-400">{activeSlide.filename}</span>
      </div>
    </div>
  );
}

function JkrCollaborationSlideshow({ onOpenLightbox, awardTitle, images }: { onOpenLightbox: (src: string, alt: string) => void; awardTitle: string; images: { path: string; label: string }[] }) {
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSlideIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSlideIdx((prev) => (prev + 1) % images.length);
  };

  const activeSlide = images[slideIdx];
  if (!activeSlide) return null;

  return (
    <div
      onClick={() => onOpenLightbox(activeSlide.path, `${awardTitle} - ${activeSlide.label}`)}
      className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 p-2 shadow-xs hover:shadow-md transition-all duration-300 hover:scale-[1.01] cursor-zoom-in"
      title="Click to zoom in"
    >
      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-white relative flex items-center justify-center select-none">
        <AnimatePresence mode="wait">
          <motion.img
            key={slideIdx}
            src={activeSlide.path}
            alt={activeSlide.label}
            referrerPolicy="no-referrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full object-contain"
            onError={(e) => {
              const seed = slideIdx === 0 ? 'collaboration' : 'present';
              e.currentTarget.src = `https://picsum.photos/seed/${seed}/600/450`;
            }}
          />
        </AnimatePresence>

        <div className="absolute top-3 right-3 rounded-full bg-black/60 backdrop-blur-md p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <ZoomIn className="h-4 w-4" />
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 p-1.5 rounded-full bg-black/50 hover:bg-black/75 text-white hover:scale-105 active:scale-95 transition-all opacity-0 group-hover:opacity-100 duration-200 z-10 cursor-pointer"
              title="Previous Image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 p-1.5 rounded-full bg-black/50 hover:bg-black/75 text-white hover:scale-105 active:scale-95 transition-all opacity-0 group-hover:opacity-100 duration-200 z-10 cursor-pointer"
              title="Next Image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full z-10" onClick={(e) => e.stopPropagation()}>
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlideIdx(idx)}
                className={`h-1.5 w-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  idx === slideIdx ? 'bg-white scale-110 px-1' : 'bg-white/40 hover:bg-white/80'
                }`}
                title={`Switch to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="mt-3 flex items-center justify-between text-xs px-1">
        <span className="font-bold text-slate-800 leading-none">{activeSlide.label}</span>
        <span className="text-[10px] font-mono font-bold text-slate-400">
          {activeSlide.path.split('/').pop()?.toUpperCase() || 'JKR_DOC.JPG'}
        </span>
      </div>
    </div>
  );
}

export default function HonorsTab({ onOpenLightbox }: HonorsTabProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'academic' | 'research' | 'collaboration'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Reverse chronological list from data.ts
  const filteredAwards = honorsAwards.filter((award) => {
    const matchesCategory = selectedCategory === 'all' || award.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      award.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      award.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
      award.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      award.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryCounts = {
    all: honorsAwards.length,
    academic: honorsAwards.filter((a) => a.category === 'academic').length,
    research: honorsAwards.filter((a) => a.category === 'research').length,
    collaboration: honorsAwards.filter((a) => a.category === 'collaboration').length,
  };

  const getIconForAward = (awardId: string) => {
    switch (awardId) {
      case 'award-convocation-2026':
        return <Trophy className="h-4 w-4 text-amber-400" />;
      case 'award-wren':
        return <Award className="h-4 w-4 text-sky-400" />;
      case 'award-jkr-collaboration':
        return <GraduationCap className="h-4 w-4 text-indigo-400" />;
      case 'award-deans-list':
        return <ShieldCheck className="h-4 w-4 text-emerald-400" />;
      case 'award-jcf-scholarship':
        return <Landmark className="h-4 w-4 text-purple-400" />;
      case 'award-presidents-award':
        return <Trophy className="h-4 w-4 text-amber-400" />;
      default:
        return <Medal className="h-4 w-4 text-slate-300" />;
    }
  };

  return (
    <div id="honors-tab-root" className="space-y-12">
      {/* Header Banner */}
      <section id="honors-hero-section" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
              <Trophy className="h-3.5 w-3.5 shrink-0" />
              <span>Honors Timeline & Proof Gallery</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              Honors & Academic Awards
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Chronological timeline of academic graduation sweeps, merit scholarships, international symposium presentation awards, and official national research collaborations.
            </p>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="rounded-xl border border-amber-200/80 bg-amber-50/50 p-4 shadow-xs flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-500/15 text-amber-700 border border-amber-500/30">
              <Trophy className="h-5 w-5" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">July 2026</div>
              <div className="text-xs font-semibold text-amber-800">Convocation Double #1</div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-600 border border-sky-500/20">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">100%</div>
              <div className="text-xs font-semibold text-slate-500">JCF Scholarship</div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">5 Semesters</div>
              <div className="text-xs font-semibold text-slate-500">Dean's List Award</div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-600 border border-purple-500/20">
              <Landmark className="h-5 w-5" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">4.00 / 4.00</div>
              <div className="text-xs font-semibold text-slate-500">Valedictorian FIST</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section id="honors-filter-bar" className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              All Awards ({categoryCounts.all})
            </button>
            <button
              onClick={() => setSelectedCategory('academic')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedCategory === 'academic'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              Academic Side ({categoryCounts.academic})
            </button>
            <button
              onClick={() => setSelectedCategory('research')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedCategory === 'research'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              Research & Symposiums ({categoryCounts.research})
            </button>
            <button
              onClick={() => setSelectedCategory('collaboration')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedCategory === 'collaboration'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              Collaborations ({categoryCounts.collaboration})
            </button>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[220px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Filter timeline awards..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="honors-timeline-section" className="relative pl-4 sm:pl-8 space-y-10">
        {/* Continuous Vertical Timeline Line */}
        <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-amber-400 via-slate-300 to-slate-200 -translate-x-1/2 pointer-events-none" />

        {filteredAwards.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-slate-200 rounded-2xl bg-white p-6 ml-4">
            <Award className="h-8 w-8 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-600">No honors match your current filter.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs font-bold text-accent hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredAwards.map((award) => {
            const isConvocation2026 = award.id === 'award-convocation-2026';

            return (
              <div
                key={award.id}
                id={`timeline-item-${award.id}`}
                className="relative pl-6 sm:pl-10 group"
              >
                {/* Timeline Dot Node */}
                <div className="absolute left-0 sm:left-0 top-6 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-white bg-slate-900 text-white flex items-center justify-center shadow-md z-10 group-hover:scale-110 transition-transform duration-300">
                  {getIconForAward(award.id)}
                </div>

                {/* Timeline Card */}
                <div
                  className={`rounded-2xl border p-6 sm:p-8 space-y-6 shadow-xs transition-all duration-300 ${
                    isConvocation2026
                      ? 'border-amber-300/80 bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 hover:border-amber-400 hover:shadow-md'
                      : 'border-slate-200 bg-white hover:border-accent/40 hover:shadow-md'
                  }`}
                >
                  {/* Card Header & Badges */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Year Badge */}
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold ${
                          isConvocation2026
                            ? 'bg-amber-500 text-white shadow-xs'
                            : 'bg-slate-900 text-white'
                        }`}>
                          <Calendar className="h-3 w-3 shrink-0" />
                          {award.year}
                        </span>

                        {award.badge && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 text-amber-800 border border-amber-500/20">
                            <Sparkles className="h-3 w-3 shrink-0 text-amber-500" />
                            {award.badge}
                          </span>
                        )}

                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-slate-100 text-slate-700 border border-slate-200">
                          {award.category || 'Academic'}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                        {award.title}
                      </h2>

                      <div className="text-sm font-semibold text-accent flex flex-wrap items-center gap-1.5">
                        <span>{award.event}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500">{award.issuer}</span>
                      </div>
                    </div>
                  </div>

                  {/* Special Convocation 2026 Double Honor Breakdown */}
                  {isConvocation2026 ? (
                    <div className="space-y-6">
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                        {award.description}
                      </p>

                      {/* Highlight Grid for the 2 Swept Honors */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                        <div className="rounded-xl border border-amber-300/80 bg-white/90 p-4 space-y-2 shadow-2xs">
                          <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider">
                            <Trophy className="h-4 w-4 shrink-0 text-amber-500" />
                            <span>Honor #1 — Computer Science Cohort</span>
                          </div>
                          <h3 className="font-extrabold text-slate-900 text-base">
                            Tan Sri Sir Jeffrey Cheah Scholastic Award
                          </h3>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            Ranked <strong className="text-slate-900 font-extrabold">1st</strong> among the entire Computer Science graduating cohort for achieving top academic standing.
                          </p>
                        </div>

                        <div className="rounded-xl border border-indigo-200 bg-white/90 p-4 space-y-2 shadow-2xs">
                          <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider">
                            <Medal className="h-4 w-4 shrink-0 text-indigo-500" />
                            <span>Honor #2 — Faculty Wide (UK Dual Degree)</span>
                          </div>
                          <h3 className="font-extrabold text-slate-900 text-base">
                            Lancaster University Chancellor Medal
                          </h3>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            Ranked <strong className="text-slate-900 font-extrabold">1st</strong> across the entire Faculty of Engineering and Technology, conferred by Lancaster University (UK).
                          </p>
                        </div>
                      </div>

                      {/* Requirement 3: Grid of 3 Image Placeholders for Convocation July 2026 */}
                      <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                          <span className="flex items-center gap-1.5 text-amber-900 font-bold">
                            <Camera className="h-3.5 w-3.5 text-amber-600" />
                            Official Convocation Media & Document Proofs
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-200/80 text-slate-600">
                            <Clock className="h-3 w-3" /> July 2026 Release
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {/* Placeholder 1: Stage Photo Pending */}
                          <div className="relative flex flex-col items-center justify-center text-center rounded-xl border-2 border-dashed border-slate-300/90 bg-slate-100/70 hover:bg-slate-100 p-6 transition-all duration-300 min-h-[160px] group">
                            <div className="p-3 rounded-full bg-slate-200 text-slate-500 group-hover:scale-110 group-hover:bg-amber-100 group-hover:text-amber-700 transition-all duration-300 mb-2">
                              <Camera className="h-6 w-6" />
                            </div>
                            <span className="text-xs font-black text-slate-800 tracking-tight">
                              Stage Photo Pending
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono mt-1">
                              STAGE_PHOTO_2026.JPG
                            </span>
                          </div>

                          {/* Placeholder 2: Medal Close-up Pending */}
                          <div className="relative flex flex-col items-center justify-center text-center rounded-xl border-2 border-dashed border-slate-300/90 bg-slate-100/70 hover:bg-slate-100 p-6 transition-all duration-300 min-h-[160px] group">
                            <div className="p-3 rounded-full bg-slate-200 text-slate-500 group-hover:scale-110 group-hover:bg-amber-100 group-hover:text-amber-700 transition-all duration-300 mb-2">
                              <Medal className="h-6 w-6" />
                            </div>
                            <span className="text-xs font-black text-slate-800 tracking-tight">
                              Medal Close-up Pending
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono mt-1">
                              MEDAL_CLOSEUP_2026.JPG
                            </span>
                          </div>

                          {/* Placeholder 3: Certificate Pending */}
                          <div className="relative flex flex-col items-center justify-center text-center rounded-xl border-2 border-dashed border-slate-300/90 bg-slate-100/70 hover:bg-slate-100 p-6 transition-all duration-300 min-h-[160px] group">
                            <div className="p-3 rounded-full bg-slate-200 text-slate-500 group-hover:scale-110 group-hover:bg-amber-100 group-hover:text-amber-700 transition-all duration-300 mb-2">
                              <FileCheck className="h-6 w-6" />
                            </div>
                            <span className="text-xs font-black text-slate-800 tracking-tight">
                              Certificate Pending
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono mt-1">
                              SCHOLASTIC_CERT_2026.PDF
                            </span>
                          </div>
                        </div>

                        <p className="text-[11px] text-slate-400 text-center font-medium italic">
                          Official graduation photography and physical certificate scans will be uploaded following the July 2026 convocation ceremony.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Standard Description */}
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {award.id === 'award-wren' ? (
                          <>
                            Awarded for outstanding research presentation on{' '}
                            <strong className="font-extrabold text-slate-900">
                              'Advancing Smart Traffic Infrastructure with AI-based Vehicle Detection Across Computing Configurations'
                            </strong>
                            . An exclusive one-on-one career development session with{' '}
                            <a
                              href="https://shelda.debowski.com.au/about/"
                              target="_blank"
                              rel="noreferrer"
                              className="font-extrabold text-sky-600 hover:underline inline-flex items-center gap-0.5"
                            >
                              Dr. Shelda Debowski
                              <ExternalLink className="h-3 w-3 inline-block shrink-0" />
                            </a>{' '}
                            was conducted as recognition of the award.{' '}
                            Dr. Debowski is a renowned expert in academic career development, leadership, and research strategy, offering valuable insights to guide future academic pathways.
                          </>
                        ) : (
                          award.description
                        )}
                      </p>

                      {/* Image Gallery / Slideshow for Existing Awards */}
                      <div
                        id={`${award.id}-gallery-grid`}
                        className={`grid grid-cols-1 ${
                          (award.images.length > 1 && award.id !== 'award-jkr-collaboration') || award.id === 'award-wren' ? 'md:grid-cols-2' : 'max-w-xl mx-auto'
                        } gap-6`}
                      >
                        {award.id === 'award-jkr-collaboration' ? (
                          <JkrCollaborationSlideshow
                            onOpenLightbox={onOpenLightbox}
                            awardTitle={award.title}
                            images={award.images}
                          />
                        ) : (
                          <>
                            {/* First Image */}
                            {award.images[0] && (
                              <div
                                onClick={() => onOpenLightbox(award.images[0].path, `${award.title} - ${award.images[0].label}`)}
                                className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 p-2 shadow-xs hover:shadow-md transition-all duration-300 hover:scale-[1.01] cursor-zoom-in"
                                title="Click to zoom in"
                              >
                                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-white relative flex items-center justify-center">
                                  <img
                                    src={award.images[0].path}
                                    alt={award.images[0].label}
                                    referrerPolicy="no-referrer"
                                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                                    onError={(e) => {
                                      if (award.id === 'award-wren') {
                                        e.currentTarget.src = './WREN cert.png';
                                      } else {
                                        const seed = award.id;
                                        e.currentTarget.src = `https://picsum.photos/seed/${seed}/600/450`;
                                      }
                                    }}
                                  />
                                  <div className="absolute top-3 right-3 rounded-full bg-black/60 backdrop-blur-md p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ZoomIn className="h-4 w-4" />
                                  </div>
                                </div>
                                <div className="mt-3 flex items-center justify-between text-xs px-1">
                                  <span className="font-bold text-slate-800 leading-none">{award.images[0].label}</span>
                                  <span className="text-[10px] font-mono font-bold text-slate-400">
                                    {award.images[0].path.split('/').pop()?.toUpperCase() || 'DOCUMENT.PNG'}
                                  </span>
                                </div>
                              </div>
                            )}

                            {/* Second Image or WREN Slideshow */}
                            {award.id === 'award-wren' ? (
                              <WrenWinnerSlideshow onOpenLightbox={onOpenLightbox} awardTitle={award.title} />
                            ) : (
                              award.images[1] && (
                                <div
                                  onClick={() => onOpenLightbox(award.images[1].path, `${award.title} - ${award.images[1].label}`)}
                                  className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 p-2 shadow-xs hover:shadow-md transition-all duration-300 hover:scale-[1.01] cursor-zoom-in"
                                  title="Click to zoom in"
                                >
                                  <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-white relative flex items-center justify-center">
                                    <img
                                      src={award.images[1].path}
                                      alt={award.images[1].label}
                                      referrerPolicy="no-referrer"
                                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                                    />
                                    <div className="absolute top-3 right-3 rounded-full bg-black/60 backdrop-blur-md p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                      <ZoomIn className="h-4 w-4" />
                                    </div>
                                  </div>
                                  <div className="mt-3 flex items-center justify-between text-xs px-1">
                                    <span className="font-bold text-slate-800 leading-none">{award.images[1].label}</span>
                                    <span className="text-[10px] font-mono font-bold text-slate-400">
                                      {award.images[1].path.split('/').pop()?.toUpperCase() || 'DOCUMENT.PNG'}
                                    </span>
                                  </div>
                                </div>
                              )
                            )}
                          </>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 text-center font-medium mt-2">
                        Click any certificate or photo above to view full-size high-resolution document.
                      </p>
                    </>
                  )}
                </div>
              </div>
            );
          })
        )}
      </section>
    </div>
  );
}
