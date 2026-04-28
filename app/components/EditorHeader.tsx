import Link from "next/link";
import Image from "next/image";

export default function EditorHeader() {
  return (
    <header className="bg-surface docked w-full top-0 shadow-[0px_24px_48px_rgba(0,0,0,0.5)] z-[60] shrink-0">
      <div className="flex justify-between items-center w-full px-6 py-3 bg-surface-container-low">
        <div className="flex items-center gap-6">
          {/* Brand Logo */}
          <Link
            href="/"
            className="text-xl font-black text-on-surface tracking-[-0.02em] hover:opacity-80 transition-opacity"
          >
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
            <span
              className="text-outline-variant material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              chevron_right
            </span>
            <span className="text-primary border-b-2 border-primary pb-1 px-2 font-medium">
              1. Two Sum
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
}
