"use client";

import {
  ConnectionLineComponentProps,
  getBezierPath,
} from "@xyflow/react";
import { EDGE_BORDER, EDGE_COLOR } from "../../scenario/scenario.edge";

export function ConnectionLineWithArrow({
  fromX,
  fromY,
  toX,
  toY,
  fromPosition,
  toPosition,
  connectionLineStyle,
}: ConnectionLineComponentProps) {
  const [edgePath] = getBezierPath({
    sourceX: fromX,
    sourceY: fromY,
    sourcePosition: fromPosition,
    targetX: toX,
    targetY: toY,
    targetPosition: toPosition,
  });

  const angle = (Math.atan2(toY - fromY, toX - fromX) * 180) / Math.PI;

  return (
    <g>
      <path
        fill="none"
        stroke={EDGE_COLOR}
        strokeWidth={2}
        d={edgePath}
        style={connectionLineStyle}
        className="react-flow__connection-path"
      />
      <g transform={`translate(${toX}, ${toY}) rotate(${angle})`}>
        <polygon
          points="-2,-7 14,0 -2,7 -2,3.5 6,0 -2,-3.5"
          fill={EDGE_COLOR}
          stroke={EDGE_BORDER}
          strokeWidth={1.25}
          strokeLinejoin="round"
        />
      </g>
    </g>
  );
}
