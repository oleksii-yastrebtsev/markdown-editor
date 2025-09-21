import { ImageColumn } from "../../../models";
import { useImageColumn } from "../../../state/selectors";
import { ImagePlaceholder } from "../../image-placeholder";

type ImageContentProps = {
  id: ImageColumn["id"];
};

function ImageContent(props: Readonly<ImageContentProps>) {
  const { imageUrl } = useImageColumn(props.id);
  return imageUrl ? <img src={imageUrl} alt="" /> : <ImagePlaceholder />;
}

export default ImageContent;
