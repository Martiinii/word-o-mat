import Head from 'next/head'

const Home = () => {
  return (
    <>
    <Head>
      <title>Strona główna</title>
    </Head>

    <div className="flex w-full justify-center p-10">
      <h3 className="text-red-500 text-xl font-medium">Witamy w NEXT.js</h3>
    </div>
    </>
  )
}

export default Home;
