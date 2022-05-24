import Head from "next/head";
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import useRandomWord from "../../../components/Learning/useRandomWord";
import useTypingStyle from "../../../components/Learning/useTypingStyle";
import { useList } from "../../../components/context/listContext";

const LearnPage = () => {
    const router = useRouter();

    const [id, setId] = useState();
    const { isReady, getList } = useList();
    const [list, setRandomList, generateNextWord, currentWord, removeCurrentWord, reset, notUsedWords, stats] = useRandomWord();

    const [element, setCurrentWord] = useTypingStyle(generateNextWord, removeCurrentWord, reset, stats);

    useEffect(() => {
        const { id } = router.query;

        setId(id);
    }, [router])

    // Update container with word list
    useEffect(() => {
        if (isReady && id) {
            setRandomList(getList(id));
        }
    }, [id, isReady, setRandomList, getList]);

    // If local list is ready or if word is removed then generate new word
    useEffect(() => {
        if (isReady) {
            generateNextWord();
        }
    }, [isReady, generateNextWord]); //generateNextWord is dependend of 'notUsedWords'

    useEffect(() => {
        if(isReady) {
            setCurrentWord(currentWord);
        }
    }, [isReady, setCurrentWord, currentWord]);


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
