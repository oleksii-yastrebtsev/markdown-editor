import { ColumnMetada, ImageColumn, TextColumn } from "../../models";
import { useGlobalState } from "../store/global-state-provider";

export const useColumnMetadata = (id: ColumnMetada["id"]) => {
  const context = useGlobalState();

  return context.state.columns[id];
};

export const useImageColumn = (id: ImageColumn["id"]) => {
  const context = useGlobalState();

  return context.state.imageColumns[id];
};

export const useTextColumn = (id: TextColumn["id"]) => {
  const context = useGlobalState();

  return context.state.textColumns[id];
};
