import Link from "next/link";

export default function TopNavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-900/60 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/40 font-sans tracking-tight antialiased">
      <div className="flex justify-between items-center h-16 px-6 md:px-12 w-full mx-auto">
        <div className="flex items-center gap-8">
          <Link
            className="text-xl font-bold tracking-tighter text-zinc-100 flex items-center gap-2"
            href="/"
          >
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              hexagon
            </span>
            Obsidian Architect
          </Link>
          <div className="hidden md:flex gap-6">
            <Link
              className="text-zinc-400 font-medium hover:text-zinc-100 hover:bg-white/5 transition-all duration-200 px-3 py-1 rounded-md"
              href="/practice"
            >
              Problems
            </Link>
            <Link
              className="text-zinc-400 font-medium hover:text-zinc-100 hover:bg-white/5 transition-all duration-200 px-3 py-1 rounded-md"
              href="/roadmaps"
            >
              Roadmaps
            </Link>
            <Link
              className="text-zinc-400 font-medium hover:text-zinc-100 hover:bg-white/5 transition-all duration-200 px-3 py-1 rounded-md"
              href="/courses"
            >
              Courses
            </Link>
            <Link
              className="text-zinc-400 font-medium hover:text-zinc-100 hover:bg-white/5 transition-all duration-200 px-3 py-1 rounded-md"
              href="/blog"
            >
              Blog
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-zinc-400 hover:text-zinc-100 p-2 rounded-full hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined">language</span>
          </button>
          <Link
            className="hidden md:block text-zinc-400 font-medium hover:text-zinc-100 px-4 py-2"
            href="/login?mode=signin"
          >
            Sign In
          </Link>
          <Link
            className="bg-primary text-on-primary px-4 py-2 rounded-md font-semibold hover:bg-primary-fixed transition-colors active:scale-95 duration-150"
            href="/login?mode=signup"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
