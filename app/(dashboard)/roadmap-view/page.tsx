import Link from "next/link";
import React from "react";

export default function RoadmapViewPage() {
  return (
    <main className="flex-1 relative flex overflow-hidden h-screen w-full font-body">
      {/* Canvas Area */}
      <div 
        className="flex-1 bg-surface-container-lowest overflow-y-auto relative p-8"
        style={{
          backgroundImage: "radial-gradient(rgba(140, 144, 159, 0.1) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      >
        {/* Header section floating over canvas */}
        <div className="mb-12 max-w-4xl mx-auto">
          <Link
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm mb-4 font-medium"
            href="/roadmaps"
          >
            <span
              className="material-symbols-outlined text-[18px]"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              arrow_back
            </span>
            All Roadmaps
          </Link>
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <div>
              <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-2">
                Algorithms &amp; Data Structures
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Master core concepts through a structured path
              </p>
            </div>
            <div className="w-full max-w-xs shrink-0">
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span className="text-on-surface">Overall Progress</span>
                <span className="text-primary font-bold">45%</span>
              </div>
              <div className="h-2 bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/20">
                <div className="h-full bg-gradient-to-r from-primary to-primary-container w-[45%] rounded-full shadow-[0_0_10px_rgba(173,198,255,0.3)]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Roadmap Tree */}
        <div className="relative max-w-4xl mx-auto py-12 flex flex-col items-center select-none pb-32">
          {/* SVG Connections Background */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{ minHeight: "800px" }}
          >
            {/* Line from Array to Two Pointers */}
            <path
              className="stroke-primary fill-none transition-all duration-300 drop-shadow-[0_0_4px_rgba(173,198,255,0.4)]"
              d="M 50% 120 L 50% 200"
              strokeWidth="2"
            ></path>
            {/* Line from Two Pointers to Sliding Window */}
            <path
              className="stroke-outline-variant fill-none transition-all duration-300"
              d="M 50% 280 L 50% 360"
              strokeWidth="2"
            ></path>
            {/* Line from Array to Hashing (Branch right) */}
            <path
              className="stroke-primary fill-none transition-all duration-300 drop-shadow-[0_0_4px_rgba(173,198,255,0.4)]"
              d="M 50% 120 C 50% 160, 70% 160, 70% 200"
              strokeWidth="2"
            ></path>
            {/* Line from Two Pointers to Linked List (Branch left) */}
            <path
              className="stroke-outline-variant fill-none transition-all duration-300"
              d="M 50% 280 C 50% 320, 30% 320, 30% 360"
              strokeWidth="2"
            ></path>
          </svg>

          {/* Node 1: Arrays (Completed) */}
          <div className="relative z-10 w-64 bg-surface-container-low border border-secondary rounded-lg p-4 shadow-[0_4px_24px_rgba(78,222,163,0.1)] mb-20 hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/30">
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  check
                </span>
              </div>
              <h3 className="font-headline font-bold text-on-surface">Arrays</h3>
            </div>
            <div className="flex justify-between text-xs text-on-surface-variant mt-3">
              <span>12/12 Problems</span>
              <span className="text-secondary font-medium">100%</span>
            </div>
          </div>

          {/* Level 2 Row */}
          <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-32 w-full mb-20 relative z-10 items-center">
            {/* Node 2: Two Pointers (Available / Active) */}
            <div className="w-64 bg-surface-container-high border-2 border-primary rounded-lg p-4 shadow-[0_0_24px_rgba(173,198,255,0.2)] hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/50 shadow-[0_0_10px_rgba(173,198,255,0.3)]">
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    adjust
                  </span>
                </div>
                <h3 className="font-headline font-bold text-on-surface">
                  Two Pointers
                </h3>
              </div>
              <div className="flex justify-between text-xs text-on-surface-variant mt-3">
                <span>3/8 Problems</span>
                <span className="text-primary font-medium">37%</span>
              </div>
              <div className="h-1 bg-surface-container-highest rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-primary w-[37%]"></div>
              </div>
            </div>

            {/* Node 3: Hashing (Completed Branch) */}
            <div className="w-64 bg-surface-container-low border border-secondary rounded-lg p-4 shadow-[0_4px_24px_rgba(78,222,163,0.1)] hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/30">
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    check
                  </span>
                </div>
                <h3 className="font-headline font-bold text-on-surface">
                  Hashing
                </h3>
              </div>
              <div className="flex justify-between text-xs text-on-surface-variant mt-3">
                <span>8/8 Problems</span>
                <span className="text-secondary font-medium">100%</span>
              </div>
            </div>
          </div>

          {/* Level 3 Row */}
          <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-32 w-full relative z-10 items-center">
            {/* Node 4: Linked List (Locked) */}
            <div className="w-64 bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-4 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-outline border border-outline-variant/50">
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    lock
                  </span>
                </div>
                <h3 className="font-headline font-bold text-on-surface-variant">
                  Linked List
                </h3>
              </div>
              <div className="flex justify-between text-xs text-outline mt-3">
                <span>0/10 Problems</span>
                <span>Locked</span>
              </div>
            </div>

            {/* Node 5: Sliding Window (Locked - Target of Drawer) */}
            <div className="w-64 bg-surface-container-highest border border-outline-variant/40 rounded-lg p-4 shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer relative overflow-hidden group">
              {/* Active highlight hint */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-3 mb-2 relative z-10">
                <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-outline border border-outline-variant">
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    lock
                  </span>
                </div>
                <h3 className="font-headline font-bold text-on-surface">
                  Sliding Window
                </h3>
              </div>
              <div className="flex justify-between text-xs text-on-surface-variant mt-3 relative z-10">
                <span>0/5 Problems</span>
                <span>Prereq: Two Pointers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Drawer (Open State for Sliding Window) */}
      <aside className="w-full md:w-96 bg-surface-container-low border-l border-outline-variant/15 shadow-[-24px_0_48px_rgba(0,0,0,0.5)] flex flex-col z-30 shrink-0">
        {/* Drawer Header */}
        <div className="p-6 border-b border-outline-variant/15 flex items-start justify-between bg-surface-container-high/50">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="material-symbols-outlined text-outline text-sm"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                lock
              </span>
              <span className="text-xs font-semibold text-outline uppercase tracking-wider">
                Locked Module
              </span>
            </div>
            <h2 className="text-xl font-bold font-headline text-on-surface">
              Sliding Window Problems
            </h2>
            <p className="text-sm text-on-surface-variant mt-1">
              Master continuous subarrays or sublists.
            </p>
          </div>
          <button className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest p-1 rounded transition-colors">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              close
            </span>
          </button>
        </div>

        {/* Drawer Progress */}
        <div className="px-6 py-4 bg-surface-container-lowest border-b border-outline-variant/15">
          <div className="flex justify-between items-center text-sm mb-2">
            <span className="font-medium text-on-surface-variant">
              Module Progress
            </span>
            <span className="font-bold text-outline">0/5</span>
          </div>
          <div className="h-1.5 bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-primary w-0"></div>
          </div>
        </div>

        {/* Problem List */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
          {/* Problem 1 */}
          <div className="bg-surface p-4 rounded-lg border border-outline-variant/20 hover:border-outline-variant/50 transition-colors flex items-start gap-4">
            <div className="mt-1">
              <div className="w-5 h-5 rounded-full border border-outline-variant flex items-center justify-center bg-surface-container-low"></div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-medium text-on-surface text-sm">
                  Maximum Average Subarray I
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded text-secondary bg-secondary/10 border border-secondary/20">
                  Easy
                </span>
              </div>
              <p className="text-xs text-on-surface-variant line-clamp-1">
                Find a contiguous subarray whose length is equal to k that has the
                maximum average value.
              </p>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="bg-surface p-4 rounded-lg border border-outline-variant/20 hover:border-outline-variant/50 transition-colors flex items-start gap-4 opacity-75">
            <div className="mt-1">
              <div className="w-5 h-5 rounded-full border border-outline-variant flex items-center justify-center bg-surface-container-low"></div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-medium text-on-surface text-sm">
                  Longest Substring Without Repeating
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded text-tertiary bg-tertiary/10 border border-tertiary/20">
                  Medium
                </span>
              </div>
              <p className="text-xs text-on-surface-variant line-clamp-1">
                Given a string s, find the length of the longest substring without
                repeating characters.
              </p>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="bg-surface p-4 rounded-lg border border-outline-variant/20 hover:border-outline-variant/50 transition-colors flex items-start gap-4 opacity-75">
            <div className="mt-1">
              <div className="w-5 h-5 rounded-full border border-outline-variant flex items-center justify-center bg-surface-container-low"></div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-medium text-on-surface text-sm">
                  Minimum Window Substring
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded text-error border border-error/20 bg-error/10">
                  Hard
                </span>
              </div>
              <p className="text-xs text-on-surface-variant line-clamp-1">
                Given two strings s and t, return the minimum window in s which
                will contain all the characters in t.
              </p>
            </div>
          </div>

          {/* Problem 4 */}
          <div className="bg-surface p-4 rounded-lg border border-outline-variant/20 hover:border-outline-variant/50 transition-colors flex items-start gap-4 opacity-75">
            <div className="mt-1">
              <div className="w-5 h-5 rounded-full border border-outline-variant flex items-center justify-center bg-surface-container-low"></div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-medium text-on-surface text-sm">
                  Sliding Window Maximum
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded text-error border border-error/20 bg-error/10">
                  Hard
                </span>
              </div>
              <p className="text-xs text-on-surface-variant line-clamp-1">
                Return the max sliding window.
              </p>
            </div>
          </div>
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-6 border-t border-outline-variant/15 bg-surface-container-low">
          <button className="w-full bg-surface-container-high border border-outline-variant/30 text-on-surface-variant py-3 rounded-md font-medium text-sm flex items-center justify-center gap-2 cursor-not-allowed">
            <span
              className="material-symbols-outlined text-[18px]"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              lock
            </span>
            Complete 'Two Pointers' to Unlock
          </button>
        </div>
      </aside>
    </main>
  );
}
