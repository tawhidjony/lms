"use client";

import { Button } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function ScenariosDetailView() {
  const t = useTranslations("creatorScenarios");

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <Link
            href="/creator/scenarios"
            className="text-sm text-blue-600 hover:underline"
          >
            {t("detail.backToList")}
          </Link>
          <h2 className="text-lg font-semibold mt-1">{t("detail.demo.title")}</h2>
          <p className="text-sm text-slate-500">
            {t("detail.metaLine", {
              category: t("detail.demo.category"),
              difficulty: t("difficulty.intermediate"),
              status: t("status.published"),
            })}
          </p>
        </div>
        <Button
          color="neutral"
          variant="outline"
          onClick={() => {
            alert(t("detail.archivedAlert"));
          }}
        >
          {t("detail.archive")}
        </Button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("detail.steps")}
          </div>
          <div className="text-2xl font-bold text-slate-900">8</div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("detail.difficulty")}
          </div>
          <div className="text-2xl font-bold text-slate-900">
            {t("difficulty.intermediate")}
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("detail.status")}
          </div>
          <div className="text-2xl font-bold text-slate-900">
            {t("status.published")}
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("detail.updated")}
          </div>
          <div className="text-2xl font-bold text-slate-900">2026-09-01</div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <h3 className="text-sm font-semibold mb-3">{t("detail.detailsTitle")}</h3>
          <dl className="text-sm space-y-2">
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500 shrink-0">{t("detail.title")}</dt>
              <dd className="text-right">{t("detail.demo.title")}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500 shrink-0">{t("detail.category")}</dt>
              <dd className="text-right">{t("detail.demo.category")}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500 shrink-0">{t("detail.difficulty")}</dt>
              <dd className="text-right">{t("difficulty.intermediate")}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500 shrink-0">{t("detail.steps")}</dt>
              <dd className="text-right">8</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500 shrink-0">{t("detail.status")}</dt>
              <dd className="text-right">{t("status.published")}</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm text-slate-600">
            {t("detail.demo.description")}
          </p>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <h3 className="text-sm font-semibold mb-3">
            {t("detail.recentActivity")}
          </h3>
          <ul className="text-sm space-y-2 text-slate-600">
            <li>{t("detail.demo.activity1")}</li>
            <li>{t("detail.demo.activity2")}</li>
            <li>{t("detail.demo.activity3")}</li>
            <li>{t("detail.demo.activity4")}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
