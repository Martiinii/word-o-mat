import Head from "next/head";
import NewListContainer from '../../components/NewList/NewListContainer'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import useListStorage from '../../components/useListStorage';
import useLocalList from '../../components/useLocalList'

const EditList = () => {
    const router = useRouter();

    const [id, setId] = useState();
    const [isReady, getList, lists, createList, removeList, updateList] = useListStorage();
    const [isLocalReady, setLocalReady, list, updateLocalList, title, updateTitle, words, updateWords] = useLocalList(getList(id));

    // Set id from router
    useEffect(() => {
        const { id } = router.query;
        setId(id);

    }, [router])

    // Update id
    useEffect(() => {
        if (isReady && id == 'new' && !isLocalReady) {
            const newId = createList();
            setId(newId);
        }
    }, [isReady, id, createList, isLocalReady]);

    // Update container with word list
    useEffect(() => {
        if (isReady && id && id != "new" && !isLocalReady) {
            updateLocalList(getList(id));
            setLocalReady();
        }
    }, [id, isReady, isLocalReady, updateLocalList, getList, setLocalReady]);

    useEffect(() => {
        if (isReady && isLocalReady) {
            updateList(id, list);
        }
    }, [isReady, isLocalReady, id, list, title, updateList]);

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
