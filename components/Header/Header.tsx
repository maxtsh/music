import { GiCrownedSkull } from "react-icons/gi";
import { AiOutlineLogout, AiOutlineLogin } from "react-icons/ai";
import { SiYoutubemusic, SiLinkedin, SiCodepen } from "react-icons/si";
import { RiHome7Fill } from "react-icons/ri";
import { FaGithub, FaHamburger } from "react-icons/fa";
import { Container } from "./Header.styles";
import Link from "next/link";
import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const { push } = useRouter();

  const handleOpen = () => setOpen(!open);
  const handleLogOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    signOut();
  };

  const handleGoHome = () => push("/");

  return (
    <Container>
      <nav className="nav">
        <ul className="nav-left">
          <li className="nav-left-item">
            <div className="nav-left-item-logo" onClick={handleGoHome}>
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
          {session ? (
            <li className="nav-right-item">
              <a
                className="nav-center-item-link"
                href="#"
                onClick={handleLogOut}
              >
                <AiOutlineLogout className="nav-center-item-navicon" />
                <span className="nav-center-item-navtext">Signout</span>
              </a>
            </li>
          ) : (
            <li className="nav-right-item">
              <Link passHref href="/auth">
                <a className="nav-center-item-link">
                  <AiOutlineLogin className="nav-center-item-navicon" />
                  <span className="nav-center-item-navtext">Login</span>
                </a>
              </Link>
            </li>
          )}
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
