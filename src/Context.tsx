import { EditorState } from "draft-js";
import React, { useState } from "react";


interface DraftContextProps {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}
const DraftContext = React.createContext<DraftContextProps>(undefined as any);

interface props {
  children?: any;
}
const Draft: React.FC<props> = ({ children }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  return (
    <DraftContext.Provider value={{ editorState, setEditorState }}>
      {children}
    </DraftContext.Provider>
  );
};

export const useDraftContext = () => {
  return React.useContext(DraftContext);
};

export default Draft;
