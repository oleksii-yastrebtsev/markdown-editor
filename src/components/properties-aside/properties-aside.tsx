import ColumnProperties from "../column-properties/column-properties";
import RowProperties from "../row-properties/row-properties";
import { useSelectedNode } from "../../state/selectors/selected-node-selectors";
import { NodeType } from "../../models";
import PageProperties from "../page-properties/page-properties";

function PropertiesAside() {
  const selectedNode = useSelectedNode();

  let rowId;

  switch (selectedNode.selectedNodeType) {
    case NodeType.ROW:
      rowId = selectedNode.selectedNodeId;
      break;

    case NodeType.COLUMN:
      rowId = selectedNode.perentRowId;
      break;
    default:
      rowId = undefined;
      break;
  }

  return (
    <aside className="properties">
      <PageProperties />
      {rowId && <RowProperties id={rowId} />}
      {selectedNode.selectedNodeType === NodeType.COLUMN && <ColumnProperties columnId={selectedNode.selectedNodeId} />}
    </aside>
  );
}

export default PropertiesAside;
