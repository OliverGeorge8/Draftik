import { ReactNode } from "react";
import { BLOCK_TYPE, INLINE_STYLE } from "../rich/types";

interface props {
  active: boolean;
  icon: ReactNode;
  style: BLOCK_TYPE | INLINE_STYLE;
  onToggle: ((style: INLINE_STYLE) => void) | ((style: BLOCK_TYPE) => void);
}
const StyleButton: React.FC<props> = ({ icon, active, style, onToggle }) => {
  return (
    <button className="p-2 hover:bg-slate-400" onClick={() => onToggle(style)}>
      {icon}
    </button>
  );
};

export default StyleButton;
