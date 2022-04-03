import ContainerMotion from "../ContainerMotion"
import { useEffect, useState } from "react";
import useInput from "../useInput"
import usePopUp from "./usePopUp";
import ButtonComponent from "../ButtonComponent"
import useDisplayStat from "./useDisplayStat";

const useTypingStyle = (generateNextWord, removeCurrentWord, resetList, stats) => {
    const [inputValue, input, setInputValue] = useInput({ placeholder: "Enter translation", className: "text-center" });
    const [goodPopUp, showGoodPopUp] = usePopUp("bg-green-500 text-lg font-semibold", "Good!", .5);
    const [badPopUp, showBadPopUp] = usePopUp("bg-red-600 text-white text-lg font-semibold", "Incorrect!", .5);
    const [currentWord, setCurrentWord] = useState('');

    const [displayStat] = useDisplayStat(stats, resetList);

    const formSubmit = e => {
        e.preventDefault();

        if (!inputValue.trim()) return;

        if (inputValue.trim() == currentWord.trans) {
            removeCurrentWord();
            showGoodPopUp();
        } else {
            generateNextWord();
            showBadPopUp();
        }

        setInputValue('');
    }

    const element = (
        <>
            <ContainerMotion className="flex flex-col max-w-xl items-center text-center gap-10">
                {
                    currentWord
                        ? <>
                            <span className="text-xl font-semibold">{currentWord.orig}</span>
                            <form className="flex flex-col gap-6" onSubmit={formSubmit}>
                                {input}
                                <ButtonComponent className="bg-green-500 hover:bg-green-600 focus:ring-green-500">Submit</ButtonComponent>

                            </form>
                        </>
                        : <>{displayStat}</>
                }
            </ContainerMotion>

            {goodPopUp}
            {badPopUp}
        </>
    )

    return [element, setCurrentWord];

}

export default useTypingStyle;