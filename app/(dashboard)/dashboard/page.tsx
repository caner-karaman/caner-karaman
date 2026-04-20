import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="flex-1 p-8 md:p-12 min-h-screen overflow-x-hidden">
      {/* Header Section */}
      <header className="flex justify-between items-end mb-12">
        <div className="space-y-2 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-headline font-black tracking-[-0.02em] text-on-surface">
            Welcome back to the void.
          </h1>
          <p className="text-on-surface-variant font-body text-base md:text-lg leading-relaxed">
            Your architecture is sound, but there are structural weaknesses in Graph Traversal. Recommend immediate reinforcement.
          </p>
        </div>
        
        {/* Streak Indicator */}
        <div className="hidden md:flex flex-col items-end">
          <div className="bg-surface-container-high rounded-xl p-4 flex items-center space-x-3 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center">
              <span className="text-2xl">🔥</span>
            </div>
            <div className="flex flex-col">
              <span className="text-on-surface font-bold text-xl leading-none">
                12 Days
              </span>
              <span className="text-on-surface-variant text-xs uppercase tracking-wider font-label mt-1">
                Current Streak
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Bento Grid: Stats */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
        {/* Overall Progress (Spans 4 cols) */}
        <div className="md:col-span-4 bg-surface-container-low rounded-xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between min-h-[300px]">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div>
            <h3 className="text-on-surface-variant font-label text-sm uppercase tracking-wider mb-1">
              Architecture Status
            </h3>
            <h2 className="text-on-surface font-headline text-2xl font-bold">
              482 Solved
            </h2>
          </div>
          <div className="flex justify-center items-center my-6">
            {/* CSS Donut Chart Approximation using utility classes from global css (or arbitrary conic-gradient) */}
            <div
              className="relative w-40 h-40 rounded-full"
              style={{
                background:
                  "conic-gradient(var(--color-secondary) 0% 45%, var(--color-tertiary) 45% 75%, var(--color-error) 75% 85%, var(--color-surface-container-highest) 85% 100%)",
              }}
            >
              <div className="absolute inset-3 bg-surface-container-low rounded-full flex items-center justify-center shadow-[inset_0_4px_20px_rgba(0,0,0,0.8)]">
                <div className="text-center">
                  <span className="block text-3xl font-black text-on-surface tracking-tighter">
                    18%
                  </span>
                  <span className="block text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">
                    Completion
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-xs font-label">
            <span className="text-secondary flex items-center">
              <span className="w-2 h-2 rounded-full bg-secondary mr-2 shadow-[0_0_5px_theme(colors.secondary)]"></span>
              215
            </span>
            <span className="text-tertiary flex items-center">
              <span className="w-2 h-2 rounded-full bg-tertiary mr-2 shadow-[0_0_5px_theme(colors.tertiary)]"></span>
              144
            </span>
            <span className="text-error flex items-center">
              <span className="w-2 h-2 rounded-full bg-error mr-2 shadow-[0_0_5px_theme(colors.error)]"></span>
              123
            </span>
          </div>
        </div>

        {/* Difficulty Breakdown (Spans 8 cols) */}
        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Easy */}
          <div className="bg-surface-container-lowest rounded-xl p-6 flex flex-col justify-between border border-outline-variant/15 hover:border-secondary/30 transition-colors duration-300">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-on-surface-variant text-xs font-label">
                  Foundation
                </span>
              </div>
              <h3 className="text-secondary font-headline text-lg font-bold mb-1">
                Easy
              </h3>
              <div className="flex items-end space-x-2">
                <span className="text-on-surface text-3xl font-black tracking-tighter">
                  215
                </span>
                <span className="text-on-surface-variant text-sm mb-1">
                  / 800
                </span>
              </div>
            </div>
            <div className="mt-8">
              <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div
                  className="h-full bg-secondary rounded-full shadow-[0_0_10px_theme(colors.secondary)]"
                  style={{ width: "27%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Medium */}
          <div className="bg-surface-container-lowest rounded-xl p-6 flex flex-col justify-between border border-outline-variant/15 hover:border-tertiary/30 transition-colors duration-300">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span
                  className="material-symbols-outlined text-tertiary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  engineering
                </span>
                <span className="text-on-surface-variant text-xs font-label">
                  Structure
                </span>
              </div>
              <h3 className="text-tertiary font-headline text-lg font-bold mb-1">
                Medium
              </h3>
              <div className="flex items-end space-x-2">
                <span className="text-on-surface text-3xl font-black tracking-tighter">
                  144
                </span>
                <span className="text-on-surface-variant text-sm mb-1">
                  / 1600
                </span>
              </div>
            </div>
            <div className="mt-8">
              <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div
                  className="h-full bg-tertiary rounded-full shadow-[0_0_10px_theme(colors.tertiary)]"
                  style={{ width: "9%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Hard */}
          <div className="bg-surface-container-lowest rounded-xl p-6 flex flex-col justify-between border border-outline-variant/15 hover:border-error/30 transition-colors duration-300">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span
                  className="material-symbols-outlined text-error"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  warning
                </span>
                <span className="text-on-surface-variant text-xs font-label">
                  Complexity
                </span>
              </div>
              <h3 className="text-error font-headline text-lg font-bold mb-1">
                Hard
              </h3>
              <div className="flex items-end space-x-2">
                <span className="text-on-surface text-3xl font-black tracking-tighter">
                  123
                </span>
                <span className="text-on-surface-variant text-sm mb-1">
                  / 600
                </span>
              </div>
            </div>
            <div className="mt-8">
              <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div
                  className="h-full bg-error rounded-full shadow-[0_0_10px_theme(colors.error)]"
                  style={{ width: "20%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submissions Table Area */}
      <section className="bg-surface-container-low rounded-xl py-6 overflow-hidden relative">
        <div className="px-6 mb-6 flex justify-between items-end">
          <div>
            <h2 className="text-on-surface font-headline text-2xl font-bold tracking-tight">
              Recent Deployments
            </h2>
            <p className="text-on-surface-variant text-sm mt-1">
              Last 5 submissions recorded in the architecture.
            </p>
          </div>
          <button className="text-primary hover:text-primary-container text-sm font-medium transition-colors hidden sm:block">
            View All History
          </button>
        </div>

        {/* Custom "Table" using grid to avoid 1px borders */}
        <div className="w-full flex flex-col">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 text-xs uppercase tracking-widest text-on-surface-variant font-label border-b border-surface-container-highest/50">
            <div className="col-span-6 sm:col-span-5">Problem Module</div>
            <div className="col-span-3 sm:col-span-3 hidden sm:block">Status</div>
            <div className="col-span-3 sm:col-span-2">Language</div>
            <div className="col-span-3 sm:col-span-2 text-right">Runtime</div>
          </div>

          {/* Rows */}
          <div className="flex flex-col space-y-1 px-2 py-2">
            {/* Row 1 */}
            <Link
              className="grid grid-cols-12 gap-4 px-4 py-4 items-center hover:bg-surface-container-high rounded-lg transition-colors group"
              href="#"
            >
              <div className="col-span-6 sm:col-span-5 flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-error"></div>
                <span className="text-on-surface font-medium text-sm group-hover:text-primary transition-colors truncate">
                  Median of Two Sorted Arrays
                </span>
              </div>
              <div className="col-span-3 hidden sm:flex items-center">
                <span className="text-error bg-error/10 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  Failed
                </span>
              </div>
              <div className="col-span-3 sm:col-span-2 flex items-center space-x-2 text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-[16px]">
                  terminal
                </span>
                <span>Rust</span>
              </div>
              <div className="col-span-3 sm:col-span-2 text-right text-on-surface-variant text-sm font-mono">
                N/A
              </div>
            </Link>

            {/* Row 2 */}
            <Link
              className="grid grid-cols-12 gap-4 px-4 py-4 items-center hover:bg-surface-container-high rounded-lg transition-colors group"
              href="#"
            >
              <div className="col-span-6 sm:col-span-5 flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                <span className="text-on-surface font-medium text-sm group-hover:text-primary transition-colors truncate">
                  Longest Substring Without Repeating
                </span>
              </div>
              <div className="col-span-3 hidden sm:flex items-center">
                <span className="text-secondary bg-secondary/10 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  Accepted
                </span>
              </div>
              <div className="col-span-3 sm:col-span-2 flex items-center space-x-2 text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-[16px]">
                  data_object
                </span>
                <span>TypeScript</span>
              </div>
              <div className="col-span-3 sm:col-span-2 text-right text-on-surface-variant text-sm font-mono">
                64 ms
              </div>
            </Link>

            {/* Row 3 */}
            <Link
              className="grid grid-cols-12 gap-4 px-4 py-4 items-center hover:bg-surface-container-high rounded-lg transition-colors group"
              href="#"
            >
              <div className="col-span-6 sm:col-span-5 flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span className="text-on-surface font-medium text-sm group-hover:text-primary transition-colors truncate">
                  Two Sum
                </span>
              </div>
              <div className="col-span-3 hidden sm:flex items-center">
                <span className="text-secondary bg-secondary/10 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  Accepted
                </span>
              </div>
              <div className="col-span-3 sm:col-span-2 flex items-center space-x-2 text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-[16px]">
                  data_object
                </span>
                <span>TypeScript</span>
              </div>
              <div className="col-span-3 sm:col-span-2 text-right text-on-surface-variant text-sm font-mono">
                52 ms
              </div>
            </Link>

            {/* Row 4 */}
            <Link
              className="grid grid-cols-12 gap-4 px-4 py-4 items-center hover:bg-surface-container-high rounded-lg transition-colors group"
              href="#"
            >
              <div className="col-span-6 sm:col-span-5 flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                <span className="text-on-surface font-medium text-sm group-hover:text-primary transition-colors truncate">
                  3Sum
                </span>
              </div>
              <div className="col-span-3 hidden sm:flex items-center">
                <span className="text-surface-variant bg-surface-container-highest px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  Time Limit
                </span>
              </div>
              <div className="col-span-3 sm:col-span-2 flex items-center space-x-2 text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-[16px]">
                  code
                </span>
                <span>Python</span>
              </div>
              <div className="col-span-3 sm:col-span-2 text-right text-on-surface-variant text-sm font-mono">
                &gt; 2000 ms
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
