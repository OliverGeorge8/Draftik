import { ContentState } from "draft-js";

interface props {
  children?: any;
  entityKey: string;
  contentState: ContentState;
}
const Image: React.FC<props> = ({ contentState, entityKey }) => {
  const { height, src, width } = contentState.getEntity(entityKey).getData();

  return <img src={src} height={height} width={width} />;
};

export default Image;
