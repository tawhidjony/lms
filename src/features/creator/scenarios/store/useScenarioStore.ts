import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Edge,
  getOutgoers,
  IsValidConnection,
  Node,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
} from "@xyflow/react";
import { create } from "zustand";
import {
  getNewChildPosition,
  scenarioAutoLayout,
} from "../scenario/scenario.auto-layout";
import {
  defaultEdgeOptions,
  edgeMarker,
  START_EDGE_COLOR,
  startEdgeMarker,
} from "../scenario/scenario.edge";
import { VideoStepNodeData } from "../scenario/scenario.type";

export type ScenarioStepDefaults = {
  title: string;
  question: string;
  answerText: string;
};

export function createInitialNodes(defaults: ScenarioStepDefaults): Node[] {
  return [
    /*     {
      id: "start-node",
      type: "start",
      position: { x: 360, y: 30 },
      data: {},
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    }, */
    {
      id: "step-2",
      type: "videoStep",
      position: { x: 250, y: 120 },
      data: {
        stepNumber: 2,
        title: defaults.title,
        length: "2:00",
        branchingTiming: "1:00",
        question: defaults.question,
        options: [],
      },
    },
  ];
}

const initialEdges: Edge[] = [
  {
    id: "e-start-2",
    source: "start-node",
    target: "step-2",
    sourceHandle: "bottom",
    targetHandle: "top",
    type: "optionEdge",
    animated: true,
    markerEnd: startEdgeMarker,
    style: { stroke: START_EDGE_COLOR, strokeWidth: 2 },
  },
];

function wouldCreateCycle(
  connection: Pick<Connection, "source" | "target">,
  nodes: Node[],
  edges: Edge[],
): boolean {
  const target = nodes.find((node) => node.id === connection.target);
  if (!target) return true;
  if (target.id === connection.source) return true;

  const hasCycle = (node: Node, visited = new Set<string>()): boolean => {
    if (visited.has(node.id)) return false;
    visited.add(node.id);

    for (const outgoer of getOutgoers(node, nodes, edges)) {
      if (outgoer.id === connection.source) return true;
      if (hasCycle(outgoer, visited)) return true;
    }

    return false;
  };

  return hasCycle(target);
}

function removeOptionsForRemovedEdges(
  nodes: Node[],
  removedEdges: Edge[],
): Node[] {
  if (removedEdges.length === 0) return nodes;

  return nodes.map((node) => {
    const removedFromNode = removedEdges.filter(
      (edge) => edge.source === node.id,
    );
    if (removedFromNode.length === 0 || node.type !== "videoStep") {
      return node;
    }

    const data = node.data as VideoStepNodeData;
    const removedTargets = new Set(removedFromNode.map((edge) => edge.target));
    const options = (data.options || []).filter(
      (option) =>
        !option.nextStepId || !removedTargets.has(option.nextStepId),
    );

    return { ...node, data: { ...node.data, options } };
  });
}

function addOptionForConnectedEdge(
  nodes: Node[],
  connection: Pick<Connection, "source" | "target">,
  answerText: string,
): Node[] {
  if (!connection.source || !connection.target) return nodes;

  return nodes.map((node) => {
    if (node.id !== connection.source || node.type !== "videoStep") {
      return node;
    }

    const data = node.data as VideoStepNodeData;
    const options = data.options || [];
    if (options.some((option) => option.nextStepId === connection.target)) {
      return node;
    }

    return {
      ...node,
      data: {
        ...node.data,
        options: [
          ...options,
          {
            id: `opt-${Date.now()}`,
            answerText,
            nextStepId: connection.target,
          },
        ],
      },
    };
  });
}

function relabelSourceEdges(edges: Edge[], sourceId: string): Edge[] {
  const sourceEdges = edges.filter((edge) => edge.source === sourceId);
  return edges.map((edge) => {
    if (edge.source !== sourceId) return edge;
    const idx = sourceEdges.findIndex((item) => item.id === edge.id);
    return { ...edge, label: String.fromCharCode(65 + idx) };
  });
}

interface ScenarioState {
  nodes: Node[];
  edges: Edge[];
  selectedNodeId: string | null;
  selectedEdgeId: string | null;
  seeded: boolean;
  stepDefaults: ScenarioStepDefaults | null;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;

  onConnect: OnConnect;
  isValidConnection: IsValidConnection;
  setSelectedNodeId: (id: string | null) => void;
  setSelectedEdgeId: (id: string | null) => void;
  deleteEdge: (id: string) => void;
  updateNodeData: (id: string, newData: Partial<VideoStepNodeData>) => void;
  initializeSeed: (defaults: ScenarioStepDefaults) => void;
  addVideoStepNode: (defaults: ScenarioStepDefaults) => void;
  deleteNode: (id: string) => void;
  autoLayout: () => void;
  addOptionToNode: (parentId: string, defaults: ScenarioStepDefaults) => void;
  removeOptionFromNode: (parentId: string, optionId: string) => void;
  updateOptionText: (parentId: string, optionId: string, text: string) => void;
}

export const useScenarioStore = create<ScenarioState>((set, get) => ({
  nodes: [],
  edges: initialEdges,
  selectedNodeId: "step-2",
  selectedEdgeId: null,
  seeded: false,
  stepDefaults: null,

  onNodesChange: (changes) => {
    const { nodes, edges, selectedNodeId, selectedEdgeId } = get();
    const removedIds = new Set(
      changes
        .filter((change) => change.type === "remove")
        .map((change) => change.id),
    );

    if (removedIds.size === 0) {
      set({ nodes: applyNodeChanges(changes, nodes) });
      return;
    }

    const removedEdges = edges.filter(
      (edge) => removedIds.has(edge.source) || removedIds.has(edge.target),
    );
    const nextNodes = applyNodeChanges(changes, nodes);
    const nextEdges = edges.filter(
      (edge) => !removedIds.has(edge.source) && !removedIds.has(edge.target),
    );

    let labeledEdges = nextEdges;
    for (const sourceId of new Set(
      removedEdges
        .map((edge) => edge.source)
        .filter((sourceId) => !removedIds.has(sourceId)),
    )) {
      labeledEdges = relabelSourceEdges(labeledEdges, sourceId);
    }

    set({
      nodes: removeOptionsForRemovedEdges(nextNodes, removedEdges),
      edges: labeledEdges,
      selectedNodeId:
        selectedNodeId && removedIds.has(selectedNodeId)
          ? null
          : selectedNodeId,
      selectedEdgeId:
        selectedEdgeId && removedEdges.some((edge) => edge.id === selectedEdgeId)
          ? null
          : selectedEdgeId,
    });
  },
  onEdgesChange: (changes) => {
    const { edges, nodes, selectedEdgeId } = get();
    const removedIds = new Set(
      changes
        .filter((change) => change.type === "remove")
        .map((change) => change.id),
    );
    const removedEdges = edges.filter((edge) => removedIds.has(edge.id));
    const nextEdges = applyEdgeChanges(changes, edges);
    const sourcesToRelabel = [
      ...new Set(removedEdges.map((edge) => edge.source)),
    ];
    let labeledEdges = nextEdges;
    for (const sourceId of sourcesToRelabel) {
      labeledEdges = relabelSourceEdges(labeledEdges, sourceId);
    }

    set({
      nodes: removeOptionsForRemovedEdges(nodes, removedEdges),
      edges: labeledEdges,
      selectedEdgeId:
        selectedEdgeId && removedIds.has(selectedEdgeId)
          ? null
          : selectedEdgeId,
    });
  },

  isValidConnection: (connection) => {
    const { nodes, edges } = get();
    if (!connection.source || !connection.target) return false;
    if (
      edges.some(
        (edge) =>
          edge.source === connection.source &&
          edge.target === connection.target,
      )
    ) {
      return false;
    }
    return !wouldCreateCycle(connection, nodes, edges);
  },

  onConnect: (connection: Connection) => {
    const { nodes, edges, stepDefaults } = get();
    if (!connection.source || !connection.target) return;
    if (
      edges.some(
        (edge) =>
          edge.source === connection.source &&
          edge.target === connection.target,
      )
    ) {
      return;
    }
    if (wouldCreateCycle(connection, nodes, edges)) return;

    const sourceEdgeCount = edges.filter(
      (edge) => edge.source === connection.source,
    ).length;
    const edge = {
      ...connection,
      type: "optionEdge",
      markerEnd: edgeMarker,
      style: defaultEdgeOptions.style,
      label: String.fromCharCode(65 + sourceEdgeCount),
    };

    set({
      nodes: addOptionForConnectedEdge(
        nodes,
        connection,
        stepDefaults?.answerText ?? "",
      ),
      edges: addEdge(edge, edges),
    });
  },

  setSelectedNodeId: (id) =>
    set({
      selectedNodeId: id,
      selectedEdgeId: null,
      edges: get().edges.map((edge) => ({ ...edge, selected: false })),
    }),

  setSelectedEdgeId: (id) =>
    set({
      selectedEdgeId: id,
      selectedNodeId: id ? null : get().selectedNodeId,
      edges: get().edges.map((edge) => ({
        ...edge,
        selected: id !== null && edge.id === id,
      })),
    }),

  deleteEdge: (id) => {
    const { edges, nodes, selectedEdgeId } = get();
    const edge = edges.find((item) => item.id === id);
    if (!edge) return;

    const nextEdges = relabelSourceEdges(
      edges.filter((item) => item.id !== id),
      edge.source,
    );

    set({
      nodes: removeOptionsForRemovedEdges(nodes, [edge]),
      edges: nextEdges,
      selectedEdgeId: selectedEdgeId === id ? null : selectedEdgeId,
    });
  },

  updateNodeData: (id, newData) => {
    set({
      nodes: get().nodes.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, ...newData } } : node,
      ),
    });
  },

  initializeSeed: (defaults) => {
    if (get().seeded) return;
    set({
      nodes: createInitialNodes(defaults),
      edges: initialEdges,
      selectedNodeId: "step-2",
      seeded: true,
      stepDefaults: defaults,
    });
  },

  addVideoStepNode: (defaults) => {
    const { selectedNodeId, addOptionToNode } = get();
    if (selectedNodeId) {
      addOptionToNode(selectedNodeId, defaults);
    }
  },

  addOptionToNode: (parentId, defaults) => {
    const { nodes, edges } = get();
    const parentNode = nodes.find((n) => n.id === parentId);
    if (!parentNode) return;

    const videoNodes = nodes.filter((n) => n.type === "videoStep");
    const nextStepNum = videoNodes.length + 1;
    const newChildId = `step-${Date.now()}`;
    const newOptionId = `opt-${Date.now()}`;

    const parentData = parentNode.data as VideoStepNodeData;
    const currentOptions = parentData.options || [];
    const siblingNodes = edges
      .filter((edge) => edge.source === parentId)
      .map((edge) => nodes.find((node) => node.id === edge.target))
      .filter((node): node is Node => Boolean(node));

    const newChildNode: Node = {
      id: newChildId,
      type: "videoStep",
      position: getNewChildPosition(parentNode, siblingNodes),
      data: {
        stepNumber: nextStepNum,
        title: defaults.title,
        length: "2:00",
        branchingTiming: "1:00",
        question: defaults.question,
        options: [],
      },
    };

    const optionLetter = String.fromCharCode(65 + currentOptions.length);

    const newOption = {
      id: newOptionId,
      answerText: defaults.answerText,
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
      sourceHandle: "bottom",
      targetHandle: "top",
      type: "optionEdge",
      markerEnd: edgeMarker,
      style: defaultEdgeOptions.style,
      label: optionLetter,
    };

    set({
      nodes: updatedNodes,
      edges: [...edges, newEdge],
      selectedNodeId: newChildId,
    });
  },

  removeOptionFromNode: (parentId: string, optionId: string) => {
    const { nodes, edges, selectedEdgeId } = get();
    const parentNode = nodes.find((n) => n.id === parentId);
    if (!parentNode) return;

    const parentData = parentNode.data as VideoStepNodeData;
    const targetOption = parentData.options?.find((o) => o.id === optionId);
    const filteredOptions =
      parentData.options?.filter((o) => o.id !== optionId) || [];

    const updatedNodes = nodes.map((n) =>
      n.id === parentId
        ? { ...n, data: { ...n.data, options: filteredOptions } }
        : n,
    );

    // Remove only the option edge — never delete the target node.
    // Nodes are deleted via deleteNode (node Delete button).
    let updatedEdges = edges;
    let removedEdgeId: string | null = null;

    if (targetOption?.nextStepId) {
      const removedEdge = edges.find(
        (e) =>
          e.source === parentId && e.target === targetOption.nextStepId,
      );
      removedEdgeId = removedEdge?.id ?? null;
      updatedEdges = edges.filter(
        (e) => !(e.source === parentId && e.target === targetOption.nextStepId),
      );
      updatedEdges = relabelSourceEdges(updatedEdges, parentId);
    }

    set({
      nodes: updatedNodes,
      edges: updatedEdges,
      selectedEdgeId:
        removedEdgeId && selectedEdgeId === removedEdgeId
          ? null
          : selectedEdgeId,
    });
  },

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
    const { nodes, edges, selectedNodeId, selectedEdgeId } = get();
    const removedEdges = edges.filter(
      (edge) => edge.source === id || edge.target === id,
    );
    const remainingNodes = nodes.filter((node) => node.id !== id);
    let nextEdges = edges.filter(
      (edge) => edge.source !== id && edge.target !== id,
    );

    for (const sourceId of new Set(
      removedEdges
        .map((edge) => edge.source)
        .filter((sourceId) => sourceId !== id),
    )) {
      nextEdges = relabelSourceEdges(nextEdges, sourceId);
    }

    set({
      nodes: removeOptionsForRemovedEdges(remainingNodes, removedEdges),
      edges: nextEdges,
      selectedNodeId: selectedNodeId === id ? null : selectedNodeId,
      selectedEdgeId:
        selectedEdgeId && removedEdges.some((edge) => edge.id === selectedEdgeId)
          ? null
          : selectedEdgeId,
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
