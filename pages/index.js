import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroSeaction from "../components/HeroSeaction";
import Populer from "../components/Populer";
import axios from "../utils/axios";
import requests from "../utils/requests";
import Free from "../components/Free";
import ImaageCollection from "../components/ImageCollection";
import Watch from "../components/Watch";
import Price from "../components/Price";

export default function Home({ populer, freeTwoWatch, collections }) {
  return (
    <div>
      <Head>
        <title>Andromeda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:max-w-[1300px] lg:mx-auto">
        <Navbar />
        <HeroSeaction />
        <ImaageCollection images={collections} />
        <Populer populer={populer} />
        <Watch />
        <Free free={freeTwoWatch} />
        <Price />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const movie = await axios.get(requests.fetchTrending);
  const free = await axios.get(requests.fetchNetflixOriginals);
  const c = await axios.get(requests.fetchNetflixOriginals);

  const populer = movie.data;
  const freeTwoWatch = free.data;
  const collections = c.data;

  return {
    props: {
      populer,
      freeTwoWatch,
      collections,
    },
  };
};
