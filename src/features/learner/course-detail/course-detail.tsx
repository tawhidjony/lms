import { Link } from "@/i18n/navigation";
import {
  getCourseById,
  statusLabel,
} from "@/features/learner/data/courses";

type Props = {
  courseId: string;
};

export default function CourseDetail({ courseId }: Props) {
  const course = getCourseById(courseId);

  if (!course) {
    return (
      <div className="max-w-2xl">
        <Link
          href="/learner/my-courses"
          className="text-sm text-blue-600 hover:underline"
        >
          ← マイコース
        </Link>
        <div className="mt-3 rounded-lg border border-slate-200 bg-white p-5 text-sm text-slate-600 shadow-sm">
          コースが見つかりません。
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <Link
        href="/learner/my-courses"
        className="text-sm text-blue-600 hover:underline"
      >
        ← マイコース
      </Link>
      <div className="mt-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-2 text-lg font-semibold text-slate-900">
          {course.title === "Information Security Awareness"
            ? "情報セキュリティ意識"
            : course.title}
        </h2>
        <p className="mb-4 text-sm text-slate-600">
          {course.description ??
            "割当研修の詳細です。コースプレイヤーから学習を開始できます。"}
        </p>
        <dl className="mb-4 grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-slate-500">カテゴリ</dt>
            <dd>{course.category}</dd>
          </div>
          <div>
            <dt className="text-slate-500">時間</dt>
            <dd>{course.duration}</dd>
          </div>
          <div>
            <dt className="text-slate-500">期限</dt>
            <dd>{course.due}</dd>
          </div>
          <div>
            <dt className="text-slate-500">タイプ</dt>
            <dd>{course.type}</dd>
          </div>
          <div>
            <dt className="text-slate-500">ステータス</dt>
            <dd>
              {statusLabel(course.status)}
              {course.progress > 0 ? ` · ${course.progress}%` : ""}
            </dd>
          </div>
          <div>
            <dt className="text-slate-500">割当者</dt>
            <dd>{course.assignedBy ?? "企業管理者"}</dd>
          </div>
        </dl>
        <div className="flex gap-2">
          <Link
            href={`/learner/courses/${course.id}/play`}
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            {course.progress > 0 ? "コースを続ける" : "受講を開始"}
          </Link>
        </div>
      </div>
    </div>
  );
}
