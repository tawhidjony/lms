import { Node } from "@xyflow/react";

// কুইজ বা অপশনের টাইপ
export interface BranchOption {
  id: string;
  label: string; // যেমন: "Option A"
  answerText: string; // যেমন: "Apologize and listen carefully"
  nextStepId?: string;
  score?: number;
  feedback?: string;
  tags?: string[];
}

// প্রতিটি ভিডিও স্টেপ নোডের ভেতর যেসব ডাটা থাকবে
export interface VideoStepNodeData extends Record<string, unknown> {
  stepNumber: number;
  title: string;
  videoUrl?: string;
  length: string;
  branchingTiming: string;
  question: string;
  options: BranchOption[];
  isCompletedStep?: boolean;
}

// React Flow Node-এর টাইপ সেফটি
export type VideoStepNodeType = Node<VideoStepNodeData, "videoStep">;
