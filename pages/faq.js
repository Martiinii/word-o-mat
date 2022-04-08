import Head from "next/head";
import ContainerMotion from "../components/ContainerMotion";

const FAQ = () => {

  const faq = [
    {
      question: "How does it work?",
      answer: "First, you need to create a list. You can change its title and add words or concepts. Next, you can learn those words / concepts via learning styles. Words / concepts are chosen randomly until you enter each word / concept correctly."
    },
    {
      question: "What languages are supported?",
      answer: "Every language is supported. Each word can be entered in every language."
    },
    {
      question: "Will there be more learning styles in the future?",
      answer: "Yes, I'm planning on adding more."
    },
    {
      question: "Where are the lists stored?",
      answer: "They are stored on local storage in your browser."
    },
    {
      question: "Are the lists synchronized between my devices?",
      answer: "No, they're not. Lists are stored per device."
    },
    {
      question: "Can I transfer my lists to another device?",
      answer: "Currently not, but I'm working on that option."
    },

  ]

  return (
    <>
      <Head>
        <title>FAQ</title>
      </Head>


      <ContainerMotion className="grid grid-rows-1 max-w-6xl">
        {faq.map(o => {
          return (
            <ContainerMotion key={o.question} className="flex flex-col gap-2 w-auto shadow-black/20 odd:bg-neutral-100 even:bg-zinc-100">
              <p className="text-xl md:text-3xl font-bold">{o.question}</p>
              <hr />
              <span>{o.answer}</span>
            </ContainerMotion>
          )
        })}
      </ContainerMotion>

    </>
  )
}

export default FAQ;
