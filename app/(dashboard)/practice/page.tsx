"use client";

import Link from "next/link";
import { useEffect, useState, useCallback, useRef } from "react";
import { PublicProblemResourceService } from "@/services/api/services/PublicProblemResourceService";
import { PublicUserProblemResourceService } from "@/services/api/services/PublicUserProblemResourceService";
import { PublicTagResourceService } from "@/services/api/services/PublicTagResourceService";
import type { ProblemListDTO } from "@/services/api/models/ProblemListDTO";
import type { TagListDTO } from "@/services/api/models/TagListDTO";

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
  const [tags, setTags] = useState<TagListDTO[]>([]);
  const [selectedTagId, setSelectedTagId] = useState<string>("");
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const abortRef = useRef<AbortController | null>(null);

  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(0);
      setTotalCount(0);
    }, DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [search]);

  // Fetch tags on mount
  useEffect(() => {
    PublicTagResourceService.getAllTags(1, "en")
      .then((data) => {
        setTags(data);
      })
      .catch((err) => {
        console.error("Failed to fetch tags:", err);
      });
  }, []);

  const fetchProblems = useCallback(async () => {
    // Cancel any in-flight request
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      // Defer state updates to the next microtask to avoid cascading render warnings
      await Promise.resolve();
      setLoading(true);
      setError(null);

      const data = await PublicProblemResourceService.getAllProblems(
        "en",
        debouncedSearch.trim() || undefined,
        (difficulty as "EASY" | "MEDIUM" | "HARD") || undefined,
        selectedTagId ? [Number(selectedTagId)] : undefined,
        page,
        pageSize,
        ["id,asc"],
      );

      // Skip if this request was superseded
      if (controller.signal.aborted) return;

      setProblems(data);
      if (data.length < pageSize) {
        setTotalCount(page * pageSize + data.length);
      } else {
        setTotalCount((prev) =>
          prev <= page * pageSize ? (page + 2) * pageSize : prev,
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
  }, [page, pageSize, debouncedSearch, difficulty, selectedTagId]);

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

  const handleTagChange = (value: string) => {
    setSelectedTagId(value);
    setPage(0);
    setTotalCount(0);
  };

  const handleToggleSolved = async (problemId: number) => {
    try {
      const response =
        await PublicUserProblemResourceService.toggleSolved(problemId);
      setProblems((prev) =>
        prev.map((p) =>
          p.id === problemId ? { ...p, isSolved: response.solved } : p,
        ),
      );
    } catch (err) {
      console.error("Failed to toggle solved status:", err);
    }
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
      </div>

      {/* Control Bar Layer */}
      <div className="bg-surface-container-lowest rounded-xl p-4 mb-6 shadow-lg border border-outline-variant/15 flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Left: Search & Filters */}
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
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
            <select
              className="bg-surface border border-outline-variant/20 text-on-surface text-sm rounded-md py-2 pl-3 pr-8 focus:border-primary focus:ring-0 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23c2c6d6%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px_16px] bg-[right_8px_center] bg-no-repeat cursor-pointer hidden sm:block"
              value={selectedTagId}
              onChange={(e) => handleTagChange(e.target.value)}
            >
              <option value="">Tags</option>
              {tags.map((tag) => (
                <option key={tag.id} value={tag.id}>
                  {tag.name}
                </option>
              ))}
            </select>
          </div>
        </div>
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
                      {/* Status */}
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() =>
                            problem.id && handleToggleSolved(problem.id)
                          }
                          className={`flex items-center justify-center w-full transition-all duration-200 hover:scale-110 active:scale-95 ${
                            problem.isSolved
                              ? "text-secondary"
                              : "text-outline-variant"
                          }`}
                          aria-label={
                            problem.isSolved
                              ? "Mark as unsolved"
                              : "Mark as solved"
                          }
                        >
                          <span
                            className="material-symbols-outlined text-[22px]"
                            style={{
                              fontVariationSettings: `'FILL' ${problem.isSolved ? 1 : 0}`,
                            }}
                          >
                            {problem.isSolved ? "check_circle" : "circle"}
                          </span>
                        </button>
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
        <div className="bg-surface-container-lowest px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-outline-variant/10">
          <div className="flex items-center gap-6 order-2 sm:order-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">
                Rows:
              </span>
              <select
                className="bg-surface border border-outline-variant/20 text-on-surface text-sm rounded-md py-1 px-2 focus:border-primary focus:ring-0 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23c2c6d6%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_6px_center] bg-no-repeat cursor-pointer pr-6"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setPage(0);
                  setTotalCount(0);
                }}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
            <span className="text-sm text-on-surface-variant font-medium">
              {loading && problems.length === 0
                ? "Loading..."
                : `Showing ${page * pageSize + 1}–${page * pageSize + problems.length} of ${totalCount} items`}
            </span>
          </div>
          <div className="flex items-center gap-1 order-1 sm:order-2">
            <button
              className="px-3 py-1.5 rounded bg-surface text-on-surface-variant border border-outline-variant/20 hover:bg-surface-container-high hover:text-on-surface transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm font-medium"
              disabled={page === 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
            >
              <span className="material-symbols-outlined text-[18px] align-middle">
                chevron_left
              </span>
            </button>
            <div className="flex items-center gap-1 mx-1">
              {renderPaginationButtons()}
            </div>
            <button
              className="px-3 py-1.5 rounded bg-surface text-on-surface-variant border border-outline-variant/20 hover:bg-surface-container-high hover:text-on-surface transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm font-medium"
              disabled={page >= totalPages - 1}
              onClick={() => setPage((p) => p + 1)}
            >
              <span className="material-symbols-outlined text-[18px] align-middle">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
