import Head from "next/head";

import Navbar from "../components/Navbar";
import HeroSeaction from "../components/HeroSeaction";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andromeda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:max-w-7xl mx-auto">
        <Navbar />
        <HeroSeaction />
      </main>
    </>
  );
}
