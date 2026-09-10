"use client";

import { Background, Controls, ReactFlow } from "@xyflow/react";
import { Fragment, useMemo } from "react";

import { Badge, Button, ButtonLink, Input } from "@/components/ui";
import "@xyflow/react/dist/style.css";
import { OptionEdge } from "../components/edges/OptionEdge";
import { StartNode } from "../components/nodes/StartNode";
import { VideoStepNode } from "../components/nodes/VideoStepNode";
import { StepEditSidebar } from "../components/StepEditSidebar";
import { useScenarioStore } from "../store/useScenarioStore";

export default function ScenarioComponent() {
  const {
    nodes,
    edges,
    selectedNodeId,
    onNodesChange,
    onEdgesChange,
    onConnect,
    setSelectedNodeId,
    addVideoStepNode,
  } = useScenarioStore();

  const nodeTypes = useMemo(
    () => ({ start: StartNode, videoStep: VideoStepNode }),
    [],
  );
  const edgeTypes = useMemo(() => ({ optionEdge: OptionEdge }), []);

  return (
    <Fragment>
      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm mb-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Input
              defaultValue="顧客クレーム対応"
              aria-label="シナリオ名"
              className="w-full"
            />
            <Badge variant="outline" color="green" title="公開済み" />
          </div>
          {/* <div className="flex-1 min-w-50"> */}
          {/* <p className="text-xs text-slate-500 mt-1">
              カスタマーサービス卓越 · ビジュアルフローエディタ
            </p> */}
          {/* <div className="mt-3 flex flex-wrap items-center gap-2">
              <label
                htmlFor="builderLinkedQuiz"
                className="text-xs font-medium text-slate-600"
              >
                終了後クイズ
              </label>
              <select
                id="builderLinkedQuiz"
                className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 min-w-[220px]"
              >
                <option value="">なし</option>
              </select>
              <Link
                href="/creator/tests"
                className="text-xs text-blue-600 hover:underline"
              >
                クイズ一覧
              </Link>
            </div> */}
          {/* </div> */}
          <div className="flex flex-wrap gap-2">
            <ButtonLink
              href="/creator/scenarios"
              variant="outline"
              color="neutral"
            >
              下書き保存
            </ButtonLink>

            <ButtonLink
              href="/creator/scenarios"
              variant="outline"
              color="neutral"
            >
              プレビュー
            </ButtonLink>
            <Button
              variant="outline"
              color="neutral"
              onClick={addVideoStepNode}
            >
              + 動画ステップ追加
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-4 items-stretch">
        <div className="flex-1 min-w-0 bg-white rounded-lg border border-slate-200 shadow-sm p-0 overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/80">
            <div>
              <h2 className="text-sm font-semibold text-slate-800">
                シナリオフロー
              </h2>
              <p className="text-xs text-slate-500">
                各カードに動画・質問・分岐を表示 · クリックで編集
              </p>
            </div>
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              自動レイアウト
            </span>
          </div>
          <div className="min-h-[650px] h-full overflow-auto">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              fitView
              fitViewOptions={{
                maxZoom: 1, // 👈 অটো ফিট হওয়ার পর সর্বোচ্চ জুম ১.২ থাকবে (যাতে অতিরিক্ত বড় না দেখায়)
                padding: 0.2, // ক্যানভাসের চারপাশের মার্জিন/প্যাডিং
                minZoom: 0.1,
              }}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              edgeTypes={edgeTypes}
              onNodeClick={(_, node) => setSelectedNodeId(node.id)}
              onPaneClick={() => setSelectedNodeId(null)}
              nodesDraggable={false}
            >
              <Background color="#000000" gap={20} size={0.6} />
              <Controls
                showFitView={true}
                position="top-right"
                orientation="horizontal"
              />
              {/* <MiniMap position="bottom-left" /> */}
            </ReactFlow>
          </div>
        </div>
        {selectedNodeId && (
          <StepEditSidebar
            node={nodes.find((node) => node.id === selectedNodeId)!}
            onClose={() => setSelectedNodeId(null)}
          />
        )}
      </div>
      <div
        id="previewModal"
        className="hidden fixed inset-0 z-50 items-center justify-center bg-black/50 p-4"
      >
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-slate-800">受講者プレビュー</h3>
              <p id="previewScenarioName" className="text-xs text-slate-500">
                顧客クレーム対応
              </p>
            </div>
            <button
              type="button"
              id="btnClosePreview"
              className="text-slate-400 hover:text-slate-600 text-2xl leading-none"
              aria-label="閉じる"
            >
              ×
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-5">
            <div className="grid lg:grid-cols-[1fr_240px] gap-4">
              <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-0 overflow-hidden relative">
                <div className="aspect-video bg-slate-900 flex flex-col items-center justify-center text-slate-400 relative">
                  <div className="text-5xl mb-2 opacity-30">▶</div>
                  <p
                    id="previewVideoLabel"
                    className="text-sm font-medium text-slate-300"
                  >
                    動画タイトル
                  </p>
                  <p
                    id="previewVideoFile"
                    className="text-xs text-slate-500 mt-1"
                  >
                    video.mp4
                  </p>
                  <div
                    id="previewDecisionModal"
                    className="hidden absolute inset-0 bg-black/85 flex-col items-center justify-center gap-3 p-6 z-10"
                  >
                    <p
                      id="previewDecisionQuestion"
                      className="text-white text-sm font-medium text-center max-w-md"
                    />
                    <div
                      id="previewDecisionOptions"
                      className="w-full max-w-md space-y-2"
                    />
                  </div>
                </div>
                <div className="p-4 border-t border-slate-100">
                  <div className="flex justify-between text-xs text-slate-500 mb-1">
                    <span id="previewTimeDisplay">0:00 / 2:30</span>
                    <span id="previewProgressPct">0%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden mb-3">
                    <div
                      id="previewProgressBar"
                      className="h-full bg-blue-600 transition-all"
                      style={{ width: "0%" }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      id="previewBtnPlay"
                      className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                      ▶ 再生
                    </button>
                    <button
                      type="button"
                      id="previewBtnPause"
                      className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                      一時停止
                    </button>
                    <button
                      type="button"
                      id="previewBtnJump"
                      className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 text-xs"
                    >
                      決定ポイントへジャンプ
                    </button>
                  </div>
                  <div
                    id="previewCompleteBanner"
                    className="hidden mt-3 rounded-lg bg-green-50 border border-green-200 px-3 py-2 text-sm text-green-800"
                  >
                    ✓ シナリオ完了 — 下でパスを確認。
                  </div>
                </div>
              </div>
              <aside className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
                <h4 className="text-xs font-semibold text-slate-500 uppercase mb-3">
                  受講者パス
                </h4>
                <div id="previewPathDisplay" className="text-sm min-h-[120px]">
                  <p className="text-xs text-slate-400">選択してパスを作成</p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
