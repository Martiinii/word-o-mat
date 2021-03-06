import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
const usePopUp = (className, text, duration) => {
    const [localText, setLocalText] = useState(text);

    const variants = {
        hidden: { x: "-50%", y: "-200%", transition: { delay: duration }, transitionEnd: { visibility: "hidden" } },
        visible: { y: "0", visibility: "visible", transition: { duration: 1, type: "spring", stiffness: 80 } }
    }
    const controls = useAnimation();

    const animate = async (text) => {
        if(text) setLocalText(text);
        await controls.start("visible");
        controls.start("hidden");
    }



    const element = (
        <>
            <motion.div
                className={`p-5 rounded-xl text-center absolute z-30 left-1/2 top-10 ${className}`}
                variants={variants}
                initial="hidden"
                animate={controls}
            >
                <span>{localText}</span>
            </motion.div>
        </>
    )

    return [element, animate]
}

export default usePopUp;