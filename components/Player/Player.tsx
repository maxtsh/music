import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import Audio from "../Audio";
import { Container } from "./Player.styles";

const Player: React.FC = () => {
  return (
    <Container>
      <div className="user">
        <div className="user-info">
          <div className="user-info-avatar">
            <Image
              className="user-info-avatar-img"
              src="/avatar.jpg"
              width="50px"
              height="50px"
              alt="avatar"
            />
          </div>
          <div className="user-info-texts">
            <h3 className="user-info-texts-name">Max Tat Shahdoost</h3>
            <p className="user-info-texts-role">Admin</p>
          </div>
        </div>
        <div className="user-menu">
          <FiChevronDown className="user-menu-icon" />
        </div>
      </div>
      <div className="divider"></div>
      <Audio />
    </Container>
  );
};

export default Player;
