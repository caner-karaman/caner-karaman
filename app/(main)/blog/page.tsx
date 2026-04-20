import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogListPage() {
  return (
    <main className="flex-grow pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full font-body">
      {/* Section 1: Hero & Featured Post */}
      <section className="mb-16">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4 text-on-surface font-headline">
            Engineering Blog
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Insights from top engineers on mastering technical interviews.
          </p>
        </div>
        <div className="bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col md:flex-row group border border-outline-variant/15 hover:border-primary/30 transition-all duration-300 shadow-2xl hover:-translate-y-1 hover:shadow-[inset_0_0_0_1px_rgba(173,198,255,0.4),0_24px_48px_rgba(0,0,0,0.5)]">
          <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Featured article image"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABG5T2JjfEpx5_6pKZeZlVCCq4gNlEJTtsi7m4xHM1lqEpXgWUDgD4rhuLbWWkfQWkn33H73Y3Q_0jH0yBx0tctokU-61rfjzxF2CBI4zuQzBVTNz0RwijtNcKBdQy-bmswiTe2E8aSj6Fq09WCI-eYtV0VVUoSCj6ase6g8ZBoB2iJwJqulFCejhd1z5o5K8bEnyTvGGwcEvT5qjHiH6I0LkCprJ62_eg2zzvBXx5UQuVfanLk5KCYxPNQ8189L2LRxObFsLOp-Aa"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-container-lowest md:hidden"></div>
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-3 flex-wrap">
              <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                System Design
              </span>
              <span className="text-on-surface-variant text-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>calendar_month</span> Oct 24, 2024
              </span>
              <span className="text-on-surface-variant text-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>timer</span> 12 min read
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-on-surface leading-tight group-hover:text-primary transition-colors font-headline">
              Mastering Distributed Systems in 2024
            </h2>
            <p className="text-on-surface-variant mb-8 line-clamp-3 leading-relaxed">
              A deep dive into the evolving landscape of distributed architecture. Learn the core patterns, trade-offs, and scaling strategies expected in modern staff-level engineering interviews.
            </p>
            <div>
              <button className="bg-primary hover:opacity-90 text-on-primary transition-all duration-200 px-6 py-3 font-semibold rounded-lg inline-flex items-center gap-2">
                Read Article
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Control Bar */}
      <section className="sticky top-20 z-40 bg-background/90 backdrop-blur-xl py-4 mb-12 flex flex-col md:flex-row justify-between items-center gap-4 border-b border-surface-container-high">
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
          <button className="whitespace-nowrap px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm transition-colors border border-primary/20">All</button>
          <button className="whitespace-nowrap px-4 py-2 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-medium text-sm transition-colors">Interview Tips</button>
          <button className="whitespace-nowrap px-4 py-2 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-medium text-sm transition-colors">Algorithms</button>
          <button className="whitespace-nowrap px-4 py-2 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-medium text-sm transition-colors">Career</button>
          <button className="whitespace-nowrap px-4 py-2 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-medium text-sm transition-colors">Announcements</button>
        </div>
        <div className="relative w-full md:w-64 group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
          <input
            className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg pl-10 pr-4 py-2 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            placeholder="Search articles..."
            type="text"
          />
        </div>
      </section>

      {/* Section 3: Articles Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {/* Article Card 1 */}
        <article className="bg-surface-container-low rounded-xl overflow-hidden flex flex-col group border border-outline-variant/15 hover:-translate-y-1 hover:shadow-[inset_0_0_0_1px_rgba(173,198,255,0.4),0_24px_48px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer relative">
          <div className="h-48 overflow-hidden relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Coding"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW0Q18gNi1EoTHtdHwiwcMA6tVBwIjYda8QP1hjGuW7aSEhgdHLUEFD4FKzJMa837OVcXm8p_QMsRgxJOn6j9hzeKfb0sd-dtWEANZpKFbx9XYoVStpg83HPGkCU96lm0OrZJQLU4SICVnTvjMyyvZDYVoNgKuHfizpOYpECbobfYknwAMDlNEUFqC_G-9fg2TYAyVds7mIZbOr4FHjcaDjkb5m8lj96G-4WASRHoqDYLfrGH3MN3mXCpkJHl5LPGR8HIgWsAIRknx"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center gap-4 text-xs text-on-surface-variant mb-3">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>calendar_month</span> Oct 20</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>timer</span> 8 min</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-on-surface group-hover:text-primary transition-colors leading-snug">Cracking the Dynamic Programming Paradigm</h3>
            <p className="text-on-surface-variant text-sm mb-4 line-clamp-2">Stop memorizing solutions. Learn the framework to break down any DP problem into overlapping subproblems.</p>
            <div className="mt-auto flex gap-2">
              <span className="text-xs font-medium text-outline bg-surface-container px-2 py-1 rounded">#algorithms</span>
              <span className="text-xs font-medium text-outline bg-surface-container px-2 py-1 rounded">#python</span>
            </div>
          </div>
        </article>

        {/* Article Card 2 */}
        <article className="bg-surface-container-low rounded-xl overflow-hidden flex flex-col group border border-outline-variant/15 hover:-translate-y-1 hover:shadow-[inset_0_0_0_1px_rgba(173,198,255,0.4),0_24px_48px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer relative">
          <div className="h-48 overflow-hidden relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Interview"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY60enmt_dzSpAQ2boBWrjvAvvhvVhOtz4XjBXuqEm3Gik2CGsK_V2GAlIcnqKQFy_xSzyGx5JLwiD2NDMrLOpH3zUENNLKYCM42ybLQgxBapmbBei1GKye-ESCbwZh-bPdKe9NjWGOyuci-tRI48TVbzGfut7hHb5FEDSR5oIA62ye02iVzIXc9YK-OHfyYT7qXniBWCCOVy4-LPeEhB8XC2MU0KASBLRpwMuoYVcpBkhuf8nFnx5J3jsumPiziQIYnoT1nnc_ZxW"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center gap-4 text-xs text-on-surface-variant mb-3">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>calendar_month</span> Oct 15</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>timer</span> 5 min</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-on-surface group-hover:text-primary transition-colors leading-snug">The Behavioral Interview Framework</h3>
            <p className="text-on-surface-variant text-sm mb-4 line-clamp-2">How to structure your past experiences using the STAR method to demonstrate true leadership and impact.</p>
            <div className="mt-auto flex gap-2">
              <span className="text-xs font-medium text-outline bg-surface-container px-2 py-1 rounded">#career</span>
              <span className="text-xs font-medium text-outline bg-surface-container px-2 py-1 rounded">#softskills</span>
            </div>
          </div>
        </article>

        {/* Article Card 3 */}
        <article className="bg-surface-container-low rounded-xl overflow-hidden flex flex-col group border border-outline-variant/15 hover:-translate-y-1 hover:shadow-[inset_0_0_0_1px_rgba(173,198,255,0.4),0_24px_48px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer relative">
          <div className="h-48 overflow-hidden relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Matrix"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQyJY1OYnZ3AkkeZN2e6JONCQ-0juuuSfzFdkSh6gFsEAPrbbd2zyxHPMpPzdqNFd7N9-Rqt_slQeohpbmBkpGerlHftKbriVK3hgfplUzp6oSxZhutetQ16jgRekJClwq5Qj86XCsP4AYbhPPOSabnrZP6muigA-ZntjF2p-CIzppwUIU67fjtrajm9YYnSjUEN9bnJ33Ewq6zaRTT5i2QCK1YYS92MBCV2U972n3QoUrySB8nr6OeI6RJWiXfU8xB1dkPGP-OtRf"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center gap-4 text-xs text-on-surface-variant mb-3">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>calendar_month</span> Oct 12</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>timer</span> 15 min</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-on-surface group-hover:text-primary transition-colors leading-snug">Database Sharding Strategies</h3>
            <p className="text-on-surface-variant text-sm mb-4 line-clamp-2">When and how to partition your data. Understanding the complexity of horizontal scaling in production.</p>
            <div className="mt-auto flex gap-2">
              <span className="text-xs font-medium text-outline bg-surface-container px-2 py-1 rounded">#systemdesign</span>
              <span className="text-xs font-medium text-outline bg-surface-container px-2 py-1 rounded">#databases</span>
            </div>
          </div>
        </article>
      </section>

      {/* Section 4: Newsletter CTA */}
      <section className="bg-surface-container-lowest border border-outline-variant/15 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        {/* Decorative gradient blur */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 md:max-w-md">
          <h3 className="text-2xl font-bold text-on-surface mb-2 font-headline">Never miss an update.</h3>
          <p className="text-on-surface-variant">Get weekly interview tips, system design deep-dives, and exclusive platform news delivered to your inbox.</p>
        </div>
        <div className="relative z-10 w-full md:w-auto">
          <form className="flex flex-col sm:flex-row gap-3 w-full">
            <div className="relative flex-grow">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>mail</span>
              <input
                className="w-full bg-surface-container border border-outline-variant/30 rounded-lg pl-10 pr-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <button
              className="bg-primary hover:opacity-90 text-on-primary transition-all duration-200 px-6 py-3 font-semibold whitespace-nowrap rounded-lg flex items-center justify-center gap-2"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
