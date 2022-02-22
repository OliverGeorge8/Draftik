import { useDraftContext } from "../Context";
import { useInlineStyle } from "../rich/hooks";
import { INLINE_STYLE } from "../rich/types";
import StyleButton from "./StyleButton";

const INLINE_STYLES: { icon: string; style: INLINE_STYLE }[] = [
  { icon: "Bold", style: "BOLD" },
  { icon: "Italic", style: "ITALIC" },
  { icon: "Underline", style: "UNDERLINE" },
  { icon: "Monospace", style: "CODE" },
];
const BLOCK_TYPES = [{}]
const StyleButtons: React.FC = () => {
  const toggle = useInlineStyle();
  const { editorState } = useDraftContext();
  return (
    <div className="flex space-x-1">
      {INLINE_STYLES.map((style) => (
        <StyleButton
          active={editorState.getCurrentInlineStyle().has(style.style)}
          style={style.style}
          icon={style.icon}
          onToggle={toggle}
        />
      ))}
    </div>
  );
};

export default StyleButtons;
