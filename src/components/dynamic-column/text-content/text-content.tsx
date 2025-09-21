import { Alignment, ColumnMetada } from "../../../models";
import { useTextColumn } from "../../../state/selectors";
import { Markdown } from "../../markdown";
import classNames from "classnames";

type TextContentProps = { id: ColumnMetada["id"] };

function TextContent(props: Readonly<TextContentProps>) {
  const { alignment, text } = useTextColumn(props.id);

  return (
    <Markdown
      className={classNames({
        "text-align-left": alignment === Alignment.LEFT,
        "text-align-center": alignment === Alignment.CENTER,
        "text-align-right": alignment === Alignment.RIGHT,
      })}
    >
      {text}
    </Markdown>
  );
}

export default TextContent;
