import Link from "next/link";

type DifficultyStats = {
  total?: number;
  solved?: number;
};

type DashboardStats = {
  easy?: DifficultyStats;
  medium?: DifficultyStats;
  hard?: DifficultyStats;
};

type UserSolvedProblem = {
  title?: string;
  slug?: string;
  difficulty?: "EASY" | "MEDIUM" | "HARD";
  solvedDate?: string;
};

async function getDashboardStats(): Promise<DashboardStats | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:9000"}/api/public/dashboard/stats`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

async function getSolvedProblems(): Promise<UserSolvedProblem[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:9000"}/api/public/dashboard/solved-problems?size=5&sort=solvedDate,desc`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function DashboardPage() {
  const [stats, solvedProblems] = await Promise.all([
    getDashboardStats(),
    getSolvedProblems(),
  ]);

  const easy = stats?.easy;
  const medium = stats?.medium;
  const hard = stats?.hard;

  const easyPct =
    easy?.total && easy.solved != null
      ? Math.round((easy.solved / easy.total) * 100)
      : 0;
  const mediumPct =
    medium?.total && medium.solved != null
      ? Math.round((medium.solved / medium.total) * 100)
      : 0;
  const hardPct =
    hard?.total && hard.solved != null
      ? Math.round((hard.solved / hard.total) * 100)
      : 0;

  return (
    <main className="flex-1 p-8 md:p-12 min-h-screen overflow-x-hidden">
      {/* Header Section */}
      <header className="flex justify-between items-end mb-12">
        <div className="space-y-2 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-headline font-black tracking-[-0.02em] text-on-surface">
            Welcome back to the void.
          </h1>
          <p className="text-on-surface-variant font-body text-base md:text-lg leading-relaxed">
            Your architecture is sound, but there are structural weaknesses in
            Graph Traversal. Recommend immediate reinforcement.
          </p>
        </div>
      </header>

      {/* Bento Grid: Stats */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
        {/* Difficulty Breakdown */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Easy */}
          <div className="bg-surface-container-lowest rounded-xl p-6 flex flex-col justify-between border border-outline-variant/15 hover:border-secondary/30 transition-colors duration-300">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-on-surface-variant text-xs font-label">
                  Foundation
                </span>
              </div>
              <h3 className="text-secondary font-headline text-lg font-bold mb-1">
                Easy
              </h3>
              <div className="flex items-end space-x-2">
                <span className="text-on-surface text-3xl font-black tracking-tighter">
                  {easy?.solved ?? "—"}
                </span>
                <span className="text-on-surface-variant text-sm mb-1">
                  / {easy?.total ?? "—"}
                </span>
              </div>
            </div>
            <div className="mt-8">
              <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div
                  className="h-full bg-secondary rounded-full shadow-[0_0_10px_theme(colors.secondary)] transition-all duration-500"
                  style={{ width: `${easyPct}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Medium */}
          <div className="bg-surface-container-lowest rounded-xl p-6 flex flex-col justify-between border border-outline-variant/15 hover:border-tertiary/30 transition-colors duration-300">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span
                  className="material-symbols-outlined text-tertiary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  engineering
                </span>
                <span className="text-on-surface-variant text-xs font-label">
                  Structure
                </span>
              </div>
              <h3 className="text-tertiary font-headline text-lg font-bold mb-1">
                Medium
              </h3>
              <div className="flex items-end space-x-2">
                <span className="text-on-surface text-3xl font-black tracking-tighter">
                  {medium?.solved ?? "—"}
                </span>
                <span className="text-on-surface-variant text-sm mb-1">
                  / {medium?.total ?? "—"}
                </span>
              </div>
            </div>
            <div className="mt-8">
              <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div
                  className="h-full bg-tertiary rounded-full shadow-[0_0_10px_theme(colors.tertiary)] transition-all duration-500"
                  style={{ width: `${mediumPct}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Hard */}
          <div className="bg-surface-container-lowest rounded-xl p-6 flex flex-col justify-between border border-outline-variant/15 hover:border-error/30 transition-colors duration-300">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span
                  className="material-symbols-outlined text-error"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  warning
                </span>
                <span className="text-on-surface-variant text-xs font-label">
                  Complexity
                </span>
              </div>
              <h3 className="text-error font-headline text-lg font-bold mb-1">
                Hard
              </h3>
              <div className="flex items-end space-x-2">
                <span className="text-on-surface text-3xl font-black tracking-tighter">
                  {hard?.solved ?? "—"}
                </span>
                <span className="text-on-surface-variant text-sm mb-1">
                  / {hard?.total ?? "—"}
                </span>
              </div>
            </div>
            <div className="mt-8">
              <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div
                  className="h-full bg-error rounded-full shadow-[0_0_10px_theme(colors.error)] transition-all duration-500"
                  style={{ width: `${hardPct}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submissions Table Area */}
      <section className="bg-surface-container-low rounded-xl py-6 overflow-hidden relative">
        <div className="px-6 mb-6 flex justify-between items-end">
          <div>
            <h2 className="text-on-surface font-headline text-2xl font-bold tracking-tight">
              Recent Solved Problems
            </h2>
            <p className="text-on-surface-variant text-sm mt-1">
              Last 5 problems solved in the architecture.
            </p>
          </div>
          <button className="text-primary hover:text-primary-container text-sm font-medium transition-colors hidden sm:block">
            View All History
          </button>
        </div>

        {/* Custom "Table" using grid */}
        <div className="w-full flex flex-col">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 text-xs uppercase tracking-widest text-on-surface-variant font-label border-b border-surface-container-highest/50">
            <div className="col-span-6">Title</div>
            <div className="col-span-3">Difficulty</div>
            <div className="col-span-3 text-right">Solved Date</div>
          </div>

          {/* Rows */}
          <div className="flex flex-col space-y-1 px-2 py-2">
            {solvedProblems.length === 0 ? (
              <div className="p-8 text-center text-on-surface-variant italic opacity-50">
                No problems solved yet.
              </div>
            ) : (
              solvedProblems.map((problem, idx) => (
                <Link
                  key={idx}
                  className="grid grid-cols-12 gap-4 px-4 py-4 items-center hover:bg-surface-container-high rounded-lg transition-colors group"
                  href={`/problems/${problem.slug}`}
                >
                  <div className="col-span-6 flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        problem.difficulty === "EASY"
                          ? "bg-secondary"
                          : problem.difficulty === "MEDIUM"
                          ? "bg-tertiary"
                          : "bg-error"
                      }`}
                    ></div>
                    <span className="text-on-surface font-medium text-sm group-hover:text-primary transition-colors truncate">
                      {problem.title}
                    </span>
                  </div>
                  <div className="col-span-3 flex items-center">
                    <span
                      className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                        problem.difficulty === "EASY"
                          ? "text-secondary bg-secondary/10"
                          : problem.difficulty === "MEDIUM"
                          ? "text-tertiary bg-tertiary/10"
                          : "text-error bg-error/10"
                      }`}
                    >
                      {problem.difficulty}
                    </span>
                  </div>
                  <div className="col-span-3 text-right text-on-surface-variant text-sm">
                    {problem.solvedDate
                      ? new Date(problem.solvedDate).toLocaleDateString()
                      : "—"}
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
