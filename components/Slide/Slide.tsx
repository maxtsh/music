import Image from "next/image";
import { Container } from "./Slide.styles";
import type { IProps } from "./Slide.types";

const Slide: React.FC<IProps> = ({ active, data }) => {
  return (
    <Container active={active} className={active ? "slide active" : "slide"}>
      <Image
        className="image"
        layout="fill"
        src={data?.src || "/no_image.png"}
        alt="slide-1"
      />
      <div className="intro">
        <div className="intro-head">
          <div className="intro-head-dot"></div>
          <h4 className="intro-head-title">EXCLUSIVE</h4>
        </div>
        <div className="intro-body">
          <h3 className="intro-body-title">{data.name}</h3>
        </div>
        <div className="intro-foot">
          <p className="intro-foot-text">Release: {data.desc}</p>
        </div>
      </div>
    </Container>
  );
};

export default Slide;
