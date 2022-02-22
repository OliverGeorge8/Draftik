import useLink from "../links/LinkHooks";
import { LinkIcon } from "@heroicons/react/solid";

const LinkButton = () => {
  const { getLink, removeLink, confirmLink } = useLink();

  return (
    <button
      className={"p-2 " + getLink() !== "" ? "bg-gray-400" : "bg-gray-200"}
    >
      <LinkIcon className="w-4 h-4 text-black" />
    </button>
  );
};

export default LinkButton;
