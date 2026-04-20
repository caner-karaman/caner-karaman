import Link from "next/link";

export default function PracticeProblemsPage() {
  return (
    <div className="max-w-[1400px] mx-auto p-6 lg:p-10">
      {/* Header Section */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <h1 className="text-3xl lg:text-5xl font-headline tracking-[-0.02em] font-bold text-on-surface">
            Practice Problems
          </h1>
          <p className="text-on-surface-variant text-sm max-w-2xl leading-relaxed">
            Master algorithms and data structures through our curated problem sets.
            Build your problem-solving skills systematically.
          </p>
        </div>
        {/* Curated List Tabs */}
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface text-sm font-medium shadow-sm transition-all duration-200 border border-outline-variant/30 glow-primary">
            All Problems
          </button>
          <button className="px-4 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface text-sm transition-all duration-200">
            Blind 75
          </button>
          <button className="px-4 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface text-sm transition-all duration-200">
            NeetCode 150
          </button>
          <button className="px-4 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface text-sm transition-all duration-200 hidden sm:block">
            Top Interview Questions
          </button>
        </div>
      </div>

      {/* Control Bar Layer */}
      <div className="bg-surface-container-lowest rounded-xl p-4 mb-6 shadow-lg border border-outline-variant/15 flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Left: Search & Filters */}
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          {/* Search */}
          <div className="flex-1 min-w-[200px] relative">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              search
            </span>
            <input
              className="w-full bg-surface pl-9 pr-4 py-2 rounded-md text-sm text-on-surface border border-outline-variant/20 focus:border-primary focus:ring-0 transition-all duration-200 placeholder-on-surface-variant"
              placeholder="Search topics or titles..."
              type="text"
            />
          </div>
          {/* Dropdowns */}
          <div className="flex items-center gap-2">
            <select className="bg-surface border border-outline-variant/20 text-on-surface text-sm rounded-md py-2 pl-3 pr-8 focus:border-primary focus:ring-0 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23c2c6d6%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px_16px] bg-[right_8px_center] bg-no-repeat cursor-pointer">
              <option value="">Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <select className="bg-surface border border-outline-variant/20 text-on-surface text-sm rounded-md py-2 pl-3 pr-8 focus:border-primary focus:ring-0 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23c2c6d6%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px_16px] bg-[right_8px_center] bg-no-repeat cursor-pointer">
              <option value="">Status</option>
              <option value="solved">Solved</option>
              <option value="attempted">Attempted</option>
              <option value="unsolved">Unsolved</option>
            </select>
            <select className="bg-surface border border-outline-variant/20 text-on-surface text-sm rounded-md py-2 pl-3 pr-8 focus:border-primary focus:ring-0 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23c2c6d6%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px_16px] bg-[right_8px_center] bg-no-repeat cursor-pointer hidden sm:block">
              <option value="">Tags</option>
              <option value="arrays">Arrays</option>
              <option value="dp">Dynamic Programming</option>
              <option value="graphs">Graphs</option>
            </select>
          </div>
        </div>
        {/* Right: Quick Action */}
        <button className="w-full lg:w-auto flex items-center justify-center gap-2 border border-outline/20 text-primary hover:bg-surface-container-high transition-colors duration-200 px-4 py-2 rounded-md text-sm font-medium">
          <span
            className="material-symbols-outlined text-[18px]"
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            shuffle
          </span>
          Pick One
        </button>
      </div>

      {/* Problem Data Table Container */}
      <div className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/15 shadow-2xl">
        <div className="overflow-x-auto border-b border-outline-variant/15">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-surface-container-lowest border-b border-outline-variant/15 text-on-surface-variant font-medium">
              <tr>
                <th className="px-6 py-4 w-12 text-center">Status</th>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4 text-center">Solution</th>
                <th className="px-6 py-4 w-32">Difficulty</th>
                <th className="px-6 py-4 hidden md:table-cell">Tags</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5 text-on-surface">
              {/* Row 1 (Solved) */}
              <tr className="hover:bg-surface-container-high hover:-translate-y-px transition-all duration-200 group">
                <td className="px-6 py-4 text-center text-secondary">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    check_circle
                  </span>
                </td>
                <td className="px-6 py-4 font-medium">
                  <Link
                    className="hover:text-primary transition-colors duration-150"
                    href="/problems"
                  >
                    1. Two Sum
                  </Link>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    aria-label="Video Solution"
                    className="text-on-surface-variant hover:text-primary transition-colors duration-150"
                  >
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      play_circle
                    </span>
                  </button>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center text-xs font-medium text-secondary">
                    Easy
                  </span>
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface-variant text-xs border border-outline-variant/10">
                      Array
                    </span>
                    <span className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface-variant text-xs border border-outline-variant/10">
                      Hash Table
                    </span>
                  </div>
                </td>
              </tr>

              {/* Row 2 (Attempted) */}
              <tr className="hover:bg-surface-container-high hover:-translate-y-px transition-all duration-200 group">
                <td className="px-6 py-4 text-center text-tertiary">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    pending
                  </span>
                </td>
                <td className="px-6 py-4 font-medium">
                  <Link
                    className="hover:text-primary transition-colors duration-150"
                    href="/problems"
                  >
                    2. Add Two Numbers
                  </Link>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    aria-label="Article Solution"
                    className="text-on-surface-variant hover:text-primary transition-colors duration-150"
                  >
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      article
                    </span>
                  </button>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center text-xs font-medium text-tertiary-fixed-dim">
                    Medium
                  </span>
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface-variant text-xs border border-outline-variant/10">
                      Linked List
                    </span>
                    <span className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface-variant text-xs border border-outline-variant/10">
                      Math
                    </span>
                  </div>
                </td>
              </tr>

              {/* Row 3 (Unsolved) */}
              <tr className="hover:bg-surface-container-high hover:-translate-y-px transition-all duration-200 group">
                <td className="px-6 py-4 text-center text-outline-variant">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    circle
                  </span>
                </td>
                <td className="px-6 py-4 font-medium">
                  <Link
                    className="hover:text-primary transition-colors duration-150"
                    href="/problems"
                  >
                    3. Longest Substring Without Repeating Characters
                  </Link>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    aria-label="Video Solution"
                    className="text-on-surface-variant hover:text-primary transition-colors duration-150"
                  >
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      play_circle
                    </span>
                  </button>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center text-xs font-medium text-tertiary-fixed-dim">
                    Medium
                  </span>
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface-variant text-xs border border-outline-variant/10">
                      Hash Table
                    </span>
                    <span className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface-variant text-xs border border-outline-variant/10">
                      Sliding Window
                    </span>
                  </div>
                </td>
              </tr>

              {/* Row 4 (Unsolved Hard) */}
              <tr className="hover:bg-surface-container-high hover:-translate-y-px transition-all duration-200 group">
                <td className="px-6 py-4 text-center text-outline-variant">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    circle
                  </span>
                </td>
                <td className="px-6 py-4 font-medium">
                  <Link
                    className="hover:text-primary transition-colors duration-150"
                    href="/problems"
                  >
                    4. Median of Two Sorted Arrays
                  </Link>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    aria-label="Article Solution"
                    className="text-on-surface-variant hover:text-primary transition-colors duration-150"
                  >
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      article
                    </span>
                  </button>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center text-xs font-medium text-error">
                    Hard
                  </span>
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface-variant text-xs border border-outline-variant/10">
                      Array
                    </span>
                    <span className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface-variant text-xs border border-outline-variant/10">
                      Binary Search
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pagination Footer */}
        <div className="bg-surface-container-lowest px-6 py-4 flex items-center justify-between">
          <span className="text-sm text-on-surface-variant">
            Showing 1 to 4 of 2480 entries
          </span>
          <div className="flex items-center gap-1">
            <button
              className="px-3 py-1.5 rounded bg-surface text-on-surface-variant border border-outline-variant/20 hover:bg-surface-container-high transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              Prev
            </button>
            <button className="w-8 h-8 rounded bg-primary/10 text-primary border border-primary/30 flex items-center justify-center text-sm font-medium">
              1
            </button>
            <button className="w-8 h-8 rounded bg-surface text-on-surface-variant border border-outline-variant/20 hover:bg-surface-container-high transition-colors flex items-center justify-center text-sm">
              2
            </button>
            <button className="w-8 h-8 rounded bg-surface text-on-surface-variant border border-outline-variant/20 hover:bg-surface-container-high transition-colors flex items-center justify-center text-sm hidden sm:flex">
              3
            </button>
            <span className="w-8 h-8 flex items-center justify-center text-on-surface-variant">
              ...
            </span>
            <button className="w-8 h-8 rounded bg-surface text-on-surface-variant border border-outline-variant/20 hover:bg-surface-container-high transition-colors flex items-center justify-center text-sm">
              50
            </button>
            <button className="px-3 py-1.5 rounded bg-surface text-on-surface-variant border border-outline-variant/20 hover:bg-surface-container-high transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
