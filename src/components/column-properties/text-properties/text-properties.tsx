import { Icons } from "../../icons";
import { Alignment, TextColumn } from "../../../models";
import classNames from "classnames";
import { useDispatch, useTextColumn } from "../../../state/selectors";
import { updateTextColumn } from "../../../state/actions";

type TextPropertiesProps = {
  id: TextColumn["id"];
};

function TextProperties(props: Readonly<TextPropertiesProps>) {
  const dispatch = useDispatch();
  const textColumn = useTextColumn(props.id);

  const handleAlignmentChange = (newAlignment: Alignment) => {
    dispatch(updateTextColumn(props.id, { text: textColumn.text, alignment: newAlignment }));
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateTextColumn(props.id, { text: event.target.value, alignment: textColumn.alignment }));
  };

  return (
    <div className="section">
      <div className="section-header">Text</div>
      <div className="button-group-field">
        <label>Alignment</label>
        <div className="button-group">
          <button
            onClick={() => handleAlignmentChange(Alignment.LEFT)}
            className={classNames({ selected: textColumn.alignment === Alignment.LEFT })}
          >
            <Icons.TextAlignLeft />
          </button>
          <button
            onClick={() => handleAlignmentChange(Alignment.CENTER)}
            className={classNames({ selected: textColumn.alignment === Alignment.CENTER })}
          >
            <Icons.TextAlignCenter />
          </button>
          <button
            onClick={() => handleAlignmentChange(Alignment.RIGHT)}
            className={classNames({ selected: textColumn.alignment === Alignment.RIGHT })}
          >
            <Icons.TextAlignRight />
          </button>
        </div>
      </div>
      <div className="textarea-field">
        <textarea rows={8} placeholder="Enter text" onChange={handleTextChange} value={textColumn.text}></textarea>
      </div>
    </div>
  );
}

export default TextProperties;
