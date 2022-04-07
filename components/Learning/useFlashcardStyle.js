import ContainerMotion from "../ContainerMotion"
import { useState } from "react";
import ButtonComponent from "../ButtonComponent"
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import useDisplayStat from "./useDisplayStat";

const useFlashcardStyle = (generateNextWord, removeCurrentWord, resetList, stats) => {
    const [currentWord, setCurrentWord] = useState('');
    const [frontFace, setFrontFace] = useState(true);
    const [wasRotated, setWasRotated] = useState(false);

    const [displayStat] = useDisplayStat(stats, resetList);

    const variantsFront = {
        hidden: {
            rotateY: "180deg",
        },

        visible: {
            rotateY: "0deg",
        },

        quickVisible: {
            rotateY: "0deg",
            transition: {
                duration: 0
            }
        }
    }
    const variantsBack = {
        hidden: {
            rotateY: "-180deg",
            x: "-50%"
        },

        visible: {
            rotateY: "0deg"
        },

        quickHidden: {
            rotateY: "-180deg",
            transition: {
                duration: 0
            }
        }
    }

    const frontControls = useAnimation();
    const backControls = useAnimation();

    const rotate = () => {
        if (frontFace) {
            frontControls.start("hidden");
            backControls.start("visible");
        } else {
            frontControls.start("visible");
            backControls.start("hidden");
        }

        setWasRotated(true);
        setFrontFace(!frontFace);
    }

    const quickRotateToDefault = () => {
        if (!frontFace) {
            frontControls.start("quickVisible");
            backControls.start("quickHidden");
        }

        setFrontFace(true);
    }

    const nextWord = () => {
        if (!wasRotated) {
            removeCurrentWord();
        } else {
            generateNextWord();
        }

        quickRotateToDefault();
        setWasRotated(false);
    }

    const element = (
        <>
            <ContainerMotion className="flex flex-col max-w-xl items-center text-center gap-10">
                {
                    currentWord
                        ? <>
                            <motion.div className="relative perspective grid grid-cols-2 text-center text-xl font-semibold" layout>

                                <ContainerMotion transition={{ type: "ease-in", duration: .7 }} className="perspective-card w-[200%]" layout variants={variantsFront} initial="visible" animate={frontControls}>
                                    <span>{currentWord.orig}</span>
                                </ContainerMotion>

                                <ContainerMotion transition={{ type: "ease-in", duration: .7 }} className="perspective-card w-[200%]" layout variants={variantsBack} initial="hidden" animate={backControls}>
                                    <span>{currentWord.trans}</span>
                                </ContainerMotion>

                            </motion.div>

                            <div className="flex w-full justify-center gap-4 text-4xl">
                                <ButtonComponent className="bg-sky-400 hover:bg-sky-500 focus:ring-sky-400" onClick={rotate}>
                                    <FontAwesomeIcon className="opacity-70" icon={faRotateLeft} fixedWidth />
                                </ButtonComponent>

                                <ButtonComponent className="bg-green-500 hover:bg-green-600 focus:ring-green-500" onClick={nextWord}>
                                    <FontAwesomeIcon className="opacity-70" icon={faCircleCheck} fixedWidth />
                                </ButtonComponent>
                            </div>
                        </>
                        : <>{displayStat}</>

                }
            </ContainerMotion>

        </>
    )

    return [element, setCurrentWord];

}

export default useFlashcardStyle;