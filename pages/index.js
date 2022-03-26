import Head from "next/head";
import ListLogic from "../components/ListComponents/ListLogic";
import useDeleteOverlay from "../components/overlays/useDeleteOverlay";

const Home = () => {

  const [overlay, removeList] = useDeleteOverlay();

  return (
    <>
      <Head>
        <title>Word-o-mat</title>
      </Head>
      
      <ListLogic showOverlay={removeList}/>
      {overlay}
    </>
  )
}

export default Home;
