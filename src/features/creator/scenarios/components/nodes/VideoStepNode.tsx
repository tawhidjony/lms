"use client";

import { VideoStepNodeData } from "@/features/creator/scenarios/scenario/scenario.type";
import { cn } from "@/lib/utils";
import { Handle, NodeProps, Position } from "@xyflow/react";
import { useTranslations } from "next-intl";
import React from "react";

import { useScenarioStore } from "../../store/useScenarioStore";

const handleClassName =
  "!h-3.5 !w-3.5 !rounded-sm !border-2 !border-blue-600 !bg-white !shadow-sm transition-transform hover:!scale-110";

export const VideoStepNode: React.FC<NodeProps> = ({ id, data, selected }) => {
  const t = useTranslations("creatorScenarios");
  const deleteNode = useScenarioStore((state) => state.deleteNode);
  const setSelectedNodeId = useScenarioStore(
    (state) => state.setSelectedNodeId,
  );
  const nodeData = data as VideoStepNodeData;

  return (
    <div
      className={cn(
        "relative w-[290px] cursor-grab rounded-xl bg-white font-sans text-xs transition-all active:cursor-grabbing",
        selected
          ? "border-2 border-blue-500 shadow-lg ring-2 ring-blue-100"
          : "border border-slate-300 shadow-sm hover:border-slate-400 hover:shadow-md",
      )}
    >
      <Handle
        type="source"
        position={Position.Top}
        id="top"
        className={cn(handleClassName, "!-top-1.5")}
      />

      <div className="flex items-center gap-2 border-b border-slate-100 p-3 pb-2">
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[11px] font-bold text-white">
          {nodeData.stepNumber}
        </span>
        <h3 className="truncate text-xs font-bold text-slate-800">
          {nodeData.title}
        </h3>
      </div>

      <div className="flex justify-between border-b border-slate-100 bg-slate-50/50 px-3 py-1.5 text-[10px] text-slate-500">
        <span>
          {t("builder.nodes.length", { value: nodeData.length || "2:00" })}
        </span>
        <span>
          {t("builder.nodes.branchingTiming", {
            value: nodeData.branchingTiming || "1:00",
          })}
        </span>
      </div>

      <div className="p-3">
        <div className="mb-2 rounded border border-slate-200 bg-slate-50 p-2">
          <span className="mb-0.5 block text-[9px] font-bold text-slate-400">
            {t("builder.nodes.question")}
          </span>
          <p className="text-[11px] font-medium text-slate-700">
            {nodeData.question}
          </p>
        </div>

        <div className="mb-3 space-y-1.5">
          {nodeData.options && nodeData.options.length > 0 ? (
            nodeData.options.map((option, idx) => (
              <div
                key={option.id}
                className="rounded border border-blue-100 bg-blue-50/60 p-2 text-slate-700"
              >
                <div className="flex items-center gap-1.5">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[9px] font-bold text-white">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-[11px] font-medium">
                    {option.answerText}
                  </span>
                </div>
                {option.nextStepId ? (
                  <span className="ml-5 block text-[9px] text-slate-400">
                    {t("builder.nodes.nextStep", { id: option.nextStepId })}
                  </span>
                ) : null}
              </div>
            ))
          ) : (
            <p className="text-[10px] text-slate-400 italic">
              {t("builder.nodes.noOptions")}
            </p>
          )}
        </div>

        <div className="flex gap-2 border-t border-slate-100 pt-2">
          <button
            type="button"
            className="nodrag nopan flex-1 rounded border border-slate-200 bg-white py-1 text-[11px] text-slate-600 hover:bg-slate-50"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedNodeId(id);
            }}
          >
            {t("builder.nodes.edit")}
          </button>
          <button
            type="button"
            className="nodrag nopan flex-1 rounded border border-red-200 bg-white py-1 text-[11px] text-red-500 hover:bg-red-50"
            onClick={(event) => {
              event.stopPropagation();
              deleteNode(id);
            }}
          >
            {t("builder.nodes.delete")}
          </button>
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        className={cn(handleClassName, "!-bottom-1.5")}
      />
    </div>
  );
};
