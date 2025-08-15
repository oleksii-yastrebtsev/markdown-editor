import { ImageColumn } from "../../../models";
import { ImagePlaceholder } from "../../image-placeholder";

type ImageContentProps = {
  imgUrl: ImageColumn["imageUrl"];
};

function ImageContent(props: ImageContentProps) {
  return props.imgUrl ? <img src={props.imgUrl} alt="" /> : <ImagePlaceholder />;
}

export default ImageContent;
