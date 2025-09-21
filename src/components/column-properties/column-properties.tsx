import { ColumnMetada, ContentType } from "../../models";
import { useColumnMetadata } from "../../state/selectors";
import ContentTypeSelector from "./content-type-selector/content-type-selector";
import ImageProperties from "./image-properties/image-properties";
import TextProperties from "./text-properties/text-properties";

type ColumnPropertiesProps = {
  columnId: ColumnMetada["id"];
};

function ColumnProperties(props: Readonly<ColumnPropertiesProps>) {
  const columnMetaData = useColumnMetadata(props.columnId);
  return (
    <>
      <div className="section">
        <div className="section-header">Column</div>
        <ContentTypeSelector columnId={columnMetaData.id} selectedContentType={columnMetaData.contentType} />
      </div>
      {columnMetaData.contentType === ContentType.TEXT && <TextProperties id={columnMetaData.id} />}
      {columnMetaData.contentType === ContentType.IMAGE && <ImageProperties id={columnMetaData.id} />}
    </>
  );
}

export default ColumnProperties;
