import { useState } from "react";

const useLocalList = lsList => {
    const [list, setList] = useState(lsList ?? {title: '', date: undefined, words: {}});
    const [title, setTitle] = useState(lsList?.title ?? '');
    const [words, setWords] = useState(list?.words ?? {ids: []});
    const [ready, setReady] = useState(false);

    const updateList = list => {
        setList(list);
        list?.title != null && setTitle(list.title);
        list?.words != null && setWords(list.words);
    }

    const updateTitle = newTitle => {
        let temp = {...list};
        temp.title = newTitle;
        setTitle(newTitle);
        setList(temp);
    }

    const updateWords = newWords => {
        let temp = {...list};
        temp.words = newWords;
        setWords(newWords);
        setList(temp);
    }

    const setLocalReady = () => {
        setReady(true);
    }

    return [ready, setLocalReady, list, updateList, title, updateTitle, words, updateWords];
}

export default useLocalList;