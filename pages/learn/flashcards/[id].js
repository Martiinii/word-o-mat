import Head from "next/head";
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import useRandomWord from "../../../components/Learning/useRandomWord";
import useListStorage from '../../../components/useListStorage';
import useFlashcardStyle from "../../../components/Learning/useFlashcardStyle";

const LearnPage = () => {
    const router = useRouter();

    const [id, setId] = useState();
    const [ready, getList] = useListStorage();
    const [list, setRandomList, generateNextWord, currentWord, removeCurrentWord, reset, notUsedWords, stats] = useRandomWord();

    const [element, setCurrentWord] = useFlashcardStyle(generateNextWord, removeCurrentWord, reset, stats);

    useEffect(() => {
        const { id } = router.query;

        setId(id);
    }, [router])

    // Update container with word list
    useEffect(() => {
        if (ready && id) {
            setRandomList(getList(id));
        }
    }, [id, ready, setRandomList, getList]);

    // If local list is ready or if word is removed then generate new word
    useEffect(() => {
        if (ready) {
            generateNextWord();
        }
    }, [ready, generateNextWord]); //generateNextWord is dependend of 'notUsedWords'

    useEffect(() => {
        if(ready) {
            setCurrentWord(currentWord);
        }
    }, [ready, setCurrentWord, currentWord]);


    return (
        <>
            <Head>
                <title>Learning - {list?.title || "Untitled list"}</title>
            </Head>

            {element}
        </>
    )
}

export default LearnPage;
