"use client";

export default function ScenariosListFilter() {
  return (
    <>
      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm mb-4">
        <div className="flex flex-wrap gap-3 items-center">
          <label className="text-xs font-medium text-slate-600 shrink-0">
            Filter
          </label>
          <select
            id="scenarioStatusFilter"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 max-w-40"
          >
            <option value="all">All statuses</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
          <select
            id="scenarioDifficultyFilter"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 max-w-40"
          >
            <option value="all">All difficulties</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <span className="text-xs text-slate-400 ml-auto">
            Use search to find scenarios by title
          </span>
        </div>
      </div>
    </>
  );
}
