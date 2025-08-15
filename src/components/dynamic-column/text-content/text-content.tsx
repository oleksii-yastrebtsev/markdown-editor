import { Alignment } from "../../../models";
import { Markdown } from "../../markdown";
import classNames from "classnames";

type TextContentProps = { text: string; aliignment: Alignment };

function TextContent(props: TextContentProps) {
  return (
    <Markdown
      className={classNames({
        "text-align-left": props.aliignment === Alignment.LEFT,
        "text-align-center": props.aliignment === Alignment.CENTER,
        "text-align-right": props.aliignment === Alignment.RIGHT,
      })}
    >
      {props.text}
    </Markdown>
  );
}

export default TextContent;
