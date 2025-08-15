import { Row } from "../../models";
import { createColumn } from "../../state/actions";
import { useDispatch } from "../../state/selectors";

type RowPropertiesProps = {
  id: Row["id"];
};

function RowProperties(props: RowPropertiesProps) {
  const dispatch = useDispatch();

  const hadleClick = () => {
    dispatch(createColumn(props.id));
  };

  return (
    <div className="section">
      <div className="section-header">Row</div>
      <div className="actions">
        <button onClick={hadleClick} className="action">
          Add column
        </button>
      </div>
    </div>
  );
}

export default RowProperties;
