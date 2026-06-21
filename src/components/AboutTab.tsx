import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, Briefcase, ChevronRight, ChevronLeft, ZoomIn, CheckCircle, Cpu, HardDrive, Database, Code, Globe, Terminal, Layers } from 'lucide-react';
import { educationHistory, skillsData } from '../data';

interface AboutTabProps {
  onOpenLightbox: (src: string, alt: string) => void;
}

export default function AboutTab({ onOpenLightbox }: AboutTabProps) {
  const [activeMilestone, setActiveMilestone] = useState<string | null>("spm");

  React.useEffect(() => {
    if (sessionStorage.getItem('scrollToEducationGallery') === 'true') {
      sessionStorage.removeItem('scrollToEducationGallery');
      // Gentle delay to accommodate page transition animation
      const timer = setTimeout(() => {
        const element = document.getElementById('education-gallery-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 450);
      return () => clearTimeout(timer);
    }
  }, []);

  // Timeline events representing her story (exact content as requested)
  const timelineEvents = [
    {
      id: "spm",
      year: "2017 - 2022",
      title: "Sijil Pelajaran Malaysia (SPM)",
      cardText: "SMK Yong Peng. 10As.",
      deepDiveText: "Graduated as Top Achiever. Specialized in the Technical Science Stream with a focus on Computer Science and Advanced Mathematics.",
      icon: Award,
    },
    {
      id: "foundation",
      year: "2022 - 2023",
      title: "Foundation in Science & Technology",
      cardText: "Sunway College KL. CGPA 4.00 / 4.00.",
      deepDiveText: "Awarded the Sunway University President's Award as the highest-scoring student.",
      icon: GraduationCap,
    },
    {
      id: "degree",
      year: "2023 - 2026",
      title: "BSc (Honours) in Computer Science",
      cardText: "Sunway University. CGPA 3.98 / 4.00.",
      deepDiveText: "Jeffrey Cheah Foundation (JCF) Scholar (100% Tuition Fee Waiver).",
      icon: GraduationCap,
    },
    {
      id: "research",
      year: "2024 - 2026",
      title: "Research Assistant",
      cardText: "HUMAC Research Centre. UAV Flood Response.",
      deepDiveText: "Custom drone assembly and algorithm benchmarking across YOLO, Faster R-CNN, and DETR for real-time applications.",
      icon: BookOpen,
    },
    {
      id: "publications",
      year: "2025 - 2026",
      title: "Academic Publications",
      cardText: "Co-first Author. Q2 Journal.",
      deepDiveText: "Co-first authored a systematic review on Drone Integration in Smart City Traffic Management (Journal of Electrical and Computer Engineering, 2026).",
      icon: BookOpen,
    },
    {
      id: "internship",
      year: "2026",
      title: "AI Engineer Intern",
      cardText: "WISE AI Malaysia. 40% Inferencing Gain.",
      deepDiveText: "Engineered MLOps pipelines and achieved a 40% inference speed gain via Post-Training Quantization (ONNX/OpenVINO), ensuring accuracy loss remained within the strict tolerable threshold (evaluating dips as severe only if > -1.5%).",
      icon: Briefcase,
    },
    {
      id: "phd",
      year: "2026 ONWARDS",
      title: "Future PhD Candidate",
      cardText: "Direct PhD Computing. Sunway University.",
      deepDiveText: "Preparing to transition research focus toward Vision-Language Models (VLMs) and hybrid multi-modal frameworks for intelligent traffic reasoning.",
      icon: Cpu,
    }
  ];

  // Professional research interest pills with high-contrast elegant layouts
  const researchInterests = [
    { title: "Computer Vision", desc: "Real-time semantic segmentation, object detection (YOLO, DETR), face landmarks.", color: "from-blue-50 to-indigo-50 border-blue-200 text-blue-900" },
    { title: "Intelligent Transportation Systems", desc: "Local vehicle detection, tropical climate adaptions, and traffic congestion forecast.", color: "from-purple-50 to-violet-50 border-purple-200 text-purple-900" },
    { title: "Smart Cities", desc: "Infrastructure monitoring, UAV sensor integrations, autonomous traffic intelligence.", color: "from-amber-50 to-orange-50 border-amber-200 text-amber-900" },
    { title: "Vision Language Models", desc: "VLM benchmarking (Qwen-VL), cross-modal reasoning, text-to-visual editing.", color: "from-emerald-50 to-teal-50 border-emerald-200 text-emerald-900" },
    { title: "Edge AI", desc: "Post-training quantization (FP16, INT8), low-latency field hardware deployment.", color: "from-pink-50 to-rose-50 border-pink-200 text-pink-900" },
    { title: "MLOps", desc: "Automated FastAPI backend data indexing, Docker containers, scalable workflows.", color: "from-sky-50 to-slate-50 border-sky-200 text-sky-900" },
    { title: "UAV Applications", desc: "Drone assembly, autopilot integration, disaster assessment under monsoon rain.", color: "from-violet-50 to-fuchsia-50 border-violet-200 text-violet-900" },
    { title: "Disaster Response", desc: "Flood assessment, visual tracking, debris assessment under drone streams.", color: "from-rose-50 to-red-50 border-rose-200 text-rose-900" },
    { title: "Multimodal Learning", desc: "Combining spatial telemetry with visual cues for robust multi-sensor smart city control.", color: "from-cyan-50 to-blue-50 border-cyan-200 text-cyan-900" }
  ];

  // Specific categorized skills data
  const techSkills = [
    {
      category: "Machine Learning & Deep Learning",
      icon: Cpu,
      skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "YOLOv8/10/11/26", "Faster R-CNN", "DETR", "MobileNet", "Vision-Language Models (VLMs)", "Qwen-VL", "NumPy", "Pandas", "SciPy", "Matplotlib", "Transfer Learning", "Hyperparameter Tuning"]
    },
    {
      category: "Computer Vision & Visual Curation",
      icon: Layers,
      skills: ["OpenCV", "MediaPipe", "Roboflow", "LabelMe", "Image Augmentation", "Custom Dataset Construction", "FFmpeg", "Face Alignment", "Liveness Detection", "Fiducial Markers"]
    },
    {
      category: "MLOps, DevOps & Edge Optimization",
      icon: HardDrive,
      skills: ["FastAPI", "Gradio", "Streamlit", "Post-Training Quantization", "Intel OpenVINO", "ONNX Runtime", "Web Scraping", "Bash / Shell Scripting", "Docker", "Conda", "Linux (Ubuntu)", "CUDA Allocation"]
    },
    {
      category: "Programming, Web & Databases",
      icon: Code,
      skills: ["Python", "Java", "Scala", "React & Next.js", "Tailwind CSS", "JavaScript", "HTML", "SQL (Oracle, MySQL)", "MongoDB (NoSQL)", "Cassandra (NoSQL)", "InfluxDB (Time-Series)", "Data Pipelines", "PowerBI"]
    },
    {
      category: "Hardware & Physical Cloud",
      icon: Globe,
      skills: ["UAV Assembly", "Circuit Board Integration", "Flight Control Tuning", "Google Cloud Run", "Supabase Backend APIs", "Github Pages CI/CD", "Vercel", "Firebase"]
    }
  ];

  return (
    <div id="about-tab-container" className="space-y-16 py-4">
      {/* SECTION 1: Personal Story Narrative Banner */}
      <section id="story-narrative-header" className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            About Zi Xuan Lim
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Bridging top academic performance with production-grade AI systems and industrial deployment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              I am an AI Engineer and incoming PhD Candidate specializing in Vision-Language Models (VLMs) and edge optimization. My work bridges rigorous academic research with production-grade deployment—from engineering traffic intelligence systems with local government agencies to designing high-speed eKYC pipelines at WISE AI.
            </p>
            <p>
              Graduating with a <strong className="font-bold text-slate-900">3.98/4.00 CGPA</strong> in BSc (Hons) in Computer Science with 100% fully-funded JCF Scholarship, I am deeply committed to solving localized, real-world challenges. At the HUMAC Research Centre, I actively contribute to open-source initiatives like the MY-VID dataset and author peer-reviewed literature on UAV disaster response, striving to build AI solutions that are robust, fast, and highly field-deployable.
            </p>
          </div>

          <div className="lg:col-span-4 bg-slate-50 border border-slate-200/60 rounded-xl p-5 space-y-5">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-bold text-[10px] uppercase tracking-wider font-mono">CGPA</span>
              <span className="font-mono font-bold text-slate-900 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">3.98 / 4.00</span>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-200/60">
              <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                LANGUAGE PROFICIENCY
              </h5>
              <div className="space-y-3">
                {[
                  { name: "English", level: "Professional Advanced", fill: "90%" },
                  { name: "Chinese", level: "Native", fill: "100%" },
                  { name: "Malay", level: "Professional Advanced", fill: "90%" }
                ].map((lang) => (
                  <div key={lang.name} className="flex flex-col">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-700">{lang.name}</span>
                      <span className="text-slate-500 text-[11px] font-medium">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full w-full mt-1 overflow-hidden">
                      <div 
                        className="h-full bg-accent rounded-full transition-all duration-500" 
                        style={{ width: lang.fill }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULE 3: Education Gallery */}
      <section id="education-gallery-section" className="space-y-8 mt-16 pt-12 border-t border-slate-200">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="flex items-center gap-2.5 text-2xl font-extrabold tracking-tight text-slate-900">
            <GraduationCap className="h-6 w-6 text-accent" />
            Education Gallery
          </h2>
          <p className="text-sm text-slate-500 mt-1">University courses, scholarship records, and foundation awards</p>
        </div>

        <div className="space-y-8">
          {educationHistory.map((edu) => (
            <div
              key={edu.id}
              id={`edu-item-${edu.id}`}
              className="grid grid-cols-1 gap-8 lg:grid-cols-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:border-accent/40 hover:-translate-y-[2px] transition-all duration-300"
            >
              {/* Detailed academic details */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">{edu.degree}</h3>
                    <div className="flex flex-wrap items-center gap-x-2 text-sm font-semibold text-slate-600">
                      <span className="text-accent">{edu.institution}</span>
                      <span className="text-slate-300">•</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <span className="inline-block rounded-full bg-stone-50 px-3 py-1 text-xs font-mono font-bold text-slate-600 border border-slate-200">
                    {edu.duration}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-extrabold text-slate-400 uppercase tracking-widest">
                    CGPA:
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-extrabold bg-accent/10 text-accent border border-accent/20">
                    {edu.cgpa}
                  </span>
                </div>

                {edu.honor && (
                  <div className="rounded-lg bg-amber-50/50 p-3.5 border border-amber-200/60">
                    <span className="block text-[10px] font-mono font-bold text-amber-800 uppercase tracking-wider mb-1">
                      Academic Distinction / Scholarship Awarded
                    </span>
                    <p className="text-xs font-semibold text-amber-900">{edu.honor}</p>
                  </div>
                )}

                {edu.coursework && (
                  edu.id === 'edu-fist' ? (
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                        Key Syllabus Coursework (FIST)
                      </span>
                      
                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Computing & Logic
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {["Introduction to Programming", "Basic Computer Concept", "ICT Application Skills"].map((sub) => (
                              <span key={sub} className="inline-block px-2.5 py-1 bg-slate-50 border border-slate-200/80 rounded text-xs font-semibold text-slate-600">
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Advanced Mathematics
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {["Technical Mathematics", "Mathematics for Scientists", "Statistics for Scientists"].map((sub) => (
                              <span key={sub} className="inline-block px-2.5 py-1 bg-slate-50 border border-slate-200/80 rounded text-xs font-semibold text-slate-600">
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Scientific Core
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {["Basic Chemistry", "Scientific Revolutions", "Introduction to Food Science"].map((sub) => (
                              <span key={sub} className="inline-block px-2.5 py-1 bg-slate-50 border border-slate-200/80 rounded text-xs font-semibold text-slate-600">
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Professional & Analytical Skills
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {["Academic Writing", "Critical Thinking Skills", "Science and Ethics", "English Language for Scientists"].map((sub) => (
                              <span key={sub} className="inline-block px-2.5 py-1 bg-slate-50 border border-slate-200/80 rounded text-xs font-semibold text-slate-600">
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : edu.id === 'edu-spm' ? (
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                        Key Syllabus Coursework (SPM)
                      </span>
                      
                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Technical & Engineering Sciences
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {["Computer Science", "Physics", "Chemistry"].map((sub) => (
                              <span key={sub} className="inline-block px-2.5 py-1 bg-slate-50 border border-slate-200/80 rounded text-xs font-semibold text-slate-600">
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Advanced Quantitative Mathematics
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {["Additional Mathematics", "Core Mathematics"].map((sub) => (
                              <span key={sub} className="inline-block px-2.5 py-1 bg-slate-50 border border-slate-200/80 rounded text-xs font-semibold text-slate-600">
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Linguistics & Communication
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {["English Language", "Malay Language", "Chinese Language"].map((sub) => (
                              <span key={sub} className="inline-block px-2.5 py-1 bg-slate-50 border border-slate-200/80 rounded text-xs font-semibold text-slate-600">
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Humanities & Ethics
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {["History", "Moral Education"].map((sub) => (
                              <span key={sub} className="inline-block px-2.5 py-1 bg-slate-50 border border-slate-200/80 rounded text-xs font-semibold text-slate-600">
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : edu.id === 'edu-degree' ? (
                    <div className="space-y-3 pt-3 border-t border-slate-100">
                      <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                        Key Syllabus Coursework (BSc Honours)
                      </span>
                      
                      <div className="space-y-2.5">
                        <div className="space-y-1">
                          <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Intelligence & Analytics
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {["Artificial Intelligence", "Data Mining & Knowledge Discovery", "Digital Image Processing"].map((sub) => (
                              <span key={sub} className="inline-block px-2.5 py-1 bg-slate-50 border border-slate-200/80 rounded text-xs font-semibold text-slate-600">
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1">
                          <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Core Engineering
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {["Data Structures & Algorithms", "Software Engineering", "Distributed Systems", "OOP"].map((sub) => (
                              <span key={sub} className="inline-block px-2.5 py-1 bg-slate-50 border border-slate-200/80 rounded text-xs font-semibold text-slate-600">
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1">
                          <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Architecture & Systems
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {["Database Engineering", "Database Management Systems", "Operating System Fundamentals", "Computer Security"].map((sub) => (
                              <span key={sub} className="inline-block px-2.5 py-1 bg-slate-50 border border-slate-200/80 rounded text-xs font-semibold text-slate-600">
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        Key Syllabus Coursework
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((course) => (
                          <span key={course} className="inline-block px-2 py-1 bg-slate-50 border border-slate-200/80 rounded text-xs font-medium text-slate-600">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                )}

                {edu.id === 'edu-degree' && (
                  <>
                    <div className="space-y-1.5">
                      <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        University Employment
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        <b>Student Helper & Front Desk Receptionist</b> at <b>Sunway Student Life</b> (Apr - Jul 2024). Collaborated directly with university staff to coordinate campus events and student appointments. Executed precise administrative duties, including meticulous inventory tracking and cash handling operations.
                      </p>
                    </div>
                  </>
                )}

                {edu.id === 'edu-spm' && (
                  <div className="space-y-1.5">
                    <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      STEM LEADERSHIP & COMPETITIONS
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Represented the district and state in the <b>Rero Junior Robot and Coding Competitions (2018, 2020, 2021)</b> through active leadership in the Robotics Club. Competed at the national level in the <b>STEM Decathlon Challenge 2021</b>, establishing a rigorous early foundation in programmatic logic and hardware engineering.
                    </p>
                  </div>
                )}
              </div>

              {/* Render advanced interactive showcase for Bachelor's Degree, Foundation, and SPM. For others, render their standard certificate thumbnail. */}
              {edu.id === 'edu-degree' ? (
                <EducationDocumentShowcase onOpenLightbox={onOpenLightbox} degreeTitle={edu.degree} />
              ) : edu.id === 'edu-fist' ? (
                <FistDocumentShowcase onOpenLightbox={onOpenLightbox} degreeTitle={edu.degree} />
              ) : edu.id === 'edu-spm' ? (
                <SpmDocumentShowcase onOpenLightbox={onOpenLightbox} degreeTitle={edu.degree} />
              ) : (
                edu.imagePath && (
                  <div className="lg:col-span-4 flex flex-col justify-start items-center w-full max-w-[340px] mx-auto">
                    <div
                      onClick={() => onOpenLightbox(edu.imagePath!, `${edu.degree} - ${edu.honor || edu.institution}`)}
                      className="group relative overflow-hidden rounded-xl border border-slate-250 bg-slate-50 p-1 cursor-zoom-in shadow-xs hover:shadow-md transition-shadow w-full aspect-[1/1.414]"
                      title="Click to zoom certificate"
                    >
                      <div className="w-full h-full overflow-hidden rounded-lg bg-white relative flex items-center justify-center select-none shadow-xs">
                        <img
                          src={edu.imagePath}
                          alt="Education proof thumbnail"
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            // Fallback
                            const seed = edu.id === 'edu-fist' ? 'foundation' : 'highschool';
                            e.currentTarget.src = `https://picsum.photos/seed/${seed}/600/850`;
                          }}
                        />
                        <div className="absolute top-2 right-2 rounded-full bg-black/60 backdrop-blur-md p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <ZoomIn className="h-3.5 w-3.5" />
                        </div>
                      </div>
                      <div className="mt-2 text-center text-[10px] font-bold text-slate-500 select-none pb-0.5">
                        {edu.id === 'edu-fist' ? 'Foundation Certificate Proof' : edu.id === 'edu-spm' ? 'SPM Certificate Proof' : 'Academic Proof'}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Interactive Personal Story Timeline */}
      <section id="interactive-horizontal-timeline" className="space-y-6">
        <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">Interactive Journey Roadmap</h3>
            <p className="text-xs text-slate-500">Explore core milestones across my academic achievements and industrial research projects</p>
          </div>
          {/* Subtle pulsating interaction hint */}
          <div className="flex items-center gap-1.5 text-xs text-accent font-semibold bg-accent-light/50 border border-accent-border/40 px-3.5 py-1.5 rounded-full shadow-xs animate-pulse font-sans">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span>✨ Click on any milestone card below to explore full details.</span>
          </div>
        </div>

        {/* Scrollable Horizontal Layout Column with Uniform Height stretched logic */}
        <div className="relative w-full overflow-x-auto pb-4 pt-4 -mx-4 px-4 scrollbar-thin scrollbar-track-slate-50 scrollbar-thumb-slate-200">
          {/* Horizontal joining line behind items */}
          <div className="absolute top-[28px] left-[3%] right-[3%] h-[2px] bg-slate-200 z-0 hidden md:block" />

          <div className="flex flex-row items-stretch gap-6 min-w-[1200px] lg:min-w-0 lg:justify-between relative z-10">
            {timelineEvents.map((evt) => {
              const EvtIcon = evt.icon;
              const isSelected = activeMilestone === evt.id;
              return (
                <div key={evt.id} className="flex-1 min-w-[280px] lg:min-w-0 flex flex-col items-center">
                  
                  {/* Timeline chronological marker */}
                  <button
                    onClick={() => setActiveMilestone(evt.id)}
                    className="flex flex-col items-center mb-5 focus:outline-hidden group select-none cursor-pointer"
                  >
                    <span className="block text-[10px] font-mono font-black text-accent uppercase tracking-widest mb-2 transition-transform duration-300 group-hover:scale-105">
                      {evt.year}
                    </span>
                    <div 
                      className={`flex h-10 w-10 items-center justify-center rounded-full bg-white border-2 transition-all duration-300 ${
                        isSelected 
                          ? 'border-accent ring-4 ring-accent/15 scale-110 shadow-xs' 
                          : 'border-slate-200 group-hover:border-slate-400 group-hover:bg-slate-50'
                      }`}
                    >
                      <EvtIcon className={`h-4.5 w-4.5 ${isSelected ? 'text-accent' : 'text-slate-400'}`} />
                    </div>
                  </button>

                  {/* Stretch clickable element using flex-1 h-full */}
                  <div 
                    onClick={() => setActiveMilestone(evt.id)}
                    className={`w-full flex-1 flex flex-col h-full justify-between p-5 bg-white border rounded-2xl shadow-xs transition-all duration-300 cursor-pointer select-none ${
                      isSelected 
                        ? 'border-accent ring-2 ring-accent/10 bg-accent-light/5'
                        : 'border-slate-200 hover:border-accent/40 hover:-translate-y-1 hover:shadow-md'
                    }`}
                  >
                    {/* Consistent Internal Grid / Alignment distributions */}
                    <div className="flex flex-col h-full justify-between text-left">
                      <div>
                        <h5 className="font-bold text-slate-900 text-xs sm:text-sm tracking-tight leading-snug">
                          {evt.title}
                        </h5>
                        <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">
                          {evt.cardText}
                        </p>
                      </div>

                      {/* Explicit Interactive Footer of each card */}
                      <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono font-bold text-slate-400">
                        <span className={isSelected ? 'text-accent font-black' : 'text-slate-400'}>
                          {isSelected ? 'Active Selection' : 'Read Deep-Dive'}
                        </span>
                        <ChevronRight className={`h-3.5 w-3.5 transition-transform ${isSelected ? 'translate-x-1 text-accent' : 'text-slate-300'}`} />
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Timeline Detail Display Panel / Deep-Dive Panel with smooth entrance */}
        <div className="relative min-h-[140px]">
          <AnimatePresence mode="wait">
            {activeMilestone ? (
              <motion.div
                key={activeMilestone}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="rounded-2xl bg-accent-light border border-accent-border/50 p-6 space-y-3.5 shadow-inner"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping"></span>
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold">Roadmap Milestones Deep-Dive</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span>{timelineEvents.find(e => e.id === activeMilestone)?.title}</span>
                  <span className="text-slate-400 font-normal">|</span>
                  <span className="text-xs font-mono font-bold bg-white text-accent px-2.5 py-1 rounded-md border border-slate-200">
                    {timelineEvents.find(e => e.id === activeMilestone)?.year}
                  </span>
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed font-sans max-w-4xl">
                  {timelineEvents.find(e => e.id === activeMilestone)?.deepDiveText}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="default-prompt"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="rounded-2xl bg-slate-50 border border-slate-200/60 p-6 flex flex-col items-center justify-center text-center space-y-3 shadow-xs"
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl animate-bounce">✨</span>
                  <p className="text-sm font-semibold text-slate-600 animate-pulse">
                    Click on any milestone card above to explore full details.
                  </p>
                  <p className="text-xs text-slate-400 max-w-md">
                    Toggle through each phase of my scientific, publication, and AI R&D timeline for detailed metrics and field deployment metrics.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION 3: Research Interests Glowing Grid */}
      <section id="research-interests-grid" className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h3 className="text-xl font-extrabold text-slate-900 font-sans">Research Interests Mapping</h3>
          <p className="text-xs text-slate-500">Core exploration frontiers where I dedicate academic study and MLOps testing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchInterests.map((interest) => (
            <div
              key={interest.title}
              className={`rounded-xl border p-5 bg-gradient-to-br ${interest.color} shadow-xs hover:shadow-md transition-all duration-300`}
            >
              <h4 className="font-bold text-slate-900 text-sm tracking-tight font-sans">{interest.title}</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                {interest.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: Interactive Skills Dashboard with Categorized Accordions */}
      <section id="technical-skills-dashboard" className="space-y-6">
        <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 font-sans">Technical Skills Index</h3>
            <p className="text-xs text-slate-500">Granular lookup of my deployment toolchains and engineering capabilities</p>
          </div>
          <span className="text-[10px] font-mono text-slate-400">SECURE HARDWARE & CLOUD INTEGRATION</span>
        </div>

        <div className="space-y-4">
          {techSkills.map((section, idx) => {
            const SectionIcon = section.icon;
            
            // Resolve pastel color coding per category for sophisticated tech minimalism
            let badgeColors = "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:shadow-sm";
            if (section.category === "Machine Learning & Deep Learning") {
              badgeColors = "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100/80 hover:shadow-sm";
            } else if (section.category === "Computer Vision & Visual Curation") {
              badgeColors = "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100/80 hover:shadow-sm";
            } else if (section.category === "MLOps, DevOps & Edge Optimization") {
              badgeColors = "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100/80 hover:shadow-sm";
            } else if (section.category === "Programming, Web & Databases") {
              badgeColors = "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100/80 hover:shadow-sm";
            } else if (section.category === "Hardware & Physical Cloud") {
              badgeColors = "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100/80 hover:shadow-sm";
            }

            return (
              <div 
                key={section.category}
                className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-xs hover:border-accent/40 transition-colors"
               >
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-lg bg-stone-50 p-2 text-accent border border-slate-100">
                    <SectionIcon className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm tracking-tight">{section.category}</h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 cursor-default ${badgeColors}`}
                    >
                      <CheckCircle className="h-3 w-3 shrink-0 text-current" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
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
      case 'spm':
        return 'Sijil Pelajaran Malaysia (SPM) Certificate';
      case 'cefr':
        return 'SPM CEFR English Statement of Result';
      case 'robotics':
        if (currentIndex === 0) return 'Rero Robotics State Level Certificate (2nd Runner Up)';
        if (currentIndex === 1) return 'Rero Robotics District Level Certificate (Champion)';
        return 'National STEM Decathlon Challenge Certificate';
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
                const seed = activeCategory === 'spm' ? 'spm-cert' : activeCategory === 'cefr' ? 'cefr-cert' : `robotics-${currentIndex}`;
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
