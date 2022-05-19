import { GiCrownedSkull } from "react-icons/gi";
import { SiYoutubemusic, SiLinkedin, SiCodepen } from "react-icons/si";
import { RiHome7Fill } from "react-icons/ri";
import { FaGithub, FaHamburger } from "react-icons/fa";
import { Container } from "./Header.styles";
import Link from "next/link";
import { useState } from "react";
import { BsXLg } from "react-icons/bs";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

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
      <nav className="mobile">
        <ul className="mobile-left">
          <li className="mobile-left-item">
            <div className="mobile-left-item-logo">
              <GiCrownedSkull className="mobile-left-item-logo-icon" />
              <h2 className="mobile-left-item-logo-title">MaxTsh Music</h2>
            </div>
          </li>
        </ul>
        <ul className="mobile-right">
          <li className="mobile-right-item" onClick={handleOpen}>
            <FaHamburger className="mobile-right-item-icon" />
          </li>
        </ul>
        <div className={`mobile-nav ${open ? "open" : ""}`}>
          <div className="mobile-nav-close" onClick={handleOpen}>
            <BsXLg className="mobile-nav-close-icon" />
          </div>
          <ul className="mobile-nav-list">
            <li className={`mobile-nav-list-item ${open ? "fade" : ""}`}>
              <Link passHref href="/">
                <a className="mobile-nav-list-item-link">
                  <RiHome7Fill className="mobile-nav-list-item-navicon" />
                  <span className="mobile-nav-list-item-navtext">Home</span>
                </a>
              </Link>
            </li>
            <li className={`mobile-nav-list-item ${open ? "fade" : ""}`}>
              <Link passHref href="/about">
                <a className="mobile-nav-list-item-link">
                  <SiCodepen className="mobile-nav-list-item-navicon" />
                  <span className="mobile-nav-list-item-navtext">About Me</span>
                </a>
              </Link>
            </li>
            <li className={`mobile-nav-list-item ${open ? "fade" : ""}`}>
              <Link passHref href="https://github.com/maxtsh">
                <a className="mobile-nav-list-item-link">
                  <FaGithub className="mobile-nav-list-item-navicon" />
                  <span className="mobile-nav-list-item-navtext">Github</span>
                </a>
              </Link>
            </li>
            <li className={`mobile-nav-list-item ${open ? "fade" : ""}`}>
              <Link
                passHref
                href="https://www.linkedin.com/in/mohammad-tatshahdoost/"
              >
                <a className="mobile-nav-list-item-link">
                  <SiLinkedin className="mobile-nav-list-item-navicon" />
                  <span className="mobile-nav-list-item-navtext">Linkedin</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  );
};
export default Header;
