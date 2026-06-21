import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, BookOpen, Layers, User, Calendar, Tag, ChevronDown, ChevronUp, Cpu, Hash } from 'lucide-react';

const blogArticles = [
  {
    id: "building-my-vid",
    title: "Building MY-VID: Malaysia's First Open-Source Vehicle Dataset",
    date: "December 15, 2025",
    category: "Computer Vision",
    readTime: "6 min read",
    snippet: "Analyzing the curation process of compiling 9,000 highly diverse bounding boxes of localized Malaysian vehicle classes (Proton, Perodua) under tropical heavy-rain scenarios.",
    paragraphs: [
      "The integration of Intelligent Transportation Systems (ITS) in Southeast Asia has was long limited by model bias: mainstream detectors are pre-trained on Western roads. Localized variations—such as massive motorcycle clusters and specific national vehicles (e.g. Proton Saga, Perodua Myvi)—led to sub-par lane extraction in real-world scenarios. This critical deficit drove the compilation of MY-VID.",
      "Curation involved positioning synchronized high-definition cameras at key highway entries around Selangor, capturing traffic across different times and weathers. The 9,000 annotated image sheets were carefully cropped and localized using LabelMe, resulting in high quality visual boundaries. We applied rigorous augmentations, with emphasis on tropical rain occlusions.",
      "Upon completion, MY-VID was packaged and certified on the Zenodo academic repository to empower open-access smart highway research globally. The dataset's success verifies that localized context is pivotal to achieving trustworthy, real-world deployment rates."
    ]
  },
  {
    id: "lessons-internship",
    title: "Lessons From My AI Engineering Internship: Model Optimization at Scale",
    date: "April 28, 2026",
    category: "MLOps",
    readTime: "8 min read",
    snippet: "Deep-dive into Post-Training Quantization (PTQ) techniques, compiling neural models into Intel OpenVINO and ONNX frameworks, and deploying under Docker.",
    paragraphs: [
      "During my time at WISE AI Malaysia, I worked directly with the edge hardware deployment problem. Running large face quality assessment networks on localized edge modules without sacrificing precision is one of the biggest challenges in industrial vision systems.",
      "I worked extensively with Post-Training Quantization (PTQ) schemes. Transforming weights from FP32 to FP16 and INT8 layouts using Intel OpenVINO and ONNX runtimes led to a 40% inference speed speed-up, all while maintaining high quality verification benchmarks. I also compiled automated FastAPI preprocessing utilities wrapped in lightweight, hermetic Docker wrappers to enable scalable continuous integration.",
      "The major takeaway is that training high accuracy models is only half the battle. True engineering capability lies in optimizing models, minimizing latency, managing edge memory boundaries, and automating secure serverless pipelines."
    ]
  },
  {
    id: "yolo-vs-detr",
    title: "YOLO vs DETR: Benchmarking Real-Time Computing on UAV Platforms",
    date: "August 10, 2025",
    category: "AI Engineering",
    readTime: "7 min read",
    snippet: "Comparing YOLO11s against Detection Transformers (DETR) to analyze frame latencies, processing thresholds, and drone flight cycle lifetimes.",
    paragraphs: [
      "For Unmanned Aerial Vehicles (UAVs) performing real-time search and rescue, computational resources are tightly bound. Drone flight cycles are highly dependent on motor draw, so on-board deep learning processors must achieve high efficiency.",
      "In our benchmarking at the HUMAC Research Centre at Sunway, we compared convolutional single-stage detectors (YOLOv8s, YOLO11s) against attention-based Detection Transformers (DETR). While DETR models demonstrated high accuracy under complex geometric occlusions, their self-attention heads added significant thermal draw. YOLO11s achieved a 666 FPS throughput when optimized, maintaining reliable object counting within 1.5ms latency boundaries.",
      "We concluded that YOLO models remain the optimal choice for field drone operations where battery, weight limits, and inference speeds are prioritized over dense multi-head transformer models."
    ]
  },
  {
    id: "preparing-phd",
    title: "Preparing for Direct PhD in Computing: Setting and Outlining My Path",
    date: "Ongoing Series",
    category: "Personal Journey",
    readTime: "5 min read",
    snippet: "How bridging academic research with industrial internships outlines an optimized pathway for doing a Direct Computing Doctoral Thesis.",
    paragraphs: [
      "Securing a direct admission into a PhD track immediately after completing a Bachelor's Degree calls for early academic clarity. I spent my early semesters forming collaborations with Sunway University's HUMAC Lab, co-leading research frameworks, and refining writing skills.",
      "The value of academic-industrial dual competency was made clear to me during my WISE AI internship. I learned that having both publication experience and deployment capabilities provides doctoral candidates with invaluable tools to build practical AI systems that make a genuine impact.",
      "My upcoming direct PhD studies at Sunway University will focus on scaling Edge AI and Multimodal Computer Vision to enable smarter cities and intelligent transportation grids. The roadmap ahead involves close collaboration with municipal partners to field-test our models."
    ]
  },
  {
    id: "business-website",
    title: "88 Homestay: Modernizing Multi-Locale Business with Serverless Pipelines",
    date: "February 2, 2025",
    category: "Transportation Systems",
    readTime: "5 min read",
    snippet: "How digitizing a family-owned guest lodge utilizing localized static caching and automated form routing boosted occupancies by 42%.",
    paragraphs: [
      "Small boutique homestays often rely on manual, single-language messaging channels, which limits their visibility. This case outlines how I modernized my family's homestay business in Yong Peng, Johor, using simple, robust software engineering.",
      "I built a beautiful mobile-responsive site translated entirely across three key regionally relevant languages: English, Mandarin, and Malay. To ensure zero operational overhead, I hosted the static assets on serverless GitHub Pages, bypassing expensive virtual private servers. I then mapped the booking inquiry workflow through Formspree's pipeline, triggering email automation.",
      "Following deployment, the site experienced a 42% surge in monthly bookings. This case study demonstrates how simple digital tools can be applied to solve real-world business challenges and make a direct economic impact."
    ]
  }
];

export default function BlogTab() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [readArticleId, setReadArticleId] = useState<string | null>(null);

  // Categories list
  const categories = ['All', 'Computer Vision', 'MLOps', 'AI Engineering', 'Personal Journey', 'Transportation Systems'];

  const filteredArticles = selectedCategory === 'All'
    ? blogArticles
    : blogArticles.filter(art => art.category === selectedCategory);

  return (
    <div id="blog-tab-container" className="space-y-12 py-4">
      {/* Blog Header */}
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          The Intel CV Blog
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Technical dispatches on model optimization, dataset compilation, and academic journey notes
        </p>
      </div>

      {/* Categories Toolbar filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            id={`blog-cat-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-slate-900 border-slate-900 text-white shadow-xs'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid listing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.map((article) => {
          const isReading = readArticleId === article.id;
          return (
            <motion.div
              key={article.id}
              id={`blog-card-${article.id}`}
              layout="position"
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs hover:border-accent/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono font-bold">
                  <span className="inline-flex items-center gap-1 rounded bg-accent/15 px-2 py-0.5 text-[10px] text-accent border border-accent/20">
                    <Hash className="h-3 w-3" /> {article.category}
                  </span>
                  <span>{article.date}</span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-bold tracking-tight text-slate-900 font-sans hover:text-accent transition-colors leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    {article.snippet}
                  </p>
                </div>

                {/* Expandable blog content */}
                <AnimatePresence mode="wait">
                  {isReading && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-4 border-t border-slate-100 text-slate-700 text-xs sm:text-sm space-y-3.5 leading-relaxed font-sans"
                    >
                      {article.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono font-bold uppercase">{article.readTime}</span>
                <button
                  onClick={() => setReadArticleId(isReading ? null : article.id)}
                  className="flex items-center gap-1 text-accent font-bold hover:text-accent-hover transition-colors cursor-pointer"
                >
                  <span>{isReading ? 'Collapse Article' : 'Read Full Article'}</span>
                  {isReading ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
