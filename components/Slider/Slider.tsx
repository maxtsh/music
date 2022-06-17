import { useState } from "react";
import { Container } from "./Slider.styles";
import Slide from "../Slide";

const covers = [
  { id: 1, name: "TEST", src: "/covers/cover-1.jpg", desc: "LOREM LOREM 1" },
  { id: 2, name: "TEST 2", src: "/covers/cover-2.jpg", desc: "LOREM LOREM 2" },
  { id: 3, name: "TEST 3", src: "/covers/cover-3.jpg", desc: "LOREM LOREM 3" },
  { id: 4, name: "TEST 4", src: "/covers/cover-4.jpg", desc: "LOREM LOREM 4" },
  { id: 5, name: "TEST 5", src: "/covers/cover-5.jpg", desc: "LOREM LOREM 5" },
];

const Slider: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const handleSwipeSlide = (index: number) => setActiveIdx(index);

  return (
    <Container>
      {covers.map((item, idx) => (
        <Slide active={activeIdx === idx} key={item.id} data={item} />
      ))}
      <div className="navigation">
        {covers.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => handleSwipeSlide(idx)}
            className={
              idx === activeIdx ? "navigation-btn active" : "navigation-btn"
            }
          ></div>
        ))}
      </div>
    </Container>
  );
};

export default Slider;
