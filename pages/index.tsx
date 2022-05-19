import type { NextPage } from "next";
import Head from "next/head";
import { SiYoutubemusic } from "react-icons/si";
import Header from "../components/Header";
import { Container } from "../styles/pages/home/Home.styles";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>MaxTsh Music App</title>
        <meta
          name="description"
          content="MaxTsh Music App will make you enjoy your time!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <div className="main-left">
          <div className="main-left-intro">
            <h1 className="main-left-intro-title">Enjoy Live Music!</h1>
            <p className="main-left-intro-description">
              We provide a fully customizable free dashboard for your taste in
              music and help you enjoy your time while you do your work!
            </p>
          </div>
          <div className="main-left-btns">
            <Link passHref href="/dashboard">
              <a className="main-left-btns-now">
                <SiYoutubemusic className="main-left-btns-now-icon" />
                JOIN NOW!
              </a>
            </Link>
            <Link
              passHref
              href="https://www.linkedin.com/in/mohammad-tatshahdoost/"
            >
              <a className="main-left-btns-hire">Hire Me!</a>
            </Link>
          </div>
        </div>
        <div className="main-right">
          <div className="main-right-art">
            <h2 className="main-right-art-title">DJ MAXTSH!</h2>
            <p className="main-right-art-subtitle">
              This is all yours, Please Enjoy!
            </p>
          </div>
          <div className="main-right-overlay"></div>
        </div>
      </main>
    </Container>
  );
};

export default Home;
