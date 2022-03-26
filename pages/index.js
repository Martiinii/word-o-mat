import Head from "next/head";
import ListLogic from "../components/ListComponents/ListLogic";

const Home = () => {
  return (
    <>
      <Head>
        <title>Word-o-mat</title>
      </Head>
      <ListLogic />
    </>
  )
}

export default Home;
