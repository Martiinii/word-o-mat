import Head from "next/head";
import Navbar from "./Navbar";

const Template = ({ title, children, wrap }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <main
                className={`flex ${wrap ? 'flex-wrap' : 'flex-col'} gap-1 md:gap-5 p-5 justify-center items-center`}
            >
                {children}
            </main>
        </>
    );
}

export default Template;