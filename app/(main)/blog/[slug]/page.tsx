import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Detail - Obsidian Architect",
};

export default function ArticleDetailPage() {
  return (
    <main className="pt-24 pb-32 font-body">
      {/* Breadcrumbs & Hero */}
      <article className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center text-sm text-on-surface-variant font-label mb-8 gap-2">
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 0" }}>chevron_right</span>
          <Link href="#" className="hover:text-primary transition-colors">System Design</Link>
          <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 0" }}>chevron_right</span>
          <span className="text-on-surface">Mastering Distributed Systems</span>
        </nav>
        
        <header className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">System Design</span>
          <h1 className="text-5xl lg:text-7xl font-headline font-bold tracking-tight text-on-surface mb-8 leading-tight">Mastering Distributed<br />Systems in 2024</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-on-surface-variant font-label text-sm border-l-4 border-surface-container-high pl-6">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Author"
                className="w-10 h-10 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYPjmE5yQzxc8Lr1Pztjtd827dGjxFlNctdmqOyqJdo-5K_Z-o92cocJU78nHsACq2wQzxsWFrJbPJ8iKGUu1iJEdYwXI1fD-pxRIminwzVz4w3GWzFyma8kyR3vCx4OkN4AerBL-zUTdg1HrvcHl7HWfHr0GyV8xPKRu2tcx_Aqwg8Jpg51ZOpEJHMOYc6ksqu8DkMKfXFu_ZKJF2aSpc8t8vBvSnmna0jHNPSzvfro8KGl5XH1rPe5VYf1h2mte-kKe-9ZIzDQE7"
              />
              <div>
                <p className="text-on-surface font-medium">Alex Chen</p>
                <p>Principal Engineer</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-surface-container-high"></div>
            <div>
              <p>Published</p>
              <p className="text-on-surface">Oct 24, 2024</p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-surface-container-high"></div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 0" }}>timer</span>
              <span>12 min read</span>
            </div>
          </div>
        </header>

        <div className="w-full h-64 lg:h-96 rounded-xl overflow-hidden mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/40 to-surface-container-lowest/80 mix-blend-overlay z-10"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Featured Image"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABZteAvBfWL4H0VziPmgqY7Wiz_6HAj1AOPTCZRGrqMIM0Z9QtyVZLAOMVzmunbSuJ0E2qB_0rQaWw145ZQbsMG2gTxJErvL1P7wxT4wgKRyQbYDqJ3QlXoc0wPF2Klw4NYG9xADVVgnr1ijw-qWZX3NqPJ-KinjcVvgx6_j5J_w5u3Xy1TcjrHOb-LC7HLEBi_3_aDPu76vpVrTMkT-pCw7HxyEcxnlxC2-UTzX_SUKfFuwDj8Xw9JqvEflMLeqFm-ws90zslicdB"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative w-full overflow-hidden">
          {/* Main Content */}
          <div className="lg:col-span-8 prose prose-invert prose-lg max-w-none prose-headings:font-headline prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary-fixed prose-p:leading-relaxed prose-p:text-on-surface">
            <p className="text-xl text-on-surface-variant mb-8 font-light">
              Building systems that scale gracefully isn&apos;t just about choosing the right database or microservice architecture. It&apos;s about understanding the fundamental laws of distributed computing and designing for failure from day one.
            </p>
            <h2 className="text-3xl font-bold mt-12 mb-6" id="introduction">The Fallacies of Distributed Computing</h2>
            <p className="text-on-surface-variant">
              When moving from a monolith to a distributed architecture, engineers often carry over dangerous assumptions. The network is rarely reliable, latency is never zero, and bandwidth is definitely not infinite.
            </p>
            <h3 className="text-2xl font-semibold mt-10 mb-4 text-on-surface" id="architecture">Designing for Resiliency</h3>
            <p className="text-on-surface-variant">
              In our recent overhaul of the core transaction engine, we adopted a strict asynchronous communication model using Event Sourcing and CQRS. Here is how we structured the initial Rust implementation for the event publisher:
            </p>
            
            <div className="my-8 rounded-lg overflow-hidden bg-surface-container-lowest border border-outline-variant/15 relative group">
              <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/15">
                <span className="text-xs text-on-surface-variant font-mono">publisher.rs</span>
                <button className="text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>content_copy</span>
                </button>
              </div>
              <pre className="p-4 text-sm font-mono text-on-surface overflow-x-auto"><code>
<span className="text-primary">pub async fn</span> publish_event(
    event: <span className="text-secondary">TransactionEvent</span>,
    bus: &amp;<span className="text-secondary">impl</span> <span className="text-tertiary">EventBus</span>
) -&gt; <span className="text-secondary">Result</span>&lt;(), <span className="text-error">PublishError</span>&gt; {"{"}
    <span className="text-outline">let</span> payload = serde_json::to_vec(&amp;event)?;
    
    <span className="text-outline">let</span> msg = Message::new(payload)
        .with_header(<span className="text-primary">&quot;event_type&quot;</span>, event.name())
        .with_header(<span className="text-primary">&quot;timestamp&quot;</span>, Utc::now().to_rfc3339());

    bus.publish(<span className="text-primary">&quot;transactions.events&quot;</span>, msg).<span className="text-primary">await</span>?;
    <span className="text-primary">Ok</span>(())
{"}"}</code></pre>
            </div>
            
            <p className="text-on-surface-variant">
              Notice how we explicitly inject the event bus dependency. This allows us to easily mock the bus during testing and swap out implementations (e.g., Kafka to RabbitMQ) without touching the core logic.
            </p>
            <h2 className="text-3xl font-bold mt-12 mb-6" id="performance">Performance Tuning at Scale</h2>
            <p className="text-on-surface-variant">
              Once the basic resiliency is in place, the next challenge is throughput. We utilized a combination of connection pooling, batching, and aggressive caching at the edge.
            </p>
          </div>

          {/* SideNavBar (Table of Contents) */}
          <div className="lg:col-span-4 relative">
            <aside className="sticky top-24 w-64 self-start hidden lg:flex flex-col gap-4 py-8 bg-transparent">
              <div className="mb-4">
                <h4 className="text-sm font-bold text-on-surface uppercase tracking-widest">Table of Contents</h4>
                <p className="text-xs text-on-surface-variant mt-1">Article Progress: 12 min read</p>
              </div>
              <nav className="space-y-2 no-border text-sm font-medium leading-loose">
                <a className="flex items-center gap-3 text-primary border-l-2 border-primary pl-4 font-bold bg-primary/5 py-1 ease-in-out transition-all" href="#introduction">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>info</span>
                  Introduction
                </a>
                <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface pl-4 transition-all hover:translate-x-1 duration-200 py-1 ease-in-out" href="#architecture">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>layers</span>
                  Architecture Deep Dive
                </a>
                <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface pl-4 transition-all hover:translate-x-1 duration-200 py-1 ease-in-out" href="#performance">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>speed</span>
                  Performance Tuning
                </a>
                <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface pl-4 transition-all hover:translate-x-1 duration-200 py-1 ease-in-out" href="#conclusion">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>check_circle</span>
                  Conclusion
                </a>
              </nav>
              
              {/* Social Share */}
              <div className="mt-12 pt-8 border-t border-outline-variant/15 flex gap-4">
                <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>share</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>bookmark</span>
                </button>
              </div>
            </aside>
          </div>
        </div>

        {/* Article Footer */}
        <footer className="mt-24 pt-12 border-t border-outline-variant/15">
          <div className="flex gap-3 mb-16">
            <span className="px-3 py-1 rounded-md bg-surface-container-low text-on-surface-variant text-sm border border-outline-variant/10 hover:border-primary/30 transition-colors cursor-pointer">#rust</span>
            <span className="px-3 py-1 rounded-md bg-surface-container-low text-on-surface-variant text-sm border border-outline-variant/10 hover:border-primary/30 transition-colors cursor-pointer">#microservices</span>
            <span className="px-3 py-1 rounded-md bg-surface-container-low text-on-surface-variant text-sm border border-outline-variant/10 hover:border-primary/30 transition-colors cursor-pointer">#architecture</span>
          </div>

          {/* Author Bio */}
          <div className="bg-surface-container-low p-8 rounded-xl flex flex-col md:flex-row items-center md:items-start gap-6 border border-outline-variant/10 shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Alex Chen"
              className="w-24 h-24 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlBRHC1pImL4lZrXfyKWzqBi7HTWW-8LNRJ2XclkKxUNculil0FbZ-MQbRXkJol1uOOjeb3UjkHThhSiwOM4SQgTy_CjPL9ucwzDJFY_h47rBr2_jOsUBUsZYjPQ3-SlO7IJDRSa0JyXAjkek2j6xiAQw6alzzC1ON5WitQfnyj-Oq5P08xXWadprZHLhK5FV5R5aiZ7CnvyYKfgEOkP-sDHO2sNIQhuXKiPRdZxUxZCfOqytbP3ZqWyW8qIljJF_x7W3mtLboVknJ"
            />
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-xl font-bold text-on-surface mb-2">Alex Chen</h4>
              <p className="text-on-surface-variant text-sm mb-4">Principal Engineer focused on building resilient distributed systems. Passionate about Rust, performance optimization, and teaching complex concepts simply.</p>
            </div>
            <button className="px-6 py-2 rounded-md bg-transparent border border-outline/20 text-on-surface hover:bg-surface-container-high transition-all duration-200 shrink-0">
              Follow Author
            </button>
          </div>

          {/* Related Articles */}
          <div className="mt-24">
            <h3 className="text-2xl font-bold font-headline mb-8 text-on-surface">Related Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="#" className="group block bg-surface-container-low rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 border border-outline-variant/10 shadow-lg">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Server Racks"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw4zPo9KFHI0CbBvP3j1UVhWkrwHWlC7HT2T7vOqSqiOMtA_enWJ-MEyefnajTK9vRMkE_pKVu2s6kxoU214LaRd5ep0Ark44MaVAGdJysQwF6CvJEdYMlLAGU5TLia5znv4jpQrZC7o9g0jgVoKj7HAvK5ey0ysWHP7oyrR0smiQMHkCpM7LApyCqoCTA59prJp7Sf7fLwv9NEK6wx-e6QLvW2RcCxK3OtKgZuzkiGvhIW9u2Vuq6qhZiRlC_ZFyVLdbepgf4zTzL"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-tertiary uppercase tracking-wider mb-2 block">Architecture</span>
                  <h4 className="text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">GraphQL Safety Protocols</h4>
                  <p className="text-sm text-on-surface-variant line-clamp-2">Securing your graph endpoints against malicious queries and deep nesting attacks.</p>
                </div>
              </Link>

              <Link href="#" className="group block bg-surface-container-low rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 border border-outline-variant/10 shadow-lg">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Code Screen"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKmf3MZewJi-ZhEiv0uV2HXtCzJXymaWG8DzmIRo4U-pItKfLDTqr9MwSbIr938Bdo35cdTi_RGnv047g9mQkiUC93YTPyMT3sB7oDC_4uqtbM7kqeC-Ofpry2ea8mN6oVaM8pkVcj5hFJqb0Rqz_4LFVMnVFlCt3VCw4VYPEFFgMlVd8zAB9kQJpMp6yEIV_ms6_YFSJMp225jNb_vmCFrVRsII7xZmC0HSuVz_kNwp_ATP2Jojw3HLvvamvjZU6Q92V47qrAU6c9"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">Deep Dive</span>
                  <h4 className="text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Rust Memory Models Explained</h4>
                  <p className="text-sm text-on-surface-variant line-clamp-2">A visual guide to understanding ownership, borrowing, and lifetimes.</p>
                </div>
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}
