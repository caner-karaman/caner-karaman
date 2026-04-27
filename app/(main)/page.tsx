import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-16 mt-12 md:mt-24">
        <div className="md:w-1/2 space-y-8 pr-0 md:pr-12">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.02em] leading-tight text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container">
            Don&apos;t leave your interviews to chance.
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed max-w-lg">
            Prepare with structure. Master algorithms, system design, and the
            fundamentals that get you hired.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/login?mode=signup"
              className="bg-primary text-on-primary px-8 py-4 rounded-md font-bold text-lg shadow-[0_0_24px_rgba(173,198,255,0.2)] hover:bg-primary-fixed hover:-translate-y-1 transition-all duration-200 active:scale-95 inline-block"
            >
              Start Now
            </Link>
            {/* <Link
              href="/roadmaps"
              className="border border-outline/20 text-on-surface px-8 py-4 rounded-md font-bold text-lg hover:bg-surface-container-high transition-all duration-200 inline-block"
            >
              Explore Roadmaps
            </Link> */}
          </div>
        </div>
        <div className="md:w-1/2 w-full h-[400px] md:h-[500px] rounded-xl bg-surface-container-lowest border border-outline-variant/15 shadow-[0_24px_48px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
          <div className="space-y-4 w-3/4 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
            <div className="h-6 w-1/3 bg-surface-container-high rounded-sm"></div>
            <div className="h-4 w-full bg-surface-container rounded-sm"></div>
            <div className="h-4 w-5/6 bg-surface-container rounded-sm"></div>
            <div className="h-4 w-4/6 bg-surface-container rounded-sm"></div>
            <div className="flex gap-2 pt-4">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-mono">
                1
              </div>
              <div className="h-8 w-full bg-surface-container-high rounded-sm"></div>
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-xs font-mono">
                2
              </div>
              <div className="h-8 w-full bg-surface-container-high rounded-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 py-12 bg-surface-container-lowest rounded-xl border border-outline-variant/15">
        <div className="text-center space-y-2">
          <p className="text-4xl font-black text-primary">75+</p>
          <p className="text-sm font-medium text-on-surface-variant tracking-wider uppercase">
            Curated Problems
          </p>
        </div>
        <div className="hidden md:block w-px h-16 bg-outline-variant/30"></div>
        <div className="text-center space-y-2">
          <p className="text-4xl font-black text-secondary">1</p>
          <p className="text-sm font-medium text-on-surface-variant tracking-wider uppercase">
            Interactive Roadmap
          </p>
        </div>
        <div className="hidden md:block w-px h-16 bg-outline-variant/30"></div>
        <div className="text-center space-y-2">
          <p className="text-4xl font-black text-tertiary">2</p>
          <p className="text-sm font-medium text-on-surface-variant tracking-wider uppercase">
            Languages Supported
          </p>
        </div>
      </section>

      {/* Roadmap Grid */}
      <section className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Choose Your Learning Path
          </h2>
          <p className="text-on-surface-variant">
            Structured guides to master core concepts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-surface-container-low rounded-lg p-6 hover:-translate-y-1 transition-all duration-300 border border-outline-variant/15 hover:border-primary/30 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span
                className="material-symbols-outlined text-6xl text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                data_object
              </span>
            </div>
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center border border-outline-variant/20 shadow-md">
                <span className="material-symbols-outlined text-primary">
                  account_tree
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  Algorithms &amp; Data Structures
                </h3>
                <p className="text-sm text-on-surface-variant line-clamp-2">
                  The fundamental building blocks of efficient software. Master
                  arrays, trees, graphs, and dynamic programming.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="w-2/5 h-full bg-tertiary rounded-full"></div>
                </div>
                <span className="text-xs font-mono text-tertiary">40%</span>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-surface-container-low rounded-lg p-6 hover:-translate-y-1 transition-all duration-300 border border-outline-variant/15 hover:border-secondary/30 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span
                className="material-symbols-outlined text-6xl text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                dns
              </span>
            </div>
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center border border-outline-variant/20 shadow-md">
                <span className="material-symbols-outlined text-secondary">
                  architecture
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">System Design</h3>
                <p className="text-sm text-on-surface-variant line-clamp-2">
                  Learn to build scalable, distributed systems. Essential for
                  senior engineering interviews.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="w-0 h-full bg-secondary rounded-full"></div>
                </div>
                <span className="text-xs font-mono text-on-surface-variant">
                  0%
                </span>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-surface-container-low rounded-lg p-6 hover:-translate-y-1 transition-all duration-300 border border-outline-variant/15 hover:border-tertiary/30 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span
                className="material-symbols-outlined text-6xl text-tertiary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                web
              </span>
            </div>
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center border border-outline-variant/20 shadow-md">
                <span className="material-symbols-outlined text-tertiary">
                  code
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Frontend Engineering</h3>
                <p className="text-sm text-on-surface-variant line-clamp-2">
                  Master React, vanilla JavaScript, CSS architecture, and
                  browser performance optimization.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="w-4/5 h-full bg-secondary rounded-full"></div>
                </div>
                <span className="text-xs font-mono text-secondary">80%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Lists (Bento Style) */}
      <section className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Curated Problem Lists
          </h2>
          <p className="text-on-surface-variant">
            Focus on high-ROI questions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
          <div className="md:col-span-2 bg-surface-container-lowest border border-outline-variant/15 rounded-xl p-8 relative overflow-hidden group hover:border-primary/40 transition-colors flex flex-col justify-end">
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent z-0"></div>
            <div className="relative z-10 space-y-3">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full w-max border border-primary/20">
                Essential
              </span>
              <h3 className="text-2xl font-bold">Blind 75</h3>
              <p className="text-sm text-on-surface-variant">
                The original list that covers all core patterns.
              </p>
            </div>
            <span className="material-symbols-outlined absolute right-6 bottom-6 text-outline opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all group-hover:translate-x-2">
              arrow_forward
            </span>
          </div>
          {/* <div className="bg-surface-container-low border border-outline-variant/15 rounded-xl p-6 relative group hover:bg-surface-container-high transition-colors">
            <div className="space-y-3">
              <h3 className="text-lg font-bold">NeetCode 150</h3>
              <p className="text-xs text-on-surface-variant">
                An expanded version of the Blind 75 for deeper practice.
              </p>
            </div>
            <div className="absolute bottom-6 left-6 text-xs font-medium text-secondary">
              150 Problems
            </div>
          </div>
          <div className="bg-surface-container-low border border-outline-variant/15 rounded-xl p-6 relative group hover:bg-surface-container-high transition-colors">
            <div className="space-y-3">
              <h3 className="text-lg font-bold">Top Arrays</h3>
              <p className="text-xs text-on-surface-variant">
                Master two-pointers, sliding window, and prefix sums.
              </p>
            </div>
            <div className="absolute bottom-6 left-6 text-xs font-medium text-tertiary">
              42 Problems
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
}
