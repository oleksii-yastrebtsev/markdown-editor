import { SelectedNode } from "../../models";

export const SELECT_NODE = "SELECT_NODE";

export const selectNode = (node: SelectedNode) =>
  ({
    type: SELECT_NODE,
    payload: node,
  } as const);

export type SelectActions = ReturnType<typeof selectNode>;
