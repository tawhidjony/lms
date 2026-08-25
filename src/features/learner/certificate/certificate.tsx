"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import {
  getCourseById,
  learnerProfile,
} from "@/features/learner/data/courses";

type Props = {
  courseId: string;
};

export default function Certificate({ courseId }: Props) {
  const course = getCourseById(courseId);
  const [toast, setToast] = useState<string | null>(null);

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(null), 2200);
  }

  if (!course || course.status !== "completed") {
    return (
      <div className="mx-auto max-w-2xl">
        <Link
          href="/learner/my-courses"
          className="text-sm text-blue-600 hover:underline"
        >
          ← My Courses
        </Link>
        <div className="mt-4 rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm font-medium text-slate-800">
            修了証を表示できません
          </p>
          <p className="mt-1 text-xs text-slate-500">
            完了済みのコースのみ修了証を発行できます。
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto max-w-2xl">
      <Link
        href="/learner/my-courses"
        className="text-sm text-blue-600 hover:underline"
      >
        ← My Courses
      </Link>
      <div className="mt-4 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 px-6 py-5 text-white">
          <p className="mb-1 text-xs tracking-widest text-blue-100 uppercase">
            修了証
          </p>
          <h2 className="text-xl font-semibold">{course.title}</h2>
          <p className="mt-1 text-sm text-blue-100">
            {learnerProfile.company} · 株式会社サクラ
          </p>
        </div>
        <div className="border-b border-slate-100 p-6 text-center">
          <p className="mb-2 text-sm text-slate-500">以下の受講者が</p>
          <p className="mb-2 text-2xl font-semibold text-slate-900">
            {learnerProfile.name}
          </p>
          <p className="mb-1 text-sm text-slate-500">
            を正常に修了したことを証明します
          </p>
          <p className="text-lg font-medium text-slate-800">{course.title}</p>
        </div>
        <dl className="grid grid-cols-2 gap-4 p-6 text-sm">
          <div>
            <dt className="text-slate-500">完了日</dt>
            <dd className="font-medium">{course.completedOn ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-slate-500">最終スコア</dt>
            <dd className="font-medium">
              {course.score != null ? `${course.score}%` : "—"}
            </dd>
          </div>
          <div>
            <dt className="text-slate-500">カテゴリ</dt>
            <dd className="font-medium">{course.category}</dd>
          </div>
          <div>
            <dt className="text-slate-500">時間</dt>
            <dd className="font-medium">{course.duration}</dd>
          </div>
        </dl>
        <div className="flex flex-wrap justify-center gap-2 px-6 pb-6">
          <button
            type="button"
            onClick={() => showToast("PDFをダウンロードしました（デモ）")}
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            PDFをダウンロード
          </button>
          <button
            type="button"
            onClick={() => showToast("証明書リンクをコピーしました")}
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            共有
          </button>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-slate-400">
        {learnerProfile.company}の割当研修に対してCopia LMSが発行
      </p>
      {toast ? (
        <div className="fixed right-4 bottom-4 z-50 rounded-md bg-slate-900 px-4 py-2 text-sm text-white shadow-lg">
          {toast}
        </div>
      ) : null}
    </div>
  );
}
