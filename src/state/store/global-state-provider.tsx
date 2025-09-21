import { createContext, PropsWithChildren, useReducer, useMemo, useContext, useEffect } from "react";
import { GlobalState, NodeType } from "../../models";
import { globalStateReducer } from "./global-state-reducer";
import { ActionType } from "../actions/action-types";
import { persistGlobalState } from "../actions";

const initialState: GlobalState = {
  rowsIds: [],
  rows: {},
  columns: {},
  textColumns: {},
  imageColumns: {},
  selectedNode: {
    selectedNodeType: NodeType.STAGE,
    selectedNodeId: undefined,
  },
};

type Context = { state: GlobalState; dispatch: React.Dispatch<ActionType> };

export const GlobalStateContext = createContext<Context | null>(null);

export const GlobalStateProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState);

  useEffect(() => {
    const persistedStateJson = localStorage.getItem("globalState");
    if (persistedStateJson) {
      try {
        const persistedState = JSON.parse(persistedStateJson) as GlobalState;
        dispatch(persistGlobalState(persistedState));
      } catch (error) {
        console.error("Failed to parse global state from localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("globalState", JSON.stringify(state));
  }, [state]);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <GlobalStateContext.Provider value={contextValue}>{children}</GlobalStateContext.Provider>;
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a <GlobalStateProvider />");
  }
  return context;
};
