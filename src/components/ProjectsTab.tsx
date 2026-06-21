import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Database, Video, Cpu, ArrowUpRight, BarChart3, PieChart, FlaskConical, AlertTriangle, Play, HelpCircle, HardDrive, CheckCircle } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, LineChart, Line } from 'recharts';

export default function ProjectsTab() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('vehicle-detection');

  // YOLO Benchmarking Data for Project 1 Chart
  const benchmarkData = [
    { name: 'YOLOv8s', mAP: 0.741, fps: 480, latency: 2.08 },
    { name: 'YOLOv9-C', mAP: 0.755, fps: 310, latency: 3.22 },
    { name: 'YOLOv10s', mAP: 0.762, fps: 540, latency: 1.85 },
    { name: 'YOLO11s (Ours)', mAP: 0.774, fps: 666, latency: 1.50 },
  ];

  // MY-VID Data annotations partition for Project 2 Chart/Graph
  const datasetDistribution = [
    { category: 'Sedans', count: 3450 },
    { category: 'SUVs', count: 2180 },
    { category: 'Motorcycles', count: 1820 },
    { category: 'Trucks/Lorry', count: 950 },
    { category: 'Buses', count: 600 },
  ];

  const projects = [
    {
      id: 'vehicle-detection',
      title: 'Vehicle Detection Framework Using YOLO',
      category: 'Intelligent Transportation Systems',
      subtitle: 'Stand-alone Open-Source Vehicle Detection Framework for Southeast Asian Highway Monitoring',
      duration: 'Apr 2025 – Jan 2026',
      icon: Video,
      highlights: ['666 FPS Peak Edge speed', 'YOLO11s Optimal Model', 'Malaysian JKR Collaboration']
    },
    {
      id: 'my-vid-dataset',
      title: 'MY-VID: Localised Malaysian Dataset',
      category: 'Dataset Curation',
      subtitle: 'The First Open-Source Multi-Scenario Malaysian Vehicle Curation Benchmarks',
      duration: 'Dec 2024 – Dec 2025',
      icon: Database,
      highlights: ['9,000+ Annotation Cards', 'Tropical Rainy Scenarios', 'Fully Open Source on Zenodo']
    },
    {
      id: 'flood-response',
      title: 'UAV Flood Response Research',
      category: 'Disaster Management',
      subtitle: 'Technical Review and Vision Systems for Extreme Weather Flood Search & Rescue',
      duration: 'Ongoing',
      icon: FlaskConical,
      highlights: ['Systematic Review', 'Targeting Q1 IEEE Access', 'Thermal-Debris Classifiers']
    },
    {
      id: 'uav-vision',
      title: 'UAV Computer Vision Assembly',
      category: 'Hardware & Edge AI',
      subtitle: 'Custom UAV Flight Assembly and Core Real-Time Object Detection Ingestion Pipelines',
      duration: 'Jun 2024 – Present',
      icon: Cpu,
      highlights: ['Hardware Assembly', 'Circuit Integration', 'ONNX & OpenVINO optimized']
    }
  ];

  return (
    <div id="projects-tab-container" className="space-y-12 py-4">
      {/* Tab Navigation header */}
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Academic Research Projects
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Rigorous computer vision studies, customized benchmarks, and hardware-software hardware designs
        </p>
      </div>

      {/* Grid of Projects side selectors */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left selector panel */}
        <div className="lg:col-span-4 space-y-3">
          <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-2">
            SELECT RESEARCH PAPER CASE
          </span>
          <div className="flex flex-col gap-2">
            {projects.map((proj) => {
              const ProjIcon = proj.icon;
              const isSelected = selectedProjectId === proj.id;
              return (
                <button
                  key={proj.id}
                  id={`proj-select-btn-${proj.id}`}
                  onClick={() => setSelectedProjectId(proj.id)}
                  className={`flex flex-col w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <ProjIcon className={`h-4.5 w-4.5 ${isSelected ? 'text-accent' : 'text-slate-400'}`} />
                    <span className={`text-[10px] font-mono uppercase tracking-wider ${isSelected ? 'text-accent-light' : 'text-slate-400 font-bold'}`}>
                      {proj.category}
                    </span>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm tracking-tight leading-snug">{proj.title}</h4>
                  <span className={`text-[11px] mt-2 font-mono ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                    {proj.duration}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Details frame */}
        <div id="project-detail-content-frame" className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProjectId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-200/95 rounded-2xl p-6 sm:p-8 shadow-xs"
            >
              {selectedProjectId === 'vehicle-detection' && (
                <div id="view-vehicle-detection" className="space-y-6">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1 bg-accent/10 text-accent font-semibold px-2.5 py-0.5 rounded text-xs border border-accent/20">
                      Primary Final Year Project
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 leading-tight">
                      Vehicle Detection Framework Using YOLO
                    </h3>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-mono font-bold">
                      COLLABORATION: Malaysian Public Works Department (JKR)
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wider font-mono text-slate-400">Problem Statement</h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-medium">
                        Southeast Asian Intelligent Transportation Systems (ITS) suffer substantial accuracy dropouts. Standard Western models often fail when applied to tropical torrential downpours, night low-contrast settings, and non-Western local sub-compact vehicles like Proton and Perodua, causing lane-occupancy metrics to fail completely.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wider font-mono text-slate-400">Research Methodology</h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-medium">
                        We benchmarked leading light-inference deep learning detectors including YOLOv8, YOLOv9, YOLOv10 and YOLO11. Training was performed utilizing localized multi-angle cameras and JKR road telemetry feeds, followed by optimization of weight partitions.
                      </p>
                    </div>
                  </div>

                  {/* YOLO Benchmarking Recharts Implementation */}
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs uppercase tracking-wider font-mono text-slate-400">YOLO Model Benchmarking (Ours vs Competitors)</h4>
                      <span className="text-[10px] font-mono text-emerald-600 font-bold">Inference Frame Speed vs mAP50 Accuracy</span>
                    </div>

                    <div className="h-64 w-full bg-slate-50 border border-slate-200/60 rounded-xl p-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={benchmarkData}
                          margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                          <XAxis dataKey="name" stroke="#64748b" style={{ fontSize: 11, fontFamily: 'monospace' }} />
                          <YAxis stroke="#64748b" style={{ fontSize: 11, fontFamily: 'monospace' }} />
                          <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e2e8f0' }} />
                          <Legend wrapperStyle={{ fontSize: 11, fontFamily: 'monospace' }} />
                          <Bar name="Frames Per Second (FPS)" dataKey="fps" fill="#9d8ba5" radius={[4, 4, 0, 0]} />
                          <Bar name="Accuracy (mAP @ 0.50)" dataKey="mAP" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 bg-slate-50 p-4 rounded-xl border border-slate-200/50">
                    <div>
                      <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase">Optimal Detector</span>
                      <span className="text-sm font-extrabold text-[#3b82f6]">YOLO11s Architecture</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase">Precision Score</span>
                      <span className="text-sm font-extrabold text-slate-900">0.774 mAP50 / 0.742 F1</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase font-mono">Real-Time FPS</span>
                      <span className="text-sm font-extrabold text-emerald-600">666 FPS Inference Peak</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold text-xs uppercase tracking-wider font-mono text-slate-400">Research Outcome & Value</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                      The YOLO11s optimal weights demonstrated exceptional generalization under monsoon cloud occlusions. The fully-packaged open-source framework was delivered directly to the Malaysian Public Works Department, forming a baseline for highway congestion assessment.
                    </p>
                  </div>
                </div>
              )}

              {selectedProjectId === 'my-vid-dataset' && (
                <div id="view-my-vid-dataset" className="space-y-6">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1 bg-purple-50 text-purple-700 font-semibold px-2.5 py-0.5 rounded text-xs border border-purple-200">
                      Open-Source Dataset Release
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 leading-tight">
                      MY-VID: Localised Malaysian Dataset
                    </h3>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-mono font-bold">
                      DEPLOYED DESTINATION: ZENODO RESEARCH DATABASE HUB
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wider font-mono text-slate-400">Dataset Motivation</h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-semibold">
                        Existing popular ITS vehicle datasets are recorded primarily in Europe or the US. They miss specific motorbike classes heavily prevalent in Southeast Asia and local vehicle types. MY-VID bridges this research gap completely.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wider font-mono text-slate-400">Annotation Pipeline</h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-semibold">
                        Utilized robust computer vision curation. Collected 9,000 highly diverse entries over multi-vehicle junctions. Bounding boxes annotated using Roboflow and LabelMe under high quality verification.
                      </p>
                    </div>
                  </div>

                  {/* Dataset Class Distribution Bar Chart */}
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs uppercase tracking-wider font-mono text-slate-400">MY-VID Annotation Category Distribution</h4>
                      <span className="text-[10px] font-mono text-slate-400 font-bold">BBoxes totals by Class Type</span>
                    </div>

                    <div className="h-60 w-full bg-slate-50 border border-slate-200/60 rounded-xl p-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={datasetDistribution}
                          layout="vertical"
                          margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                          <XAxis type="number" stroke="#64748b" style={{ fontSize: 11, fontFamily: 'monospace' }} />
                          <YAxis type="category" dataKey="category" stroke="#64748b" style={{ fontSize: 11, fontFamily: 'monospace' }} />
                          <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
                          <Bar name="Total Bounding Boxes" dataKey="count" fill="#9d8ba5" radius={[0, 4, 4, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-xs uppercase tracking-wider font-mono text-slate-400">Applications & Future Roadmap</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                      MY-VID serves as the core benchmark for Malaysian smart highway research. Future expansion involves enriching nighttime infrared vehicle bounding templates.
                    </p>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-400">Cite via DOI: <code className="bg-slate-100 px-1 py-0.5 rounded text-accent font-mono font-bold">10.5281/zenodo.16866508</code></span>
                      <a
                        href="https://doi.org/10.5281/zenodo.16866508"
                        target="_blank"
                        referrerPolicy="no-referrer"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-accent font-bold hover:underline"
                      >
                        <span>Access on Zenodo</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {selectedProjectId === 'flood-response' && (
                <div id="view-flood-response" className="space-y-6">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 font-semibold px-2.5 py-0.5 rounded text-xs border border-amber-200">
                      Disaster Rescue Research
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 leading-tight">
                      UAV Flood Response Research
                    </h3>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-mono font-bold">
                      CURRENT STAGE: SYSTEMATIC METHODOLOGY IN PREPARATION FOR IEEE ACCESS
                    </p>
                  </div>

                  <div className="space-y-4 pt-3 border-t border-slate-100">
                    <div className="flex items-start gap-3 bg-rose-50 border border-rose-100 p-4 rounded-xl">
                      <AlertTriangle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-rose-900 font-mono uppercase">Key Disruption Challenges</h4>
                        <p className="text-xs sm:text-sm text-rose-800 leading-relaxed">
                          Extreme weather conditions disrupt UAV lenses and signal. Heavy rain obscures vision-sensors, while high surface debris water mirrors signals and generates massive false positives in detection pipelines.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-bold text-xs uppercase tracking-wider font-mono text-slate-500">Proposed Algorithmic Framework</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                        Our system integrates spatial tracking metadata from drones alongside lightweight vision-transformers. By utilizing thermal cameras and a dual-band transmission array, we classify floating debris vs survivors even under complete rainfall occlusions.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-bold text-xs uppercase tracking-wider font-mono text-slate-500 font-mono">Literature Review Scope</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Currently conducting a massive systematic survey of Southeast Asian disaster response technologies, documenting more than 150 related papers to establish clear, standardized MLOps paradigms for emergency first response UAV fleets.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {selectedProjectId === 'uav-vision' && (
                <div id="view-uav-vision" className="space-y-6">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-0.5 rounded text-xs border border-emerald-200">
                      Physical Computing & MLOps
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 leading-tight">
                      UAV Computer Vision Assembly
                    </h3>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-mono font-bold">
                      HARDWARE INTEGRATION: CUSTOM FLIGHT CHASSIS & JETSON ARRAYS
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-3 border-t border-slate-100">
                    <div className="space-y-3">
                      <h4 className="font-bold text-xs uppercase tracking-wider font-mono text-slate-500 flex items-center gap-1">
                        <HardDrive className="h-3.5 w-3.5 text-accent" /> DRONE CHASSIS ASSEMBLY
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-600 font-medium">
                        <li className="flex items-start gap-1.5">
                          <CheckCircle className="h-3 w-3 mt-0.5 text-accent" /> Custom carbon-fiber lightweight chassis structure integration.
                        </li>
                        <li className="flex items-start gap-1.5">
                          <CheckCircle className="h-3 w-3 mt-0.5 text-accent" /> Flight computing core with customized telemetry controllers interfaces.
                        </li>
                        <li className="flex items-start gap-1.5">
                          <CheckCircle className="h-3 w-3 mt-0.5 text-accent" /> Low-draw, high-burst power circuitry optimized for stable camera operations.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-xs uppercase tracking-wider font-mono text-slate-500 flex items-center gap-1">
                        <Cpu className="h-3.5 w-3.5 text-accent" /> CV INFERENCE PIPELINE
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-600 font-medium font-sans">
                        <li className="flex items-start gap-1.5">
                          <CheckCircle className="h-3 w-3 mt-0.5 text-accent" /> Heavy PyTorch yolov11 models converted smoothly into OpenVINO and ONNX runtimes.
                        </li>
                        <li className="flex items-start gap-1.5">
                          <CheckCircle className="h-3 w-3 mt-0.5 text-accent" /> Post-Training Quantization (PTQ) down to INT8 layout to lower engine power usage.
                        </li>
                        <li className="flex items-start gap-1.5">
                          <CheckCircle className="h-3 w-3 mt-0.5 text-accent" /> Field-tested real-time streaming video feeds directly feeding edge Jetson compilers.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/50">
                    <h4 className="font-bold text-xs uppercase tracking-wider font-mono text-slate-500">Deployment Benchmarks Achieved</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      Proved successful drone tracking capabilities demonstrating stable aerial video telemetry streaming at 30+ frames per second under localized signal noise, providing a strong blueprint for lightweight computing in extreme scenarios.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
