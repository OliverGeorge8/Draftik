import { useActiveStyle } from "../../../src/rich/hooks";

interface props {
  children?: any;
  style: string;
  onClick: () => void;
}
const StyleButton: React.FC<props> = ({ children, style, onClick }) => {
  //@ts-ignore
  const bold = useActiveStyle()[style];

  return (
    <button
      style={{ padding: "2px", backgroundColor: "red" }}
      onClick={onClick}
    >
      {style}
    </button>
  );
};

export default StyleButton;
