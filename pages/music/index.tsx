import {
  GetServerSidePropsContext,
  GetServerSideProps,
  GetServerSidePropsResult,
} from "next";

const Musics: React.FC = () => {
  return (
    <div>
      <h1>This is Main Music Page</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = (
  ctx: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> => {
  return {
    props: {},
    notfound: true,
  };
};

export default Musics;
