import { Container } from "./Switch.styles";
import type { IProps } from "./Switch.types";

const Switch: React.FC<IProps> = ({ ...props }) => {
  return (
    <Container>
      <input type="checkbox" {...props} />
      <label htmlFor={props.id}></label>
    </Container>
  );
};

export default Switch;
