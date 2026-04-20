import Link from "next/link";
import Image from "next/image";

export default function CoursesCatalogPage() {
  return (
    <main className="flex-grow pt-32 pb-24 px-8 max-w-screen-2xl mx-auto w-full">
      {/* Hero Section */}
      <header className="mb-16 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-headline font-black tracking-tighter mb-4 bg-gradient-to-br from-primary to-primary-container bg-clip-text text-transparent">
          Master the Technical Interview
        </h1>
        <p className="text-xl text-on-surface-variant font-body leading-relaxed max-w-2xl">
          Comprehensive, deep-dive courses designed to elevate your engineering skills from foundational syntax to distributed system architecture.
        </p>
      </header>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div className="relative w-full md:w-96">
          <span 
            className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline"
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            search
          </span>
          <input 
            className="w-full bg-surface-container-lowest border border-outline-variant/15 text-on-surface pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all placeholder:text-outline" 
            placeholder="Search courses..." 
            type="text"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="px-5 py-2 rounded-full bg-surface-container-high text-on-surface font-label text-sm font-medium border border-outline-variant/15 hover:border-primary/50 transition-colors">
            All
          </button>
          <button className="px-5 py-2 rounded-full bg-surface-container-low text-on-surface-variant font-label text-sm font-medium border border-outline-variant/15 hover:bg-surface-container-high hover:text-on-surface transition-colors">
            Frontend
          </button>
          <button className="px-5 py-2 rounded-full bg-surface-container-low text-on-surface-variant font-label text-sm font-medium border border-outline-variant/15 hover:bg-surface-container-high hover:text-on-surface transition-colors">
            Backend
          </button>
          <button className="px-5 py-2 rounded-full bg-surface-container-low text-on-surface-variant font-label text-sm font-medium border border-outline-variant/15 hover:bg-surface-container-high hover:text-on-surface transition-colors">
            System Design
          </button>
          <button className="px-5 py-2 rounded-full bg-surface-container-low text-on-surface-variant font-label text-sm font-medium border border-outline-variant/15 hover:bg-surface-container-high hover:text-on-surface transition-colors">
            Behavioral
          </button>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Course Card 1: Enrolled */}
        <article className="group relative flex flex-col bg-surface-container-low rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute inset-0 border border-outline-variant/15 rounded-xl group-hover:border-primary/40 group-hover:shadow-[inset_0_0_20px_rgba(173,198,255,0.05)] transition-all pointer-events-none z-20"></div>
          {/* Thumbnail Area */}
          <div className="relative h-48 w-full bg-surface-container-lowest overflow-hidden flex items-center justify-center p-6 border-b border-outline-variant/15">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c1b1b] to-[#0e0e0e] opacity-80"></div>
            <span className="material-symbols-outlined text-6xl text-primary z-10" style={{ fontVariationSettings: "'FILL' 1" }}>lan</span>
            <div className="absolute top-4 left-4 flex gap-2 z-10">
              <span className="px-2 py-1 bg-surface-container-high text-on-surface font-label text-xs uppercase tracking-wider rounded border border-outline-variant/30">
                Advanced
              </span>
            </div>
            <div className="absolute top-4 right-4 z-10">
              <span className="px-2 py-1 bg-tertiary/20 text-tertiary font-label text-xs uppercase tracking-wider rounded border border-tertiary/30">
                Enrolled
              </span>
            </div>
          </div>
          {/* Content Area */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-headline font-bold text-on-surface mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              Grokking the System Design Interview
            </h3>
            <p className="text-on-surface-variant text-sm font-body line-clamp-2 mb-6">
              Learn how to design large-scale distributed systems and prepare for software engineering interviews.
            </p>
            <div className="flex items-center gap-4 text-outline font-label text-xs mb-8 mt-auto">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>menu_book</span> 16 Modules
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>play_circle</span> 120 Lessons
              </span>
            </div>
            {/* Progress Footer */}
            <div className="mt-auto">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-label text-on-surface-variant">45% Completed</span>
                <span className="text-xs font-label text-tertiary">In Progress</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden mb-4 border border-outline-variant/15">
                <div className="h-full bg-tertiary rounded-full w-[45%]"></div>
              </div>
              <button className="w-full py-3 bg-surface-container-high hover:bg-surface-bright text-on-surface font-label font-medium rounded-lg transition-colors border border-outline-variant/20">
                Continue Learning
              </button>
            </div>
          </div>
        </article>

        {/* Course Card 2: Premium (Not Enrolled) */}
        <article className="group relative flex flex-col bg-surface-container-low rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute inset-0 border border-outline-variant/15 rounded-xl group-hover:border-primary/40 group-hover:shadow-[inset_0_0_20px_rgba(173,198,255,0.05)] transition-all pointer-events-none z-20"></div>
          {/* Thumbnail Area */}
          <div className="relative h-48 w-full bg-surface-container-lowest overflow-hidden flex items-center justify-center p-6 border-b border-outline-variant/15">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c1b1b] to-[#0e0e0e] opacity-80"></div>
            <span className="material-symbols-outlined text-6xl text-secondary z-10" style={{ fontVariationSettings: "'FILL' 1" }}>code_blocks</span>
            <div className="absolute top-4 left-4 flex gap-2 z-10">
              <span className="px-2 py-1 bg-surface-container-high text-on-surface font-label text-xs uppercase tracking-wider rounded border border-outline-variant/30">
                Intermediate
              </span>
            </div>
            <div className="absolute top-4 right-4 z-10">
              <span className="px-2 py-1 bg-surface-container-highest text-on-surface font-label text-xs uppercase tracking-wider rounded border border-outline-variant/30">
                Premium
              </span>
            </div>
          </div>
          {/* Content Area */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-headline font-bold text-on-surface mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              Advanced React Patterns
            </h3>
            <p className="text-on-surface-variant text-sm font-body line-clamp-2 mb-6">
              Master complex React concepts, custom hooks, and state management techniques for production apps.
            </p>
            <div className="flex items-center gap-4 text-outline font-label text-xs mb-8 mt-auto">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>menu_book</span> 8 Modules
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>play_circle</span> 64 Lessons
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span> 12h
              </span>
            </div>
            {/* Action Footer */}
            <div className="mt-auto flex items-center justify-between pt-4 border-t border-outline-variant/15">
              <div className="flex flex-col">
                <span className="text-sm font-label text-on-surface-variant line-through opacity-50">$199</span>
                <span className="text-lg font-headline font-bold text-on-surface">$149</span>
              </div>
              <button className="px-6 py-2.5 bg-primary text-on-primary font-label font-medium rounded-lg hover:bg-primary-container transition-colors">
                Unlock Course
              </button>
            </div>
          </div>
        </article>

        {/* Course Card 3: Free (Completed) */}
        <article className="group relative flex flex-col bg-surface-container-low rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute inset-0 border border-outline-variant/15 rounded-xl group-hover:border-primary/40 group-hover:shadow-[inset_0_0_20px_rgba(173,198,255,0.05)] transition-all pointer-events-none z-20"></div>
          {/* Thumbnail Area */}
          <div className="relative h-48 w-full bg-surface-container-lowest overflow-hidden flex items-center justify-center p-6 border-b border-outline-variant/15">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c1b1b] to-[#0e0e0e] opacity-80"></div>
            <span className="material-symbols-outlined text-6xl text-on-surface z-10" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            <div className="absolute top-4 left-4 flex gap-2 z-10">
              <span className="px-2 py-1 bg-surface-container-high text-on-surface font-label text-xs uppercase tracking-wider rounded border border-outline-variant/30">
                Beginner
              </span>
            </div>
            <div className="absolute top-4 right-4 z-10">
              <span className="px-2 py-1 bg-secondary/20 text-secondary font-label text-xs uppercase tracking-wider rounded border border-secondary/30">
                Free
              </span>
            </div>
          </div>
          {/* Content Area */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-headline font-bold text-on-surface mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              Command Line Essentials
            </h3>
            <p className="text-on-surface-variant text-sm font-body line-clamp-2 mb-6">
              Navigate the terminal like a pro. Learn essential bash commands, scripting, and automation.
            </p>
            <div className="flex items-center gap-4 text-outline font-label text-xs mb-8 mt-auto">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>menu_book</span> 4 Modules
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>play_circle</span> 24 Lessons
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>schedule</span> 3h
              </span>
            </div>
            {/* Action Footer */}
            <div className="mt-auto">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-label text-on-surface-variant">100% Completed</span>
                <span className="text-xs font-label text-secondary flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span> Finished
                </span>
              </div>
              <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden mb-4 border border-outline-variant/15">
                <div className="h-full bg-secondary rounded-full w-full"></div>
              </div>
              <button className="w-full py-3 bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label font-medium rounded-lg transition-colors border border-outline-variant/20">
                Review Materials
              </button>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
