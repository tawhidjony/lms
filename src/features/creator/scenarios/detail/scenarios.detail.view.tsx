"use client";

import { Button } from "@/components/ui";
import { Link } from "@/i18n/navigation";

export default function ScenariosDetailView() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <Link
            href="/creator/scenarios"
            className="text-sm text-blue-600 hover:underline"
          >
            ← Scenarios
          </Link>
          <h2 className="text-lg font-semibold mt-1">
            Workplace Safety Drill
          </h2>
          <p className="text-sm text-slate-500">
            Category: Safety · Difficulty: Intermediate · Status: Published
          </p>
        </div>
        <Button
          color="neutral"
          variant="outline"
          onClick={() => {
            alert("Scenario archived");
          }}
        >
          Archive Scenario
        </Button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">Steps</div>
          <div className="text-2xl font-bold text-slate-900">8</div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            Difficulty
          </div>
          <div className="text-2xl font-bold text-slate-900">Intermediate</div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">Status</div>
          <div className="text-2xl font-bold text-slate-900">Published</div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            Updated
          </div>
          <div className="text-2xl font-bold text-slate-900">2026-09-01</div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <h3 className="text-sm font-semibold mb-3">Scenario Details</h3>
          <dl className="text-sm space-y-2">
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500 shrink-0">Title</dt>
              <dd className="text-right">Workplace Safety Drill</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500 shrink-0">Category</dt>
              <dd className="text-right">Safety</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500 shrink-0">Difficulty</dt>
              <dd className="text-right">Intermediate</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500 shrink-0">Steps</dt>
              <dd className="text-right">8</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500 shrink-0">Status</dt>
              <dd className="text-right">Published</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm text-slate-600">
            Practice recognizing hazards and choosing the correct response in a
            simulated workplace environment.
          </p>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <h3 className="text-sm font-semibold mb-3">Recent Activity</h3>
          <ul className="text-sm space-y-2 text-slate-600">
            <li>Sep 1 — Scenario published</li>
            <li>Aug 28 — Step 7 feedback updated</li>
            <li>Aug 20 — Draft created</li>
            <li>Aug 15 — Category set to Safety</li>
          </ul>
        </div>
      </div>
    </>
  );
}
