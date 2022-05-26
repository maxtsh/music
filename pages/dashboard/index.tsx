import { dehydrate, QueryClient } from "react-query";
import useReactQuery from "service/hooks/useReactQuery";
import {
  GetServerSidePropsContext,
  GetServerSideProps,
  GetServerSidePropsResult,
} from "next";
import { encode } from "js-base64";
import { Container } from "styles/pages/music/Music.styles";
import Main from "components/Main";
import Player from "components/Player";
import Sidebar from "components/Sidebar";
import Api from "service";

const Musics: React.FC = () => {
  const { data, isLoading, isError } = useReactQuery({
    key: "auth",
    url: "https://accounts.spotify.com/api/token",
    method: "POST",
    headers: {
      Authorization: new Buffer(
        "0367e6b6846548828e3b936def63e0f1" +
          ":" +
          "d18ae9d766954ac29ce443bfde0b7e1c"
      ).toString("base64"),
    },
  });

  console.log(data);

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
  const qc = new QueryClient();
  const res = await qc.prefetchQuery("auth", () =>
    Api({
      url: "https://accounts.spotify.com/api/token",
      method: "POST",
      headers: {
        Authorization: encode(
          "0367e6b6846548828e3b936def63e0f1" +
            ":" +
            "d18ae9d766954ac29ce443bfde0b7e1c"
        ),
      },
    })
  );

  console.log(res);

  return {
    props: {
      // token: dehydrate(qc),
    },
  };
};

export default Musics;
