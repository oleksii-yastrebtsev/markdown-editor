import * as Types from "../../models";
import { selectNode } from "../../state/actions";
import { useColumnMetadata, useDispatch, useSelectedNodeId } from "../../state/selectors";
import { Column } from "../column";
import ImageContent from "./image-content/image-content";
import TextContent from "./text-content/text-content";

type DynamicColumnProps = {
  id: Types.ColumnMetada["id"];
};

function DynamicColumn(props: Readonly<DynamicColumnProps>) {
  const columnMetada = useColumnMetadata(props.id);
  const selectedNodeId = useSelectedNodeId();
  const dispatch = useDispatch();

  const handleSelect = () => {
    dispatch(
      selectNode({
        selectedNodeId: columnMetada.id,
        selectedNodeType: Types.NodeType.COLUMN,
        perentRowId: columnMetada.perentRowId,
      })
    );
  };

  return (
    <Column selected={selectedNodeId === columnMetada.id} onSelect={handleSelect}>
      {columnMetada.contentType === Types.ContentType.TEXT && <TextContent id={columnMetada.id} />}
      {columnMetada.contentType === Types.ContentType.IMAGE && <ImageContent id={columnMetada.id} />}
    </Column>
  );
}

export default DynamicColumn;
