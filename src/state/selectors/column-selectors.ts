import { Column } from "../../models";
import { useGlobalState } from "../store/global-state-provider";

export const useColumn = (id: Column["id"]) => {
  const context = useGlobalState();

  return context.state.columns[id];
};
