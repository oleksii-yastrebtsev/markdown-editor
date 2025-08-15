import * as Types from "../../models";
import { useColumn } from "../../state/selectors";
import ContentType from "./content-type/content-type";
import ImageProperties from "./image-properties/image-properties";
import TextProperties from "./text-properties/text-properties";

type ColumnPropertiesProps = {
  columnId: Types.Column["id"];
};

function ColumnProperties(props: ColumnPropertiesProps) {
  const column = useColumn(props.columnId);
  return (
    <>
      <div className="section">
        <div className="section-header">Column</div>
        <ContentType columnId={column.id} selectedContentType={column.contentType} />
      </div>
      {column.contentType === Types.ContentType.TEXT && (
        <TextProperties
          id={column.id}
          text={(column as Types.TextColumn).text}
          aligmnent={(column as Types.TextColumn).alignment}
        />
      )}
      {column.contentType === Types.ContentType.IMAGE && (
        <ImageProperties id={column.id} imageUrl={(column as Types.ImageColumn).imageUrl} />
      )}
    </>
  );
}

export default ColumnProperties;
