import { EditorState, Modifier, RichUtils } from "draft-js";
import { useDraftContext } from "../Context";

const alignStyles = {
  "align-right": {
    cls: "right",
  },
  "align-left": {
    cls: "",
  },
  "align-center": {
    cls: "",
  },
};
const useAlignement = () => {
  const { editorState, setEditorState } = useDraftContext();
  const toggleColorStyle = (color: string) => {
    editorState.getSelection().getStartKey();
    const selection = editorState.getCurrentContent().getBlockForKey();
    Modifier.mergeBlockData(editorState.getCurrentContent(),editorState.getSelection(),Immutable.Map({}))
    EditorState.push(
      editorState,
      editorStat,
      "change-block-data"
    );
    const nextContentState = Object.keys(alignStyles).reduce(
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

export default useAlignement;
