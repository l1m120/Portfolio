import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ShieldCheck } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  src: string | null;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ isOpen, src, alt, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {isOpen && src && (
        <motion.div
          id="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 select-none"
          onClick={onClose}
          onContextMenu={(e) => e.preventDefault()}
        >
          {/* Close Button Pin */}
          <button
            id="lightbox-close-btn"
            onClick={onClose}
            className="absolute top-4 right-4 z-50 rounded-full bg-slate-900/60 p-3 text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <motion.div
            id="lightbox-content-card"
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-h-[90vh] max-w-[90vw] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-950 p-1 shadow-2xl">
              {src.toLowerCase().endsWith('.pdf') ? (
                <iframe
                  id="lightbox-pdf-viewer"
                  src={src}
                  title={alt}
                  className="w-[85vw] md:w-[75vw] h-[80vh] rounded-lg border-0 bg-white"
                />
              ) : (
                <img
                  id="lightbox-image"
                  src={src}
                  alt={alt}
                  referrerPolicy="no-referrer"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  className="max-h-[80vh] max-w-full rounded-lg object-contain select-none protected-media"
                  onError={(e) => {
                    // Fallback to a placeholder inside the lightbox if the actual local image is missing
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fb = document.getElementById('lightbox-fallback-display');
                    if (fb) fb.style.display = 'flex';
                  }}
                />
              )}

              {/* Graceful Fallback Container */}
              <div
                id="lightbox-fallback-display"
                className="hidden flex-col items-center justify-center p-12 text-center text-slate-300 min-w-[320px] md:min-w-[500px] h-[350px]"
              >
                <div className="mb-4 rounded-full bg-slate-800/80 p-4 text-slate-400">
                  <ZoomIn className="h-10 w-10" />
                </div>
                <h4 className="text-xl font-medium tracking-tight text-white mb-2">{alt}</h4>
                <p className="text-sm text-slate-400 max-w-md">
                  Document asset path: <code className="bg-slate-900 px-1.5 py-0.5 rounded text-xs text-[#E9C3C9]">{src}</code>
                </p>
                <div className="mt-6 flex gap-3 justify-center">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-3 text-center text-slate-300 flex flex-col items-center gap-1">
              <p className="text-sm font-medium">{alt}</p>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 bg-slate-900/60 px-2.5 py-0.5 rounded-full border border-slate-800">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Protected Media — Saving & Copying Disabled</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
