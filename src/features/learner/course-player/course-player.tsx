"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils/cn";
import {
  formatTime,
  getCourseById,
  getPlayerMeta,
  getScenarioById,
  parseDurationToSeconds,
} from "@/features/learner/data/courses";
import type {
  PathRecord,
  ScenarioOption,
  ScenarioStep,
} from "@/features/learner/data/types";

type Props = {
  courseId: string;
};

type PlayerPhase = "idle" | "playing" | "deciding" | "reason" | "complete";

export default function CoursePlayer({ courseId }: Props) {
  const course = getCourseById(courseId);
  const meta = getPlayerMeta(courseId);
  const branching = Boolean(course?.type.includes("Branching"));
  const scenario = meta.scenarioId
    ? getScenarioById(meta.scenarioId)
    : undefined;

  const [phase, setPhase] = useState<PlayerPhase>("idle");
  const [currentTime, setCurrentTime] = useState(0);
  const [maxTime, setMaxTime] = useState(meta.duration);
  const [step, setStep] = useState<ScenarioStep | null>(
    scenario?.steps[0] ?? null,
  );
  const [path, setPath] = useState<PathRecord[]>([]);
  const [attemptNo, setAttemptNo] = useState(1);
  const [pendingOption, setPendingOption] = useState<{
    option: ScenarioOption;
    index: number;
  } | null>(null);
  const [reason, setReason] = useState("");
  const [reasonError, setReasonError] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showPathSection, setShowPathSection] = useState(branching);
  const [feedback, setFeedback] = useState<{
    title: string;
    body: string;
    tags: string[];
  } | null>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const decisionShownRef = useRef(false);

  const lessonLabel = useMemo(() => {
    if (branching && step) return step.title;
    return meta.video;
  }, [branching, meta.video, step]);

  useEffect(() => {
    if (branching && scenario?.steps[0]) {
      const first = scenario.steps[0];
      setStep(first);
      setMaxTime(parseDurationToSeconds(first.duration) || meta.duration);
    } else {
      setMaxTime(meta.duration);
    }
  }, [branching, meta.duration, scenario]);

  useEffect(() => {
    if (phase !== "playing") return;

    const id = window.setInterval(() => {
      setCurrentTime((t) => {
        const next = t + 1;

        if (
          branching &&
          step &&
          step.decisionTime > 0 &&
          next >= step.decisionTime &&
          !decisionShownRef.current
        ) {
          decisionShownRef.current = true;
          queueMicrotask(() => setPhase("deciding"));
          return step.decisionTime;
        }

        if (next >= maxTime) {
          queueMicrotask(() => {
            if (branching && step) {
              if (step.options.length === 0 || step.isCompletion) {
                setPhase("complete");
                setShowPathSection(true);
                const tags = Array.from(
                  new Set(path.flatMap((p) => p.tags)),
                );
                setFeedback({
                  title: "Scenario Feedback",
                  body:
                    step.completionMessage ||
                    scenario?.completionMessage ||
                    "研修を完了しました。",
                  tags,
                });
                return;
              }
            }
            setPhase("complete");
          });
          return maxTime;
        }

        return next;
      });
    }, 200);

    return () => window.clearInterval(id);
  }, [phase, maxTime, branching, step, path, scenario]);

  useEffect(() => {
    function onFsChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(null), 2200);
  }

  function completeScenario(message?: string) {
    setPhase("complete");
    setShowPathSection(true);
    const tags = Array.from(new Set(path.flatMap((p) => p.tags)));
    setFeedback({
      title: "Scenario Feedback",
      body:
        message ||
        scenario?.completionMessage ||
        "研修を完了しました。",
      tags,
    });
  }

  function play() {
    if (phase === "complete" || phase === "deciding" || phase === "reason") {
      return;
    }
    setPhase("playing");
  }

  function pause() {
    if (phase === "playing") setPhase("idle");
  }

  function togglePlay() {
    if (phase === "playing") pause();
    else play();
  }

  function selectOption(option: ScenarioOption, index: number) {
    setPendingOption({ option, index });
    setReason("");
    setReasonError(false);
    setPhase("reason");
  }

  function confirmReason() {
    if (!pendingOption || !step) return;
    if (!reason.trim()) {
      setReasonError(true);
      return;
    }
    const { option, index } = pendingOption;
    const letter = String.fromCharCode(65 + index);
    const record: PathRecord = {
      stepId: step.id,
      optionId: option.id,
      optionText: option.text,
      letter,
      reason: reason.trim(),
      tags: option.analysisTags,
    };
    const nextPath = [...path, record];
    setPath(nextPath);
    setFeedback({
      title: "Judgment-Type Feedback",
      body: option.feedback,
      tags: option.analysisTags,
    });
    setPendingOption(null);
    setReason("");
    setReasonError(false);

    if (option.nextStepId === "complete") {
      completeScenario();
      return;
    }

    const nextStep = scenario?.steps.find((s) => s.id === option.nextStepId);
    if (!nextStep) {
      completeScenario();
      return;
    }

    decisionShownRef.current = false;
    setStep(nextStep);
    setCurrentTime(0);
    setMaxTime(parseDurationToSeconds(nextStep.duration) || 90);
    setPhase("idle");

    if (nextStep.options.length === 0) {
      // leaf / completion clip — auto-play to end
      setPhase("playing");
    }
  }

  function retryScenario() {
    if (!scenario?.steps[0]) return;
    decisionShownRef.current = false;
    setAttemptNo((n) => n + 1);
    setPath([]);
    setFeedback(null);
    setStep(scenario.steps[0]);
    setCurrentTime(0);
    setMaxTime(parseDurationToSeconds(scenario.steps[0].duration) || 90);
    setPhase("idle");
    setShowPathSection(true);
  }

  async function toggleFullscreen() {
    const el = playerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await el.requestFullscreen();
    }
  }

  const pct = maxTime > 0 ? Math.min(100, Math.round((currentTime / maxTime) * 100)) : 0;
  const title = course?.title ?? "コース";

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl",
        phase === "playing" && "[&_.poster]:opacity-55",
        (phase === "deciding" || phase === "reason" || phase === "complete") &&
          "[&_.poster]:opacity-15",
      )}
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/learner/my-courses"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← マイコース
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
            {course?.type ?? "コース"}
          </span>
          {branching ? (
            <span className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700">
              Attempt {attemptNo}
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => showToast("進捗を保存しました")}
            className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
          >
            進捗を保存
          </button>
        </div>
      </div>

      <header className="mb-4">
        <p className="text-xs font-medium tracking-wide text-slate-400 uppercase">
          受講プレイヤー
        </p>
        <h2 className="mt-1 text-xl font-semibold text-slate-900 md:text-2xl">
          {title}
        </h2>
        <p className="mt-1 text-sm text-slate-500">{lessonLabel}</p>
      </header>

      <div
        ref={playerRef}
        className={cn(
          "overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-lg",
          isFullscreen && "flex h-screen flex-col rounded-none",
        )}
      >
        <div
          className={cn(
            "relative aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
            isFullscreen && "aspect-auto min-h-0 flex-1",
          )}
        >
          <div className="poster absolute inset-0 flex flex-col items-center justify-center transition-opacity">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.25),transparent_60%)]" />
            {phase === "idle" || phase === "playing" ? (
              <button
                type="button"
                onClick={togglePlay}
                aria-label="再生"
                className={cn(
                  "relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition hover:scale-105 hover:bg-blue-500",
                  phase === "playing" && "pointer-events-none opacity-0",
                )}
              >
                <svg viewBox="0 0 24 24" width={28} height={28} fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            ) : null}
            <div className="relative z-10 mt-4 text-sm font-medium text-slate-200">
              {lessonLabel}
            </div>
          </div>

          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label="フルスクリーン"
            className={cn(
              "absolute top-3 right-3 z-20 rounded-md border border-white/20 bg-black/40 p-2 text-white hover:bg-black/60",
              (phase === "deciding" || phase === "complete") && "opacity-0",
            )}
          >
            <svg
              viewBox="0 0 24 24"
              width={18}
              height={18}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isFullscreen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 4H5v4M15 4h4v4M9 20H5v-4M15 20h4v-4"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 9V5h4M20 9V5h-4M4 15v4h4M20 15v4h-4"
                />
              )}
            </svg>
          </button>

          {phase === "deciding" && step ? (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/55 p-4">
              <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-white p-5 shadow-2xl">
                <p className="text-xs font-semibold tracking-wide text-blue-600 uppercase">
                  決定ポイント
                </p>
                <p className="mt-2 text-base font-semibold text-slate-900">
                  {step.question}
                </p>
                <div className="mt-4 space-y-2">
                  {step.options.map((opt, index) => {
                    const letter = String.fromCharCode(65 + index);
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => selectOption(opt, index)}
                        className="flex w-full items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-left transition hover:border-blue-300 hover:bg-blue-50"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                          {letter}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium text-slate-800">
                            {opt.text}
                          </span>
                          <span className="mt-0.5 block text-xs text-slate-500">
                            Next step → {opt.nextStepId}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : null}

          {phase === "reason" && pendingOption ? (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/55 p-4">
              <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-white p-5 shadow-2xl">
                <p className="text-xs font-semibold tracking-wide text-blue-600 uppercase">
                  Choice Reason
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Why did you make this decision?
                </p>
                <p className="mt-2 text-sm font-medium text-slate-800">
                  {String.fromCharCode(65 + pendingOption.index)} —{" "}
                  {pendingOption.option.text}
                </p>
                <textarea
                  value={reason}
                  onChange={(e) => {
                    setReason(e.target.value);
                    setReasonError(false);
                  }}
                  rows={3}
                  placeholder="Enter your reason (required)"
                  className="mt-3 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 outline-none focus:border-blue-400"
                />
                {reasonError ? (
                  <p className="mt-1 text-xs text-red-600">
                    Please enter a reason before continuing.
                  </p>
                ) : null}
                <div className="mt-3 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setPendingOption(null);
                      setPhase("deciding");
                    }}
                    className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={confirmReason}
                    className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    Save & Continue
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          {phase === "complete" ? (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 p-4">
              <div className="flex max-w-sm flex-col items-center rounded-2xl bg-white px-6 py-8 text-center shadow-2xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-xl font-bold text-white">
                  ✓
                </div>
                <p className="mt-3 text-base font-semibold text-slate-900">
                  コース完了
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {feedback?.body || "研修を完了しました。"}
                </p>
              </div>
            </div>
          ) : null}
        </div>

        <div
          className={cn(
            "space-y-3 border-t border-slate-800 bg-slate-900 p-4 text-white",
            isFullscreen && "shrink-0",
          )}
        >
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <span className="w-24 shrink-0 tabular-nums">
              {formatTime(currentTime)} / {formatTime(maxTime)}
            </span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-700">
              <div
                className="h-full rounded-full bg-blue-500 transition-[width]"
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="w-10 text-right tabular-nums">{pct}%</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={togglePlay}
              disabled={phase === "deciding" || phase === "reason" || phase === "complete"}
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
                {phase === "playing" ? (
                  <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
                ) : (
                  <path d="M8 5v14l11-7z" />
                )}
              </svg>
              {phase === "playing" ? "一時停止" : "再生"}
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="ml-auto inline-flex items-center gap-2 rounded-md border border-slate-600 bg-transparent px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800"
            >
              フルスクリーン
            </button>
          </div>

          {phase === "complete" ? (
            <div className="flex flex-wrap gap-2 border-t border-slate-700 pt-3">
              {!branching ? (
                <button
                  type="button"
                  onClick={() => showToast("コース完了をマークしました")}
                  className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500"
                >
                  コース完了をマーク
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={retryScenario}
                    className="rounded-md border border-slate-600 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800"
                  >
                    Try Again
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPathSection(true)}
                    className="rounded-md border border-slate-600 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800"
                  >
                    View Attempt History
                  </button>
                </>
              )}
              <Link
                href="/learner/my-courses"
                className="rounded-md border border-slate-600 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800"
              >
                マイコースへ戻る
              </Link>
            </div>
          ) : null}

          {phase === "complete" && !branching ? (
            <p className="text-xs text-slate-400">
              動画完了 —{" "}
              <strong className="text-slate-200">コース完了をマーク</strong>
              するか、マイコースへ戻ってください。
            </p>
          ) : null}

          {feedback ? (
            <div className="rounded-xl border border-slate-700 bg-slate-800/80 p-4">
              <p className="text-[11px] font-semibold tracking-wide text-blue-300 uppercase">
                {feedback.title}
              </p>
              <p className="mt-1 text-sm text-slate-100">{feedback.body}</p>
              {feedback.tags.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {feedback.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-600 bg-slate-900 px-2 py-0.5 text-[11px] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>

      {branching && showPathSection ? (
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Attempt History
              </h3>
              <p className="text-xs text-slate-500">
                Your saved attempts for this scenario
              </p>
            </div>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
              Attempt {attemptNo}
            </span>
          </div>

          <div className="mb-4 rounded-xl border border-slate-100 bg-slate-50 p-3">
            <p className="text-xs font-medium text-slate-500">
              Current attempt · {path.length} choice
              {path.length === 1 ? "" : "s"}
            </p>
          </div>

          <h4 className="mb-2 text-sm font-semibold text-slate-800">
            Current route
          </h4>
          {path.length === 0 ? (
            <p className="text-xs text-slate-400">
              Your choices will appear here as you progress.
            </p>
          ) : (
            <ol className="space-y-2">
              {path.map((item, i) => (
                <li
                  key={`${item.stepId}-${item.optionId}-${i}`}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2"
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-blue-600 text-xs text-white">
                      {item.letter}
                    </span>
                    {item.optionText}
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{item.reason}</p>
                </li>
              ))}
            </ol>
          )}
        </section>
      ) : null}

      {toast ? (
        <div className="fixed right-4 bottom-4 z-50 rounded-md bg-slate-900 px-4 py-2 text-sm text-white shadow-lg">
          {toast}
        </div>
      ) : null}
    </div>
  );
}
