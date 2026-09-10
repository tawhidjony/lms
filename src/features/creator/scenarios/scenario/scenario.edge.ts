import { DefaultEdgeOptions, MarkerType } from "@xyflow/react";

export const EDGE_COLOR = "#2563eb";
export const EDGE_BORDER = "#1e40af";
export const START_EDGE_COLOR = "#10b981";

export const edgeMarker = {
  type: MarkerType.ArrowClosed,
  width: 18,
  height: 18,
  color: EDGE_COLOR,
} as const;

export const startEdgeMarker = {
  type: MarkerType.ArrowClosed,
  width: 18,
  height: 18,
  color: START_EDGE_COLOR,
} as const;

export const defaultEdgeOptions: DefaultEdgeOptions = {
  type: "optionEdge",
  markerEnd: edgeMarker,
  style: {
    stroke: EDGE_COLOR,
    strokeWidth: 2,
  },
};
