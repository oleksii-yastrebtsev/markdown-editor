import { GlobalState } from "../../models";

export const PERSIT_GLOBAL_STATE = "PERSIT_GLOBAL_STATE";

export const persistGlobalState = (globalState: GlobalState) => {
  return {
    type: PERSIT_GLOBAL_STATE,
    payload: globalState,
  } as const;
};

export type PersistActions = ReturnType<typeof persistGlobalState>;
