import { useState } from "react";

const useRandomWord = l => {
    const [list, setList] = useState(l);
    const [wordIds, setWordIds] = useState();
    const [notUsedWords, setNotUsedWords] = useState([]);
    const [currentWord, setCurrentWord] = useState(null);
    const [stats, setStats] = useState({total: 0, amount: 0});

    const resetStats = l => {
        setStats({total: l, amount: 0});
    }

    const statsAddWord = () => {
        let temp = {...stats}
        temp.amount = temp.amount + 1;
        setStats(temp);
    }

    const updateList = list => {
        setList(list);
        setWordIds(list.words.ids);
        setNotUsedWords(list.words.ids);
        resetStats(list.words.ids.length);
    }

    const generateNextWord = () => {
        if(notUsedWords.length == 0) {
            setCurrentWord(null);
            return;
        }
        let randomNumber = Math.floor(Math.random() * (notUsedWords.length));
        let word = list.words[notUsedWords[randomNumber]];
        setCurrentWord(word);
        statsAddWord();
    }

    const removeCurrentWord = () => {
        setNotUsedWords(notUsedWords.filter(i => i != `w${currentWord.date}`));
    }

    const reset = () => {
        setNotUsedWords(wordIds);
        resetStats(list.words.ids.length);
    }

    return [list, updateList, generateNextWord, currentWord, removeCurrentWord, reset, notUsedWords, stats]
}

export default useRandomWord;