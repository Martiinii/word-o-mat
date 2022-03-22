import Head from "next/head";
import ListLogic from "../components/ListComponents/ListLogic";
import Template from "../components/Template";

const Home = () => {
  return (
    <>
      <Template wrap title={'Word-o-mat'}>
        <ListLogic />
      </Template>
    </>
  )
}

export default Home;
