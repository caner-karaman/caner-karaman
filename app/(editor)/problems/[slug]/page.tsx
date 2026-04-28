export default async function ProblemViewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="flex-1 flex w-full overflow-hidden p-2 gap-2 bg-background">
      {/* Left Panel: Problem Description */}
      <section className="flex-1 w-1/2 flex flex-col bg-surface-container-low rounded-lg overflow-hidden relative border border-outline-variant/5">
        {/* Tab Header (Left Pane) */}
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
        <div className="flex-1 overflow-y-auto p-6 pr-8">
          {/* Problem Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-on-surface tracking-[-0.02em] mb-3">
              {title}
            </h1>
            <div className="flex items-center gap-3 text-sm">
              <span className="px-2.5 py-1 bg-secondary/10 text-secondary rounded-md font-medium">
                Easy
              </span>
            </div>
          </div>

          {/* Rich Text Description */}
          <div className="prose prose-invert max-w-none text-on-surface-variant text-sm leading-[1.6] mb-8">
            <p className="mb-4">
              Given an array of integers <code>nums</code> and an integer{" "}
              <code>target</code>, return{" "}
              <em>
                indices of the two numbers such that they add up to{" "}
                <code>target</code>
              </em>
              .
            </p>
            <p className="mb-4">
              You may assume that each input would have{" "}
              <strong>
                <em>exactly</em> one solution
              </strong>
              , and you may not use the <em>same</em> element twice.
            </p>
            <p className="mb-4">You can return the answer in any order.</p>
          </div>

          {/* Example Blocks */}
          <div className="space-y-6 mb-8">
            {/* Example 1 */}
            <div>
              <p className="font-bold text-on-surface text-sm mb-2">
                Example 1:
              </p>
              <div className="bg-surface-container-lowest border border-outline-variant/15 rounded-md p-4 font-mono text-sm">
                <div className="flex mb-1">
                  <span className="text-outline w-24">Input:</span>{" "}
                  <span className="text-on-surface">
                    nums = [2,7,11,15], target = 9
                  </span>
                </div>
                <div className="flex mb-1">
                  <span className="text-outline w-24">Output:</span>{" "}
                  <span className="text-secondary-fixed-dim">[0,1]</span>
                </div>
                <div className="flex">
                  <span className="text-outline w-24">Explanation:</span>{" "}
                  <span className="text-on-surface-variant">
                    Because nums[0] + nums[1] == 9, we return [0, 1].
                  </span>
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div>
              <p className="font-bold text-on-surface text-sm mb-2">
                Example 2:
              </p>
              <div className="bg-surface-container-lowest border border-outline-variant/15 rounded-md p-4 font-mono text-sm">
                <div className="flex mb-1">
                  <span className="text-outline w-24">Input:</span>{" "}
                  <span className="text-on-surface">
                    nums = [3,2,4], target = 6
                  </span>
                </div>
                <div className="flex">
                  <span className="text-outline w-24">Output:</span>{" "}
                  <span className="text-secondary-fixed-dim">[1,2]</span>
                </div>
              </div>
            </div>
          </div>

          {/* Constraints */}
          <div className="mb-8">
            <p className="font-bold text-on-surface text-sm mb-3">
              Constraints:
            </p>
            <ul className="list-disc list-inside text-sm text-on-surface-variant space-y-1.5 font-mono">
              <li>
                <code className="bg-surface-container-highest px-1.5 py-0.5 rounded text-primary-fixed-dim">
                  2 &lt;= nums.length &lt;= 10<sup>4</sup>
                </code>
              </li>
              <li>
                <code className="bg-surface-container-highest px-1.5 py-0.5 rounded text-primary-fixed-dim">
                  -10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup>
                </code>
              </li>
              <li>
                <code className="bg-surface-container-highest px-1.5 py-0.5 rounded text-primary-fixed-dim">
                  -10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup>
                </code>
              </li>
              <li>
                <strong className="font-sans text-on-surface">
                  Only one valid answer exists.
                </strong>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-outline-variant/15">
            <p className="text-xs text-on-surface-variant font-medium mb-2">
              Follow-up:{" "}
              <span className="font-normal">
                Can you come up with an algorithm that is less than{" "}
                <code>
                  O(n<sup>2</sup>)
                </code>{" "}
                time complexity?
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Right Panel: Editor / Interactive Workspace */}
      <section className="flex-1 w-1/2 flex flex-col gap-2">
        {/* Editor Area */}
        <div className="flex-1 bg-surface-container-lowest rounded-lg border border-outline-variant/10 flex flex-col overflow-hidden relative">
          {/* Editor Toolbar */}
          <div className="flex items-center justify-between px-3 py-2 bg-surface-container-low border-b border-outline-variant/15">
            <div className="flex items-center gap-2">
              {/* Language Selector */}
              <button className="flex items-center gap-1 bg-surface-container-high hover:bg-surface-variant text-on-surface px-2.5 py-1 rounded-md text-xs font-medium transition-colors border border-outline-variant/20">
                Python3
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  expand_more
                </span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="text-on-surface-variant hover:text-on-surface p-1 transition-colors"
                title="Settings"
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  settings
                </span>
              </button>
              <button
                className="text-on-surface-variant hover:text-on-surface p-1 transition-colors"
                title="Full Screen"
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  fullscreen
                </span>
              </button>
            </div>
          </div>

          {/* Mock Monaco Editor */}
          <div className="flex-1 bg-[#0e0e0e] flex relative font-mono text-sm p-4 overflow-auto shadow-[0_0_10px_rgba(173,198,255,0.05)]">
            {/* Line Numbers */}
            <div className="flex flex-col text-outline-variant text-right pr-4 select-none">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>

            {/* Code */}
            <div className="flex flex-col text-on-surface whitespace-pre">
              <span className="text-primary-fixed-dim">class</span>{" "}
              <span className="text-tertiary-fixed-dim">Solution</span>:
              <br />
              {"    "}
              <span className="text-primary-fixed-dim">def</span>{" "}
              <span className="text-secondary-fixed-dim">
                {slug
                  .split("-")
                  .map((word, index) =>
                    index === 0
                      ? word
                      : word.charAt(0).toUpperCase() + word.slice(1),
                  )
                  .join("")}
              </span>
              (<span className="text-outline">self</span>,{" "}
              <span className="text-on-surface">nums</span>:{" "}
              <span className="text-primary-fixed-dim">List</span>[
              <span className="text-primary-fixed-dim">int</span>],{" "}
              <span className="text-on-surface">target</span>:{" "}
              <span className="text-primary-fixed-dim">int</span>) -&gt;{" "}
              <span className="text-primary-fixed-dim">List</span>[
              <span className="text-primary-fixed-dim">int</span>]:
              <br />
              {"        "}
              <span className="text-outline-variant italic">
                # Write your solution here
              </span>
              <br />
              {"        "}
              <span className="text-primary-fixed-dim">pass</span>
            </div>

            {/* Cursor Mock */}
            <div className="absolute top-[80px] left-[136px] w-[2px] h-[18px] bg-primary animate-pulse"></div>
          </div>
        </div>

        {/* Testcases Drawer (Collapsible) */}
        <div className="h-64 bg-surface-container-low rounded-lg border border-outline-variant/10 flex flex-col overflow-hidden">
          {/* Drawer Header */}
          <div className="flex items-center px-4 py-2 bg-surface-container-lowest border-b border-outline-variant/15 justify-between">
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 text-primary font-medium text-sm">
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  check_box
                </span>
                Testcases
              </button>
              <span className="w-[1px] h-4 bg-outline-variant/30 mx-2"></span>
              <button className="text-on-surface-variant hover:text-on-surface font-medium text-sm transition-colors">
                Test Results
              </button>
            </div>
            <button className="text-on-surface-variant hover:text-on-surface transition-colors p-1">
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                keyboard_arrow_down
              </span>
            </button>
          </div>

          {/* Testcase Content */}
          <div className="flex-1 flex p-4 gap-4 overflow-hidden">
            {/* Case Selector Sidebar */}
            <div className="w-24 flex flex-col gap-2 shrink-0 border-r border-outline-variant/15 pr-2">
              <button className="bg-surface-container-high text-on-surface text-xs font-medium py-1.5 px-3 rounded-md text-left border-l-2 border-primary">
                Case 1
              </button>
              <button className="text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface text-xs font-medium py-1.5 px-3 rounded-md text-left transition-colors">
                Case 2
              </button>
              <button className="text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface text-xs font-medium py-1.5 px-3 rounded-md text-left transition-colors">
                Case 3
              </button>
              <button className="text-primary-fixed-dim hover:bg-surface-container-highest text-xs font-medium py-1.5 px-3 rounded-md text-left transition-colors mt-auto flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-[14px]"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  add
                </span>{" "}
                Add Case
              </button>
            </div>

            {/* Input Fields */}
            <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2">
              <div>
                <label className="block text-xs font-medium text-on-surface-variant mb-1.5">
                  nums =
                </label>
                <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-md p-2.5 font-mono text-sm text-on-surface focus-within:border-primary focus-within:shadow-[0_0_8px_rgba(173,198,255,0.1)] transition-all">
                  [2,7,11,15]
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-on-surface-variant mb-1.5">
                  target =
                </label>
                <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-md p-2.5 font-mono text-sm text-on-surface focus-within:border-primary focus-within:shadow-[0_0_8px_rgba(173,198,255,0.1)] transition-all">
                  9
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
