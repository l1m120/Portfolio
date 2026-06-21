import { GraduationCap, Award, FileText, Download, Eye, ExternalLink, ChevronLeft, ChevronRight, BookOpen, Layers, ZoomIn, Maximize2, Minimize2 } from 'lucide-react';
import { publications, educationHistory, honorsAwards } from '../data';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ResearchTabProps {
  onOpenLightbox: (src: string, alt: string) => void;
}

function WrenWinnerSlideshow({ onOpenLightbox, awardTitle }: { onOpenLightbox: (src: string, alt: string) => void; awardTitle: string }) {
  const slides = [
    { path: "/WREN preface.png", label: "Website Winner Announcement - Preface", filename: "WREN_PREFACE.PNG" },
    { path: "/WREN web.png", label: "Website Winner Announcement - Detail", filename: "WREN_WEB.PNG" }
  ];
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds interval for auto-sliding
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

        {/* Zoom Icon Overlay */}
        <div className="absolute top-3 right-3 rounded-full bg-black/60 backdrop-blur-md p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <ZoomIn className="h-4 w-4" />
        </div>

        {/* Navigation Arrows */}
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

        {/* Slide Indicator Dots Overlay */}
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
    }, 4000); // 4 seconds interval for auto-sliding
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

        {/* Zoom Icon Overlay */}
        <div className="absolute top-3 right-3 rounded-full bg-black/60 backdrop-blur-md p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <ZoomIn className="h-4 w-4" />
        </div>

        {/* Navigation Arrows */}
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

        {/* Slide Indicator Dots Overlay */}
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
          {activeSlide.path.split('/').pop()?.toUpperCase() || `JKR_PIC_${slideIdx + 1}.JPG`}
        </span>
      </div>
    </div>
  );
}

function EducationDocumentShowcase({ onOpenLightbox, degreeTitle }: { onOpenLightbox: (src: string, alt: string) => void; degreeTitle: string }) {
  const [activeCategory, setActiveCategory] = useState<'transcript' | 'jcf' | 'deansList'>('transcript');
  const [currentIndex, setCurrentIndex] = useState(0);

  const documents = {
    transcript: ['/public/degree-transcript.jpg'],
    jcf: ['/JCF cert.jpg'],
    deansList: [
      '/DeanList-Apr2024.pdf.jpg',
      '/DeanList-Sept2024.pdf.jpg',
      '/DeanList-Feb2025.pdf.jpg',
      '/DeanList-Apr2025.pdf.jpg',
      '/DeanList-Sept2025.pdf.jpg'
    ]
  };

  const activeCategoryList = documents[activeCategory];
  const activeImagePath = activeCategoryList[currentIndex] || activeCategoryList[0] || '';
  const isPdf = activeImagePath.toLowerCase().endsWith('.pdf');

  // To be perfectly robust for the development build and lightbox,
  // we can resolve the public/ asset prefix to root when loading/rendering
  const getRenderPath = (path: string) => {
    if (path.startsWith('/public/')) {
      return path.replace(/^\/public/, '');
    }
    return path;
  };

  const getLabel = () => {
    switch (activeCategory) {
      case 'transcript':
        return 'Official Transcript';
      case 'jcf':
        return 'JCF Scholarship Certificate';
      case 'deansList':
        return `Dean's List Certificate (Semester ${currentIndex + 4})`;
      default:
        return 'Education Document';
    }
  };

  const getFilenameForDisplay = () => {
    const filename = activeImagePath.split('/').pop() || '';
    return filename.toUpperCase();
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? activeCategoryList.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % activeCategoryList.length);
  };

  const selectCategory = (category: 'transcript' | 'jcf' | 'deansList') => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };

  return (
    <div className="lg:col-span-4 flex flex-col justify-start items-center w-full max-w-[340px] mx-auto space-y-4">
      {/* The Image Frame - maintaining large, rounded container with subtle shadow */}
      <div
        onClick={() => onOpenLightbox(getRenderPath(activeImagePath), `${degreeTitle} - ${getLabel()}`)}
        className="group relative overflow-hidden rounded-xl border border-slate-200/85 bg-slate-50 p-1 cursor-zoom-in shadow-xs hover:shadow-md transition-shadow w-full aspect-[1/1.414]"
        title="Click to zoom certificate"
      >
        <div className="w-full h-full overflow-hidden rounded-lg bg-white relative flex items-center justify-center select-none animate-fade-in">
          {isPdf ? (
            <iframe
              src={`${getRenderPath(activeImagePath)}#toolbar=0&navpanes=0`}
              className="w-full h-full rounded-lg bg-white border-0"
              title={getLabel()}
            />
          ) : (
            <AnimatePresence mode="wait">
              <motion.img
                key={`${activeCategory}-${currentIndex}`}
                src={getRenderPath(activeImagePath)}
                alt={getLabel()}
                referrerPolicy="no-referrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full w-full object-contain"
                onError={(e) => {
                  // Highly robust fallback mechanism: use Picsum when local files do not exist yet (portrait dimension)
                  const seed = activeCategory === 'transcript' ? 'transcript-doc' : activeCategory === 'jcf' ? 'jcf-cert' : `deanslist-term-${currentIndex + 4}`;
                  e.currentTarget.src = `https://picsum.photos/seed/${seed}/600/850`;
                }}
              />
            </AnimatePresence>
          )}

          {/* Zoom Icon Overlay - Fully clickable button above iframe or image overlay */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenLightbox(getRenderPath(activeImagePath), `${degreeTitle} - ${getLabel()}`);
            }}
            className="absolute top-2 right-2 rounded-full bg-slate-900/80 hover:bg-slate-950 p-2 text-white hover:scale-105 active:scale-95 transition-all z-20 shadow-lg border-0 cursor-pointer"
            title="Open in full-screen viewer"
          >
            <ZoomIn className="h-4 w-4" />
          </button>

          {/* Carousel Controls (Dean's List arrows overlay) */}
          {activeCategory === 'deansList' && activeCategoryList.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 p-1 rounded-full bg-black/50 hover:bg-black/75 text-white text-opacity-90 hover:text-opacity-100 hover:scale-105 active:scale-95 transition-all z-10 cursor-pointer border-0"
                title="Previous award"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 p-1 rounded-full bg-black/50 hover:bg-black/75 text-white text-opacity-90 hover:text-opacity-100 hover:scale-105 active:scale-95 transition-all z-10 cursor-pointer border-0"
                title="Next award"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </>
          )}

          {/* Dot indicators overlay for Dean's List (5 dots) */}
          {activeCategory === 'deansList' && activeCategoryList.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-1 rounded-full z-10" onClick={(e) => e.stopPropagation()}>
              {activeCategoryList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-200 cursor-pointer border-0 ${
                    idx === currentIndex ? 'bg-white scale-110 px-1' : 'bg-white/40 hover:bg-white/80'
                  }`}
                  title={`Show Semester ${idx + 4} Certificate`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* The Category Switcher: small elegant pill-shaped buttons */}
      <div className="flex w-full justify-between gap-1 p-1 bg-slate-100/80 border border-slate-200/50 rounded-lg">
        <button
          onClick={() => selectCategory('transcript')}
          className={`flex-1 py-1 px-0.5 text-[11px] font-bold rounded-md transition-all cursor-pointer text-center ${
            activeCategory === 'transcript'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          Transcript
        </button>
        <button
          onClick={() => selectCategory('jcf')}
          className={`flex-1 py-1 px-0.5 text-[11px] font-bold rounded-md transition-all cursor-pointer text-center ${
            activeCategory === 'jcf'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          JCF Scholar
        </button>
        <button
          onClick={() => selectCategory('deansList')}
          className={`flex-1 py-1 px-0.5 text-[11px] font-bold rounded-md transition-all cursor-pointer text-center ${
            activeCategory === 'deansList'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          Dean's List
        </button>
      </div>

      {/* Label and Filename section */}
      <div className="w-full text-center select-none">
        <div className="text-[11px] font-bold text-slate-800 tracking-tight leading-snug">
          {getLabel()}
        </div>
        <div className="text-[9px] font-mono font-bold text-slate-400 mt-1">
          {getFilenameForDisplay()}
        </div>
      </div>
    </div>
  );
}

function FistDocumentShowcase({ onOpenLightbox, degreeTitle }: { onOpenLightbox: (src: string, alt: string) => void; degreeTitle: string }) {
  const [activeCategory, setActiveCategory] = useState<'transcript' | 'presidentsAward'>('transcript');

  const documents = {
    transcript: '/FIST Trancsript.jpg',
    presidentsAward: '/FIST Presidents Award.jpg'
  };

  const activeImagePath = documents[activeCategory];

  // To be perfectly robust for the development build and lightbox,
  // we can resolve the public/ asset prefix to root when loading/rendering
  const getRenderPath = (path: string) => {
    if (path.startsWith('/public/')) {
      return path.replace(/^\/public/, '');
    }
    return path;
  };

  const getLabel = () => {
    switch (activeCategory) {
      case 'transcript':
        return 'Official Transcript';
      case 'presidentsAward':
        return "Sunway University President's Award Certificate";
      default:
        return 'Education Document';
    }
  };

  const getFilenameForDisplay = () => {
    const filename = activeImagePath.split('/').pop() || '';
    return filename.toUpperCase();
  };

  const selectCategory = (category: 'transcript' | 'presidentsAward') => {
    setActiveCategory(category);
  };

  return (
    <div className="lg:col-span-4 flex flex-col justify-start items-center w-full max-w-[340px] mx-auto space-y-4">
      {/* The Image Frame - maintaining large, rounded container with subtle shadow */}
      <div
        onClick={() => onOpenLightbox(getRenderPath(activeImagePath), `${degreeTitle} - ${getLabel()}`)}
        className="group relative overflow-hidden rounded-xl border border-slate-200/85 bg-slate-50 p-1 cursor-zoom-in shadow-xs hover:shadow-md transition-shadow w-full aspect-[1/1.414]"
        title="Click to zoom certificate"
      >
        <div className="w-full h-full overflow-hidden rounded-lg bg-white relative flex items-center justify-center select-none animate-fade-in">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeCategory}
              src={getRenderPath(activeImagePath)}
              alt={getLabel()}
              referrerPolicy="no-referrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full object-contain"
              onError={(e) => {
                // Highly robust fallback mechanism: use Picsum when local files do not exist yet (portrait dimension)
                const seed = activeCategory === 'transcript' ? 'fist-transcript' : 'fist-presidents-award';
                e.currentTarget.src = `https://picsum.photos/seed/${seed}/600/850`;
              }}
            />
          </AnimatePresence>

          {/* Zoom Icon Overlay - Fully clickable button above image overlay */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenLightbox(getRenderPath(activeImagePath), `${degreeTitle} - ${getLabel()}`);
            }}
            className="absolute top-2 right-2 rounded-full bg-slate-900/80 hover:bg-slate-950 p-2 text-white hover:scale-105 active:scale-95 transition-all z-20 shadow-lg border-0 cursor-pointer"
            title="Open in full-screen viewer"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* The Category Switcher: small elegant pill-shaped buttons */}
      <div className="flex w-full justify-between gap-1 p-1 bg-slate-100/80 border border-slate-200/50 rounded-lg">
        <button
          onClick={() => selectCategory('transcript')}
          className={`flex-1 py-1 px-1 text-[11px] font-bold rounded-md transition-all cursor-pointer text-center ${
            activeCategory === 'transcript'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          Transcript
        </button>
        <button
          onClick={() => selectCategory('presidentsAward')}
          className={`flex-1 py-1 px-1 text-[11px] font-bold rounded-md transition-all cursor-pointer text-center ${
            activeCategory === 'presidentsAward'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          President's Award
        </button>
      </div>

      {/* Label and Filename section */}
      <div className="w-full text-center select-none">
        <div className="text-[11px] font-bold text-slate-800 tracking-tight leading-snug">
          {getLabel()}
        </div>
        <div className="text-[9px] font-mono font-bold text-slate-400 mt-1">
          {getFilenameForDisplay()}
        </div>
      </div>
    </div>
  );
}

function SpmDocumentShowcase({ onOpenLightbox, degreeTitle }: { onOpenLightbox: (src: string, alt: string) => void; degreeTitle: string }) {
  const [activeCategory, setActiveCategory] = useState<'spm' | 'cefr' | 'robotics'>('spm');
  const [currentIndex, setCurrentIndex] = useState(0);

  const documents: Record<'spm' | 'cefr' | 'robotics', string[]> = {
    spm: ['/SPM Certificate.jpg'],
    cefr: ['/SPM CEFR.jpg'],
    robotics: ['/rero state.png', '/rero district.png', '/stem.png']
  };

  const activeCategoryList = documents[activeCategory];
  const activeImagePath = activeCategoryList[currentIndex] || activeCategoryList[0] || '';

  const getRenderPath = (path: string) => {
    if (path.startsWith('/public/')) {
      return path.replace(/^\/public/, '');
    }
    return path;
  };

  const getLabel = () => {
    switch (activeCategory) {
      case 'spm':
        return 'Sijil Pelajaran Malaysia (SPM) Certificate';
      case 'cefr':
        return 'CEFR English Proficiency Statement';
      case 'robotics':
        if (currentIndex === 0) return 'Robotics Competition Award (State Level)';
        if (currentIndex === 1) return 'Robotics Competition Award (District Level)';
        return 'STEM Decathlon Challenge Certificate (National Level)';
      default:
        return 'Education Document';
    }
  };

  const getFilenameForDisplay = () => {
    const filename = activeImagePath.split('/').pop() || '';
    return filename.toUpperCase();
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? activeCategoryList.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % activeCategoryList.length);
  };

  const selectCategory = (category: 'spm' | 'cefr' | 'robotics') => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };

  return (
    <div className="lg:col-span-4 flex flex-col justify-start items-center w-full max-w-[340px] mx-auto space-y-4">
      {/* The Image Frame - maintaining large, rounded container with subtle shadow */}
      <div
        onClick={() => onOpenLightbox(getRenderPath(activeImagePath), `${degreeTitle} - ${getLabel()}`)}
        className="group relative overflow-hidden rounded-xl border border-slate-200/85 bg-slate-50 p-1 cursor-zoom-in shadow-xs hover:shadow-md transition-shadow w-full aspect-[1/1.414]"
        title="Click to zoom certificate"
      >
        <div className="w-full h-full overflow-hidden rounded-lg bg-white relative flex items-center justify-center select-none animate-fade-in">
          <AnimatePresence mode="wait">
            <motion.img
              key={`${activeCategory}-${currentIndex}`}
              src={getRenderPath(activeImagePath)}
              alt={getLabel()}
              referrerPolicy="no-referrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full object-contain"
              onError={(e) => {
                // Highly robust fallback mechanism: use Picsum when local files do not exist yet (portrait dimension)
                let seed = 'spm-cert';
                if (activeCategory === 'cefr') {
                  seed = 'spm-cefr-proficiency';
                } else if (activeCategory === 'robotics') {
                  seed = `robotics-award-term-${currentIndex}`;
                }
                e.currentTarget.src = `https://picsum.photos/seed/${seed}/600/850`;
              }}
            />
          </AnimatePresence>

          {/* Zoom Icon Overlay - Fully clickable button above image overlay */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenLightbox(getRenderPath(activeImagePath), `${degreeTitle} - ${getLabel()}`);
            }}
            className="absolute top-2 right-2 rounded-full bg-slate-900/80 hover:bg-slate-950 p-2 text-white hover:scale-105 active:scale-95 transition-all z-20 shadow-lg border-0 cursor-pointer"
            title="Open in full-screen viewer"
          >
            <ZoomIn className="h-4 w-4" />
          </button>

          {/* Carousel Controls (Robotics arrows overlay) */}
          {activeCategory === 'robotics' && activeCategoryList.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 p-1.5 rounded-full bg-black/50 hover:bg-black/75 text-white hover:scale-105 active:scale-95 transition-all z-10 cursor-pointer border-0"
                title="Previous award"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 p-1.5 rounded-full bg-black/50 hover:bg-black/75 text-white hover:scale-105 active:scale-95 transition-all z-10 cursor-pointer border-0"
                title="Next award"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}

          {/* Dot indicators overlay for Robotics awards */}
          {activeCategory === 'robotics' && activeCategoryList.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-1 rounded-full z-10" onClick={(e) => e.stopPropagation()}>
              {activeCategoryList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-200 cursor-pointer border-0 ${
                    idx === currentIndex ? 'bg-white scale-110 px-1' : 'bg-white/40 hover:bg-white/80'
                  }`}
                  title={`Show certificate ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* The Category Switcher: small elegant pill-shaped buttons */}
      <div className="flex w-full justify-between gap-1 p-1 bg-slate-100/80 border border-slate-200/50 rounded-lg">
        <button
          onClick={() => selectCategory('spm')}
          className={`flex-1 py-1 px-0.5 text-[11px] font-bold rounded-md transition-all cursor-pointer text-center ${
            activeCategory === 'spm'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          SPM Cert
        </button>
        <button
          onClick={() => selectCategory('cefr')}
          className={`flex-1 py-1 px-0.5 text-[11px] font-bold rounded-md transition-all cursor-pointer text-center ${
            activeCategory === 'cefr'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          CEFR English
        </button>
        <button
          onClick={() => selectCategory('robotics')}
          className={`flex-1 py-1 px-0.5 text-[11px] font-bold rounded-md transition-all cursor-pointer text-center ${
            activeCategory === 'robotics'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          STEM Awards
        </button>
      </div>

      {/* Label and Filename section */}
      <div className="w-full text-center select-none">
        <div className="text-[11px] font-bold text-slate-800 tracking-tight leading-snug">
          {getLabel()}
        </div>
        <div className="text-[9px] font-mono font-bold text-slate-400 mt-1">
          {getFilenameForDisplay()}
        </div>
      </div>
    </div>
  );
}

export default function ResearchTab({ onOpenLightbox }: ResearchTabProps) {
  // state to manage the active document in the viewer
  const [selectedDocId, setSelectedDocId] = useState<'drone' | 'wren' | 'iwait'>('drone');
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullscreen(false);
      }
    };
    if (isFullscreen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isFullscreen]);

  // document map pointing accurately to public folder destinations
  const documents = {
    drone: {
      id: 'drone',
      title: 'Journal of Electrical and Computer Engineering',
      filename: 'jece.pdf',
      path: '/Journal of Electrical and Computer Engineering - 2026 - Teoh - Recent Advancements  Challenges  and Future Directions of.pdf',
      abstract: 'Abstract: The implementation of unmanned aerial vehicles (UAVs) or drones has gained immense attention in recent years due to their high potential in enhancing traffic management in a smart city context. This systematic review aims to provide a thorough analysis of the applications of drones in smart traffic management, and limitations and challenges upon technology adoption, as well as future research directions in this field. The search was conducted by following the Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA) method to identify relevant articles based on inclusion and exclusion criteria published in the past 10 years, specifically from January 1, 2014, to September 19, 2024. By analyzing the final selection of 14 research articles from databases such as Scopus, ScienceDirect, SpringerOpen, ACM Digital Library, and EBSCO, the results reveal that integrating UAVs into smart city traffic management provides substantial advantages in the perspectives of both ground monitoring and airspace control. This systematic review also contributes to offering a solid foundation for researchers or stakeholders to gain a thorough understanding of drone technologies in making revolutionary breakthroughs within the field of traffic-related aspect to strengthen the transportation system in smart cities.',
      correspondingPub: publications[0]
    },
    wren: {
      id: 'wren',
      title: 'Women Research Engineer Network (WREN) Symposium 2025',
      filename: 'wren-manuscript.pdf',
      path: '/Proceedings-WREN-Symposium-2025-extracted.pdf',
      abstract: 'Abstract: Resilient, quality, sustainable and reliable infrastructure are dominant to enhance urban transportation as aligned with Sustainable Development Goals (SDG) 9 and 11 by promoting sustainable industrialization. Existing research merely focuses on evaluating the performance of detection models across different techniques and technologies. This study aims to examine the variations in deep learning model design and computational hardware in influencing vehicle detection performance. Several segmentation and detection models were trained and evaluated under different preprocessing techniques and Graphics Processing Units (GPU) environments. The results show that blurring irrelevant regions remarkably enhanced the detection performance while heavy augmentation increased the training time despite maintaining accuracy. Hardware advancements greatly reduced training time with only minor improvement in detection. The findings emphasize the importance of equipping computing configurations to build a more scalable and resilient traffic surveillance system that can support smart city initiatives through accurate and faster vehicle detection. ',
      correspondingPub: publications[2]
    },
    iwait: {
      id: 'iwait',
      title: 'International Workshop on Advanced Image Technology (IWAIT) 2026',
      filename: 'iwait-abstract.pdf',
      path: '/IWAIT2026_paper_29.pdf',
      abstract: 'Abstract: This study proposes MY-VID (MalaYsia Vehicle Image Dataset), a novel open-source vehicle dataset tailored to Malaysian road conditions emphasizing on commercial and private vehicles classification. Motivated by high road accident fatality rates and the absence of localized datasets in Southeast Asia (SEA), this study introduces a privacy-compliant annotated image dataset captured from Malaysian highway. All stages from data collection, anonymization, preprocessing and augmentation were conducted offline to prioritize data security and privacy. These privacy safeguards allowed the dataset to be safely released as an open-source resource on the Zenodo platform for public accessibility. Benchmark experiments with YOLO11 and YOLO12 demonstrate strong performance and highlight the importance of localized dataset in vehicle detection accuracy. The dataset and training framework aim to support future research in intelligent transportation system (ITS), traffic safety analysis and road infrastructure development in Malaysia.',
      correspondingPub: publications[3]
    }
  };

  const activeDoc = documents[selectedDocId];

  return (
    <div id="research-tab-container" className="space-y-16 py-4">
      {/* MODULE 1: Publications & Document Viewers */}
      <section id="publications-viewers-section" className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="flex items-center gap-2.5 text-2xl font-extrabold tracking-tight text-slate-900">
            <BookOpen className="h-6 w-6 text-accent" />
            Publications & Document Viewers
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Read manuscripts, peer-reviewed publications, and conference submissions directly on-site
          </p>
        </div>

        {/* Selected Document Selection Tabs */}
        <div id="pdf-viewers-navigation" className="flex flex-wrap gap-2">
          {(['drone', 'wren', 'iwait'] as const).map((key) => {
            const isSelected = selectedDocId === key;
            return (
              <button
                key={key}
                id={`btn-select-doc-${key}`}
                onClick={() => setSelectedDocId(key)}
                className={`px-4 py-2.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {documents[key].title}
              </button>
            );
          })}
        </div>

        {/* Immersive Document Viewer Frame */}
        <div id="interactive-pdf-viewer" className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs">
          {/* Left Panel: IFrame Core Document Viewer */}
          <div className={isFullscreen ? "fixed inset-0 z-50 bg-slate-950 flex flex-col h-screen w-screen p-4 sm:p-6" : "lg:col-span-8 flex flex-col"}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-900 border-b border-slate-800 text-slate-100 px-4 py-3 rounded-t-xl gap-3">
              <div className="flex items-center gap-2 overflow-hidden mr-4">
                <FileText className="h-4 w-4 shrink-0 text-accent animate-pulse" />
                <span className="text-xs font-mono tracking-tight truncate text-slate-200">{activeDoc.filename}</span>
                {isFullscreen && (
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-bold font-mono ml-2 shrink-0">
                    ESC to exit
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2 shrink-0">
                {/* Fullscreen Button */}
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-slate-600 text-white text-[10px] px-3.5 py-1 rounded transition-all font-bold cursor-pointer"
                  title={isFullscreen ? "Exit fullscreen view" : "View in fullscreen"}
                >
                  {isFullscreen ? (
                    <>
                      <Minimize2 className="h-3.5 w-3.5 text-accent" />
                      <span>Exit Fullscreen</span>
                    </>
                  ) : (
                    <>
                      <Maximize2 className="h-3.5 w-3.5 text-accent" />
                      <span>Fullscreen</span>
                    </>
                  )}
                </button>

                <a
                  href={activeDoc.path}
                  download={activeDoc.filename}
                  className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-slate-600 text-white text-[10px] px-3.5 py-1 rounded transition-all font-bold cursor-pointer"
                  title="Direct PDF download to local storage"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* Interactive PDF reader slot with custom scrolling & browser fallback support */}
            <div className={`relative w-full bg-slate-900 overflow-hidden ${isFullscreen ? 'flex-1 rounded-b-xl border border-slate-800' : 'h-[600px] border-x border-b border-slate-200/70 rounded-b-xl'}`}>
              <object
                key={`${selectedDocId}-${isFullscreen}`}
                id="active-pdf-viewer-frame"
                data={`${activeDoc.path}#page=1`}
                type="application/pdf"
                width="100%"
                height="100%"
                className="w-full h-full border-none bg-slate-900 rounded-b-xl"
              >
                <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-slate-50 space-y-4">
                  <div className="h-16 w-16 bg-accent/15 rounded-full flex items-center justify-center text-accent ring-8 ring-accent/5">
                    <FileText className="h-8 w-8 animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-slate-850 text-slate-800">
                      Your browser does not support inline PDFs.
                    </p>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto">
                      Or the file could not be loaded recursively on this local address format.
                    </p>
                  </div>
                  <a
                    href={activeDoc.path}
                    download={activeDoc.filename}
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-xs px-5 py-2.5 rounded-lg font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <Download className="h-4 w-4" />
                    <span>Click here to download and view the manuscript.</span>
                  </a>
                </div>
              </object>
            </div>
          </div>

          {/* Right Panel: Metadata and PDF Indexing Details */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-1.5 rounded bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-800 border border-amber-200">
                {activeDoc.correspondingPub.type.toUpperCase()} MANUSCRIPT
              </span>

              <div className="space-y-2">
                <h3 className="font-extrabold text-slate-900 text-lg leading-snug">
                  {activeDoc.correspondingPub.title}
                </h3>
                <p className="text-xs font-semibold text-accent">
                  Authors: {activeDoc.correspondingPub.authors}
                </p>
              </div>

              <div className="space-y-3.5 border-t border-slate-100 pt-4 text-xs font-medium text-slate-600">
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Platform/Journal</span>
                  <span className="text-slate-800 text-right max-w-[200px] font-semibold">{activeDoc.correspondingPub.journalOrConference}</span>
                </div>
                <div className="flex justify-between py-1 border-t border-slate-50">
                  <span className="text-slate-400">Year Published</span>
                  <span className="text-slate-800 font-mono font-bold">{activeDoc.correspondingPub.year}</span>
                </div>
                {activeDoc.correspondingPub.status && (
                  <div className="flex justify-between py-1 border-t border-slate-50">
                    <span className="text-slate-400">Manuscript Status</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-50 text-accent font-bold border border-accent-border">
                      {activeDoc.correspondingPub.status}
                    </span>
                  </div>
                )}
                {activeDoc.correspondingPub.websiteUrl && (
                  <div className="flex justify-between py-1 border-t border-slate-50 items-center gap-2">
                    <span className="text-slate-400">Symposium Website</span>
                    <a
                      href={activeDoc.correspondingPub.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[10px] text-sky-600 hover:underline"
                    >
                      <span>View details & abstracts</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
                {activeDoc.correspondingPub.doi && (
                  <div className="flex justify-between py-1 border-t border-slate-50 items-center">
                    <span className="text-slate-400">Identifier (DOI)</span>
                    <a
                      href={activeDoc.correspondingPub.doiUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[10px] text-sky-600 font-bold hover:underline"
                    >
                      {activeDoc.correspondingPub.doi}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Index of Publications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="rounded-xl border border-slate-200/80 bg-white p-5 space-y-4 hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 text-slate-600 border border-slate-200">
                  {pub.type.toUpperCase()}
                </span>
                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  {pub.title}
                </h4>
                <p className="text-xs text-slate-500 font-medium">{pub.authors}</p>
                <p className="text-xs font-semibold text-slate-400">{pub.journalOrConference} ({pub.year})</p>
              </div>

              {(pub.websiteUrl || pub.doi) && (
                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  {pub.websiteUrl && (
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Symposium Website</span>
                      <a
                        href={pub.websiteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-[10px] text-sky-600 hover:underline"
                      >
                        <span>WREN Symposium Website</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  )}

                  {pub.doi && (
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">DOI Key</span>
                      <a
                        href={pub.doiUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-[10px] text-sky-600 font-bold hover:underline"
                      >
                        {pub.doi}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* MODULE 2: Honors Gallery & Visual Proof */}
      <section id="honors-gallery-section" className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="flex items-center gap-2.5 text-2xl font-extrabold tracking-tight text-slate-900">
            <Award className="h-6 w-6 text-accent" />
            Honors Gallery & Visual Proof
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Academic achievements, symposium awards, and corroborating winner screenshots
          </p>
        </div>

        {honorsAwards.map((award) => (
          <div
            key={award.id}
            id={`award-block-${award.id}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-sm hover:border-accent/40 hover:-translate-y-[2px] transition-all duration-300"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                  {award.id === 'award-wren'
                    ? `${award.year} International Award`
                    : award.id === 'award-jkr-collaboration'
                    ? `${award.year} Research Collaboration`
                    : `${award.year} Academic Scholarship`}
                </span>
                <h3 className="text-2xl font-black text-slate-900">{award.title}</h3>
                <div className="text-sm font-semibold text-accent">
                  {award.event} | <span className="text-slate-500">{award.issuer}</span>
                </div>
              </div>
            </div>

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
                  Dr. Debowski is a renowned expert in academic career development, leadership, and research strategy, and she offers valuable insights to help researchers effectively navigate their career pathways.
                </>
              ) : (
                award.description
              )}
            </p>

            {/* Grid of Image Containers dynamically centered if there is only 1 image */}
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
                  {/* First Item: Official Certificate or Visitation Photo */}
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
                              e.currentTarget.src = '/WREN cert.png';
                            } else {
                              const seed = 'scholarship';
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
                          {award.id === 'award-wren'
                            ? 'WREN_CERT.PNG'
                            : 'JCF_SCHOLARSHIP_CEREMONY.JPG'}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Second Item: Auto Sliding Slideshow of Website winner announcement (Preface & Web) for WREN */}
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
                            {award.images[1].path.split('/').pop()?.toUpperCase() || 'WREN_SYM_2.PNG'}
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </>
              )}
            </div>
            <p className="text-xs text-slate-400 text-center font-medium mt-2">
              Click any image above to expand the full-size proof layout.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
