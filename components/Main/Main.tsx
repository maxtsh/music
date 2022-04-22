import { AiOutlineSearch } from "react-icons/ai";
import { Container } from "./Main.styles";
import Switch from "../Switch";
import Slider from "../Slider";
import { BsStars, BsArrowRight } from "react-icons/bs";

const Main: React.FC = () => {
  return (
    <Container>
      <div className="topbar">
        <div className="topbar-searchbar">
          <AiOutlineSearch className="topbar-searchbar-icon" />
          <input className="topbar-searchbar-input" name="search" type="text" />
        </div>
        <div className="topbar-theme">
          <h5 className="topbar-theme-title">Dark Theme</h5>
          <Switch />
        </div>
      </div>
      <Slider />
      <div className="collections">
        <div className="collections-heading">
          <BsStars className="collections-heading-icon" />
          <h2 className="collections-heading-title">Top Collections</h2>
        </div>
        <div className="collection-more">
          <p className="collection-more-title">Show more</p>
          <BsArrowRight className="collection-more-icon" />
        </div>
      </div>
    </Container>
  );
};

export default Main;
