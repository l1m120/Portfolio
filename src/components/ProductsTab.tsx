import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, Globe, Shield, RefreshCw, Zap, Server, Code, Calendar, CheckCircle, Mail, Phone, Library, Film, MessageSquare, Star, Plus, Trash2, ExternalLink } from 'lucide-react';

// Pre-seeded mock assets representing Douban/TMDB/Books live search
const mockMediaDB = [
  { id: '1', type: 'book', title: 'The Three-Body Problem (三体)', author: 'Cixin Liu', lang: 'Bilingual', rating: 5, banner: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=120&auto=format&fit=crop&q=60' },
  { id: '2', type: 'book', title: 'Deep Learning (深度学习)', author: 'Ian Goodfellow', lang: 'English', rating: 5, banner: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&auto=format&fit=crop&q=60' },
  { id: '3', type: 'movie', title: 'Interstellar (星际穿越)', author: 'Christopher Nolan', lang: 'English', rating: 5, banner: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=120&auto=format&fit=crop&q=60' },
  { id: '4', type: 'movie', title: 'Spirited Away (千与千寻)', author: 'Hayao Miyazaki', lang: 'Bilingual', rating: 5, banner: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=120&auto=format&fit=crop&q=60' },
  { id: '5', type: 'drama', title: 'Nirvana in Fire (琅琊榜)', author: 'Kong Sheng', lang: 'Mandarin', rating: 4.8, banner: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=120&auto=format&fit=crop&q=60' },
];

export default function ProductsTab() {
  const [activeTab, setActiveTab] = useState<'cozy-corner' | 'homestay'>('cozy-corner');

  // ----------- Xuan's Cozy Corner Interactive State -----------
  const [mediaItems, setMediaItems] = useState(mockMediaDB);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'book' | 'movie' | 'drama'>('all');
  const [newTitle, setNewTitle] = useState('');
  const [newCreator, setNewCreator] = useState('');
  const [newType, setNewType] = useState<'book' | 'movie' | 'drama'>('book');
  const [newRating, setNewRating] = useState(5);
  const [syncStatus, setSyncStatus] = useState<'synced' | 'syncing' | 'offline'>('synced');

  // ----------- Cozy Corner helper handlers -----------
  const handleAddMedia = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    setSyncStatus('syncing');
    const newItem = {
      id: Date.now().toString(),
      type: newType,
      title: newTitle,
      author: newCreator || 'Unknown Creator',
      lang: 'User Logged',
      rating: newRating,
      banner: newType === 'book'
        ? 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=120&auto=format&fit=crop&q=60'
        : 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=120&auto=format&fit=crop&q=60'
    };

    setTimeout(() => {
      setMediaItems([newItem, ...mediaItems]);
      setNewTitle('');
      setNewCreator('');
      setNewRating(5);
      setSyncStatus('synced');
    }, 800);
  };

  const handleDeleteMedia = (id: string) => {
    setSyncStatus('syncing');
    setTimeout(() => {
      setMediaItems(mediaItems.filter(item => item.id !== id));
      setSyncStatus('synced');
    }, 500);
  };

  const filteredMedia = mediaItems.filter(item => {
    const matchesFilter = filterType === 'all' || item.type === filterType;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div id="products-tab-container" className="space-y-12 py-4">
      {/* Structural Page Header */}
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Software Products & Digitization Systems
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Demonstrating high-quality product engineering, custom state managers, API standardization, and business digitization
        </p>
      </div>

      {/* Case Study Switch Tab buttons */}
      <div className="flex rounded-xl bg-slate-100 p-1 max-w-sm border border-slate-200">
        <button
          onClick={() => setActiveTab('cozy-corner')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
            activeTab === 'cozy-corner'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Xuan's Cozy Corner
        </button>
        <button
          onClick={() => setActiveTab('homestay')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
            activeTab === 'homestay'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          88 Homestay Yong Peng
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'cozy-corner' ? (
          <motion.div
            key="cozy-corner-case"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Case Study Technical Specs Column (Left) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-semibold bg-accent-light text-accent border border-accent-border/60">
                  Case Study: Bilingual Media Tracking Platform
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Xuan's Cozy Corner</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                  A high-contrast cloud tracking dashboard designed to help readers and viewers index their books, movies, and TV dramas natively in English and Mandarin.
                </p>
              </div>

              {/* Stack Summary */}
              <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl grid grid-cols-2 gap-4">
                <div>
                  <h5 className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">Architecture Stack</h5>
                  <p className="text-xs font-bold text-slate-800 mt-1">Next.js & Supabase Engine</p>
                </div>
                <div>
                  <h5 className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">Deployment Targets</h5>
                  <p className="text-xs font-bold text-slate-800 mt-1">Dockerized on Google Cloud Run</p>
                </div>
                <div>
                  <h5 className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">Aggregated API Feeds</h5>
                  <p className="text-xs font-bold text-slate-800 mt-1">TMDB, OMDb, Google Books</p>
                </div>
                <div>
                  <h5 className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">Data Search Logic</h5>
                  <p className="text-xs font-bold text-slate-800 mt-1">Douban Live Search Mimics</p>
                </div>
              </div>

              {/* Engineering Challenges */}
              <div className="space-y-3">
                <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider font-mono">Core Engineering Solutions</h4>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 font-medium">
                  <div className="flex gap-2.5">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 p-0">High-Fidelity API Normalization :</strong> Resolves disparate schema disparities between English APIs (OMDb metadata layouts) and Asian book aggregators, creating unified database records natively.
                    </div>
                  </div>
                  <div className="flex gap-2.5">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 p-0">Supabase Cloud Sync Rules :</strong> Optimized database indexes and JWT policies to trigger offline write caching, eliminating cloud synchronization lag on low speed cellular networks.
                    </div>
                  </div>
                  <div className="flex gap-2.5">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 p-0">Douban Live Search Mimics :</strong> Replaced slower client queries with a server-side Debounce wrapper, cutting live queries by 72% while displaying instant bilingual metadata results.
                    </div>
                  </div>
                </div>
              </div>

              {/* Flowchart or Diagram placeholder */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                <h5 className="text-[11px] font-mono font-bold text-slate-400 uppercase">ARCHITECTURE PIPELINE LAYOUT</h5>
                <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-500 py-1.5 border-b border-slate-200">
                  <span>Client React Visuals</span>
                  <span>➜</span>
                  <span>Cloud Run NodeJS Router</span>
                  <span>➜</span>
                  <span>Supabase Sync SQL</span>
                </div>
                <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>OMDb / TMDB Fetch</span>
                  <span>➜</span>
                  <span>Bilingual Douban Live Handler</span>
                  <span>➜</span>
                  <span>Normaliser DB Engine</span>
                </div>
              </div>
            </div>

            {/* LIVE FUNCTIONAL PLAYGROUND (Right) */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-md space-y-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Library className="h-4.5 w-4.5 text-accent" />
                  <h4 className="font-extrabold text-slate-900 text-sm">Xuan's Cozy Corner Interactive Demo</h4>
                </div>
                
                {/* Simulated Supabase Sync Pill */}
                <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10.5px] font-mono font-bold border transition-all ${
                  syncStatus === 'synced' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                  syncStatus === 'syncing' ? 'bg-amber-50 text-amber-700 border-amber-200 animate-pulse' :
                  'bg-stone-50 text-stone-500 border-stone-200'
                }`}>
                  <RefreshCw className={`h-3 w-3 ${syncStatus === 'syncing' ? 'animate-spin' : ''}`} />
                  {syncStatus === 'synced' ? 'SUPABASE_SYNCED' : syncStatus === 'syncing' ? 'MEMWRITING_SUPABASE...' : 'OFFLINE_STATE'}
                </span>
              </div>

              {/* Add Rating Form */}
              <form onSubmit={handleAddMedia} className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200/60 text-xs text-slate-700">
                <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
                  <span className="font-mono font-bold uppercase text-[10px] text-slate-400">Log Personal Media</span>
                  <span className="text-[9px] font-mono bg-accent/15 px-1 rounded text-accent">DOUBAN APIS</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-medium text-slate-400">Book / Media Title</label>
                    <input
                      type="text"
                      placeholder="e.g. Harry Potter"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded p-1.5 outline-none font-sans font-semibold text-slate-800 text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-medium text-slate-400">Author / Director</label>
                    <input
                      type="text"
                      placeholder="e.g., J.K. Rowling"
                      value={newCreator}
                      onChange={(e) => setNewCreator(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded p-1.5 outline-none font-sans font-semibold text-slate-800 text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 py-1">
                  <div>
                    <label className="text-[10px] font-mono font-medium text-slate-400 block mb-1">Media Type</label>
                    <select
                      value={newType}
                      onChange={(e) => setNewType(e.target.value as any)}
                      className="w-full bg-white border border-slate-200 rounded p-1 outline-none text-[11px] font-semibold text-slate-700 cursor-pointer"
                    >
                      <option value="book">Book (书)</option>
                      <option value="movie">Movie (电影)</option>
                      <option value="drama">Drama (电视剧)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono font-medium text-slate-400 block mb-1">Your Rating</label>
                    <input
                      type="number"
                      min="1"
                      max="5"
                      step="0.1"
                      value={newRating}
                      onChange={(e) => setNewRating(parseFloat(e.target.value) || 5)}
                      className="w-full bg-white border border-slate-200 p-1 rounded font-mono font-bold text-center text-xs"
                    />
                  </div>

                  <div className="flex items-end">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-1 bg-accent hover:bg-accent-hover text-white rounded p-1.5 font-bold cursor-pointer transition-colors"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      <span>Log Item</span>
                    </button>
                  </div>
                </div>
              </form>

              {/* Render logged index list */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 border-b border-slate-100 pb-2">
                  {/* Search box */}
                  <input
                    type="text"
                    placeholder="Bilingual live search titles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-grow bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-xs outline-none"
                  />

                  {/* Tiny selector */}
                  <div className="flex gap-1">
                    {(['all', 'book', 'movie'] as const).map((type) => (
                      <button
                        key={type}
                        onClick={() => setFilterType(type)}
                        className={`px-1.5 py-0.5 rounded text-[10px] font-mono uppercase font-bold border ${
                          filterType === type ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-200'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {filteredMedia.length > 0 ? (
                    filteredMedia.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-150 rounded-lg group hover:border-accent/30 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          {item.type === 'book' ? (
                            <Library className="h-4 w-4 text-slate-400" />
                          ) : (
                            <Film className="h-4 w-4 text-slate-400" />
                          )}
                          <div className="space-y-0.5">
                            <h5 className="font-bold text-slate-800 text-xs pr-2">{item.title}</h5>
                            <p className="text-[10px] text-slate-500 font-medium font-mono">{item.author} | {item.lang}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-0.5 text-xs text-amber-500 font-mono font-bold">
                            <Star className="h-3 w-3 fill-amber-500" /> {item.rating}
                          </span>
                          <button
                            onClick={() => handleDeleteMedia(item.id)}
                            className="text-slate-300 hover:text-rose-500 transition-colors p-1"
                            title="Delete index item"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-xs text-slate-400 py-6">No matching logged indexes found.</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="homestay-case"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Case Study Technical Specs Column (Left) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-850 border border-emerald-200">
                  Case Study: Small Business Digitalization
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">88 Homestay Yong Peng</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                  A high-performance commercial web platform designed to digitize, modernize, and expand market access for a family-owned hospitality business in Johor, Malaysia.
                </p>
              </div>

              {/* Stack Summary */}
              <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl grid grid-cols-2 gap-4">
                <div>
                  <h5 className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">FRONTEND ARCHITECTURE</h5>
                  <p className="text-xs font-bold text-slate-800 mt-1">React / HTML5 & Tailwind CSS</p>
                </div>
                <div>
                  <h5 className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">API & COMMUNICATION</h5>
                  <p className="text-xs font-bold text-slate-800 mt-1 font-sans">Web3Forms & WhatsApp Business API</p>
                </div>
                <div>
                  <h5 className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">HOSTING & DEVOPS</h5>
                  <p className="text-xs font-bold text-slate-800 mt-1">GitHub Pages (Serverless)</p>
                </div>
                <div>
                  <h5 className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase font-sans">GLOBALIZATION</h5>
                  <p className="text-xs font-bold text-slate-800 mt-1">Trilingual i18n (English/Chinese/Malay)</p>
                </div>
              </div>

              {/* Business Impact block */}
              <div className="space-y-3">
                <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider font-mono">Proven Operational Impact</h4>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 font-medium">
                  <div className="flex gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 leading-relaxed">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-bold">Direct-to-Consumer Pipeline:</strong> Bypassed expensive third-party OTA (Online Travel Agency) commission fees by routing customer inquiries directly to a centralized WhatsApp Business funnel.
                    </div>
                  </div>
                  <div className="flex gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 leading-relaxed">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-bold">Zero-Cost Infrastructure:</strong> Engineered a 100% serverless static architecture, reducing monthly server and hosting overhead to $0 while maintaining global CDN edge speeds.
                    </div>
                  </div>
                  <div className="flex gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 leading-relaxed">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-bold">Expanded Demographic Reach:</strong> Modernized the digital presence with a responsive, trilingual interface, significantly boosting visibility and inquiries from international and out-of-state tourists.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LIVE FUNCTIONAL WEBPAGE IFRAME DEMO (Right) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 px-1">
                <Globe className="h-4.5 w-4.5 text-accent animate-pulse" />
                <h4 className="font-extrabold text-slate-900 text-sm">88 Homestay Live Demo</h4>
              </div>
              <div className="border border-slate-200 rounded-xl shadow-sm overflow-hidden bg-white">
                {/* Browser Header Bar */}
                <div className="bg-slate-100 px-4 py-2 flex items-center justify-between border-b border-slate-200 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400 block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 block" />
                  </div>
                  <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <span>yp88homestay.com</span>
                  </div>
                  <div>
                    <a
                      href="https://yp88homestay.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-50 border border-slate-200 text-[10px] font-bold text-slate-700 hover:text-slate-900 transition-all shadow-xs cursor-pointer"
                      title="Open full website in a new tab"
                    >
                      <ExternalLink className="h-3 w-3 text-accent" />
                      <span className="font-sans">Open Site</span>
                    </a>
                  </div>
                </div>
                {/* The Live Iframe */}
                <iframe 
                  src="https://yp88homestay.com/" 
                  className="w-full h-[500px] border-none bg-slate-50" 
                  title="88 Homestay Live Website"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
