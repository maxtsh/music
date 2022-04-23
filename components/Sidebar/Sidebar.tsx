import { Container } from "./Sidebar.styles";
import { HiHome } from "react-icons/hi";
import { IoMdAlbums } from "react-icons/io";
import { FaUserAlt, FaCompass, FaHeart, FaMusic } from "react-icons/fa";
import { MdWatchLater, MdHeadphones } from "react-icons/md";
import { GiCrownedSkull } from "react-icons/gi";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <div className="logo">
        <GiCrownedSkull className="logo-icon" />
        <h2 className="logo-title">MaxTsh Music</h2>
      </div>
      <div className="menu">
        <p className="menu-title">Menu</p>
        <ul className="menu-list">
          <li className="menu-list-item active">
            <HiHome className="menu-list-item-icon" />
            <span className="menu-list-item-text">Home</span>
            <div className="menu-list-item-line"></div>
          </li>
          <li className="menu-list-item">
            <IoMdAlbums className="menu-list-item-icon" />
            <span className="menu-list-item-text">Albums</span>
            <div className="menu-list-item-line"></div>
          </li>
          <li className="menu-list-item">
            <FaUserAlt className="menu-list-item-icon" />
            <span className="menu-list-item-text">Artist</span>
            <div className="menu-list-item-line"></div>
          </li>
          <li className="menu-list-item">
            <FaCompass className="menu-list-item-icon" />
            <span className="menu-list-item-text">Discover</span>
            <div className="menu-list-item-line"></div>
          </li>
        </ul>
      </div>
      <div className="playlist">
        <p className="playlist-title">Playlist</p>
        <ul className="playlist-list">
          <li className="playlist-list-item">
            <MdWatchLater className="playlist-list-item-icon" />
            <span className="playlist-list-item-text">Recent</span>
            <div className="playlist-list-item-line"></div>
          </li>
          <li className="playlist-list-item">
            <FaHeart className="playlist-list-item-icon" />
            <span className="playlist-list-item-text">Favorite</span>
            <div className="playlist-list-item-line"></div>
          </li>
          <li className="playlist-list-item">
            <MdHeadphones className="playlist-list-item-icon" />
            <span className="playlist-list-item-text">My Pop</span>
            <div className="playlist-list-item-line"></div>
          </li>
          <li className="playlist-list-item">
            <FaMusic className="playlist-list-item-icon" />
            <span className="playlist-list-item-text">Hits Update</span>
            <div className="playlist-list-item-line"></div>
          </li>
        </ul>
      </div>
      <div className="extra">
        <div className="box">
          <h4 className="box-title">Upgrade to premium user</h4>
          <p className="box-subtitle">
            Access to the latest music and more features
          </p>
          <a className="box-link" href="#">
            Upgrade now!
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Sidebar;
