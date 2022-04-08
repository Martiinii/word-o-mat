import { motion, useAnimation } from "framer-motion";
import useScrollLock from "./useScrollLock"
import { useCallback, useState } from "react";
import Container from "../Container";

const useOverlay = (children, className = "") => {
    const [childrenElement, setChildrenElement] = useState(children);

    const [visible, setVisible] = useState(false);
    const [scrollLocked, setScrollLocked] = useScrollLock();

    const variants = {
        visible: {
            display: 'grid',
            opacity: 1
        },

        hidden: {
            opacity: 0,
            transitionEnd: {
                display: 'none'
            }
        }
    }

    // (Disable Events) variants
    const variantsDE = {
        visible: {
            display: 'inline',
        },

        hidden: {
            transitionEnd: {
                display: 'none'
            }
        }
    }

    const controls = useAnimation();
    const disableEvents = useAnimation();

    const showOverlay = () => {
        setVisible(true);
        setScrollLocked(true);
        controls.start("visible");
    }

    const hideOverlay = useCallback(async () => {
        setVisible(false);
        disableEvents.start("visible");

        await controls.start("hidden");
        setScrollLocked(false);
        await disableEvents.start("hidden");
    }, [controls, disableEvents, setScrollLocked]);

    let element = (
        <>
            <motion.div
                className="fixed inset-0 bg-black/50 overflow-y-auto z-40 p-10 place-items-center"
                initial="hidden"
                variants={variants}
                animate={controls}
                onClick={hideOverlay}
            >
                <div onClick={e => e.stopPropagation()} className="inline">
                    <Container className={`flex flex-col gap-5 justify-center items-center ${className}`}>
                        {childrenElement}
                    </Container>
                </div>
            </motion.div>

            <motion.div
                variants={variantsDE}
                initial="hidden"
                animate={disableEvents}
                className="fixed z-50 inset-0"
            />
        </>
    );

    return [element, showOverlay, hideOverlay, visible, setChildrenElement];
}

export default useOverlay;