import { EditorState, RichUtils } from "draft-js";
import { useDraftContext } from "../Context";

const useLink = () => {
  const { editorState } = useDraftContext();
  const getLink = () => {
    const selection = editorState.getSelection();
    let url = "";
    if (!selection.isCollapsed()) {
      const contentState = editorState.getCurrentContent();
      const startKey = editorState.getSelection().getStartKey();
      const startOffset = editorState.getSelection().getStartOffset();
      const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
      const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);

      if (linkKey) {
        const linkInstance = contentState.getEntity(linkKey);
        url = linkInstance.getData().url;
      }
    }
    return url;
  };

  const confirmLink = (url: string) => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "LINK",
      "MUTABLE",
      { url }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });
    RichUtils.toggleLink(
      newEditorState,
      newEditorState.getSelection(),
      entityKey
    );
  };

  const removeLink = () => {
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      RichUtils.toggleLink(editorState, selection, null);
    }
  };

  return { getLink, confirmLink, removeLink };
};

export default useLink;
