import { Button, Input } from "@/components/ui";
import { Link } from "@/i18n/navigation";

export default function MyCourses() {
  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-y-4 gap-x-6 mb-5 py-5 px-6 rounded-2xl border border-slate-200 bg-background-hero-gradient">
        <div className="bs-hero-copy">
          <p className="text-[0.6875rem] font-bold tracking-[0.08em] uppercase text-slate-500 mb-[0.35rem]">
            受講者 · 割当研修
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] tracking-tight">
            マイコース
          </h2>
          <p className="text-sm text-[#64748b]">
            Yuki Tanaka · Sakura Corporation
          </p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div className="flex flex-col border border-slate-200 rounded-2xl p-4 bg-white shadow-xs">
          <span className="text-2xl font-medium leading-8 tabular-nums text-black">
            8
          </span>
          <span className="text-xs font-semibold text-[#64748b]">割当済み</span>
        </div>
        <div className="flex flex-col border border-slate-200 rounded-2xl p-4 bg-white shadow-xs">
          <span className="text-2xl font-medium leading-8 tabular-nums text-black">
            2
          </span>
          <span className="text-xs font-semibold text-[#64748b]">未開始</span>
        </div>
        <div className="flex flex-col border border-slate-200 rounded-2xl p-4 bg-white shadow-xs">
          <span className="text-2xl font-medium leading-8 tabular-nums text-black">
            2
          </span>
          <span className="text-xs font-semibold text-[#64748b]">受講中</span>
        </div>
        <div className="flex flex-col border border-slate-200 rounded-2xl p-4 bg-white shadow-xs">
          <span className="text-2xl font-medium leading-8 tabular-nums text-black">
            3
          </span>
          <span className="text-xs font-semibold text-[#64748b]">完了</span>
        </div>
        <div className="flex flex-col border border-slate-200 rounded-2xl p-4 bg-white shadow-xs">
          <span className="text-2xl font-medium leading-8 tabular-nums text-red-600">
            1
          </span>
          <span className="text-xs font-semibold text-[#64748b]">期限超過</span>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <label className="relative">
          <svg
            viewBox="0 0 24 24"
            width={16}
            height={16}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400"
          >
            <circle cx={11} cy={11} r={7} />
            <path strokeLinecap="round" d="M20 20l-3-3" />
          </svg>
          <Input
            type="search"
            placeholder="コース名・カテゴリで検索…"
            className="pl-8 rounded-xl mb-0"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            data-course-filter="all"
            className="learner-filter-pill is-active px-3 py-1.5 rounded-full border border-blue-600 bg-blue-600 text-white text-xs font-medium"
          >
            すべて
          </button>
          <button
            type="button"
            data-course-filter="not_started"
            className="learner-filter-pill px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600 text-xs font-medium"
          >
            未開始
          </button>
          <button
            type="button"
            data-course-filter="in_progress"
            className="learner-filter-pill px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600 text-xs font-medium"
          >
            受講中
          </button>
          <button
            type="button"
            data-course-filter="completed"
            className="learner-filter-pill px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600 text-xs font-medium"
          >
            完了
          </button>
          <button
            type="button"
            data-course-filter="overdue"
            className="learner-filter-pill px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600 text-xs font-medium"
          >
            期限超過
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
        {[
          {
            id: "lc1",
            code: "IS",
            codeBg: "bg-blue-500",
            status: "受講中",
            statusClass: "border-blue-200 bg-blue-50 text-blue-700",
            title: "Information Security Awareness",
            href: "/learner/my-courses/lc1/course-player",
            desc: "Compliance · Video + Quiz",
            min: "40 min",
            due: "期限 Jul 28",
            progress: 85,
            progressColor: "bg-[#2563eb]",
            actionText: "コースを開く",
            actionHref: "/learner/my-courses/lc1/course-player",
            actionClass:
              "inline-flex items-center justify-center border border-[#bfdbfe] bg-[#eff6ff] text-blue-600 rounded-lg font-semibold text-xs px-3 py-1.5",
          },
          {
            id: "lc2",
            code: "CC",
            codeBg: "bg-violet-500",
            status: "受講中",
            statusClass: "border-blue-200 bg-blue-50 text-blue-700",
            title: "Customer Complaint Handling",
            href: "/learner/my-courses/lc2/course-player",
            desc: "Customer Service · Branching Video",
            min: "25 min",
            due: "期限 Jul 25",
            progress: 60,
            progressColor: "bg-blue-600",
            actionText: "コースを開く",
            actionHref: "/learner/my-courses/lc2/course-player",
            actionClass:
              "inline-flex items-center justify-center border border-[#bfdbfe] bg-[#eff6ff] text-blue-600 rounded-lg font-semibold text-xs px-3 py-1.5",
          },
          {
            id: "lc3",
            code: "WH",
            codeBg: "bg-blue-500",
            status: "期限超過",
            statusClass: "border-red-200 bg-red-50 text-red-700",
            title: "Workplace Harassment Prevention",
            href: "/learner/my-courses/lc3/course-player",
            desc: "Compliance · Video + Quiz",
            min: "35 min",
            due: "期限 Jul 20",
            progress: 30,
            progressColor: "bg-red-500",
            actionText: "コースを開く",
            actionHref: "/learner/my-courses/lc3/course-player",
            actionClass:
              "inline-flex items-center justify-center border border-[#fee2e2] bg-[#fef2f2] text-red-500 rounded-lg font-semibold text-xs px-3 py-1.5",
          },
          {
            id: "lc7",
            code: "DP",
            codeBg: "bg-blue-500",
            status: "未開始",
            statusClass: "border-slate-200 bg-slate-100 text-slate-600",
            title: "Data Privacy Essentials",
            href: "/learner/my-courses/lc7/course-player",
            desc: "Compliance · Video + Quiz",
            min: "30 min",
            due: "期限 Aug 05",
            progress: 0,
            progressColor: "bg-slate-300",
            actionText: "受講を開始",
            actionHref: "/learner/my-courses/lc7/course-player",
            actionClass:
              "inline-flex items-center justify-center border border-[#cbd5e1] bg-[#f1f5f9] text-slate-600 rounded-lg font-semibold text-xs px-3 py-1.5",
          },
          {
            id: "lc8",
            code: "FS",
            codeBg: "bg-orange-500",
            status: "未開始",
            statusClass: "border-slate-200 bg-slate-100 text-slate-600",
            title: "Fire Safety Basics",
            href: "/learner/my-courses/lc8/course-player",
            desc: "Safety · Video Course",
            min: "20 min",
            due: "期限 Aug 10",
            progress: 0,
            progressColor: "bg-slate-300",
            actionText: "受講を開始",
            actionHref: "/learner/my-courses/lc8/course-player",
            actionClass:
              "inline-flex items-center justify-center border border-[#cbd5e1] bg-[#f1f5f9] text-slate-600 rounded-lg font-semibold text-xs px-3 py-1.5",
          },
          {
            id: "lc4",
            code: "NE",
            codeBg: "bg-emerald-500",
            status: "完了",
            statusClass: "border-green-200 bg-green-50 text-green-700",
            title: "New Employee Onboarding",
            href: "/learner/my-courses/lc4/certificate",
            desc: "Onboarding · Video Course",
            min: "55 min",
            due: "期限 Jul 15",
            progress: 100,
            progressColor: "bg-green-500",
            actionText: "修了証を表示",
            actionHref: "/learner/my-courses/lc4/certificate",
            actionClass:
              "inline-flex items-center justify-center border border-[#bbf7d0] bg-[#f0fdf4] text-green-700 rounded-lg font-semibold text-xs px-3 py-1.5",
          },
        ].map((course) => (
          <article
            key={course.id}
            className="border border-slate-200 rounded-2xl p-4 bg-white shadow-xs hover:border-blue-300 hover:border transition-all duration-300 space-y-2 flex flex-col"
          >
            <div className="flex items-center justify-between">
              <div
                className={`${course.codeBg} w-9 h-9 rounded-xl flex items-center justify-center text-white`}
                aria-hidden="true"
              >
                <span className="text-xs font-bold">{course.code}</span>
              </div>
              <span
                className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium whitespace-nowrap ${course.statusClass}`}
              >
                {course.status}
              </span>
            </div>
            <h3 className="font-bold text-base leading-6 text-black">
              {course.actionHref.startsWith("/certificate") ? (
                <Link
                  href={course.actionHref}
                  className="  hover:text-blue-700 transition-all duration-300"
                >
                  {course.title}
                </Link>
              ) : (
                <Link
                  href={course.href}
                  className=" hover:text-blue-700 transition-all duration-300"
                >
                  {course.title}
                </Link>
              )}
            </h3>
            <p className="text-sm text-[#64748b]">{course.desc}</p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748b]">
              <span>{course.min}</span>
              <span>{course.due}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-full h-2 bg-[#e5e7eb] rounded-full overflow-hidden">
                <div
                  className={`${course.progressColor} h-2 rounded-full transition-all duration-300`}
                  style={{ width: `${course.progress}%` }}
                  aria-hidden="true"
                />
              </div>
              <span className="text-[#64748b] text-sm">{course.progress}%</span>
            </div>
            <div className="flex flex-wrap border-t border-slate-200 pt-2.5 mt-2">
              <Link href={course.actionHref} className={course.actionClass}>
                {course.actionText}
              </Link>
            </div>
          </article>
        ))}
      </div>

      <nav
        className="flex flex-wrap items-center justify-between gap-3 mt-4 px-3.5 py-4 border border-slate-200 rounded-2xl bg-white"
        aria-label="コース一覧のページネーション"
      >
        <div className="text-sm text-[#64748b]">1–6 / 8件</div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            type="button"
            variant="outline"
            color="neutral"
            disabled={true}
          >
            前へ
          </Button>
          <Button type="button">1</Button>
          <Button type="button" variant="outline" color="neutral">
            2
          </Button>
          <Button type="button" variant="outline" color="neutral">
            次へ
          </Button>
        </div>
      </nav>
    </>
  );
}
