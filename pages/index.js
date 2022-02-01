import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Main from "../components/Main";
import Footer from "../components/Footer";
export default function Home({ exploreData, cardsData }) {
  return (
    <div className="select-none ">
      <Head>
        <title>Airbnb | NextJS</title>
        <meta name="description" content="An Airbnb clone made with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <Main exploreData={exploreData} cardsData={cardsData} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/4G1G").then((res) =>
    res.json()
  );
  const cardsData = await fetch("https://jsonkeeper.com/b/VHHT").then((res) =>
    res.json()
  );

  return { props: { exploreData, cardsData } };
}
