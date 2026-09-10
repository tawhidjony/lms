import { Edge, Node } from "@xyflow/react";
import dagre from "dagre";
import { VideoStepNodeData } from "./scenario.type";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

export const NODE_WIDTH = 290;
export const BASE_NODE_HEIGHT = 230;
export const OPTION_HEIGHT = 45;
const CHILD_GAP_X = 40;
const CHILD_GAP_Y = 100;

function getNodeSize(node: Node): { width: number; height: number } {
  if (node.type === "start" || node.type === "end") {
    return { width: 120, height: 40 };
  }

  const optionsCount =
    (node.data as VideoStepNodeData)?.options?.length || 0;
  return {
    width: NODE_WIDTH,
    height: BASE_NODE_HEIGHT + optionsCount * OPTION_HEIGHT,
  };
}

/** Place a new child near its parent without moving existing nodes. */
export function getNewChildPosition(
  parent: Node,
  siblingNodes: Node[],
): { x: number; y: number } {
  const parentSize = getNodeSize(parent);

  if (siblingNodes.length === 0) {
    return {
      x: parent.position.x + (parentSize.width - NODE_WIDTH) / 2,
      y: parent.position.y + parentSize.height + CHILD_GAP_Y,
    };
  }

  const rightmost = siblingNodes.reduce((max, node) =>
    node.position.x > max.position.x ? node : max,
  );

  return {
    x: rightmost.position.x + NODE_WIDTH + CHILD_GAP_X,
    y: rightmost.position.y,
  };
}

export const scenarioAutoLayout = (
  nodes: Node[],
  edges: Edge[],
  direction: "TB" | "LR" = "TB",
) => {
  dagreGraph.setGraph({ rankdir: direction, nodesep: 70, ranksep: 130 });

  nodes.forEach((node) => {
    const { width, height } = getNodeSize(node);
    dagreGraph.setNode(node.id, { width, height });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    const { width, height } = getNodeSize(node);

    return {
      ...node,
      position: {
        x: nodeWithPosition.x - width / 2,
        y: nodeWithPosition.y - height / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
};
