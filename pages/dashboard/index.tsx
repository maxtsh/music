// import { dehydrate, QueryClient } from "react-query";
// import useReactQuery from "service/hooks/useReactQuery";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { useSession } from "next-auth/react";
import { Container } from "styles/pages/music/Music.styles";
import Main from "components/Main";
import Player from "components/Player";
import Sidebar from "components/Sidebar";

// import Api from "service";

const Dashboard: React.FC = () => {
  const { data: session, status } = useSession();
  // const { data, isLoading, isError } = useReactQuery({});

  console.log("SESSION ===>", session, status);

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

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<any>
> => {
  // const qc = new QueryClient();
  // const res = await qc.prefetchQuery("albums", () => Api({}));

  // console.log(res);

  // Force to login if user is not authorized

  return {
    props: {
      data: null,
    },
  };
};

export default Dashboard;
