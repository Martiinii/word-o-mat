import Head from "next/head";
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import useRandomWord from "../../../components/Learning/useRandomWord";
import useListStorage from '../../../components/useListStorage';
import useTypingStyle from "../../../components/Learning/useTypingStyle";

const LearnPage = () => {
    const router = useRouter();

    const [id, setId] = useState();
    const [ready, getList] = useListStorage();
    const [list, setRandomList, generateNextWord, currentWord, removeCurrentWord, reset, notUsedWords, stats] = useRandomWord();

    const [element, setCurrentWord] = useTypingStyle(generateNextWord, removeCurrentWord, reset, stats);

    useEffect(() => {
        const { id } = router.query;

        setId(id);
    }, [router])

    // Update container with word list
    useEffect(() => {
        if (ready && id) {
            setRandomList(getList(id));
        }
    }, [id, ready]);

    // If local list is ready or if word is removed then generate new word
    useEffect(() => {
        if (ready) {
            generateNextWord();
        }
    }, [notUsedWords]);

    useEffect(() => {
        if(ready) {
            setCurrentWord(currentWord);
        }
    }, [currentWord]);


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
