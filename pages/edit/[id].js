import Head from "next/head";
import NewListContainer from '../../components/NewList/NewListContainer'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import useListStorage from '../../components/useListStorage';
import useLocalList from '../../components/useLocalList'

const EditList = () => {
    const router = useRouter();

    const [id, setId] = useState()
    const [isReady, getList, lists, createList, removeList, updateList] = useListStorage();
    const [isLocalReady, setLocalReady, list, updateLocalList, title, updateTitle, words, updateWords] = useLocalList(getList(id));

    // Set id from router
    useEffect(() => {
        const { id } = router.query;
        setId(id);
    }, [router])

    // Update id
    useEffect(() => {
        if (isReady && id == 'new') {
            const newId = createList();
            setId(newId);
        }
    }, [router, isReady, id]);

    // Update container with word list
    useEffect(() => {
        if (isReady && id) {
            updateLocalList(getList(id));
            setLocalReady();
        }
    }, [id, isReady]);

    useEffect(() => {
        if (isReady && isLocalReady) {
            updateList(id, list);
        }
    }, [title, words]);

    return (
        <>
            <Head>
                <title>{title || 'Editing list'}</title>
            </Head>
            <NewListContainer ready={isLocalReady} list={list} updateList={updateLocalList} title={title} updateTitle={updateTitle} words={words} updateWords={updateWords} />
        </>
    )
}

export default EditList;
