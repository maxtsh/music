import {
  GetServerSidePropsContext,
  GetServerSideProps,
  GetServerSidePropsResult,
} from "next";
import { Container } from "../../styles/pages/music/Music.styles";
import Main from "../../components/Main";
import Player from "../../components/Player";
import Sidebar from "../../components/Sidebar";

const Musics: React.FC = () => {
  return (
    <Container>
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="main">
        <Main />
      </main>
      <aside className="player">
        <Player />
      </aside>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> => {
  return {
    props: { title: "hello" },
  };
};

export default Musics;
