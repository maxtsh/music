import { useNProgress } from "@tanem/react-nprogress";
import ContainerComponent from "./Container";
import Bar from "./Bar";
import type { IProps } from "./Progress.types";

const Progress: React.FC<IProps> = ({ isAnimating }) => {
  const { isFinished, animationDuration, progress } = useNProgress({
    isAnimating,
  });

  return (
    <ContainerComponent
      animationDuration={animationDuration}
      isFinished={isFinished}
    >
      <Bar animationDuration={animationDuration} progress={progress} />
    </ContainerComponent>
  );
};

export default Progress;
