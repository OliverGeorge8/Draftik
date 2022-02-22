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
    setEditorState(RichUtils.toggleBlockType(editorState,blockType));
  };
};
