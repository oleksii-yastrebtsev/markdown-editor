import React from "react";
import { useGlobalState } from "../store/global-state-provider";

export const useSelectedNode = () => {
  const { state } = useGlobalState();
  const { selectedNode } = state;

  return { ...selectedNode };
};

export const useSelectedNodeId = () => {
  const selectedNode = useSelectedNode();
  return React.useMemo(() => selectedNode.selectedNodeId, [selectedNode.selectedNodeId]);
};
export const useSelectedNodeType = () => {
  const selectedNode = useSelectedNode();
  return React.useMemo(() => selectedNode.selectedNodeType, [selectedNode.selectedNodeType]);
};
