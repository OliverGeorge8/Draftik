import {
  CompositeDecorator,
  DraftDecorator,
  Editor,
  EditorCommand,
  EditorState,
  getDefaultKeyBinding,
  RichUtils,
} from "draft-js";
import { useEffect } from "react";
import { useDraftContext } from "./Context";
import { fromHtml } from "./html/hooks";
interface props {
  children?: any;
  html?: string;
  decorators?: DraftDecorator[];
}
const DraftEditor: React.FC<props> = ({ html, decorators = [] }) => {
  const { editorState, setEditorState } = useDraftContext();

  useEffect(() => {
    if (html) {
      setEditorState(
        EditorState.createWithContent(
          fromHtml(html),
          new CompositeDecorator(decorators)
        )
      );
    } else {
      setEditorState(
        EditorState.createEmpty(new CompositeDecorator(decorators))
      );
    }
  }, []);
  const mapKeyToEditorCommand = (e: any) => {
    if (e.keyCode === 9) {
      const newEditorState = RichUtils.onTab(e, editorState, 4);
      if (newEditorState !== editorState) {
        setEditorState(newEditorState);
      }
      return null;
    }
    return getDefaultKeyBinding(e);
  };
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
      keyBindingFn={mapKeyToEditorCommand}
    />
  );
};
export default DraftEditor;
