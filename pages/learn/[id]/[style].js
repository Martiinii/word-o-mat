import Head from "next/head";
import { useRouter } from 'next/router'
import Container from "../../../components/Container";
import { useState, useEffect } from 'react';
import useRandomWord from "../../../components/Learning/useRandomWord";
import useListStorage from '../../../components/useListStorage';

const LearnPage = () => {
    const router = useRouter();

    const [id, setId] = useState();
    const [style, setStyle] = useState();
    const [ready, getList] = useListStorage();
    const [list, setRandomList, generateNextWord, currentWord, removeCurrentWord, reset, notUsedWords] = useRandomWord();

    useEffect(() => {
        const { id, style } = router.query;
        setId(id);
        setStyle(style);
    }, [router])

    // Update container with word list
    useEffect(() => {
        if (ready && id) {
            setRandomList(getList(id));
        }
    }, [id, ready]);

    // If local list is ready or if word is removed then generate new word
    useEffect(() => {
        if(ready) {
            generateNextWord();
        }
    }, [notUsedWords]);


    return (
        <>
            <Head>
                <title>Learning</title>
            </Head>

        </>
    )
}

export default LearnPage;
