import Head from "next/head";
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import useRandomWord from "../../../components/Learning/useRandomWord";
import useListStorage from '../../../components/useListStorage';
import useLearn from "../../../components/Learning/useLearn";

const LearnPage = () => {
    const router = useRouter();

    const [id, setId] = useState();
    const [style, setStyle] = useState();
    const [ready, getList] = useListStorage();
    const [list, setRandomList, generateNextWord, currentWord, removeCurrentWord, reset, notUsedWords] = useRandomWord();

    const [element, setHookStyle, setCurrentWord] = useLearn(generateNextWord, removeCurrentWord, reset);

    useEffect(() => {
        const { id, style } = router.query;

        setId(id);
        setStyle(style);
        setHookStyle(style);
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
                <title>Learning</title>
            </Head>

            {element}
        </>
    )
}

export default LearnPage;
