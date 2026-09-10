import { Edge, Node } from "@xyflow/react";
import dagre from "dagre";
import { VideoStepNodeData } from "./scenario.type";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const NODE_WIDTH = 290;
const BASE_NODE_HEIGHT = 230; // হেডার, কোশ্চেন ও বাটনের বেসিক হাইট
const OPTION_HEIGHT = 45; // প্রতি অপশনের জন্য অতিরিক্ত হাইট

export const scenarioAutoLayout = (
  nodes: Node[],
  edges: Edge[],
  direction: "TB" | "LR" = "TB",
) => {
  // ranksep: উপরে-নিচে নোডগুলোর গ্যাপিং (130px)
  // nodesep: পাশে নোডগুলোর গ্যাপিং (70px)
  dagreGraph.setGraph({ rankdir: direction, nodesep: 70, ranksep: 130 });

  nodes.forEach((node) => {
    const isSmallNode = node.type === "start";
    const width = isSmallNode ? 120 : NODE_WIDTH;

    // 🚀 ডাইনামিক হাইট ক্যালকুলেশন
    let height = 40;
    if (!isSmallNode) {
      const optionsCount =
        (node.data as VideoStepNodeData)?.options?.length || 0;
      height = BASE_NODE_HEIGHT + optionsCount * OPTION_HEIGHT;
    }

    dagreGraph.setNode(node.id, { width, height });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    const isSmallNode = node.type === "start";
    const width = isSmallNode ? 120 : NODE_WIDTH;

    let height = 40;
    if (!isSmallNode) {
      const optionsCount =
        (node.data as VideoStepNodeData)?.options?.length || 0;
      height = BASE_NODE_HEIGHT + optionsCount * OPTION_HEIGHT;
    }

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
