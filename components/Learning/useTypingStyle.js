import ContainerMotion from "../ContainerMotion"
import { useState } from "react";
import useInput from "../useInput"
import usePopUp from "./usePopUp";
import ButtonComponent from "../ButtonComponent"

const useTypingStyle = (generateNextWord, removeCurrentWord, resetList) => {
    const [inputValue, input, setInputValue] = useInput({ placeholder: "Enter translation", className: "text-center" });
    const [goodPopUp, showGoodPopUp] = usePopUp("bg-green-500 text-lg font-semibold", "Good!", .5);
    const [badPopUp, showBadPopUp] = usePopUp("bg-red-600 text-white text-lg font-semibold", "Incorrect!", .5);
    const [currentWord, setCurrentWord] = useState('');

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
            <ContainerMotion className="flex flex-col gap-10 text-center">
                {
                    currentWord
                        ? <>
                            <span className="text-xl font-semibold">{currentWord.orig}</span>
                            <form className="flex flex-col gap-6" onSubmit={formSubmit}>
                                {input}
                                <ButtonComponent className="bg-green-400 hover:bg-green-500 focus:ring-green-400">Submit</ButtonComponent>
                            </form>
                        </>
                        : <>
                            <span className="text-2xl font-semibold m-3">End of learning!</span>
                            <ButtonComponent className="bg-emerald-400 hover:bg-emerald-500 focus:ring-emerald-400" onClick={resetList}>Learn again</ButtonComponent>
                        </>
                }
            </ContainerMotion>

            {goodPopUp}
            {badPopUp}
        </>
    )

    return [element, setCurrentWord];

}

export default useTypingStyle;