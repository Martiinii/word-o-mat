import Head from 'next/head'

const Home = () => {
  return (
    <>
    <Head>
      <title>Strona główna</title>
    </Head>

    <div className="flex w-full h-screen justify-center items-center p-10">
      <h3 className="text-sky-600 text-xl font-medium p-10 bg-slate-900 rounded-3xl">NAPIS</h3>
    </div>
    </>
  )
}

export default Home;
