import { Icons } from "../../icons";
import { Alignment, TextColumn } from "../../../models";
import classNames from "classnames";
import { useDispatch } from "../../../state/selectors";
import { updateTextColumn } from "../../../state/actions";

type TextPropertiesProps = {
  id: TextColumn["id"];
  text: TextColumn["text"];
  aligmnent: TextColumn["alignment"];
};

function TextProperties(props: TextPropertiesProps) {
  const dispatch = useDispatch();

  const handleAlignmentChange = (newAlignment: Alignment) => {
    dispatch(updateTextColumn(props.id, { text: props.text, alignment: newAlignment }));
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateTextColumn(props.id, { text: event.target.value, alignment: props.aligmnent }));
  };

  return (
    <div className="section">
      <div className="section-header">Text</div>
      <div className="button-group-field">
        <label>Alignment</label>
        <div className="button-group">
          <button
            onClick={() => handleAlignmentChange(Alignment.LEFT)}
            className={classNames({ selected: props.aligmnent === Alignment.LEFT })}
          >
            <Icons.TextAlignLeft />
          </button>
          <button
            onClick={() => handleAlignmentChange(Alignment.CENTER)}
            className={classNames({ selected: props.aligmnent === Alignment.CENTER })}
          >
            <Icons.TextAlignCenter />
          </button>
          <button
            onClick={() => handleAlignmentChange(Alignment.RIGHT)}
            className={classNames({ selected: props.aligmnent === Alignment.RIGHT })}
          >
            <Icons.TextAlignRight />
          </button>
        </div>
      </div>
      <div className="textarea-field">
        <textarea rows={8} placeholder="Enter text" onChange={handleTextChange} value={props.text}></textarea>
      </div>
    </div>
  );
}

export default TextProperties;
