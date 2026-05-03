"use client";

import { useEffect, useState } from "react";
import { PublicProblemResourceService } from "@/services/api/services/PublicProblemResourceService";
import type { ProblemDetailDTO } from "@/services/api/models/ProblemDetailDTO";
import type { SolutionDTO } from "@/services/api/models/SolutionDTO";

interface ProblemViewClientProps {
  slug: string;
}

/* ── Difficulty badge helpers ─────────────────────────────────── */

const difficultyColor: Record<string, string> = {
  EASY: "bg-green-500/15 text-green-400",
  MEDIUM: "bg-amber-500/15 text-amber-400",
  HARD: "bg-red-500/15 text-red-400",
};

const difficultyLabel: Record<string, string> = {
  EASY: "Easy",
  MEDIUM: "Medium",
  HARD: "Hard",
};

/* ── HTML sanitiser — strips inline styles from backend HTML ── */

function sanitizeHtml(html: string): string {
  return html.replace(/\s*style="[^"]*"/gi, "");
}

function getYouTubeId(url: string | null | undefined): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

/* ── Component ────────────────────────────────────────────────── */

export default function ProblemViewClient({ slug }: ProblemViewClientProps) {
  const [problem, setProblem] = useState<ProblemDetailDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [selectedSolutionIndex, setSelectedSolutionIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    PublicProblemResourceService.getProblemBySlug(slug, "en")
      .then((data) => {
        if (!cancelled) setProblem(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message ?? "Failed to load problem");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  /* ── Derived values ──────────────────────────────────────── */

  const title =
    problem?.title ??
    slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  const difficulty = problem?.difficulty ?? "";
  const solutions: SolutionDTO[] = problem?.solutions ?? [];
  const activeSolution = solutions[selectedSolutionIndex] ?? null;

  const codeLines = activeSolution?.code?.split("\n") ?? [];

  /* ── Loading state ───────────────────────────────────────── */

  if (loading) {
    return (
      <main className="flex-1 flex w-full overflow-hidden p-2 gap-2 bg-background">
        <section className="flex-1 flex flex-col bg-surface-container-low rounded-lg overflow-hidden border border-outline-variant/5">
          <div className="flex items-center px-4 py-2 bg-surface-container-lowest border-b border-outline-variant/15 shrink-0 gap-6">
            <div className="h-4 w-24 bg-surface-container-high rounded animate-pulse" />
          </div>
          <div className="flex-1 p-6 pr-8 space-y-4">
            <div className="h-8 w-64 bg-surface-container-high rounded animate-pulse" />
            <div className="h-5 w-16 bg-surface-container-high rounded animate-pulse" />
            <div className="space-y-2 mt-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 bg-surface-container-high rounded animate-pulse"
                  style={{ width: `${80 - i * 8}%` }}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  /* ── Error state ─────────────────────────────────────────── */

  if (error) {
    return (
      <main className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center space-y-3">
          <span
            className="material-symbols-outlined text-[48px] text-error"
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            error
          </span>
          <p className="text-on-surface-variant text-sm">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="text-primary text-sm font-medium hover:underline"
          >
            Try again
          </button>
        </div>
      </main>
    );
  }

  /* ── Main render ─────────────────────────────────────────── */

  return (
    <main className="flex-1 flex w-full overflow-hidden p-2 gap-2 bg-background">
      {/* Left Panel: Problem Description */}
      <section
        className={`flex flex-col bg-surface-container-low rounded-lg overflow-hidden relative border border-outline-variant/5 transition-all duration-500 ease-in-out ${
          showSolution ? "w-1/2 flex-1" : "w-full"
        }`}
      >
        {/* Tab Header */}
        <div className="flex items-center px-4 py-2 bg-surface-container-lowest border-b border-outline-variant/15 shrink-0 gap-6">
          <button className="flex items-center gap-2 text-primary font-medium text-sm pb-1 border-b border-primary">
            <span
              className="material-symbols-outlined text-[18px]"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              description
            </span>
            Description
          </button>
        </div>

        {/* Problem Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-6 pr-8 pb-24">
          {/* Problem Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-on-surface tracking-[-0.02em] mb-3">
              {title}
            </h1>
            <div className="flex items-center gap-3 text-sm flex-wrap">
              {difficulty && (
                <span
                  className={`px-2.5 py-1 rounded-md font-medium ${difficultyColor[difficulty] ?? "bg-surface-container-high text-on-surface-variant"}`}
                >
                  {difficultyLabel[difficulty] ?? difficulty}
                </span>
              )}
              {problem?.tags?.map((tag) => (
                <span
                  key={tag.id}
                  className="px-2.5 py-1 bg-surface-container-high text-on-surface-variant rounded-md font-medium"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Description (HTML from backend) */}
          {problem?.description && (
            <div
              className="problem-description mb-8"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(problem.description),
              }}
            />
          )}

          {/* LeetCode link */}
          {problem?.leetcodeUrl && (
            <div className="mt-6 mb-8">
              <a
                href={problem.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  open_in_new
                </span>
                View on LeetCode
              </a>
            </div>
          )}
        </div>

        {/* Show Solution — floating at the bottom */}
        {!showSolution && solutions.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-container-low to-transparent pointer-events-none flex items-end justify-center pb-6">
            <button
              onClick={() => setShowSolution(true)}
              className="pointer-events-auto group flex items-center gap-2 bg-primary hover:bg-primary/90 text-on-primary px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-primary/20 active:scale-[0.98]"
            >
              <span
                className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-0.5"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                code
              </span>
              Show Solution
            </button>
          </div>
        )}
      </section>

      {/* Right Panel: Solution Content */}
      <section
        className={`flex flex-col bg-surface-container-low rounded-lg overflow-hidden border border-outline-variant/10 transition-all duration-500 ease-in-out ${
          showSolution ? "flex-1 w-1/2 opacity-100" : "w-0 opacity-0 p-0 border-none"
        }`}
      >
        {/* Header / Tabs */}
        <div className="flex items-center justify-between px-3 py-2 bg-surface-container-lowest border-b border-outline-variant/15 shrink-0">
          <div className="flex items-center gap-1">
            {solutions.map((sol, idx) => (
              <button
                key={sol.id ?? idx}
                onClick={() => setSelectedSolutionIndex(idx)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-colors border ${
                  idx === selectedSolutionIndex
                    ? "bg-surface-container-high text-on-surface border-outline-variant/20"
                    : "text-on-surface-variant hover:text-on-surface border-transparent hover:bg-surface-container-high/50"
                }`}
              >
                {sol.programmingLanguage ?? `Solution ${idx + 1}`}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowSolution(false)}
            className="text-on-surface-variant hover:text-on-surface p-1 transition-colors"
            title="Hide Solution"
          >
            <span
              className="material-symbols-outlined text-[18px]"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              close
            </span>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto">
          {/* Video Area */}
          {activeSolution && getYouTubeId(activeSolution.videoUrl) && (
            <div className="aspect-video w-full bg-black">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${getYouTubeId(activeSolution.videoUrl)}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className="p-6 space-y-8">
            {/* Explanation Area */}
            {activeSolution?.explanation && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-medium text-sm">
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    lightbulb
                  </span>
                  Explanation
                </div>
                <div
                  className="problem-description"
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(activeSolution.explanation),
                  }}
                />
              </div>
            )}

            {/* Code Area */}
            {activeSolution?.code && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-medium text-sm">
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    code
                  </span>
                  Code Implementation
                </div>
                <div className="bg-[#0e0e0e] rounded-xl border border-outline-variant/10 flex relative font-mono text-sm p-4 overflow-hidden shadow-inner">
                  {/* Line Numbers */}
                  <div className="flex flex-col text-outline-variant/40 text-right pr-4 select-none shrink-0 border-r border-outline-variant/5">
                    {codeLines.map((_, i) => (
                      <span key={i}>{i + 1}</span>
                    ))}
                  </div>

                  {/* Code Content */}
                  <pre className="flex-1 text-on-surface whitespace-pre pl-4 overflow-x-auto">
                    <code>{activeSolution.code}</code>
                  </pre>
                </div>
              </div>
            )}

            {!activeSolution && (
              <div className="text-center py-12 text-on-surface-variant">
                No solution available for this language.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
