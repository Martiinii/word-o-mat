import Head from "next/head";
import ContainerMotion from "../components/ContainerMotion";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <ContainerMotion>
        <h1 className="text-3xl">Welcome to <b>Word-o-mat</b>!</h1>
      </ContainerMotion>

    </>
  )
}

export default About;
