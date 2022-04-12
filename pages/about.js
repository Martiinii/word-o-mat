import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import ContainerMotion from "../components/ContainerMotion";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <ContainerMotion className="flex flex-col gap-5 max-w-3xl">
        <section>
          <h1>About Word-o-mat</h1>
          <p>Ever had hard time learning new words for exam? Wasted hours looking for free software that is fast, easy-to-use and minimalistic? Word-o-mat solves those problems.</p>
          <p>It was created to help me get better grades at school. Now, it can help you too.</p>
        </section>

        <hr />

        <section>
          <h2>Open sourced</h2>
          <p>This project is free and will stay free forever. You can download source code, modify it, recompile, use for you own private projects. Links below.</p>
          <p>If you see any bug, typo, grammar errors, let me know and feel free to commit changes on Github.</p>
        </section>

        <hr />

        <section>
          <h2>Links</h2>
          <p><Link href="https://github.com/Martiinii/word-o-mat" passHref><a className="link"><FontAwesomeIcon icon={faGithub}/> Github</a></Link></p>
        </section>

        <hr />

        <section>
          <h2>About me</h2>
          <p>Hi, my name is Martin. I am building websites and tools in order to speed up my work.</p>
          <p>I have always had trouble with learning new words or concepts for exams in school. As a lazy student, I also did not spend much time studying. Few years ago I have created simple CLI application in Java that was precursor to Word-o-mat. It was good, but could be way better. I then tried to create GUI application also in Java. Never finished it. Then I learned about React and with more knowledge than ever I created this website.</p>
          <p>This is my first project using <Link href="Next.js" passHref><a className="link">Next.js</a></Link>. It was an amazing journey learning this framework. So great that I decided to clean up code, fix bugs and make it public for everyone.</p>
        </section>

      </ContainerMotion>
    </>
  )
}

export default About;
