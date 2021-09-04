import Head from "next/head";

import Navbar from "../components/Navbar";
import HeroSeaction from "../components/HeroSeaction";
import Populer from "../components/Populer";
import axios from "../utils/axios";
import requests from "../utils/requests";

export default function Home({ populer }) {
  console.log(populer);
  return (
    <>
      <Head>
        <title>Andromeda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:max-w-7xl mx-auto">
        <Navbar />
        <HeroSeaction />
        <Populer populer={populer} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const movie = await axios.get(requests.fetchTrending);

  const populer = movie.data;

  return {
    props: {
      populer,
    },
  };
};
