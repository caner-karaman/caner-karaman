import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <main className="flex-1 pt-20 md:pt-8 px-6 pb-12 w-full max-w-7xl mx-auto flex flex-col gap-8">
      {/* TopAppBar Context (Simulated Desktop Top row) */}
      <div className="hidden md:flex justify-between items-center w-full mb-4">
        <div className="flex gap-6 font-sans tracking-tight text-sm">
          <Link href="/problems" className="text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:scale-95">Problems</Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:scale-95">Assessments</Link>
          <Link href="/courses" className="text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:scale-95">Curriculum</Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:scale-95">Community</Link>
        </div>
        <div className="flex items-center gap-6 text-on-surface-variant">
          <span className="material-symbols-outlined cursor-pointer active:scale-95 hover:text-primary transition-colors duration-200">search</span>
          <span className="material-symbols-outlined cursor-pointer active:scale-95 hover:text-primary transition-colors duration-200">notifications</span>
          <span className="material-symbols-outlined cursor-pointer active:scale-95 hover:text-primary transition-colors duration-200">settings</span>
          <img
            alt="User avatar"
            className="w-8 h-8 rounded-full border border-outline-variant/30"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwQuR_vR1rQltLIO9iB4RddTnu66K8os3SDBQgSkOFE81OQze-7QmUpEZpiT3ZAafveEh5fvSxvx7uV3aL2VuTiUggjQGDbAFVa9oF4Ycitd4xJ_OySlgESrlRy39F0NZBbc_1HwanigF1URAEGaY7cEDEaeUBzG9D1UdY41ueFIAkDF-_px_5v4253ADC--Yf4xhZdVPCyVyP28RT5PJ4PeXHUd5C8jFatW5m1YTKkQuJ1UMkWy2dfZNG2K-SL19T5xjvlICp-ymK"
          />
        </div>
      </div>

      {/* Profile Header */}
      <section className="bg-surface-container-lowest p-8 lg:p-12 relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8 rounded-xl border border-outline-variant/10">
        {/* Glassmorphism subtle background glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative shrink-0">
          <img
            alt="Alex Chen"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-surface-container-high shadow-[0_0_40px_rgba(173,198,255,0.1)]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvxom5JfRfKI_maISWmfQC2uRcZjZxkYLOFrQ2Ih-5eQlnMd5l5tzZPK1K0fth-5uZjg1Jo9oKGMZGnDrRBeok3Z4OA8IuXSdu8TszRSg83Lkq_cHIOxEy7kPtEFUyk8IoT3Rmqx1vRUgoVUrAo7d-cCx5127DJAw7qTyLalNMZnjSVE4dnXRr0ecKBxAbeQm4_lOwvOQot9mvZSzEIigonlGb5mGqF4Fik96TunEIwRuwz9b97rb0avIo_8R5NFJNKtVCdfDBkB7i"
          />
          <div className="absolute bottom-2 right-2 bg-surface-container-high border border-outline-variant/30 p-1.5 rounded-full text-secondary flex items-center justify-center shadow-lg" title="Premium Member">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          </div>
        </div>

        <div className="flex-1 text-center md:text-left z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 mb-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-1">Alex Chen</h2>
              <p className="text-primary font-medium tracking-wide">@alexc</p>
            </div>
            <button className="bg-transparent border border-outline/20 hover:bg-surface-container-high text-on-surface px-6 py-2.5 rounded-md text-sm font-semibold transition-all duration-200">
              Edit Profile
            </button>
          </div>
          <p className="text-on-surface-variant text-sm md:text-base leading-relaxed max-w-2xl mb-6">
            Senior Software Engineer | Passionate about Distributed Systems and Algorithms. Building robust, scalable microservices by day, exploring dynamic programming by night.
          </p>
          <div className="flex gap-4 justify-center md:justify-start text-on-surface-variant">
            <Link href="#" className="hover:text-primary transition-colors duration-200" title="GitHub">
              <span className="material-symbols-outlined">code</span>
            </Link>
            <Link href="#" className="hover:text-primary transition-colors duration-200" title="LinkedIn">
              <span className="material-symbols-outlined">work</span>
            </Link>
            <Link href="#" className="hover:text-primary transition-colors duration-200" title="Website">
              <span className="material-symbols-outlined">language</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Grid & Heatmap (Bento layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Statistics Grid */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Total Solved Card */}
          <div className="bg-surface-container-low p-6 flex flex-col group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 border border-outline-variant/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h3 className="text-sm font-semibold text-on-surface-variant mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">task_alt</span> Total Solved
            </h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-black tracking-tighter text-on-surface">482</span>
            </div>
            <div className="flex justify-between text-xs font-medium w-full">
              <div className="flex flex-col gap-1 items-center">
                <span className="text-secondary">Easy</span>
                <span className="text-on-surface-variant">215</span>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <span className="text-tertiary">Medium</span>
                <span className="text-on-surface-variant">144</span>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <span className="text-error">Hard</span>
                <span className="text-on-surface-variant">123</span>
              </div>
            </div>
          </div>

          {/* Mini Stats Row */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-surface-container-low p-5 flex flex-col group hover:-translate-y-1 transition-transform duration-300 rounded-xl relative overflow-hidden">
              <h3 className="text-xs font-semibold text-on-surface-variant mb-2">Current Streak</h3>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                <span className="text-2xl font-bold text-on-surface">12 Days</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-5 flex flex-col group hover:-translate-y-1 transition-transform duration-300 rounded-xl relative overflow-hidden">
              <h3 className="text-xs font-semibold text-on-surface-variant mb-2">Platform Ranking</h3>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>trophy</span>
                <span className="text-2xl font-bold text-on-surface">Top 2%</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-5 col-span-2 flex flex-col group hover:-translate-y-1 transition-transform duration-300 rounded-xl relative overflow-hidden">
              <h3 className="text-xs font-semibold text-on-surface-variant mb-2">Accuracy Rate</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-on-surface">88%</span>
                <div className="w-2/3 bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-[88%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Heatmap Section */}
        <div className="lg:col-span-2 bg-surface-container-lowest p-6 lg:p-8 flex flex-col relative group rounded-xl border border-outline-variant/10">
          <div className="absolute inset-0 border border-outline-variant/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined">calendar_month</span> Activity History
            </h3>
            <span className="text-sm text-on-surface-variant bg-surface-container px-3 py-1 rounded-md border border-outline-variant/20">482 submissions in the last year</span>
          </div>

          <div className="flex-1 flex items-center justify-center opacity-80 mb-6 w-full overflow-x-hidden">
             {/* Simulated Grid Layout for Contribution Graph */}
            <div className="flex gap-1 flex-wrap">
              {Array.from({ length: 180 }).map((_, i) => {
                 const intensities = [
                   'bg-surface-container-highest',
                   'bg-primary/20',
                   'bg-primary/40',
                   'bg-primary/60',
                   'bg-primary/80',
                   'bg-primary'
                 ];
                 // Deterministic pseudorandom to prevent hydration mismatch
                 const seed = (Math.sin(i) * 10000);
                 const color = intensities[Math.floor((seed - Math.floor(seed)) * intensities.length)];
                 return (
                   <div key={i} className={`w-3 h-3 rounded-[2px] ${color}`}></div>
                 )
              })}
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 text-xs text-on-surface-variant mt-auto">
            <span>Less</span>
            <div className="w-3 h-3 bg-surface-container-highest rounded-[2px]"></div>
            <div className="w-3 h-3 bg-primary/20 rounded-[2px]"></div>
            <div className="w-3 h-3 bg-primary/40 rounded-[2px]"></div>
            <div className="w-3 h-3 bg-primary/60 rounded-[2px]"></div>
            <div className="w-3 h-3 bg-primary rounded-[2px]"></div>
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Lower Section: Tables & Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Submissions Table */}
        <div className="bg-surface-container-low p-6 flex flex-col group hover:-translate-y-1 transition-transform duration-300 relative rounded-xl">
          <div className="absolute inset-0 border border-outline-variant/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-semibold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">history</span> Recent Submissions
            </h3>
            <Link href="#" className="text-xs text-primary hover:text-primary-container transition-colors">View All</Link>
          </div>
          <div className="flex flex-col gap-4">
            {/* Row 1 */}
            <div className="flex items-center justify-between bg-surface-container-lowest p-3 rounded-md border border-outline-variant/10">
              <div className="flex flex-col gap-1">
                <Link href="#" className="text-sm font-medium text-on-surface hover:text-primary transition-colors">Median of Two Sorted Arrays</Link>
                <span className="text-xs text-on-surface-variant">2 hours ago</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-outline">Rust</span>
                <span className="text-xs font-medium text-error px-2 py-1 bg-error/10 rounded-md">Hard</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex items-center justify-between bg-surface-container-lowest p-3 rounded-md border border-outline-variant/10">
              <div className="flex flex-col gap-1">
                <Link href="#" className="text-sm font-medium text-on-surface hover:text-primary transition-colors">LRU Cache Design</Link>
                <span className="text-xs text-on-surface-variant">Yesterday</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-outline">TypeScript</span>
                <span className="text-xs font-medium text-tertiary px-2 py-1 bg-tertiary/10 rounded-md">Medium</span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex items-center justify-between bg-surface-container-lowest p-3 rounded-md border border-outline-variant/10">
              <div className="flex flex-col gap-1">
                <Link href="#" className="text-sm font-medium text-on-surface hover:text-primary transition-colors">Two Sum II</Link>
                <span className="text-xs text-on-surface-variant">2 days ago</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-outline">Python</span>
                <span className="text-xs font-medium text-secondary px-2 py-1 bg-secondary/10 rounded-md">Easy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements & Skills */}
        <div className="flex flex-col gap-8">
          {/* Achievements Grid */}
          <div className="bg-surface-container-low p-6 flex flex-col group hover:-translate-y-1 transition-transform duration-300 relative rounded-xl">
            <div className="absolute inset-0 border border-outline-variant/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
            <h3 className="text-sm font-semibold text-on-surface flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-[18px]">military_tech</span> Badges &amp; Achievements
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-2 p-3 bg-surface-container-lowest rounded-md border border-outline-variant/20">
                <span className="material-symbols-outlined text-3xl text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                <span className="text-xs text-center font-medium text-on-surface">30-Day Streak</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 bg-surface-container-lowest rounded-md border border-outline-variant/20">
                <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
                <span className="text-xs text-center font-medium text-on-surface">System Architect</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 bg-surface-container-lowest rounded-md border border-outline-variant/20">
                <span className="material-symbols-outlined text-3xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>all_inclusive</span>
                <span className="text-xs text-center font-medium text-on-surface">Recursion Master</span>
              </div>
              {/* Unearned */}
              <div className="flex flex-col items-center gap-2 p-3 bg-surface-container-highest rounded-md opacity-50 grayscale">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                <span className="text-xs text-center font-medium">Speed Coder</span>
              </div>
            </div>
          </div>

          {/* Skills Cloud */}
          <div className="bg-surface-container-lowest p-6 flex flex-col group hover:-translate-y-1 transition-transform duration-300 relative border border-outline-variant/10 rounded-xl">
            <div className="absolute inset-0 border border-outline-variant/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
            <h3 className="text-sm font-semibold text-on-surface flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-[18px]">psychology</span> Proficiency Cloud
            </h3>
            <div className="flex flex-wrap gap-3">
              <div className="px-3 py-1.5 bg-surface-container-low border border-primary/30 rounded-full flex items-center gap-2">
                <span className="text-xs font-medium text-on-surface">Dynamic Programming</span>
                <span className="text-[10px] text-primary font-bold">92%</span>
              </div>
              <div className="px-3 py-1.5 bg-surface-container-low border border-primary/20 rounded-full flex items-center gap-2">
                <span className="text-xs font-medium text-on-surface">Graphs &amp; Trees</span>
                <span className="text-[10px] text-primary/80 font-bold">85%</span>
              </div>
              <div className="px-3 py-1.5 bg-surface-container-low border border-primary/10 rounded-full flex items-center gap-2">
                <span className="text-xs font-medium text-on-surface">Concurrency</span>
                <span className="text-[10px] text-on-surface-variant font-bold">78%</span>
              </div>
              <div className="px-3 py-1.5 bg-surface-container-low border border-outline-variant/20 rounded-full flex items-center gap-2">
                <span className="text-xs font-medium text-on-surface">System Design</span>
                <span className="text-[10px] text-on-surface-variant font-bold">75%</span>
              </div>
              <div className="px-3 py-1.5 bg-surface-container-low border border-outline-variant/20 rounded-full flex items-center gap-2">
                <span className="text-xs font-medium text-on-surface">Bit Manipulation</span>
                <span className="text-[10px] text-on-surface-variant font-bold">60%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
