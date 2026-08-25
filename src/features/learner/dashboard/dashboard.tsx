import { Link } from "@/i18n/navigation";
import {
  courseHref,
  learnerCourses,
  learnerProfile,
  thumbClass,
} from "@/features/learner/data/courses";

export default function LearnerDashboard() {
  const completed = learnerCourses.filter((c) => c.status === "completed");
  const total = learnerCourses.length || 1;
  const counts = {
    completed: learnerProfile.completed,
    inProgress: learnerProfile.inProgress,
    notStarted: learnerProfile.notStarted,
    overdue: learnerProfile.overdue,
  };
  const avgScore =
    completed.length > 0
      ? Math.round(
          completed.reduce((sum, c) => sum + (c.score ?? 0), 0) / completed.length,
        )
      : 0;

  const segments = [
    { key: "completed", label: "完了", count: counts.completed, color: "bg-green-500" },
    { key: "inProgress", label: "受講中", count: counts.inProgress, color: "bg-blue-500" },
    { key: "notStarted", label: "未開始", count: counts.notStarted, color: "bg-slate-300" },
    { key: "overdue", label: "期限超過", count: counts.overdue, color: "bg-red-500" },
  ];

  return (
    <div id="progressRoot">
      <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-5">
        <div className="rounded-lg border border-green-200 bg-green-50/50 p-4">
          <p className="mb-1 text-xs font-medium text-green-700">完了</p>
          <p className="text-2xl font-bold text-green-800">{counts.completed}</p>
        </div>
        <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-4">
          <p className="mb-1 text-xs font-medium text-blue-700">受講中</p>
          <p className="text-2xl font-bold text-blue-800">{counts.inProgress}</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="mb-1 text-xs font-medium text-slate-600">未開始</p>
          <p className="text-2xl font-bold text-slate-800">{counts.notStarted}</p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50/50 p-4">
          <p className="mb-1 text-xs font-medium text-red-700">期限超過</p>
          <p className="text-2xl font-bold text-red-800">{counts.overdue}</p>
        </div>
        <div className="rounded-lg border border-violet-200 bg-violet-50/50 p-4">
          <p className="mb-1 text-xs font-medium text-violet-700">平均スコア</p>
          <p className="text-2xl font-bold text-violet-800">{avgScore}%</p>
        </div>
      </div>

      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-sm font-semibold text-slate-800">
            ステータス内訳
          </h3>
          <div className="mb-4 flex h-3 overflow-hidden rounded-full bg-slate-100">
            {segments.map((seg) => (
              <div
                key={seg.key}
                className={seg.color}
                style={{ width: `${(seg.count / total) * 100}%` }}
                title={`${seg.label}: ${seg.count}`}
              />
            ))}
          </div>
          <ul className="space-y-2 text-sm">
            {segments.map((seg) => (
              <li
                key={seg.key}
                className="flex items-center justify-between"
              >
                <span className="flex items-center gap-2 text-slate-600">
                  <span className={`h-2.5 w-2.5 rounded-full ${seg.color}`} />
                  {seg.label}
                </span>
                <span className="font-medium text-slate-800">{seg.count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-amber-100 bg-amber-50/30 p-5 shadow-sm">
          <h3 className="mb-1 text-sm font-semibold text-slate-800">
            取得した修了証
          </h3>
          <p className="mb-4 text-xs text-slate-500">
            修了の証明をダウンロード
          </p>
          <div className="max-h-[280px] space-y-2 overflow-y-auto pr-1">
            {completed.map((course) => (
              <Link
                key={course.id}
                href={courseHref(course)}
                className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/80 p-4 transition hover:border-blue-200 hover:shadow-md"
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white shadow-sm ${thumbClass(course.thumb)}`}
                >
                  {course.thumb}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="mb-0.5 text-[11px] font-medium tracking-wide text-green-600 uppercase">
                    修了証
                  </p>
                  <p className="truncate text-sm font-semibold text-slate-800 group-hover:text-blue-700">
                    {course.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {course.completedOn} · スコア {course.score}%
                  </p>
                </div>
                <span className="text-lg leading-none text-slate-300 group-hover:text-blue-500">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
