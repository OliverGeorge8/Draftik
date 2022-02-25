
import { ContentState } from "draft-js";

interface props {
  children?: any;
  contentState: ContentState;
  entityKey: string;
}
const Link: React.FC<props> = ({ contentState, entityKey, children }) => {
  const { url } = contentState.getEntity(entityKey).getData();
  return <a href={url}>{children}</a>;
};

export default Link;
