import { Briefcase, FlaskConical, ExternalLink, Tag, Github, ArrowUpRight, Zap, Target, Layout, ZoomIn, CheckCircle, Server, Users } from 'lucide-react';
import { industryExperience, researchExperience, CVProjects, independentProjects } from '../data';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface ExperienceTabProps {
  onOpenLightbox: (src: string, alt: string) => void;
}

export default function ExperienceTab({ onOpenLightbox }: ExperienceTabProps) {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const [wiseAiImgIdx, setWiseAiImgIdx] = useState(0);
  const [stcImgIdx, setStcImgIdx] = useState(0);

  const wiseAiImages = ["/WISE AI.jpeg", "/WISE AI 2.jpeg"];
  const stcImages = ["/STC grp1.jpeg", "/STC grp2.jpeg"];

  useEffect(() => {
    const timer1 = setInterval(() => {
      setWiseAiImgIdx((prev) => (prev + 1) % wiseAiImages.length);
    }, 4000); // 4-second intervals
    
    const timer2 = setInterval(() => {
      setStcImgIdx((prev) => (prev + 1) % stcImages.length);
    }, 4000); // 4-second intervals

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);

  return (
    <div id="experience-tab-container" className="space-y-16 py-4">
      {/* SECTION 1: Industry Experience */}
      <section id="industry-experience-section" className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="flex items-center gap-2.5 text-2xl font-extrabold tracking-tight text-slate-900">
            <Briefcase className="h-6 w-6 text-accent" />
            Industry Experience
          </h2>
          <p className="text-sm text-slate-500 mt-1">Field internships and commercial enterprise development roles</p>
        </div>

        {industryExperience.map((exp, expIdx) => (
          <div
            key={exp.id}
            id={`experience-card-${exp.id}`}
            className="grid grid-cols-1 gap-y-6 gap-x-8 lg:grid-cols-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:border-accent/40 hover:-translate-y-[2px] hover:shadow-md transition-all duration-300"
          >
            {/* Header spanning the entire width */}
            <div className="col-span-1 lg:col-span-12 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-dashed border-slate-100 pb-5">
              <div className="space-y-1.5">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">{exp.role}</h3>
                <div className="flex flex-wrap items-center gap-x-2 text-sm font-semibold text-slate-600">
                  <span className="text-accent">{exp.organization}</span>
                  <span className="text-slate-300">•</span>
                  <span>{exp.location}</span>
                </div>
              </div>
              <span className="inline-block shrink-0 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-mono font-bold text-slate-600 border border-slate-200/50 sm:self-start">
                {exp.duration}
              </span>
            </div>

            {/* Left side details */}
            <div className={`${exp.id === 'wise-ai' ? 'lg:col-span-7' : 'lg:col-span-8'} lg:self-center space-y-6`}>

              {/* Sub-metrics inside the experience block */}
              {exp.metrics && (
                <div id="internship-metrics" className="grid grid-cols-3 gap-3 bg-stone-50 p-4 rounded-xl border border-slate-100/80">
                  {exp.metrics.map((m, key) => (
                    <div key={key} className="text-center">
                      <span className="block font-mono text-base font-extrabold text-slate-900">{m.value}</span>
                      <span className="block text-[10px] uppercase font-bold text-slate-400 mt-0.5">{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Core description list */}
              <ul className="space-y-3.5 list-none text-slate-600 leading-relaxed text-sm">
                {exp.bullets.map((bullet, key) => {
                  const parts = bullet.split(':');
                  const heading = parts.length > 1 ? parts[0] + ':' : '';
                  const body = parts.length > 1 ? parts.slice(1).join(':') : bullet;
                  return (
                    <li key={key} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        {heading && <strong className="text-slate-800 font-bold">{heading}</strong>}
                        {body}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right side image framed with zoom capabilities */}
            {exp.imagePath && (
              <div className={`${exp.id === 'wise-ai' ? 'lg:col-span-5 lg:self-center' : 'lg:col-span-4'} flex flex-col justify-start items-center`}>
                {exp.id === 'wise-ai' ? (
                  <div className="w-full max-w-[440px] lg:max-w-full flex flex-col items-center">
                    <div
                      onClick={() => onOpenLightbox(wiseAiImages[wiseAiImgIdx], `${exp.role} at ${exp.organization} - Image ${wiseAiImgIdx + 1}`)}
                      className="group relative overflow-hidden rounded-xl border-2 border-slate-200/80 bg-slate-50 p-1.5 cursor-zoom-in shadow-sm hover:shadow-lg hover:border-accent/40 transition-all duration-300 w-full aspect-[4/3] flex items-center justify-center"
                      title="Click to expand cert/photo"
                    >
                      <motion.img
                        key={wiseAiImgIdx}
                        initial={{ opacity: 0.85, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        src={wiseAiImages[wiseAiImgIdx]}
                        alt={`${exp.role} Internship Showcase ${wiseAiImgIdx + 1}`}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.03]"
                        onError={(e) => {
                          e.currentTarget.src = wiseAiImgIdx === 0 ? 'https://picsum.photos/seed/wise1/500/375' : 'https://picsum.photos/seed/wise2/500/375';
                        }}
                      />
                      <div className="absolute top-3 right-3 rounded-full bg-black/60 backdrop-blur-md p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <ZoomIn className="h-4 w-4" />
                      </div>
                    </div>
                    
                    {/* Sliding indicator dots */}
                    <div className="flex gap-2 mt-3 z-10">
                      {wiseAiImages.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            setWiseAiImgIdx(i);
                          }}
                          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            i === wiseAiImgIdx 
                              ? 'bg-accent w-4.5' 
                              : 'bg-slate-300 hover:bg-slate-400 w-2'
                          }`}
                          aria-label={`Go to image ${i + 1}`}
                        />
                      ))}
                    </div>
                    {/* Thank you note below the photo frame */}
                    <div className="mt-4 text-center w-full max-w-[380px] px-1">
                      <p className="text-[11px] text-slate-400 font-medium select-none">
                        Click any image above to expand the full-size proof layout.
                      </p>
                      <div className="mt-3 p-3 rounded-xl bg-purple-50/40 border border-purple-100/60 text-left hover:bg-purple-50/60 transition-colors duration-200">
                        <p className="text-xs text-purple-900 leading-relaxed font-sans">
                          <span className="font-bold text-purple-950 block mb-0.5 text-[10px] uppercase tracking-wider select-none">Supervisor Acknowledgment</span>
                          Immense gratitude to my supervisors, Mr. Alex Koh Jia Yi and Ms. Kew Yue Shuen, for their invaluable guidance, mentorship, and support throughout this internship journey.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full max-w-[320px] flex flex-col items-center">
                    <div
                      onClick={() => onOpenLightbox(exp.imagePath!, `${exp.role} at ${exp.organization}`)}
                      className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-1 cursor-zoom-in shadow-xs hover:shadow-md transition-shadow w-full aspect-[4/3] flex items-center justify-center"
                      title="Click to expand cert/photo"
                    >
                      <img
                        src={exp.imagePath}
                        alt={`${exp.role} Internship`}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          // fallback representation
                          e.currentTarget.src = 'https://picsum.photos/seed/wiseai/500/375';
                        }}
                      />
                      <div className="absolute top-2 right-2 rounded-full bg-black/55 backdrop-blur-md p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="h-4 w-4" />
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 rounded bg-black/60 backdrop-blur-xs p-1.5 text-center text-[10px] font-bold text-white tracking-wide">
                        WISE AI Internship Proof Thumbnail
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-2 text-center">
                      Click to inspect the optimization metrics documentation
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* SECTION 2: Research Engineering */}
      <section id="research-engineering-section" className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="flex items-center gap-2.5 text-2xl font-extrabold tracking-tight text-slate-900">
            <FlaskConical className="h-6 w-6 text-accent" />
            Research Engineering
          </h2>
          <p className="text-sm text-slate-500 mt-1">Academic laboratory setups, benchmarking, and custom dataset curation</p>
        </div>

        {/* Lab Assistant role from SUNWAY University */}
        {researchExperience.map((exp) => (
          <div
            key={exp.id}
            id={`research-exp-${exp.id}`}
            className="grid grid-cols-1 gap-y-6 gap-x-8 lg:grid-cols-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:border-accent/40 hover:-translate-y-[2px] hover:shadow-md transition-all duration-300"
          >
            {/* Header spanning the entire width */}
            <div className="col-span-1 lg:col-span-12 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-dashed border-slate-100 pb-5">
              <div className="space-y-1.5">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">{exp.role}</h3>
                <div className="flex flex-wrap items-center gap-x-2 text-sm font-semibold text-slate-600">
                  <span className="text-accent">{exp.organization}</span>
                  {exp.location && (
                    <>
                      <span className="text-slate-300">•</span>
                      <span>{exp.location}</span>
                    </>
                  )}
                </div>
              </div>
              <span className="inline-block shrink-0 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-mono font-bold text-slate-600 border border-slate-200/50 sm:self-start">
                {exp.duration}
              </span>
            </div>

            {/* Left side details */}
            <div className={exp.imagePath ? 'lg:col-span-7 space-y-6' : 'space-y-6'}>

              <ul className="space-y-3.5 list-none text-slate-600 leading-relaxed text-sm">
                {exp.bullets.map((bullet, key) => {
                  const parts = bullet.split(':');
                  const heading = parts.length > 1 ? parts[0] + ':' : '';
                  const body = parts.length > 1 ? parts.slice(1).join(':') : bullet;
                  return (
                    <li key={key} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        {heading && <strong className="text-slate-800 font-bold">{heading}</strong>}
                        {body}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right side image showcase with thank-you acknowledgment box */}
            {exp.imagePath && (
              <div className="lg:col-span-5 lg:self-center flex flex-col justify-start items-center">
                <div className="w-full max-w-[440px] lg:max-w-full flex flex-col items-center">
                  <div
                    onClick={() => onOpenLightbox(exp.imagePath!, `${exp.role} at ${exp.organization}`)}
                    className="group relative overflow-hidden rounded-xl border-2 border-slate-200/80 bg-slate-50 p-1.5 cursor-zoom-in shadow-sm hover:shadow-lg hover:border-accent/40 transition-all duration-300 w-full aspect-[4/3] flex items-center justify-center"
                    title="Click to expand photo"
                  >
                    <img
                      src={exp.imagePath}
                      alt={`${exp.role} Research Project Showcase`}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.03]"
                      onError={(e) => {
                        e.currentTarget.src = 'https://picsum.photos/seed/humac/500/375';
                      }}
                    />
                    <div className="absolute top-3 right-3 rounded-full bg-black/60 backdrop-blur-md p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <ZoomIn className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Thank you note below the photo frame */}
                  <div className="mt-4 text-center w-full max-w-[380px] px-1">
                    <p className="text-[11px] text-slate-400 font-medium select-none">
                      Click the image above to expand full-size layout.
                    </p>
                    <div className="mt-3 p-3 rounded-xl bg-purple-50/40 border border-purple-100/60 text-left hover:bg-purple-50/60 transition-colors duration-200">
                      <p className="text-xs text-purple-900 leading-relaxed font-sans">
                        <span className="font-bold text-purple-950 block mb-0.5 text-[10px] uppercase tracking-wider select-none">Team Acknowledgment</span>
                        Immense gratitude to my FloodIntel project lead, Ms. Teoh Jiehan and teammates, Mr. Chan Yong Hang and Mr. Ahnaf Shabab Kabir, for their exceptional collaboration and dedication throughout this research journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      <hr className="border-slate-200 my-12" />

      {/* Leadership & Community Engagement Section */}
      <section id="leadership-community-section" className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="flex items-center gap-2.5 text-2xl font-extrabold tracking-tight text-slate-900">
            <Users className="h-6 w-6 text-accent" />
            Leadership & Community Engagement
          </h2>
          <p className="text-sm text-slate-500 mt-1">Extra-curricular involvement, mentoring, and university representation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mini-Card 1: Sunway Tech Club */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:border-accent/40 hover:-translate-y-[2px] hover:shadow-md transition-all duration-300">
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-1 select-none shrink-0 overflow-hidden shadow-xs">
                  <img
                    src="/STC.png"
                    alt="Sunway Tech Club Logo"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain rounded-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallback = document.createElement('span');
                        fallback.className = 'text-emerald-600 font-bold text-xs tracking-wider';
                        fallback.innerText = 'STC';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base leading-snug">Education Department Committee</h4>
                  <p className="text-xs font-semibold text-accent font-sans">Sunway Tech Club • 2024 - 2025</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-sans mt-2">
                Evaluated emerging technology trends and orchestrated technical workshops designed to upskill university members in modern software development and engineering domains.
              </p>

              {/* STC Group Photos Slider */}
              <div className="mt-5 flex flex-col items-center w-full">
                <div
                  onClick={() => onOpenLightbox(stcImages[stcImgIdx], `Sunway Tech Club Education Department Committee - Photo ${stcImgIdx + 1}`)}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-1.5 cursor-zoom-in shadow-xs hover:shadow-md hover:border-accent/40 transition-all duration-300 w-full max-w-[400px] aspect-[4/3] flex items-center justify-center"
                  title="Click to expand photo"
                >
                  <motion.img
                    key={stcImgIdx}
                    initial={{ opacity: 0.85, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    src={stcImages[stcImgIdx]}
                    alt={`Sunway Tech Club Showcase ${stcImgIdx + 1}`}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.03]"
                    onError={(e) => {
                      e.currentTarget.src = stcImgIdx === 0 ? 'https://picsum.photos/seed/stc1/500/375' : 'https://picsum.photos/seed/stc2/500/375';
                    }}
                  />
                  <div className="absolute top-2.5 right-2.5 rounded-full bg-black/60 backdrop-blur-md p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </div>

                {/* Sliding indicator dots */}
                <div className="flex gap-2 mt-3.5 z-10">
                  {stcImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setStcImgIdx(i);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        i === stcImgIdx 
                          ? 'bg-accent w-4.5' 
                          : 'bg-slate-300 hover:bg-slate-400 w-2'
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
                <p className="text-[11px] text-slate-400 mt-2 text-center font-medium">
                  Click any image above to expand the full-size view.
                </p>
              </div>
            </div>
          </div>

          {/* Mini-Card 2: Sunway Education Group */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:border-accent/40 hover:-translate-y-[2px] hover:shadow-md transition-all duration-300">
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-1 select-none shrink-0 overflow-hidden shadow-xs">
                  <img
                    src="/SEG.jpg"
                    alt="Sunway Student Life Logo"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain rounded-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallback = document.createElement('span');
                        fallback.className = 'text-indigo-600 font-bold text-xs tracking-wider';
                        fallback.innerText = 'SEG';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base leading-snug">Campus Tour Guide & Student Ambassador</h4>
                  <p className="text-xs font-semibold text-accent font-sans">Sunway Student Life • 2023 - 2024</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-sans mt-2">
                Served as an official university representative, guiding incoming students and authentically communicating the academic and cultural experience to prospective families.
              </p>

              {/* SEG Group Photo */}
              <div className="mt-5 flex flex-col items-center w-full">
                <div
                  onClick={() => onOpenLightbox('/SEG Open Day.jpeg', 'Sunway Student Life Campus Tour Guide & Student Ambassador - Open Day')}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-1.5 cursor-zoom-in shadow-xs hover:shadow-md hover:border-accent/40 transition-all duration-300 w-full max-w-[400px] aspect-[4/3] flex items-center justify-center"
                  title="Click to expand photo"
                >
                  <motion.img
                    initial={{ opacity: 0.95 }}
                    animate={{ opacity: 1 }}
                    src="/SEG Open Day.jpeg"
                    alt="Sunway Student Life Open Day"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.03]"
                    onError={(e) => {
                      e.currentTarget.src = 'https://picsum.photos/seed/seg1/500/375';
                    }}
                  />
                  <div className="absolute top-2.5 right-2.5 rounded-full bg-black/60 backdrop-blur-md p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 mt-2 text-center font-medium">
                  Click the image above to expand the full-size view.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
