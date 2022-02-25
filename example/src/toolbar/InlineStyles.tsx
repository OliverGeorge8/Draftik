import { useStyleCommands } from "../../../src/rich/hooks";
import StyleButton from "./StyleButton";
const InlineStylesBar: React.FC = () => {
  const { toggleCode, toggleBold, toggleItalic, toggleUnderline } =
    useStyleCommands();

  return (
    <>
      <StyleButton style="bold" onClick={toggleBold}></StyleButton>
      <StyleButton style="underline" onClick={toggleUnderline}></StyleButton>
      <StyleButton style="italic" onClick={toggleItalic}></StyleButton>
      <StyleButton style="code" onClick={toggleCode}></StyleButton>
    </>
  );
};

export default InlineStylesBar;
