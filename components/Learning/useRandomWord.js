import { useCallback, useEffect, useState } from "react";

const useRandomWord = l => {
    const [list, setList] = useState(l);
    const [wordIds, setWordIds] = useState();
    const [notUsedWords, setNotUsedWords] = useState([]);
    const [currentWord, setCurrentWord] = useState(null);
    const [stats, setStats] = useState({ total: 0, amount: 0 });

    const resetStats = useCallback((l) => {
        setStats({ total: l, amount: 0 });
    }, []);

    const statsAddWord = useCallback(() => {
        setStats(c => {return {total: c.total, amount: c.amount+1}});
    }, []);

    const updateList = useCallback((list) => {
        setList(list);
        setWordIds(list.words.ids);
        setNotUsedWords(list.words.ids);
        resetStats(list.words.ids.length);
    }, [resetStats]);

    const generateNextWord = useCallback(() => {
        if (notUsedWords.length == 0) {
            setCurrentWord(null);
            return;
        }

        let randomNumber = Math.floor(Math.random() * (notUsedWords.length));
        let word = list.words[notUsedWords[randomNumber]];

        setCurrentWord(word);
        statsAddWord();

    }, [notUsedWords, statsAddWord, list]);

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