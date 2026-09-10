import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Edge,
  Node,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
  Position,
} from "@xyflow/react";
import { create } from "zustand";
import { scenarioAutoLayout } from "../scenario/scenario.auto-layout";
import { VideoStepNodeData } from "../scenario/scenario.type";

const initialNodes: Node[] = [
  {
    id: "start-node",
    type: "start",
    position: { x: 360, y: 30 },
    data: {},
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: "step-2",
    type: "videoStep",
    position: { x: 250, y: 120 },
    data: {
      stepNumber: 2,
      title: "新しい動画ステップ",
      length: "2:00",
      branchingTiming: "1:00",
      question: "学習者は何をすべきですか？",
      options: [],
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: "e-start-2",
    source: "start-node",
    target: "step-2",
    type: "optionEdge",
    animated: true,
    style: { stroke: "#10B981", strokeWidth: 2 },
  },
];

interface ScenarioState {
  nodes: Node[];
  edges: Edge[];
  selectedNodeId: string | null;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;

  onConnect: OnConnect;
  setSelectedNodeId: (id: string | null) => void;
  updateNodeData: (id: string, newData: Partial<VideoStepNodeData>) => void;
  addVideoStepNode: () => void;
  deleteNode: (id: string) => void;
  autoLayout: () => void;
  addOptionToNode: (parentId: string) => void;
  removeOptionFromNode: (parentId: string, optionId: string) => void;
  updateOptionText: (parentId: string, optionId: string, text: string) => void;
}

export const useScenarioStore = create<ScenarioState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  selectedNodeId: "step-2",

  onNodesChange: (changes) =>
    set({ nodes: applyNodeChanges(changes, get().nodes) }),
  onEdgesChange: (changes) =>
    set({ edges: applyEdgeChanges(changes, get().edges) }),

  onConnect: (connection: Connection) => {
    const edge = {
      ...connection,
      type: "optionEdge",
      style: { stroke: "#3B82F6", strokeWidth: 2 },
    };
    set({ edges: addEdge(edge, get().edges) });
  },

  setSelectedNodeId: (id) => set({ selectedNodeId: id }),

  updateNodeData: (id, newData) => {
    set({
      nodes: get().nodes.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, ...newData } } : node,
      ),
    });
  },

  addVideoStepNode: () => {
    const { selectedNodeId, addOptionToNode } = get();
    if (selectedNodeId) {
      addOptionToNode(selectedNodeId);
    }
  },

  addOptionToNode: (parentId: string) => {
    const { nodes, edges } = get();
    const parentNode = nodes.find((n) => n.id === parentId);
    if (!parentNode) return;

    const videoNodes = nodes.filter((n) => n.type === "videoStep");
    const nextStepNum = videoNodes.length + 1;
    const newChildId = `step-${Date.now()}`;
    const newOptionId = `opt-${Date.now()}`;

    const newChildNode: Node = {
      id: newChildId,
      type: "videoStep",
      position: { x: 0, y: 0 },
      data: {
        stepNumber: nextStepNum,
        title: "新しい動画ステップ",
        length: "2:00",
        branchingTiming: "1:00",
        question: "学習者は何をすべきですか？",
        options: [],
      },
    };

    const parentData = parentNode.data as VideoStepNodeData;
    const currentOptions = parentData.options || [];
    const optionLetter = String.fromCharCode(65 + currentOptions.length);

    const newOption = {
      id: newOptionId,
      answerText: "新しい動画ステップへ進む",
      nextStepId: newChildId,
    };

    const updatedNodes = nodes
      .map((n) =>
        n.id === parentId
          ? {
              ...n,
              data: { ...n.data, options: [...currentOptions, newOption] },
            }
          : n,
      )
      .concat(newChildNode);

    const newEdge: Edge = {
      id: `e-${parentId}-${newChildId}`,
      source: parentId,
      target: newChildId,
      type: "optionEdge",
      label: optionLetter,
    };

    const updatedEdges = [...edges, newEdge];
    const { nodes: layoutedNodes, edges: layoutedEdges } = scenarioAutoLayout(
      updatedNodes,
      updatedEdges,
      "TB",
    );

    set({
      nodes: layoutedNodes,
      edges: layoutedEdges,
      selectedNodeId: newChildId,
    });
  },

  // 🗑️ চাইল্ড ও অপশন রিমুভ করা
  removeOptionFromNode: (parentId: string, optionId: string) => {
    const { nodes, edges } = get();
    const parentNode = nodes.find((n) => n.id === parentId);
    if (!parentNode) return;

    const parentData = parentNode.data as VideoStepNodeData;
    const targetOption = parentData.options?.find((o) => o.id === optionId);
    const filteredOptions =
      parentData.options?.filter((o) => o.id !== optionId) || [];

    let updatedNodes = nodes.map((n) =>
      n.id === parentId
        ? { ...n, data: { ...n.data, options: filteredOptions } }
        : n,
    );

    let updatedEdges = edges;

    if (targetOption?.nextStepId) {
      updatedNodes = updatedNodes.filter(
        (n) => n.id !== targetOption.nextStepId,
      );
      updatedEdges = edges.filter(
        (e) => !(e.source === parentId && e.target === targetOption.nextStepId),
      );
    }

    // অপশন লেবেল (A, B, C...) রিনাম করা
    const parentEdges = updatedEdges.filter((e) => e.source === parentId);
    updatedEdges = updatedEdges.map((e) => {
      if (e.source === parentId) {
        const idx = parentEdges.findIndex((pe) => pe.id === e.id);
        return { ...e, label: String.fromCharCode(65 + idx) };
      }
      return e;
    });

    const { nodes: layoutedNodes, edges: layoutedEdges } = scenarioAutoLayout(
      updatedNodes,
      updatedEdges,
      "TB",
    );

    set({ nodes: layoutedNodes, edges: layoutedEdges });
  },

  // ✏️ অপশন টেক্সট আপডেট
  updateOptionText: (parentId: string, optionId: string, text: string) => {
    const { nodes } = get();
    set({
      nodes: nodes.map((n) => {
        if (n.id === parentId) {
          const data = n.data as VideoStepNodeData;
          const updatedOptions = data.options?.map((o) =>
            o.id === optionId ? { ...o, answerText: text } : o,
          );
          return { ...n, data: { ...n.data, options: updatedOptions } };
        }
        return n;
      }),
    });
  },

  deleteNode: (id) => {
    set({
      nodes: get().nodes.filter((node) => node.id !== id),
      edges: get().edges.filter(
        (edge) => edge.source !== id && edge.target !== id,
      ),
      selectedNodeId: get().selectedNodeId === id ? null : get().selectedNodeId,
    });
  },

  autoLayout: () => {
    const { nodes, edges } = get();
    const { nodes: layoutedNodes, edges: layoutedEdges } = scenarioAutoLayout(
      nodes,
      edges,
      "TB",
    );
    set({ nodes: layoutedNodes, edges: layoutedEdges });
  },
}));
