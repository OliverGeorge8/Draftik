import { Editor, EditorCommand, EditorState, RichUtils } from "draft-js";
import { useDraftContext } from "./Context";

const DraftEditor = () => {
  const { editorState, setEditorState } = useDraftContext();
  const handleKeyCommand = (
    command: EditorCommand,
    editorState: EditorState
  ) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  };

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      handleKeyCommand={handleKeyCommand}
    />
  );
};
export default DraftEditor;
