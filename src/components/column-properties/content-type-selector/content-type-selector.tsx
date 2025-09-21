import classNames from "classnames";
import { ContentType, ColumnMetada } from "../../../models";
import { Icons } from "../../icons";
import { useDispatch } from "../../../state/selectors";
import {
  changeContentType,
  createImageColumn,
  createTextColumn,
  removeImageColumn,
  removeTextColumn,
} from "../../../state/actions";

type ContentTypeSelectorProps = {
  selectedContentType: ContentType | undefined;
  columnId: ColumnMetada["id"];
};

function ContentTypeSelector(props: Readonly<ContentTypeSelectorProps>) {
  const dispatch = useDispatch();

  const habdleTextClick = () => {
    dispatch(createTextColumn(props.columnId));
    dispatch(changeContentType(props.columnId, ContentType.TEXT));
    dispatch(removeImageColumn(props.columnId));
  };

  const habddleImageClick = () => {
    dispatch(createImageColumn(props.columnId));
    dispatch(changeContentType(props.columnId, ContentType.IMAGE));
    dispatch(removeTextColumn(props.columnId));
  };

  return (
    <div className="button-group-field">
      <label>Contents</label>
      <div className="button-group">
        <button
          onClick={habdleTextClick}
          className={classNames({ selected: props.selectedContentType === ContentType.TEXT })}
        >
          <Icons.Text />
        </button>
        <button
          onClick={habddleImageClick}
          className={classNames({ selected: props.selectedContentType === ContentType.IMAGE })}
        >
          <Icons.Image />
        </button>
      </div>
    </div>
  );
}

export default ContentTypeSelector;
