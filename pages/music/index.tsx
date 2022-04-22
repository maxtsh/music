import {
  GetServerSidePropsContext,
  GetServerSideProps,
  GetServerSidePropsResult,
} from "next";
import { Container } from "../../styles/pages/music/Music.styles";

const Musics: React.FC = () => {
  return (
    <Container>
      <aside className="sidebar"></aside>
      <main className="main"></main>
      <aside className="player"></aside>
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
