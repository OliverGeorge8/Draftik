import { EditorState, Modifier, RichUtils } from "draft-js";
import { useDraftContext } from "../Context";

const useColorStyle = () => {
  const { editorState, setEditorState } = useDraftContext();
  const toggleColorStyle = (color: string) => {
    const selection = editorState.getSelection();

    const nextContentState = Object.keys(colorStyleMap).reduce(
      (contentState, color) => {
        return Modifier.removeInlineStyle(contentState, selection, color);
      },
      editorState.getCurrentContent()
    );

    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      "change-inline-style"
    );

    const currentStyle = editorState.getCurrentInlineStyle();

    // Unset style override for current color.
    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce((state, color) => {
        //@ts-ignore
        return RichUtils.toggleInlineStyle(state, color);
      }, nextEditorState);
    }

    // If the color is being toggled on, apply it.
    if (!currentStyle.has(color)) {
      nextEditorState = RichUtils.toggleInlineStyle(nextEditorState, color);
    }
    setEditorState(nextEditorState);
  };

  return toggleColorStyle;
};

export default useColorStyle;
