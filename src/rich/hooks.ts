import { RichUtils } from "draft-js";
import { useDraftContext } from "../Context";
import { BLOCK_TYPE, INLINE_STYLE } from "./types";

export const useInlineStyle = () => {
  const { editorState, setEditorState } = useDraftContext();
  const toggleInlineStyle = (style: INLINE_STYLE) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  return toggleInlineStyle;
};

export const useBlockType = () => {
  const { editorState, setEditorState } = useDraftContext();
  const toggleBlockType = (blockType: BLOCK_TYPE) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };
  return toggleBlockType;
};

const headers = [
  "header-one",
  "header-two",
  "header-three",
  "header-four",
  "header-five",
  "header-six",
];
const toggleHeader = (
  level: number,
  toggleBlockType: (blockType: BLOCK_TYPE) => void
) => {
  if (level > 0 && level < 7) {
    //@ts-ignore
    toggleBlockType(headers[level - 1]);
  }
};

export const useBlockCommands = () => {
  const toggleBlockType = useBlockType();

  return {
    toggleCode: () => toggleBlockType("code-block"),
    toggleBlockQuote: () => toggleBlockType("blockquote"),
    toggleOrderedList: () => toggleBlockType("ordered-list-item"),
    toggleUnorderedList: () => toggleBlockType("unordered-list-item"),
    toggleHeader: (level: number) => toggleHeader(level, toggleBlockType),
  };
};

export const useStyleCommands = () => {
  const toggleInlineStyle = useInlineStyle();

  return {
    toggleBold: () => toggleInlineStyle("BOLD"),
    toggleUnderline: () => toggleInlineStyle("UNDERLINE"),
    toggleItalic: () => toggleInlineStyle("ITALIC"),
    toggleCode: () => toggleInlineStyle("CODE"),
  };
};

export const useActiveStyle = () => {
  const { editorState, setEditorState } = useDraftContext();
  const selection = editorState.getSelection();

  return {
    bold: selection.has("BOLD"),
    underline: selection.has("UNDERLINE"),
    italic: selection.has("ITALIC"),
    code: selection.has("CODE"),
  };
};
