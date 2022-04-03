import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Template = ({ children }) => {
    return (
        <>
            <Navbar />
            <motion.main
                layout
                className="flex flex-col gap-1 md:gap-5 p-5 justify-center items-center overflow-x-clip"
            >
                {children}
            </motion.main>
        </>
    );
}

export default Template;