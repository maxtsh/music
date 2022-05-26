import { useNProgress } from "@tanem/react-nprogress";
import { Container, Bar } from "./Progress.styles";
import type { IProps } from "./Progress.types";

const Progress: React.FC<IProps> = ({ isAnimating }) => {
  const { isFinished, animationDuration, progress } = useNProgress({
    isAnimating,
  });

  return (
    <Container isF={isFinished} tr={`opacity ${animationDuration}ms linear`}>
      <Bar
        ml={`${(-1 + progress) * 100}%`}
        tr={`margin-right ${animationDuration}ms linear`}
      />
    </Container>
  );
};

export default Progress;
