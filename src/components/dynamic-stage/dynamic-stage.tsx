import { NodeType } from "../../models";
import { selectNode } from "../../state/actions";
import { useDispatch, useRowsIds, useSelectedNodeType } from "../../state/selectors";
import DynamicRow from "../dynamic-row/dynamic-row";
import { Stage } from "../stage";

function DynamicStage() {
  const rowIds = useRowsIds();
  const dispatch = useDispatch();
  const selectedNodeType = useSelectedNodeType();

  const handleSelect = () => {
    dispatch(selectNode({ selectedNodeId: undefined, selectedNodeType: NodeType.STAGE }));
  };

  return (
    <Stage selected={selectedNodeType === NodeType.STAGE} onSelect={handleSelect}>
      {rowIds.map((rowId) => (
        <DynamicRow key={rowId} id={rowId} />
      ))}
    </Stage>
  );
}

export default DynamicStage;
