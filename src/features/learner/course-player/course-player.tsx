"use client";
import { Button } from "@/components/ui";
import { Link } from "@/i18n/navigation";

export default function CoursePlayer() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between gap-3 mb-4">
        <Link
          href="/learner/my-courses"
          className="text-sm text-blue-500 hover:text-blue-600"
        >
          ← マイコース
        </Link>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="text-sm rounded-full bg-blue-50 text-blue-800 border border-blue-200 ring-0 focus:ring-0 focus:ring-offset-0 focus:outline-none"
            aria-readonly={true}
            aria-label="コース"
            aria-disabled={true}
          >
            コース
          </Button>
          <Button
            variant="outline"
            color="neutral"
            size="sm"
            className="text-sm rounded-full"
          >
            進捗を保存
          </Button>
        </div>
      </div>

      <div className="bp-header">
        <p className="text-xs font-semibold text-slate-500">受講プレイヤー</p>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Information Security Awareness
        </h2>
        <p className="text-sm text-slate-600">Information Security Overview</p>
      </div>

      <div className="relative">
        <div className="bp-player" id="cpPlayer">
          <div className="bp-viewport" id="videoStage">
            <div className="bp-poster">
              <div className="bp-poster-glow" aria-hidden="true" />
              <button
                type="button"
                id="btnPlayOverlay"
                className="bp-play-orb"
                aria-label="再生"
              >
                <svg
                  viewBox="0 0 24 24"
                  width={28}
                  height={28}
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div id="videoPlaceholder" className="bp-file-label">
                研修動画
              </div>
            </div>
            <button
              type="button"
              id="btnFullscreenCorner"
              className="bp-fs-corner"
              aria-label="フルスクリーン"
              title="フルスクリーン"
            >
              <svg
                className="bp-fs-icon-expand"
                viewBox="0 0 24 24"
                width={18}
                height={18}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 9V5h4M20 9V5h-4M4 15v4h4M20 15v4h-4"
                />
              </svg>
              <svg
                className="bp-fs-icon-exit hidden"
                viewBox="0 0 24 24"
                width={18}
                height={18}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 4H5v4M15 4h4v4M9 20H5v-4M15 20h4v-4"
                />
              </svg>
            </button>
            <div
              id="decisionOverlay"
              className="bp-decision hidden"
              role="dialog"
              aria-modal="true"
            >
              <div className="bp-decision-card">
                <p className="bp-decision-label">決定ポイント</p>
                <p id="decisionQuestion" className="bp-decision-question" />
                <div id="decisionOptions" className="bp-decision-options" />
              </div>
            </div>
            <div
              id="reasonOverlay"
              className="bp-decision hidden"
              role="dialog"
              aria-modal="true"
            >
              <div className="bp-decision-card cp-reason-card">
                <p className="bp-decision-label">Choice Reason</p>
                <p className="text-sm text-slate-600 mb-2">
                  Why did you make this decision?
                </p>
                <p
                  id="reasonChoiceSummary"
                  className="text-sm font-medium text-slate-800 mb-3"
                />
                <label htmlFor="choiceReasonInput" className="sr-only">
                  Why did you make this decision?
                </label>
                <textarea
                  id="choiceReasonInput"
                  className="cp-reason-input"
                  rows={3}
                  placeholder="Enter your reason (required)"
                  required
                  defaultValue={""}
                />
                <p id="choiceReasonError" className="cp-reason-error hidden">
                  Please enter a reason before continuing.
                </p>
                <div className="flex justify-end gap-2 mt-3">
                  <button
                    id="btnCancelReason"
                    type="button"
                    className="bp-btn bp-btn-ghost"
                  >
                    Back
                  </button>
                  <button
                    id="btnConfirmReason"
                    type="button"
                    className="bp-btn bp-btn-primary"
                  >
                    Save &amp; Continue
                  </button>
                </div>
              </div>
            </div>
            <div id="quizPanel" className="cp-quiz hidden">
              <p className="bp-decision-label">コースクイズ</p>
              <h2 id="quizTitle" className="bp-decision-question">
                最終クイズ
              </h2>
              <p id="quizMeta" className="text-xs text-slate-500 mb-4">
                質問 1 / 5 · 合格点: 80%
              </p>
              <p
                id="quizQuestion"
                className="text-sm font-medium text-slate-800 mb-3"
              >
                顧客の機密データを守るのに最も適切な方法はどれですか？
              </p>
              <div id="quizOptions" className="space-y-2 mb-4">
                <label className="cp-quiz-option">
                  <input type="radio" name="quiz" defaultValue="a" />
                  個人メールで便宜上共有する
                </label>
                <label className="cp-quiz-option">
                  <input
                    type="radio"
                    name="quiz"
                    defaultValue="b"
                    defaultChecked
                  />
                  データを保存中および転送中に暗号化する
                </label>
                <label className="cp-quiz-option">
                  <input type="radio" name="quiz" defaultValue="c" />
                  セキュリティのないUSBドライブに保存する
                </label>
              </div>
              <div className="flex justify-between gap-2">
                <button
                  id="btnQuizBack"
                  type="button"
                  className="bp-btn bp-btn-ghost"
                >
                  動画に戻る
                </button>
                <button
                  id="btnQuizNext"
                  type="button"
                  className="bp-btn bp-btn-primary"
                  data-demo-save="回答を保存しました"
                >
                  提出して次へ
                </button>
              </div>
            </div>
            <div id="completionBanner" className="bp-complete hidden">
              <div className="bp-complete-icon">✓</div>
              <p className="bp-complete-title">コース完了</p>
              <p className="bp-complete-text">研修を完了しました。</p>
            </div>
          </div>
          <div className="bp-controls">
            <div className="bp-progress-row">
              <span id="timeDisplay" className="bp-time">
                0:00 / 0:00
              </span>
              <div className="bp-progress-track">
                <div
                  id="progressBar"
                  className="bp-progress-fill"
                  style={{ width: "0%" }}
                />
              </div>
              <span id="progressPct" className="bp-pct">
                0%
              </span>
            </div>
            <div className="bp-actions">
              <button
                id="btnPlayPause"
                type="button"
                className="bp-btn bp-btn-primary"
              >
                <svg
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                再生
              </button>
              <button
                id="btnFullscreen"
                type="button"
                className="bp-btn bp-btn-ghost bp-btn-fs ml-auto"
              >
                <svg
                  className="bp-fs-icon-expand"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 9V5h4M20 9V5h-4M4 15v4h4M20 15v4h-4"
                  />
                </svg>
                <svg
                  className="bp-fs-icon-exit hidden"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 4H5v4M15 4h4v4M9 20H5v-4M15 20h4v-4"
                  />
                </svg>
                <span className="bp-fs-label">フルスクリーン</span>
              </button>
            </div>
            <div id="playerActionBar" className="cp-action-bar hidden">
              <button
                id="btnStartQuiz"
                type="button"
                className="bp-btn bp-btn-primary hidden"
              >
                クイズ開始
              </button>
              <button
                id="btnMarkComplete"
                type="button"
                className="bp-btn bp-btn-primary hidden"
              >
                コース完了をマーク
              </button>
              <button
                id="btnRetryScenario"
                type="button"
                className="bp-btn bp-btn-ghost hidden"
              >
                Try Again
              </button>
              <button
                id="btnViewResults"
                type="button"
                className="bp-btn bp-btn-ghost hidden"
              >
                View Attempt History
              </button>
              <a href="my-courses.html" className="bp-btn bp-btn-ghost">
                マイコースへ戻る
              </a>
            </div>
            <div id="videoCompleteHint" className="cp-hint hidden">
              動画完了 — <strong>コース完了をマーク</strong>
              するか、マイコースへ戻ってください。
            </div>
            <div
              id="judgmentFeedbackPanel"
              className="cp-judgment-feedback hidden"
            >
              <p className="cp-judgment-kicker">Judgment-Type Feedback</p>
              <h3 id="judgmentFeedbackTitle" className="cp-judgment-title">
                Scenario Feedback
              </h3>
              <p id="judgmentFeedbackBody" className="cp-judgment-body" />
              <div id="judgmentFeedbackTags" className="cp-judgment-tags" />
            </div>
          </div>
        </div>
      </div>

      <section
        id="playerPathSection"
        className="cp-path-map lr-results-inline hidden"
      >
        <div className="cp-path-map-head">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="cp-path-map-title lr-section-title mb-0">
                Attempt History
              </h3>
              <p id="playerPathSubtitle" className="cp-path-map-sub">
                Your saved attempts for this scenario
              </p>
            </div>
            <span className="bp-badge">
              <span id="resultsAttemptCount">0</span> Attempts
            </span>
          </div>
        </div>
        <div id="attemptHistoryList" className="lr-attempt-list" />
        <div id="playerPathRouteHead" className="cp-path-route-head hidden">
          <h4 id="playerPathRouteTitle" className="cp-path-route-title">
            Current route
          </h4>
          <p id="playerPathRouteSub" className="cp-path-map-sub" />
        </div>
        <div id="playerPathDisplay" className="cp-path-flow">
          <p className="text-xs text-slate-400">
            Your choices will appear here as you progress.
          </p>
        </div>
      </section>
    </div>
  );
}
