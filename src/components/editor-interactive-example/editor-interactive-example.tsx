import { FC } from "react";
import { GlobalStateProvider } from "../../state/store/global-state-provider";
import DynamicStage from "../dynamic-stage/dynamic-stage";
import PropertiesAside from "../properties-aside/properties-aside";

export const EditorIteractiveExample: FC = () => (
  <GlobalStateProvider>
    <div className="editor">
      <DynamicStage />
      <PropertiesAside />
    </div>
  </GlobalStateProvider>
);
