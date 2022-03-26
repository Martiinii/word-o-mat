import Head from "next/head";
import Navbar from "./Navbar";

const Template = ({ children }) => {
    return (
        <>
            <Navbar />
            <main
                className="flex flex-wrap gap-1 md:gap-5 p-5 justify-center items-center"
            >
                {children}
            </main>
        </>
    );
}

export default Template;