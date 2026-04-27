import Link from "next/link";
import Image from "next/image";

export default function EditorHeader() {
  return (
    <header className="bg-surface docked w-full top-0 shadow-[0px_24px_48px_rgba(0,0,0,0.5)] z-[60] shrink-0">
      <div className="flex justify-between items-center w-full px-6 py-3 bg-surface-container-low">
        <div className="flex items-center gap-6">
          {/* Brand Logo */}
          <Link href="/" className="text-xl font-black text-on-surface tracking-[-0.02em] hover:opacity-80 transition-opacity">
            Caner Karaman
          </Link>

          {/* Navigation Links / Breadcrumb */}
          <nav className="hidden md:flex items-center gap-2 font-headline tracking-[-0.02em] leading-[1.4] text-sm">
            <Link
              href="/problems"
              className="text-on-surface-variant pb-1 hover:text-primary hover:bg-surface-container-high transition-all duration-200 px-2 rounded-md scale-95 active:scale-100"
            >
              Problems
            </Link>
            <span className="text-outline-variant material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>
              chevron_right
            </span>
            <span className="text-primary border-b-2 border-primary pb-1 px-2 font-medium">
              1. Two Sum
            </span>
          </nav>
        </div>

        {/* Problem Navigation Controls */}
        <div className="hidden md:flex items-center bg-surface-container-lowest rounded-md border border-outline-variant/15 px-2 py-1 gap-2">
          <button
            className="text-on-surface-variant hover:text-primary transition-colors p-1"
            title="Previous Problem"
          >
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>chevron_left</span>
          </button>
          <div className="w-[1px] h-4 bg-outline-variant/30 mx-1"></div>
          <button
            className="text-on-surface-variant hover:text-primary transition-colors p-1"
            title="Random Problem"
          >
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>shuffle</span>
          </button>
          <div className="w-[1px] h-4 bg-outline-variant/30 mx-1"></div>
          <button
            className="text-on-surface-variant hover:text-primary transition-colors p-1"
            title="Next Problem"
          >
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>chevron_right</span>
          </button>
        </div>

        {/* Trailing Actions */}
        <div className="flex items-center gap-4">
          {/* Timer Toggle */}
          <button className="hidden lg:flex items-center gap-2 text-on-surface-variant hover:text-primary text-sm font-medium transition-colors">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 0" }}>timer</span>
            <span>00:00:00</span>
          </button>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="bg-transparent border border-outline/20 text-on-surface hover:bg-surface-container-high px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 scale-95 active:scale-100">
              Run Code
            </button>
            <button className="bg-secondary text-on-secondary px-4 py-1.5 rounded-md text-sm font-bold shadow-[0_0_15px_rgba(78,222,163,0.2)] hover:opacity-80 transition-all duration-200 scale-95 active:scale-100">
              Submit
            </button>
          </div>

          {/* Profile Image */}
          <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant/30 ml-2 cursor-pointer hover:border-primary/50 transition-colors">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Developer Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcX1T8WeZ_qH6xt4CcQN9r7-dc0U-WxFEMmS_4oX2oL7GotzdBYJMjO_e5xnAERii9rg9V-MSZKcTP_M1rUTG3zhrRwD3FoNyXLIfH4v1hbSkz-tx1OmA1-F3vxqE3pzdGZxhHOcNpipXNJiVCRdqx0_ScJz6P6zXxsoYPGnX0ijqqoltGeS4ebDYRFmrzPPMZpzQfkfMhqKhW5rV3Xq26EPYvau7TlTPRXCB0yN_NwnA_s4sf7bONW6NXk6DMeukMWwdy0W3c4Xk0"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
