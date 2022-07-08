import { dehydrate, QueryClient } from "react-query";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { getSession } from "next-auth/react";
import { Container } from "styles/pages/music/Music.styles";
import Main from "components/Main";
import Player from "components/Player";
import Sidebar from "components/Sidebar";
import Api from "service";
import type ReleaseType from "types/ReleaseTypes";
import { BASE_URL } from "Global/URLs";

const Dashboard: React.FC = () => {
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

// export const getServerSideProps: GetServerSideProps = async (
//   ctx: GetServerSidePropsContext
// ): Promise<GetServerSidePropsResult<any>> => {
//   const session = await getSession({ req: ctx.req });
//   const qc = new QueryClient();
//   await qc.prefetchQuery<ReleaseType>("releases", () =>
//     Api({
//       url: `${BASE_URL}/browse/new-releases?limit=6&country=SE`,
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${session?.user.accessToken}`,
//       },
//     })
//   );
//   return {
//     props: {
//       dehydratedState: dehydrate(qc),
//     },
//   };
// };

export default Dashboard;
