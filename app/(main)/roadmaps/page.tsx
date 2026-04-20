import Link from "next/link";

export default function RoadmapsPage() {
  return (
    <main className="flex-grow pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto w-full">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-on-surface mb-6 font-headline leading-tight">
          Learning Paths
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mb-12 font-headline leading-relaxed">
          Step-by-step guides and paths to learn new skills and ace your software interviews.
        </p>

        <div className="w-full max-w-2xl relative mb-10">
          <span
            className="material-symbols-outlined absolute left-4 top-1/2 transform -translate-y-1/2 text-outline"
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            search
          </span>
          <input
            className="w-full bg-surface-container-lowest border border-outline-variant/30 text-on-surface rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-outline"
            placeholder="Search roadmaps..."
            type="text"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <button className="bg-surface-container-high text-on-surface px-5 py-2.5 rounded-full text-sm font-medium hover:bg-surface-container-highest transition-colors">
            All
          </button>
          <button className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant px-5 py-2.5 rounded-full text-sm font-medium hover:bg-surface-container-low transition-colors">
            Interview Prep
          </button>
          <button className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant px-5 py-2.5 rounded-full text-sm font-medium hover:bg-surface-container-low transition-colors">
            Web Development
          </button>
          <button className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant px-5 py-2.5 rounded-full text-sm font-medium hover:bg-surface-container-low transition-colors">
            System Architecture
          </button>
        </div>
      </section>

      {/* Roadmaps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <Link
          className="group block bg-surface-container-low rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 border border-outline-variant/15 hover:border-primary/30 relative"
          href="#"
        >
          <div className="h-32 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 flex items-center justify-center relative overflow-hidden">
            <span
              className="material-symbols-outlined text-5xl text-primary/80 z-10"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              account_tree
            </span>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30"></div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-on-surface mb-2 font-headline group-hover:text-primary transition-colors">
              Algorithms &amp; Data Structures
            </h3>
            <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">
              Master the core concepts needed to pass technical interviews at top tech companies.
            </p>
            <div className="flex items-center gap-4 mb-6 text-xs text-on-surface-variant">
              <div className="flex items-center gap-1.5 bg-surface-container-lowest px-2.5 py-1.5 rounded-md border border-outline-variant/20">
                <span className="material-symbols-outlined text-[16px]">
                  view_module
                </span>{" "}
                15 Modules
              </div>
              <div className="flex items-center gap-1.5 bg-surface-container-lowest px-2.5 py-1.5 rounded-md border border-outline-variant/20">
                <span className="material-symbols-outlined text-[16px]">
                  terminal
                </span>{" "}
                150 Problems
              </div>
              <span className="text-error-container font-semibold ml-auto bg-error-container/10 px-2 py-1 rounded">
                Hard
              </span>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-2 font-medium">
                <span className="text-on-surface-variant">Progress</span>
                <span className="text-tertiary">45% Completed</span>
              </div>
              <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-tertiary rounded-full w-[45%]"></div>
              </div>
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link
          className="group block bg-surface-container-low rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 border border-outline-variant/15 hover:border-primary/30 relative"
          href="#"
        >
          <div className="h-32 bg-gradient-to-br from-emerald-900/50 to-teal-900/50 flex items-center justify-center relative overflow-hidden">
            <span
              className="material-symbols-outlined text-5xl text-secondary/80 z-10"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              architecture
            </span>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30"></div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-on-surface mb-2 font-headline group-hover:text-primary transition-colors">
              System Design
            </h3>
            <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">
              Learn how to architect scalable, resilient systems for large-scale applications.
            </p>
            <div className="flex items-center gap-4 mb-6 text-xs text-on-surface-variant">
              <div className="flex items-center gap-1.5 bg-surface-container-lowest px-2.5 py-1.5 rounded-md border border-outline-variant/20">
                <span className="material-symbols-outlined text-[16px]">
                  view_module
                </span>{" "}
                12 Modules
              </div>
              <div className="flex items-center gap-1.5 bg-surface-container-lowest px-2.5 py-1.5 rounded-md border border-outline-variant/20">
                <span className="material-symbols-outlined text-[16px]">
                  terminal
                </span>{" "}
                40 Problems
              </div>
              <span className="text-tertiary-container font-semibold ml-auto bg-tertiary-container/10 px-2 py-1 rounded">
                Medium
              </span>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-sm font-semibold text-primary group-hover:text-primary-container transition-colors">
                Start Path →
              </span>
            </div>
          </div>
        </Link>

        {/* Card 3 */}
        <Link
          className="group block bg-surface-container-low rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 border border-outline-variant/15 hover:border-primary/30 relative"
          href="#"
        >
          <div className="h-32 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 flex items-center justify-center relative overflow-hidden">
            <span
              className="material-symbols-outlined text-5xl text-primary/80 z-10"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              code
            </span>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30"></div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-on-surface mb-2 font-headline group-hover:text-primary transition-colors">
              Frontend Engineering
            </h3>
            <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">
              Deep dive into React, performance optimization, and modern web architecture.
            </p>
            <div className="flex items-center gap-4 mb-6 text-xs text-on-surface-variant">
              <div className="flex items-center gap-1.5 bg-surface-container-lowest px-2.5 py-1.5 rounded-md border border-outline-variant/20">
                <span className="material-symbols-outlined text-[16px]">
                  view_module
                </span>{" "}
                18 Modules
              </div>
              <div className="flex items-center gap-1.5 bg-surface-container-lowest px-2.5 py-1.5 rounded-md border border-outline-variant/20">
                <span className="material-symbols-outlined text-[16px]">
                  terminal
                </span>{" "}
                120 Problems
              </div>
              <span className="text-tertiary-container font-semibold ml-auto bg-tertiary-container/10 px-2 py-1 rounded">
                Medium
              </span>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-2 font-medium">
                <span className="text-on-surface-variant">Progress</span>
                <span className="text-secondary">100% Completed</span>
              </div>
              <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-secondary rounded-full w-full"></div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
