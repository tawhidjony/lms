export type CourseStatus =
  | "not_started"
  | "in_progress"
  | "completed"
  | "overdue";

export type LearnerCourse = {
  id: string;
  title: string;
  category: string;
  duration: string;
  due: string;
  dueLabel: string;
  progress: number;
  status: CourseStatus;
  type: string;
  thumb: string;
  completedOn?: string;
  score?: number;
  description?: string;
  assignedBy?: string;
};

export type LearnerProfile = {
  name: string;
  nameJa: string;
  company: string;
  assigned: number;
  completed: number;
  inProgress: number;
  overdue: number;
  notStarted: number;
};

export type ScenarioOption = {
  id: string;
  text: string;
  nextStepId: number | "complete";
  score: number;
  feedback: string;
  analysisTags: string[];
};

export type ScenarioStep = {
  id: number;
  title: string;
  videoUrl: string;
  duration: string;
  decisionTime: number;
  question: string;
  options: ScenarioOption[];
  isCompletion?: boolean;
  completionMessage?: string;
};

export type BranchingScenario = {
  id: string;
  name: string;
  courseName: string;
  status: string;
  description: string;
  completionMessage: string;
  steps: ScenarioStep[];
};

export type PlayerMeta = {
  video: string;
  duration: number;
  scenarioId?: string;
};

export type PathRecord = {
  stepId: number;
  optionId: string;
  optionText: string;
  letter: string;
  reason: string;
  tags: string[];
};
