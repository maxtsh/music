import { Container } from "./Container.styles";
import type { IProps } from "./Container.types";

const ContainerComponent: React.FC<IProps> = ({
  animationDuration,
  children,
  isFinished,
}) => {
  return (
    <Container isF={isFinished} tr={`opacity ${animationDuration}ms linear`}>
      {children}
    </Container>
  );
};

export default ContainerComponent;
