import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>factorio.xithrius.cloud</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center py-2"></div>
    </>
  );
};

export default Home;
