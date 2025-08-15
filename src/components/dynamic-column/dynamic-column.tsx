import * as Types from "../../models";
import { selectNode } from "../../state/actions";
import { useColumn, useDispatch, useSelectedNodeId } from "../../state/selectors";
import { Column } from "../column";
import ImageContent from "./image-content/image-content";
import TextContent from "./text-content/text-content";

type DynamicColumnProps = {
  id: Types.Column["id"];
};

function DynamicColumn(props: DynamicColumnProps) {
  const column = useColumn(props.id);
  const selectedNodeId = useSelectedNodeId();
  const dispatch = useDispatch();

  const handleSelect = () => {
    dispatch(
      selectNode({
        selectedNodeId: column.id,
        selectedNodeType: Types.NodeType.COLUMN,
        perentRowId: column.perentRowId,
      })
    );
  };

  return (
    <Column selected={selectedNodeId === column.id} onSelect={handleSelect}>
      {column.contentType === Types.ContentType.TEXT && (
        <TextContent text={(column as Types.TextColumn).text} aliignment={(column as Types.TextColumn).alignment} />
      )}
      {column.contentType === Types.ContentType.IMAGE && (
        <ImageContent imgUrl={(column as Types.ImageColumn).imageUrl} />
      )}
    </Column>
  );
}

export default DynamicColumn;
