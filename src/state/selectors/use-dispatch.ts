import { useGlobalState } from "../store/global-state-provider";

export const useDispatch = () => {
  const { dispatch } = useGlobalState();

  return dispatch;
};
