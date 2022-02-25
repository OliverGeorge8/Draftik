import { ContentState, convertFromHTML, EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import { useDraftContext } from "../Context";

const useHtml = () => {
  const { editorState } = useDraftContext();

  return stateToHTML(editorState.getCurrentContent());
};

export const fromHtml = (html: string) => {
  const blocksFromHTML = convertFromHTML(html);
  const state = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );
  return state;
};
