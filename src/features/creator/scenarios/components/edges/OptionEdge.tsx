"use client";

import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getBezierPath,
} from "@xyflow/react";
import { useTranslations } from "next-intl";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import { cn } from "@/lib/utils";
import { useScenarioStore } from "../../store/useScenarioStore";

export const OptionEdge: React.FC<EdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  label,
  markerEnd,
  selected,
}) => {
  const t = useTranslations("creatorScenarios");
  const deleteEdge = useScenarioStore((state) => state.deleteEdge);
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      {selected ? (
        <path
          d={edgePath}
          fill="none"
          stroke="#93c5fd"
          strokeWidth={10}
          strokeLinecap="round"
          className="pointer-events-none"
        />
      ) : null}
      <BaseEdge
        id={id}
        path={edgePath}
        markerEnd={markerEnd}
        style={{
          stroke: selected ? "#1d4ed8" : "#2563eb",
          strokeWidth: selected ? 2.75 : 2,
          ...style,
        }}
        className={selected ? "opacity-100" : "opacity-90"}
      />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: "all",
          }}
          className="nodrag nopan z-10 flex items-center gap-1"
        >
          {label ? (
            <span
              className={cn(
                "flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-[10px] font-bold text-white shadow-md",
                selected && "ring-2 ring-blue-300",
              )}
            >
              {label}
            </span>
          ) : null}
          {selected ? (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                deleteEdge(id);
              }}
              aria-label={t("builder.edges.remove")}
              title={t("builder.edges.remove")}
              className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 text-white shadow-md ring-1 ring-red-200 transition hover:bg-red-600"
            >
              <AiOutlineClose className="h-3 w-3" />
            </button>
          ) : null}
        </div>
      </EdgeLabelRenderer>
    </>
  );
};
