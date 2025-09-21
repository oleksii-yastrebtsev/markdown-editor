import { ImageColumn } from "../../../models";
import { updateImageColumn } from "../../../state/actions";
import { useDispatch } from "../../../state/selectors";

type ImagePropertiesProps = { id: ImageColumn["id"] };

function ImageProperties(props: Readonly<ImagePropertiesProps>) {
  const dispatch = useDispatch();

  const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateImageColumn(props.id, { imageUrl: event.target.value }));
  };

  return (
    <div className="section">
      <div className="section-header">Image</div>
      <div className="text-field">
        <label htmlFor="image-url">URL</label>
        <input onChange={handleImageUrlChange} id="image-url" type="text" value={""} />
      </div>
    </div>
  );
}

export default ImageProperties;
