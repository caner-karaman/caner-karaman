"use client";

import Link from "next/link";
import { useEffect, useState, useCallback, useRef } from "react";
import { PublicProblemResourceService } from "@/services/api/services/PublicProblemResourceService";
import type { ProblemListDTO } from "@/services/api/models/ProblemListDTO";

const PAGE_SIZE = 20;
const DEBOUNCE_MS = 400;

const difficultyStyle: Record<string, string> = {
  EASY: "text-secondary",
  MEDIUM: "text-tertiary-fixed-dim",
  HARD: "text-error",
};

const difficultyLabel: Record<string, string> = {
  EASY: "Easy",
  MEDIUM: "Medium",
  HARD: "Hard",
};

export default function PracticeProblemsPage() {
  const [problems, setProblems] = useState<ProblemListDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [difficulty, setDifficulty] = useState<string>("");
  const abortRef = useRef<AbortController | null>(null);

  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(0);
      setTotalCount(0);
    }, DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [search]);

  const fetchProblems = useCallback(async () => {
    // Cancel any in-flight request
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);
    try {
      const data = await PublicProblemResourceService.getAllProblems(
        "en",
        debouncedSearch.trim() || undefined,
        (difficulty as "EASY" | "MEDIUM" | "HARD") || undefined,
        undefined,
        page,
        PAGE_SIZE,
        ["id,asc"],
      );

      // Skip if this request was superseded
      if (controller.signal.aborted) return;

      setProblems(data);
      if (data.length < PAGE_SIZE) {
        setTotalCount(page * PAGE_SIZE + data.length);
      } else {
        setTotalCount((prev) =>
          prev <= page * PAGE_SIZE ? (page + 2) * PAGE_SIZE : prev,
        );
      }
    } catch (err) {
      if (controller.signal.aborted) return;
      console.error("Failed to fetch problems:", err);
      setError("Failed to load problems. Please try again.");
      setProblems([]);
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  }, [page, debouncedSearch, difficulty]);

  useEffect(() => {
    fetchProblems();
    return () => abortRef.current?.abort();
  }, [fetchProblems]);

  // Difficulty change resets page immediately (no debounce needed)
  const handleDifficultyChange = (value: string) => {
    setDifficulty(value);
    setPage(0);
    setTotalCount(0);
  };

  const renderPaginationButtons = () => {
    const buttons: React.ReactNode[] = [];
    const maxVisible = 5;
    let start = Math.max(0, page - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible);
    if (end - start < maxVisible) {
      start = Math.max(0, end - maxVisible);
    }

    for (let i = start; i < end; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={
            i === page
              ? "w-8 h-8 rounded bg-primary/10 text-primary border border-primary/30 flex items-center justify-center text-sm font-medium"
              : "w-8 h-8 rounded bg-surface text-on-surface-variant border border-outline-variant/20 hover:bg-surface-container-high transition-colors flex items-center justify-center text-sm"
          }
        >
          {i + 1}
        </button>,
      );
    }

    if (end < totalPages) {
      buttons.push(
        <span
          key="ellipsis"
          className="w-8 h-8 flex items-center justify-center text-on-surface-variant"
        >
          ...
        </span>,
      );
      buttons.push(
        <button
          key={totalPages - 1}
          onClick={() => setPage(totalPages - 1)}
          className="w-8 h-8 rounded bg-surface text-on-surface-variant border border-outline-variant/20 hover:bg-surface-container-high transition-colors flex items-center justify-center text-sm"
        >
          {totalPages}
        </button>,
      );
    }

    return buttons;
  };

  return (
    <div className="max-w-[1400px] mx-auto p-6 lg:p-10">
      {/* Header Section */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <h1 className="text-3xl lg:text-5xl font-headline tracking-[-0.02em] font-bold text-on-surface">
            Practice Problems
          </h1>
          <p className="text-on-surface-variant text-sm max-w-2xl leading-relaxed">
            Master algorithms and data structures through our curated problem
            sets. Build your problem-solving skills systematically.
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* Dropdowns */}
          <div className="flex items-center gap-2">
            <select
              className="bg-surface border border-outline-variant/20 text-on-surface text-sm rounded-md py-2 pl-3 pr-8 focus:border-primary focus:ring-0 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23c2c6d6%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px_16px] bg-[right_8px_center] bg-no-repeat cursor-pointer"
              value={difficulty}
              onChange={(e) => handleDifficultyChange(e.target.value)}
            >
              <option value="">Difficulty</option>
              <option value="EASY">Easy</option>
              <option value="MEDIUM">Medium</option>
              <option value="HARD">Hard</option>
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
        <div className="overflow-x-auto border-b border-outline-variant/15 relative">
          {/* Loading overlay — keeps existing data visible */}
          {loading && problems.length > 0 && (
            <div className="absolute inset-0 bg-surface/60 backdrop-blur-[1px] z-10 flex items-center justify-center transition-opacity duration-200">
              <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            </div>
          )}
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
              {/* Initial loading (no data yet) */}
              {loading && problems.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-16 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                      <span className="text-on-surface-variant text-sm">
                        Loading problems...
                      </span>
                    </div>
                  </td>
                </tr>
              )}

              {!loading && error && (
                <tr>
                  <td colSpan={5} className="px-6 py-16 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <span
                        className="material-symbols-outlined text-error text-[32px]"
                        style={{ fontVariationSettings: "'FILL' 0" }}
                      >
                        error
                      </span>
                      <span className="text-on-surface-variant text-sm">
                        {error}
                      </span>
                      <button
                        onClick={fetchProblems}
                        className="mt-2 px-4 py-1.5 rounded-md bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                      >
                        Retry
                      </button>
                    </div>
                  </td>
                </tr>
              )}

              {!loading && !error && problems.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-16 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <span
                        className="material-symbols-outlined text-on-surface-variant text-[32px]"
                        style={{ fontVariationSettings: "'FILL' 0" }}
                      >
                        search_off
                      </span>
                      <span className="text-on-surface-variant text-sm">
                        No problems found matching your criteria.
                      </span>
                    </div>
                  </td>
                </tr>
              )}

              {problems.length > 0 &&
                problems.map((problem) => {
                  const diff = problem.difficulty ?? "MEDIUM";
                  const tags = (problem.tags ?? []) as Array<
                    Record<string, unknown>
                  >;

                  return (
                    <tr
                      key={problem.id}
                      className="hover:bg-surface-container-high hover:-translate-y-px transition-all duration-200 group"
                    >
                      {/* Status - default unsolved for public endpoint */}
                      <td className="px-6 py-4 text-center text-outline-variant">
                        <span
                          className="material-symbols-outlined text-[20px]"
                          style={{ fontVariationSettings: "'FILL' 0" }}
                        >
                          circle
                        </span>
                      </td>
                      {/* Title */}
                      <td className="px-6 py-4 font-medium">
                        <Link
                          className="hover:text-primary transition-colors duration-150"
                          href={`/problems/${problem.slug ?? problem.id}`}
                        >
                          {problem.title}
                        </Link>
                      </td>
                      {/* Solution */}
                      <td className="px-6 py-4 text-center">
                        <button
                          aria-label="Solution"
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
                      {/* Difficulty */}
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center text-xs font-medium ${difficultyStyle[diff] ?? "text-on-surface-variant"}`}
                        >
                          {difficultyLabel[diff] ?? diff}
                        </span>
                      </td>
                      {/* Tags */}
                      <td className="px-6 py-4 hidden md:table-cell">
                        <div className="flex gap-2 flex-wrap">
                          {tags.map((tag, idx) => (
                            <span
                              key={(tag.id as number) ?? idx}
                              className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface-variant text-xs border border-outline-variant/10"
                            >
                              {(tag.name as string) ??
                                (tag.title as string) ??
                                `Tag #${tag.id}`}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        {/* Pagination Footer */}
        <div className="bg-surface-container-lowest px-6 py-4 flex items-center justify-between">
          <span className="text-sm text-on-surface-variant">
            {loading && problems.length === 0
              ? "Loading..."
              : `Showing ${page * PAGE_SIZE + 1} to ${page * PAGE_SIZE + problems.length} of ${totalCount} entries`}
          </span>
          <div className="flex items-center gap-1">
            <button
              className="px-3 py-1.5 rounded bg-surface text-on-surface-variant border border-outline-variant/20 hover:bg-surface-container-high transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={page === 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
            >
              Prev
            </button>
            {renderPaginationButtons()}
            <button
              className="px-3 py-1.5 rounded bg-surface text-on-surface-variant border border-outline-variant/20 hover:bg-surface-container-high transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={page >= totalPages - 1}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
