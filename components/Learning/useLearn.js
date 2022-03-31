import { useEffect, useState } from "react";
import TypingElement from "./TypingElement";

const useLearn = (generateNextWord, removeCurrentWord, resetList) => {
    const [style, setStyle] = useState();
    const [currentWord, setCurrentWord] = useState({ date: null, orig: '', trans: '' });

    const typingStyle = TypingElement(generateNextWord, removeCurrentWord, resetList, currentWord);

    return [typingStyle, setStyle, setCurrentWord];
}

export default useLearn;