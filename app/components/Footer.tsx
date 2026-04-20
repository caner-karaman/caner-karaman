import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-blue-200 font-sans text-sm border-t border-zinc-800/30 w-full py-20 px-8 mt-32">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-zinc-100">
              Ready to ace your interview?
            </h3>
            <p className="text-zinc-500">
              Join thousands of developers leveling up their careers.
            </p>
          </div>
          <button className="bg-primary text-on-primary px-6 py-3 rounded-md font-semibold hover:bg-primary-container transition-colors">
            Start solving problems today
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <span className="text-lg font-black text-zinc-200 flex items-center gap-2">
              <span
                className="material-symbols-outlined text-primary text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                hexagon
              </span>
              Obsidian Architect
            </span>
            <p className="text-zinc-500">
              © 2024 Obsidian Architect. Designed for the deep-thinking
              developer.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-zinc-200">Resources</h4>
            <div className="flex flex-col space-y-2">
              <Link
                className="text-zinc-500 hover:text-zinc-100 transition-colors ease-in-out duration-300"
                href="#"
              >
                Documentation
              </Link>
              <Link
                className="text-zinc-500 hover:text-zinc-100 transition-colors ease-in-out duration-300"
                href="#"
              >
                Changelog
              </Link>
              <Link
                className="text-zinc-500 hover:text-zinc-100 transition-colors ease-in-out duration-300"
                href="#"
              >
                Community
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-zinc-200">Legal</h4>
            <div className="flex flex-col space-y-2">
              <Link
                className="text-zinc-500 hover:text-zinc-100 transition-colors ease-in-out duration-300"
                href="#"
              >
                Privacy
              </Link>
              <Link
                className="text-zinc-500 hover:text-zinc-100 transition-colors ease-in-out duration-300"
                href="#"
              >
                Terms
              </Link>
              <Link
                className="text-zinc-500 hover:text-zinc-100 transition-colors ease-in-out duration-300"
                href="#"
              >
                Github
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-zinc-200">Preferences</h4>
            <div className="flex gap-4 text-zinc-500">
              <button
                className="hover:text-zinc-100 transition-colors"
                title="Toggle Theme"
              >
                <span className="material-symbols-outlined">dark_mode</span>
              </button>
              <button
                className="hover:text-zinc-100 transition-colors"
                title="Language"
              >
                <span className="material-symbols-outlined">translate</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
