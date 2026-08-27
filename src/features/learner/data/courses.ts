import type {
  BranchingScenario,
  LearnerCourse,
  LearnerProfile,
  PlayerMeta,
} from "./types";

export const learnerProfile: LearnerProfile = {
  name: "Yuki Tanaka",
  nameJa: "田中 由紀",
  company: "Sakura Corporation",
  assigned: 8,
  completed: 3,
  inProgress: 2,
  overdue: 1,
  notStarted: 2,
};

export const learnerCourses: LearnerCourse[] = [
  {
    id: "lc1",
    title: "Information Security Awareness",
    category: "Compliance",
    duration: "40 min",
    due: "2026-07-28",
    dueLabel: "Jul 28",
    progress: 85,
    status: "in_progress",
    type: "Video + Quiz",
    thumb: "IS",
    description:
      "会社データの保護、フィッシングの認識、機密情報の安全な取り扱いに関する割当研修。",
    assignedBy: "企業管理者",
  },
  {
    id: "lc2",
    title: "Customer Complaint Handling",
    category: "Customer Service",
    duration: "25 min",
    due: "2026-07-25",
    dueLabel: "Jul 25",
    progress: 60,
    status: "in_progress",
    type: "Branching Video",
    thumb: "CC",
    description:
      "顧客クレーム対応の分岐シナリオ。判断ポイントで選択し、パスを振り返ります。",
    assignedBy: "企業管理者",
  },
  {
    id: "lc3",
    title: "Workplace Harassment Prevention",
    category: "Compliance",
    duration: "35 min",
    due: "2026-07-20",
    dueLabel: "Jul 20",
    progress: 30,
    status: "overdue",
    type: "Video + Quiz",
    thumb: "WH",
    description: "職場ハラスメント防止の必須研修です。",
    assignedBy: "企業管理者",
  },
  {
    id: "lc7",
    title: "Data Privacy Essentials",
    category: "Compliance",
    duration: "30 min",
    due: "2026-08-05",
    dueLabel: "Aug 05",
    progress: 0,
    status: "not_started",
    type: "Video + Quiz",
    thumb: "DP",
    description: "個人情報保護の基礎を学ぶコースです。",
    assignedBy: "企業管理者",
  },
  {
    id: "lc8",
    title: "Fire Safety Basics",
    category: "Safety",
    duration: "20 min",
    due: "2026-08-10",
    dueLabel: "Aug 10",
    progress: 0,
    status: "not_started",
    type: "Video Course",
    thumb: "FS",
    description: "火災時の基本対応を学ぶ安全研修です。",
    assignedBy: "企業管理者",
  },
  {
    id: "lc4",
    title: "New Employee Onboarding",
    category: "Onboarding",
    duration: "55 min",
    due: "2026-07-15",
    dueLabel: "Jul 15",
    progress: 100,
    status: "completed",
    type: "Video Course",
    thumb: "NE",
    completedOn: "Jul 15, 2026",
    score: 100,
    description: "新入社員向けオンボーディング研修。",
    assignedBy: "企業管理者",
  },
  {
    id: "lc5",
    title: "Emergency Response Training",
    category: "Safety",
    duration: "30 min",
    due: "2026-07-10",
    dueLabel: "Jul 10",
    progress: 100,
    status: "completed",
    type: "Branching Video",
    thumb: "ER",
    completedOn: "Jul 10, 2026",
    score: 95,
    description: "緊急時対応の分岐シナリオ研修。",
    assignedBy: "企業管理者",
  },
  {
    id: "lc6",
    title: "Customer Service Excellence",
    category: "Customer Service",
    duration: "45 min",
    due: "2026-07-05",
    dueLabel: "Jul 05",
    progress: 100,
    status: "completed",
    type: "Mixed",
    thumb: "CS",
    completedOn: "Jul 05, 2026",
    score: 92,
    description: "顧客サービス品質向上のための混合型研修。",
    assignedBy: "企業管理者",
  },
];

export const playerMetaByCourse: Record<string, PlayerMeta> = {
  lc1: { video: "Information Security Overview", duration: 240 },
  lc2: {
    video: "Customer Complaint Handling",
    duration: 150,
    scenarioId: "bs1",
  },
  lc3: { video: "Workplace Harassment Prevention", duration: 210 },
  lc5: {
    video: "Emergency Response Training",
    duration: 150,
    scenarioId: "bs2",
  },
  lc7: { video: "Data Privacy Essentials", duration: 180 },
  lc8: { video: "Fire Safety Essentials", duration: 120 },
};

export const branchingScenarios: BranchingScenario[] = [
  {
    id: "bs1",
    name: "Customer Complaint Handling",
    courseName: "Customer Service Excellence",
    status: "published",
    description:
      "Practice responding to customer complaints with branching decision points.",
    completionMessage:
      "You have completed the customer complaint scenario. Review your path below.",
    steps: [
      {
        id: 1,
        title: "Customer Complaint Introduction",
        videoUrl: "videos/complaint-intro.mp4",
        duration: "2:30",
        decisionTime: 90,
        question: "How should you respond to the customer?",
        options: [
          {
            id: "opt-1-a",
            text: "Apologize and listen carefully",
            nextStepId: 2,
            score: 10,
            feedback: "Good — empathy builds trust.",
            analysisTags: ["傾聴", "顧客対応", "共感"],
          },
          {
            id: "opt-1-b",
            text: "End the conversation",
            nextStepId: 3,
            score: 0,
            feedback: "Avoiding the issue may escalate complaints.",
            analysisTags: ["回避", "顧客対応", "エスカレーション"],
          },
          {
            id: "opt-1-c",
            text: "Transfer immediately",
            nextStepId: 4,
            score: 5,
            feedback: "Transfer only when appropriate.",
            analysisTags: ["エスカレーション", "顧客対応", "判断"],
          },
        ],
      },
      {
        id: 2,
        title: "Understanding the Customer",
        videoUrl: "videos/understanding-customer.mp4",
        duration: "2:00",
        decisionTime: 75,
        question: "What is the best next action?",
        options: [
          {
            id: "opt-2-a",
            text: "Offer a suitable solution",
            nextStepId: 5,
            score: 10,
            feedback: "Solution-focused approach.",
            analysisTags: ["問題解決", "顧客対応", "提案力"],
          },
          {
            id: "opt-2-b",
            text: "Ask them to call back",
            nextStepId: 3,
            score: 2,
            feedback: "Delays resolution.",
            analysisTags: ["遅延", "フォローアップ", "顧客対応"],
          },
        ],
      },
      {
        id: 3,
        title: "Missed Resolution",
        videoUrl: "videos/missed-resolution.mp4",
        duration: "1:30",
        decisionTime: 0,
        question: "",
        options: [],
      },
      {
        id: 4,
        title: "Transfer Protocol",
        videoUrl: "videos/transfer-protocol.mp4",
        duration: "1:45",
        decisionTime: 0,
        question: "",
        options: [],
      },
      {
        id: 5,
        title: "Successful Resolution",
        videoUrl: "videos/successful-resolution.mp4",
        duration: "2:15",
        decisionTime: 0,
        question: "",
        options: [],
        isCompletion: true,
        completionMessage:
          "You have completed the customer complaint scenario. Review your path below.",
      },
    ],
  },
  {
    id: "bs2",
    name: "Workplace Safety Decision",
    courseName: "Emergency Response Training",
    status: "published",
    description: "Safety decisions in warehouse environments.",
    completionMessage: "Safety scenario complete.",
    steps: [
      {
        id: 1,
        title: "Warehouse Safety Intro",
        videoUrl: "",
        duration: "3:00",
        decisionTime: 95,
        question: "You notice a spill. What do you do?",
        options: [
          {
            id: "opt-1-a",
            text: "Evacuate the area",
            nextStepId: 2,
            score: 10,
            feedback: "Safety first.",
            analysisTags: ["安全確保", "避難", "緊急対応"],
          },
          {
            id: "opt-1-b",
            text: "Report and mark area",
            nextStepId: 3,
            score: 8,
            feedback: "Correct protocol.",
            analysisTags: ["報告", "安全確保", "プロトコル"],
          },
          {
            id: "opt-1-c",
            text: "Clean without PPE",
            nextStepId: 4,
            score: 0,
            feedback: "Incorrect — PPE required.",
            analysisTags: ["安全違反", "PPE", "リスク管理"],
          },
        ],
      },
      {
        id: 2,
        title: "Evacuation Procedure",
        videoUrl: "",
        duration: "2:00",
        decisionTime: 0,
        question: "",
        options: [],
        isCompletion: true,
      },
      {
        id: 3,
        title: "Reporting Protocol",
        videoUrl: "",
        duration: "2:30",
        decisionTime: 0,
        question: "",
        options: [],
        isCompletion: true,
      },
      {
        id: 4,
        title: "Incorrect Response",
        videoUrl: "",
        duration: "1:30",
        decisionTime: 0,
        question: "",
        options: [],
      },
    ],
  },
];

export function getCourseById(id: string) {
  return learnerCourses.find((c) => c.id === id);
}

export function getScenarioById(id: string) {
  return branchingScenarios.find((s) => s.id === id);
}

export function getPlayerMeta(courseId: string): PlayerMeta {
  return (
    playerMetaByCourse[courseId] ?? { video: "研修用動画", duration: 180 }
  );
}

export function courseHref(course: LearnerCourse) {
  if (course.status === "completed") {
    return `/learner/certificates/${course.id}`;
  }
  return `/learner/courses/${course.id}/play`;
}

export function courseActionLabel(status: LearnerCourse["status"]) {
  switch (status) {
    case "not_started":
      return "受講を開始";
    case "completed":
      return "修了証を表示";
    default:
      return "コースを開く";
  }
}

export function statusLabel(status: LearnerCourse["status"]) {
  switch (status) {
    case "not_started":
      return "未開始";
    case "in_progress":
      return "受講中";
    case "completed":
      return "完了";
    case "overdue":
      return "期限超過";
  }
}

export function statusBadgeClass(status: LearnerCourse["status"]) {
  switch (status) {
    case "not_started":
      return "border-slate-200 bg-slate-100 text-slate-600";
    case "in_progress":
      return "border-blue-200 bg-blue-50 text-blue-700";
    case "completed":
      return "border-green-200 bg-green-50 text-green-700";
    case "overdue":
      return "border-red-200 bg-red-50 text-red-700";
  }
}

export function thumbClass(thumb: string) {
  switch (thumb) {
    case "CC":
      return "bg-violet-600";
    case "NE":
    case "ER":
      return thumb === "NE" ? "bg-emerald-600" : "bg-orange-600";
    case "FS":
      return "bg-orange-500";
    case "CS":
      return "bg-violet-600";
    default:
      return "bg-blue-600";
  }
}

export function progressFillClass(status: LearnerCourse["status"]) {
  switch (status) {
    case "completed":
      return "bg-green-500";
    case "overdue":
      return "bg-red-500";
    case "not_started":
      return "bg-slate-300";
    default:
      return "bg-blue-600";
  }
}

export function parseDurationToSeconds(d: string | number) {
  if (typeof d === "number") return d;
  if (!d) return 0;
  const parts = String(d).split(":");
  const m = Number.parseInt(parts[0] ?? "0", 10) || 0;
  const s = Number.parseInt(parts[1] ?? "0", 10) || 0;
  return m * 60 + s;
}

export function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${m}:${String(sec).padStart(2, "0")}`;
}
