import { createRow } from "../../state/actions";
import { useDispatch } from "../../state/selectors";

function PageProperties() {
  const dispatch = useDispatch();

  const handleAddRow = () => {
    dispatch(createRow());
  };
  return (
    <div className="section">
      <div className="section-header">Page</div>
      <div className="actions">
        <button onClick={handleAddRow} className="action">
          Add row
        </button>
      </div>
    </div>
  );
}

export default PageProperties;
