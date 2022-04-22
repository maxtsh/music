import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MaxTsh Music App</title>
        <meta
          name="description"
          content="MaxTsh Music App will make you enjoy your time!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Welcome to Max Tsh Music App</h1>
      </div>
    </>
  );
};

export default Home;
