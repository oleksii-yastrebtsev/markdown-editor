import classNames from "classnames";
import * as Types from "../../../models";
import { Icons } from "../../icons";
import { useDispatch } from "../../../state/selectors";
import { updateImageColumn, updateTextColumn } from "../../../state/actions";

type ContentTypeProps = {
  selectedContentType: Types.ContentType | undefined;
  columnId: Types.Column["id"];
};

function ContentType(props: ContentTypeProps) {
  const dispatch = useDispatch();

  const habdleTextClick = () => {
    const updatedColumn = {
      text: "",
      alignment: Types.Alignment.LEFT,
    };

    dispatch(updateTextColumn(props.columnId, updatedColumn));
  };
  const habddleImageClick = () => {
    const updatedColumn = {
      imageUrl: "",
    };

    dispatch(updateImageColumn(props.columnId, updatedColumn));
  };

  return (
    <div className="button-group-field">
      <label>Contents</label>
      <div className="button-group">
        <button
          onClick={habdleTextClick}
          className={classNames({ selected: props.selectedContentType === Types.ContentType.TEXT })}
        >
          <Icons.Text />
        </button>
        <button
          onClick={habddleImageClick}
          className={classNames({ selected: props.selectedContentType === Types.ContentType.IMAGE })}
        >
          <Icons.Image />
        </button>
      </div>
    </div>
  );
}

export default ContentType;
