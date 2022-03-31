import ContainerMotion from "../ContainerMotion"
import { useEffect, useRef, useState } from "react";
import useInput from "../useInput"
import usePopUp from "./usePopUp";

const useLearn = (generateNextWord, removeCurrentWord, resetList) => {
    const [style, setStyle] = useState();
    const [currentWord, setCurrentWord] = useState({ date: null, orig: '', trans: '' });

    const element = (() => {
        switch (style) {
            case "flashcards":
                return;
            case "typing":
            default:
                const focusInput = useRef();
                const [inputValue, input, setInputValue] = useInput({ placeholder: "Enter translation", className: "text-center", ref: focusInput });
                const [goodPopUp, showGoodPopUp] = usePopUp("bg-green-500 text-lg font-semibold", "Good!", .5);
                const [badPopUp, showBadPopUp] = usePopUp("bg-red-600 text-white text-lg font-semibold", "Incorrect!", .5);

                useEffect(() => {
                    if (focusInput.current) focusInput.current.focus();
                }, [focusInput]);

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

                return (
                    <>
                        <ContainerMotion className="flex flex-col gap-10 text-center">
                            {
                                currentWord
                                    ? <>
                                        <span className="text-xl font-semibold">{currentWord.orig}</span>
                                        <form className="flex flex-col gap-6" onSubmit={formSubmit}>
                                            {input}
                                            <button className="bg-green-300 p-3 rounded-xl font-bold hover:bg-green-500 hover:ring-4 hover:ring-offset-4 hover:ring-green-500 transition-all">Submit</button>
                                        </form>
                                    </>
                                    : <>
                                        <span className="text-2xl font-semibold m-3">End of learning!</span>
                                        <button className="bg-emerald-300 font-semibold p-4 rounded-xl shadow-md shadow-emerald-800/60" onClick={resetList}>Learn again</button>
                                    </>
                            }
                        </ContainerMotion>

                        {goodPopUp}
                        {badPopUp}
                    </>
                )
        }

    })();


    return [element, setStyle, setCurrentWord];


}

export default useLearn;