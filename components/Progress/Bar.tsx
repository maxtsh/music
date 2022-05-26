import { Container } from "./Bar.styles";
import type { IProps } from "./Bar.types";

const Bar: React.FC<IProps> = ({ animationDuration, progress }) => {
  return (
    <Container
      ml={`${-1 + progress * 100}%`}
      tr={`margin-right ${animationDuration}ms linear`}
    ></Container>
  );
};

export default Bar;
