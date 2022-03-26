import Head from "next/head";
import Container from "../components/Container";

const Custom404 = () => {
    return (
        <>
            <Head>
                <title>404: Page not found</title>
            </Head>

            <Container className="flex flex-col gap-5 text-center">
                <h1 className="font-bold text-8xl">404</h1>
                <p className="text-stone-700 text-lg">This page could not be found.</p>
            </Container>
        </>
    )
}
export default Custom404;