import { GiCrownedSkull } from "react-icons/gi";
import { SiYoutubemusic, SiLinkedin, SiCodepen } from "react-icons/si";
import { RiHome7Fill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { Container } from "./Header.styles";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <Container>
      <nav className="nav">
        <ul className="nav-left">
          <li className="nav-left-item">
            <div className="nav-left-item-logo">
              <GiCrownedSkull className="nav-left-item-logo-icon" />
              <h2 className="nav-left-item-logo-title">MaxTsh Music</h2>
            </div>
          </li>
        </ul>
        <ul className="nav-center">
          <li className="nav-center-item">
            <Link passHref href="/">
              <a className="nav-center-item-link">
                <RiHome7Fill className="nav-center-item-navicon" />
                <span className="nav-center-item-navtext">Home</span>
              </a>
            </Link>
          </li>
          <li className="nav-center-item">
            <Link passHref href="/about">
              <a className="nav-center-item-link">
                <SiCodepen className="nav-center-item-navicon" />
                <span className="nav-center-item-navtext">About Me</span>
              </a>
            </Link>
          </li>
          <li className="nav-center-item">
            <Link passHref href="https://github.com/maxtsh">
              <a className="nav-center-item-link">
                <FaGithub className="nav-center-item-navicon" />
                <span className="nav-center-item-navtext">Github</span>
              </a>
            </Link>
          </li>
          <li className="nav-center-item">
            <Link
              passHref
              href="https://www.linkedin.com/in/mohammad-tatshahdoost/"
            >
              <a className="nav-center-item-link">
                <SiLinkedin className="nav-center-item-navicon" />
                <span className="nav-center-item-navtext">Linkedin</span>
              </a>
            </Link>
          </li>
        </ul>
        <ul className="nav-right">
          <li className="nav-right-item">
            <Link passHref href="/dashboard">
              <a className="nav-center-item-link">
                <SiYoutubemusic className="nav-center-item-navicon" />
                <span className="nav-center-item-navtext">Dashboard</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
export default Header;
