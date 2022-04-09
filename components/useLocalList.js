import { useCallback, useEffect, useState } from "react";

const useLocalList = lsList => {
    const [list, setList] = useState(lsList ?? {title: '', date: undefined, words: {}});
    const [title, setTitle] = useState(lsList?.title ?? '');
    const [words, setWords] = useState(list?.words ?? {ids: []});
    const [isReady, setIsReady] = useState(false);

    const updateList = useCallback((list) => {
        setList(list);
        list?.title != null && setTitle(list.title);
        list?.words != null && setWords(list.words);
    }, []);

    const updateTitle = useCallback((newTitle) => {
        list.title = newTitle;
        setTitle(newTitle);
        setList(list);
    }, [list]);

    const updateWords = newWords => {
        let temp = {...list};
        temp.words = newWords;
        setWords(newWords);
        setList(temp);
    }

    const setReady = useCallback(() => {
        setIsReady(true);
    }, []);

    return [isReady, setReady, list, updateList, title, updateTitle, words, updateWords];
}

export default useLocalList;