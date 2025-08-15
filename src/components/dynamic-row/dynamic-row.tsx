import * as Types from "../../models";
import { selectNode } from "../../state/actions";
import { useDispatch, useRow } from "../../state/selectors";
import DynamicColumn from "../dynamic-column/dynamic-column";
import { Row } from "../row";

type DynamicRowProps = {
  id: Types.Row["id"];
};

function DynamicRow(props: DynamicRowProps) {
  const row = useRow(props.id);
  const dispatch = useDispatch();

  const handleSelect = () => {
    dispatch(selectNode({ selectedNodeId: row.id, selectedNodeType: Types.NodeType.ROW }));
  };
  return (
    <Row onSelect={handleSelect}>
      {row.columnIds.map((columnid) => (
        <DynamicColumn key={columnid} id={columnid} />
      ))}
    </Row>
  );
}

export default DynamicRow;
