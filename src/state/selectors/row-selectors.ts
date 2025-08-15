import { Row } from "../../models";
import { useGlobalState } from "../store/global-state-provider";

export const useRowsIds = () => {
  const context = useGlobalState();
  return context.state.rowsIds;
};

export const useRow = (id: Row["id"]) => {
  const context = useGlobalState();

  return context.state.rows[id];
};
