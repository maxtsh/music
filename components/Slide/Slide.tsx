import Image from "next/image";
import { Container } from "./Slide.styles";

const Slide: React.FC = () => {
  return (
    <Container>
      <Image
        className="image"
        width="600px"
        height="250px"
        src="/slide-1.jpg"
        alt="slide-1"
      />
      <div className="intro">
        <div className="intro-head">
          <div className="intro-head-dot"></div>
          <h4 className="intro-head-title">EXCLUSIVE</h4>
        </div>
        <div className="intro-body">
          <h3 className="intro-body-title">LIVE MUSIC 2022</h3>
        </div>
        <div className="intro-foot">
          <p className="intro-foot-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ea,
            alias delectus, error harum eveniet.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Slide;
