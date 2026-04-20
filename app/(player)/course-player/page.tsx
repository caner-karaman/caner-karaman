import Link from "next/link";
import Image from "next/image";

export default function CoursePlayerPage() {
  return (
    <>
      {/* Top Navigation */}
      <header className="bg-[#131313] text-[#adc6ff] font-sans tracking-tight leading-tight text-sm shadow-2xl shadow-black/50 flex justify-between items-center w-full px-6 py-3 border-b border-[#424754]/15 docked full-width top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/courses" className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            <span>Back to Dashboard</span>
          </Link>
          <div className="h-4 w-px bg-outline-variant/30 hidden md:block"></div>
          <h1 className="text-xl font-black tracking-tighter text-[#e5e2e1] hidden md:block">
            Advanced System Design
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs text-on-surface-variant">25% Complete</span>
            <div className="w-32 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-secondary rounded-full w-[25%]"></div>
            </div>
          </div>
          <button className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors text-sm">
            <span className="material-symbols-outlined text-lg">visibility_off</span>
            <span className="hidden md:inline">Distraction-Free</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden" style={{ minHeight: 'calc(100vh - 53px)' }}>
        {/* Left Sidebar (Curriculum) */}
        <aside className="bg-[#0e0e0e] text-[#adc6ff] font-sans text-sm font-medium docked h-full w-80 hidden md:flex flex-col overflow-y-auto border-r border-outline-variant/15 shrink-0 z-40 bg-[#131313]">
          <div className="p-6 border-b border-outline-variant/15 flex flex-col gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Course Thumbnail"
              className="w-full h-24 object-cover rounded-lg mb-2 opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtPQmbmD44MWnVG___oMeP51KH3Mj54l_u4yo7XEJX5FYAHoIRyM8pjT0Qk6mf8XJCSqWc45ivKeJtBRtn03O-XuCfnflRBg2Z7fEsaBT9V24XgUG1DbZVwxKJtj9SUbikkF6GdABB6_m9lCFBsCeRFQmvB1lHsRdrOVSB7h_qPpTnyyTUCvfr9LmxR8La6CIDR9SKaU_QfBgnlU23vgpfvxv9t2EQKdVQVbZeJfBwiMbrgVwmkEOypjBpsqzoxoA7TuEImke4fPbs"
            />
            <h2 className="text-on-surface font-bold text-base">
              System Design Masterclass
            </h2>
            <div className="flex items-center justify-between">
              <span className="text-xs text-on-surface-variant">45% Completed</span>
              <button className="text-xs text-primary hover:text-primary-container transition-colors">
                Resume Lesson
              </button>
            </div>
          </div>

          <nav className="flex-1 py-4">
            {/* Module 1 */}
            <div className="mb-2">
              <button className="w-full flex items-center justify-between px-6 py-3 hover:bg-surface-container-high transition-colors text-on-surface">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant text-lg">folder</span>
                  <span className="font-semibold">Module 1: Foundations</span>
                </div>
                <span className="text-xs text-on-surface-variant">3/5</span>
              </button>
              <div className="flex flex-col">
                <Link href="#" className="flex items-center justify-between px-6 py-3 pl-12 hover:bg-[#2a2a2a]/50 hover:text-[#e5e2e1] text-[#c2c6d6] transition-colors ease-in-out duration-200">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                    <span>Intro to Architecture</span>
                  </div>
                  <span className="text-xs text-on-surface-variant">4:30</span>
                </Link>
                <Link href="#" className="flex items-center justify-between px-6 py-3 pl-12 bg-[#1c1b1b] text-[#adc6ff] rounded-r-lg border-l-4 border-[#adc6ff] transition-colors ease-in-out duration-200">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-base">play_circle</span>
                    <span>Distributed Systems Overview</span>
                  </div>
                  <span className="text-xs text-primary">12:15</span>
                </Link>
                <Link href="#" className="flex items-center justify-between px-6 py-3 pl-12 hover:bg-[#2a2a2a]/50 hover:text-[#e5e2e1] text-[#c2c6d6] transition-colors ease-in-out duration-200">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface-variant text-base">lock</span>
                    <span className="opacity-50">CAP Theorem</span>
                  </div>
                  <span className="text-xs text-on-surface-variant opacity-50">8:45</span>
                </Link>
              </div>
            </div>

            {/* Module 2 */}
            <div className="mb-2">
              <button className="w-full flex items-center justify-between px-6 py-3 hover:bg-surface-container-high transition-colors text-on-surface">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant text-lg">folder</span>
                  <span className="font-semibold">Module 2: Data Replication</span>
                </div>
                <span className="text-xs text-on-surface-variant">0/4</span>
              </button>
            </div>
          </nav>
        </aside>

        {/* Right Content Area (Player) */}
        <main className="flex-1 bg-surface-container-low overflow-y-auto">
          <div className="max-w-5xl mx-auto p-6 md:p-8 flex flex-col gap-8">
            {/* Video Player Placeholder */}
            <div className="w-full aspect-video bg-surface-container-lowest rounded-xl relative overflow-hidden group shadow-2xl shadow-black/50 border border-outline-variant/15">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Video Placeholder"
                className="w-full h-full object-cover opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAawKJbG37OZ4uJFuD62JxT5Zq9hrxFeC9E6eHonUPskjd8QPv7hzbI4KzUpTSxReV_fMXuGgZMpBtwm6e_xcpP9hOFIZaf8-4M2Fz-3tSAwoakOPDZrPg3_TijRY_rIvanD2XxYvooA3VsVP1KAYlsLERJsq9KNIEePE28nprjCsNrytfA1p7893vpan9afXNPHbwOuo4hZLSfFUYRYF610-AIJkxUMtOD5zQMsa9tbYPceu6BN8hmtlw1rP0KCMOIaxMFmvs4Ummb"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-surface-container-high/80 backdrop-blur-md rounded-full flex items-center justify-center text-on-surface hover:scale-110 hover:bg-primary hover:text-on-primary transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </button>
              </div>

              {/* Mock Controls */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
                <div className="w-full h-1 bg-surface-container-high rounded-full cursor-pointer">
                  <div className="w-1/3 h-full bg-primary rounded-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-on-surface rounded-full shadow-lg"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-on-surface text-sm">
                  <div className="flex items-center gap-4">
                    <button><span className="material-symbols-outlined text-lg">pause</span></button>
                    <button><span className="material-symbols-outlined text-lg">volume_up</span></button>
                    <span className="text-xs text-on-surface-variant">4:12 / 12:15</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button><span className="material-symbols-outlined text-lg">settings</span></button>
                    <button><span className="material-symbols-outlined text-lg">fullscreen</span></button>
                  </div>
                </div>
              </div>
            </div>

            {/* Lesson Header & Actions */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-on-surface tracking-tight mb-2">
                  Distributed Systems Overview
                </h2>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                  Understanding the fundamental concepts of distributed computing, why we need them, and the basic challenges involved in building reliable systems across multiple nodes.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <button className="px-5 py-2.5 rounded-lg border border-outline-variant/30 text-on-surface text-sm font-medium hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">skip_previous</span>
                  Previous
                </button>
                <button className="px-5 py-2.5 rounded-lg bg-secondary text-on-secondary font-medium text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-secondary/20">
                  Mark Complete &amp; Next
                  <span className="material-symbols-outlined text-lg">skip_next</span>
                </button>
              </div>
            </div>

            {/* Content Tabs */}
            <div className="mt-4 border-t border-outline-variant/15 pt-6">
              <div className="flex items-center gap-8 mb-6 border-b border-outline-variant/15 pb-px">
                <button className="text-primary border-b-2 border-primary pb-3 text-sm font-semibold">Overview</button>
                <button className="text-on-surface-variant hover:text-on-surface pb-3 text-sm font-medium transition-colors">Code Snippets</button>
                <button className="text-on-surface-variant hover:text-on-surface pb-3 text-sm font-medium transition-colors flex items-center gap-2">
                  Discussions
                  <span className="bg-surface-container-high text-xs px-2 py-0.5 rounded-full">12</span>
                </button>
              </div>

              {/* Tab Content Placeholder */}
              <div className="prose prose-invert max-w-none text-on-surface-variant">
                <h3 className="text-xl font-semibold text-on-surface mb-4">Key Takeaways</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">fiber_manual_record</span> 
                    A distributed system is a collection of independent computers that appears to its users as a single coherent system.
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">fiber_manual_record</span> 
                    Primary goals include resource sharing, openness, concurrency, scalability, fault tolerance, and transparency.
                  </li>
                </ul>

                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 shadow-inner mt-8 relative">
                  <div className="absolute top-0 right-0 p-2 opacity-50">
                    <span className="material-symbols-outlined text-sm">content_copy</span>
                  </div>
                  <p className="text-sm font-mono text-primary-fixed mb-2">// Example: Simple Node Representation</p>
                  <pre className="text-sm text-on-surface font-mono overflow-x-auto">
                    <code>{`class Node {
    id: string;
    status: 'active' | 'down';
    connections: Node[];

    constructor(id: string) {
        this.id = id;
        this.status = 'active';
        this.connections = [];
    }
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
