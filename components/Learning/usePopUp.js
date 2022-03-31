import { motion, useAnimation } from "framer-motion";
import ContainerMotion from "../ContainerMotion";

const usePopUp = (className, text, duration) => {
    const variants = {
        hidden: { x: "-50%", y: "-200%", transition: {delay: duration}, transitionEnd: {visibility: "hidden"} },
        visible: { y: "0", visibility: "visible", transition: { duration: 1, type: "spring", stiffness: 80 } }
    }
    const controls = useAnimation();

    const animate = async () => {
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
                <span>{text}</span>
            </motion.div>
        </>
    )

    return [element, animate]
}

export default usePopUp;