"use client";

import {
  Background,
  ConnectionMode,
  Controls,
  ReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import { useTranslations } from "next-intl";
import { Fragment, useEffect, useMemo } from "react";

import { Badge, Button, ButtonLink, Input } from "@/components/ui";
import "@xyflow/react/dist/style.css";
import { ConnectionLineWithArrow } from "../components/edges/ConnectionLineWithArrow";
import { OptionEdge } from "../components/edges/OptionEdge";
import { StartNode } from "../components/nodes/StartNode";
import { VideoStepNode } from "../components/nodes/VideoStepNode";
import { StepEditSidebar } from "../components/StepEditSidebar";
import { useScenarioStore } from "../store/useScenarioStore";
import { defaultEdgeOptions, EDGE_COLOR } from "./scenario.edge";

function ScenarioFlow() {
  const t = useTranslations("creatorScenarios");
  const {
    nodes,
    edges,
    selectedNodeId,
    onNodesChange,
    onEdgesChange,
    onConnect,
    isValidConnection,
    setSelectedNodeId,
    setSelectedEdgeId,
    addVideoStepNode,
    initializeSeed,
  } = useScenarioStore();

  const stepDefaults = useMemo(
    () => ({
      title: t("builder.defaults.newVideoStep"),
      question: t("builder.defaults.defaultQuestion"),
      answerText: t("builder.defaults.continueToNewStep"),
    }),
    [t],
  );

  useEffect(() => {
    initializeSeed(stepDefaults);
  }, [initializeSeed, stepDefaults]);

  const nodeTypes = useMemo(
    () => ({ start: StartNode, videoStep: VideoStepNode }),
    [],
  );
  const edgeTypes = useMemo(() => ({ optionEdge: OptionEdge }), []);
  const selectedNode = nodes.find((node) => node.id === selectedNodeId);

  return (
    <Fragment>
      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm mb-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Input
              defaultValue={t("builder.toolbar.defaultName")}
              aria-label={t("builder.toolbar.scenarioName")}
              className="w-full"
            />
            <Badge
              variant="outline"
              color="green"
              title={t("builder.toolbar.published")}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <ButtonLink
              href="/creator/scenarios"
              variant="outline"
              color="neutral"
            >
              {t("builder.toolbar.saveDraft")}
            </ButtonLink>

            <ButtonLink
              href="/creator/scenarios"
              variant="outline"
              color="neutral"
            >
              {t("builder.toolbar.preview")}
            </ButtonLink>
            <Button
              variant="outline"
              color="neutral"
              onClick={() => addVideoStepNode(stepDefaults)}
            >
              {t("builder.toolbar.addVideoStep")}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-4 items-stretch">
        <div className="flex-1 min-w-0 bg-white rounded-lg border border-slate-200 shadow-sm p-0 overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/80">
            <div>
              <h2 className="text-sm font-semibold text-slate-800">
                {t("builder.canvas.title")}
              </h2>
              <p className="text-xs text-slate-500">
                {t("builder.canvas.description")}
              </p>
            </div>
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              {t("builder.canvas.autoLayout")}
            </span>
          </div>
          <div className="min-h-[650px] h-full overflow-hidden bg-slate-50">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              fitView
              fitViewOptions={{
                maxZoom: 1,
                padding: 0.2,
                minZoom: 0.1,
              }}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              isValidConnection={isValidConnection}
              connectionMode={ConnectionMode.Loose}
              defaultEdgeOptions={defaultEdgeOptions}
              connectionLineComponent={ConnectionLineWithArrow}
              connectionLineStyle={{ stroke: EDGE_COLOR, strokeWidth: 2 }}
              nodeTypes={nodeTypes}
              edgeTypes={edgeTypes}
              onNodeClick={(_, node) => setSelectedNodeId(node.id)}
              onEdgeClick={(_, edge) => setSelectedEdgeId(edge.id)}
              onPaneClick={() => {
                setSelectedNodeId(null);
                setSelectedEdgeId(null);
              }}
              nodesDraggable
              nodesConnectable
              elementsSelectable
              edgesFocusable
              edgesReconnectable={false}
              deleteKeyCode={["Backspace", "Delete"]}
              selectNodesOnDrag={false}
              panOnDrag
              snapToGrid
              snapGrid={[10, 10]}
              proOptions={{ hideAttribution: true }}
              className="bg-slate-50"
            >
              <Background color="#94a3b8" gap={20} size={1} />
              <Controls
                showFitView
                showInteractive={false}
                position="top-right"
                orientation="horizontal"
              />
            </ReactFlow>
          </div>
        </div>
        {selectedNode ? (
          <StepEditSidebar
            node={selectedNode}
            onClose={() => setSelectedNodeId(null)}
            stepDefaults={stepDefaults}
          />
        ) : null}
      </div>
      <div
        id="previewModal"
        className="hidden fixed inset-0 z-50 items-center justify-center bg-black/50 p-4"
      >
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-slate-800">
                {t("builder.preview.title")}
              </h3>
              <p id="previewScenarioName" className="text-xs text-slate-500">
                {t("builder.toolbar.defaultName")}
              </p>
            </div>
            <button
              type="button"
              id="btnClosePreview"
              className="text-slate-400 hover:text-slate-600 text-2xl leading-none"
              aria-label={t("builder.preview.close")}
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
                    {t("builder.preview.videoTitle")}
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
                      {t("builder.preview.play")}
                    </button>
                    <button
                      type="button"
                      id="previewBtnPause"
                      className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                      {t("builder.preview.pause")}
                    </button>
                    <button
                      type="button"
                      id="previewBtnJump"
                      className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 text-xs"
                    >
                      {t("builder.preview.jumpToDecision")}
                    </button>
                  </div>
                  <div
                    id="previewCompleteBanner"
                    className="hidden mt-3 rounded-lg bg-green-50 border border-green-200 px-3 py-2 text-sm text-green-800"
                  >
                    {t("builder.preview.completed")}
                  </div>
                </div>
              </div>
              <aside className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
                <h4 className="text-xs font-semibold text-slate-500 uppercase mb-3">
                  {t("builder.preview.learnerPath")}
                </h4>
                <div id="previewPathDisplay" className="text-sm min-h-[120px]">
                  <p className="text-xs text-slate-400">
                    {t("builder.preview.pathHint")}
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default function ScenarioComponent() {
  return (
    <ReactFlowProvider>
      <ScenarioFlow />
    </ReactFlowProvider>
  );
}
