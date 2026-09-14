"use client";

import { useState } from "react";
import { Check, ChevronUp, Search, Sparkle } from "lucide-react";

export default function ProjectCard() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <div className="bg-white rounded-3xl border-2 border-softPink shadow-kawaii overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3.5 py-1 rounded-full bg-softPink text-deepRose text-xs font-bold">
                February 2026 – March 2026
              </span>
              <span className="px-3 py-1 rounded-full bg-lavender/60 text-charcoalPlum text-xs font-bold">
                Computer Vision &amp; AI
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoalPlum">
              Vision-Based Smart Checkout System
            </h3>
            <p className="text-sm sm:text-base font-semibold text-deepRose mt-2">
              Built a computer vision-based checkout system using Python and OpenCV.
            </p>

            <div className="mt-6 space-y-3.5 text-sm sm:text-base text-mutedPlum">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-softPink flex items-center justify-center text-deepRose shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong>Automated Billing via Object Detection:</strong> Implemented computer vision object
                  detection algorithms to automatically recognize products on the scanning counter for instant
                  billing.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-softPink flex items-center justify-center text-deepRose shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong>Efficiency Optimization:</strong> Significantly enhanced checkout throughput and customer
                  experience by minimizing the need for manual barcode scanning.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-softPink flex items-center justify-center text-deepRose shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>
                  <strong>Ongoing Refinement:</strong> Continuously working on elevating real-time detection
                  accuracy and model latency under varied retail lighting conditions.
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              {["Python", "OpenCV", "Computer Vision", "Object Detection"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-warmCream rounded-xl border border-softPink text-xs font-bold text-charcoalPlum"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-softPink/40">
            <button
              onClick={() => setDetailsOpen((open) => !open)}
              className="px-6 py-3 rounded-full bg-deepRose hover:bg-rosePink text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md flex items-center gap-2"
            >
              <span>{detailsOpen ? "HIDE PROJECT ARCHITECTURE" : "VIEW PROJECT ARCHITECTURE"}</span>
              {detailsOpen ? <ChevronUp className="w-4 h-4" /> : <Sparkle className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#1F1722] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border-t lg:border-t-0 lg:border-l border-softPink/30 text-white">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffccd5_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="laser-scan absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent z-10 shadow-[0_0_12px_#ff4d8d]" />

          <div className="relative z-20 flex items-center justify-between pb-3 border-b border-white/20 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="font-mono text-pink-300">CAM_01: REAL-TIME FEED</span>
            </div>
            <span className="font-mono text-[11px] text-gray-300">FPS: 32.4</span>
          </div>

          <div className="my-8 relative z-20 space-y-4">
            <div className="border-2 border-emerald-400 bg-emerald-400/10 p-3 rounded-lg relative">
              <div className="absolute -top-3 left-2 bg-emerald-400 text-charcoalPlum font-mono text-[10px] font-bold px-1.5 py-0.5 rounded">
                [01] Organic Juice Box (Conf: 98.4%)
              </div>
              <div className="flex justify-between text-xs font-mono pt-1 text-emerald-200">
                <span>SKU: #88219</span>
                <span>Item Verified</span>
              </div>
            </div>
            <div className="border-2 border-pink-400 bg-pink-400/10 p-3 rounded-lg relative">
              <div className="absolute -top-3 left-2 bg-pink-400 text-charcoalPlum font-mono text-[10px] font-bold px-1.5 py-0.5 rounded">
                [02] Fresh Apple (Conf: 99.1%)
              </div>
              <div className="flex justify-between text-xs font-mono pt-1 text-pink-200">
                <span>SKU: #40112</span>
                <span>Item Verified</span>
              </div>
            </div>
          </div>

          <div className="relative z-20 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
            <div className="flex justify-between items-center text-xs font-mono mb-1 text-gray-300">
              <span>Detected Items: 2</span>
              <span>Instant Cart Total: Auto-Calc</span>
            </div>
            <div className="font-caveat text-lg text-pink-300 text-center font-bold">
              &quot;Streamlined automated retail checkout&quot;
            </div>
          </div>
        </div>
      </div>

      {detailsOpen && (
        <div className="p-6 sm:p-8 bg-warmCream border-t-2 border-softPink">
          <h4 className="text-base font-bold text-charcoalPlum mb-2 flex items-center gap-1.5">
            <Search className="w-4 h-4" /> Technical Highlights &amp; Implementation Notes
          </h4>
          <p className="text-sm text-mutedPlum leading-relaxed">
            Designed to solve queue bottlenecks in high-volume retail. By passing webcam frames through color space
            conversion, pre-processing, and contour/feature matching in OpenCV, items placed within the designated
            scanning area are immediately classified. Future scope involves optimizing multi-item occlusion
            handling and embedding edge-AI processing.
          </p>
        </div>
      )}
    </div>
  );
}
