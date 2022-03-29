import Head from "next/head";
import ListLogic from "../components/ListComponents/ListLogic";
import useDeleteOverlay from "../components/overlays/useDeleteOverlay";
import useLearnStyleOverlay from "../components/overlays/useLearnStyleOverlay";

const Home = () => {

  const [removeOverlay, removeList] = useDeleteOverlay();
  const [learnStyleOverlay, showLearnStyleOverlay, removeCurrentWord, hideLearnStyleOverlay] = useLearnStyleOverlay();

  return (
    <>
      <Head>
        <title>Word-o-mat</title>
      </Head>
      
      <ListLogic showRemoveOverlay={removeList} showLearnOverlay={showLearnStyleOverlay} />
      {removeOverlay}
      {learnStyleOverlay}
    </>
  )
}

export default Home;
