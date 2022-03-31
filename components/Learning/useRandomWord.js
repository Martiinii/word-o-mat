import { useState } from "react";

const useRandomWord = l => {
    const [list, setList] = useState(l);
    const [wordIds, setWordIds] = useState();
    const [notUsedWords, setNotUsedWords] = useState([]);
    const [currentWord, setCurrentWord] = useState(null);


    const updateList = list => {
        setList(list);
        setWordIds(list.words.ids);
        setNotUsedWords(list.words.ids);
    }

    const generateNextWord = () => {
        if(notUsedWords.length == 0) {
            setCurrentWord(null);
            return;
        }
        let randomNumber = Math.floor(Math.random() * (notUsedWords.length));
        let word = list.words[notUsedWords[randomNumber]];
        setCurrentWord(word);
    }

    const removeCurrentWord = () => {
        setNotUsedWords(notUsedWords.filter(i => i != `w${currentWord.date}`));
    }


    const reset = () => {
        setNotUsedWords(wordIds);
    }

    return [list, updateList, generateNextWord, currentWord, removeCurrentWord, reset, notUsedWords]
}

export default useRandomWord;