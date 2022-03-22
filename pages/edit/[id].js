import Template from '../../components/Template'
import NewListContainer from '../../components/NewList/NewListContainer'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import useListStorage from '../../components/useListStorage';
import useLocalList from '../../components/useLocalList'

const EditList = () => {
    const router = useRouter();

    const [id, setId] = useState()
    const [ready, getList, lists, createList, removeList, updateList, getNewestId] = useListStorage();
    const [lReady, setlReady, list, updateLocalList, title, updateTitle, words, updateWords] = useLocalList(getList(id));

    useEffect(() => {
        const { id } = router.query;
        setId(id);
    }, [router])

    // Update id
    useEffect(() => {
        if (ready && id == 'new') {
            const newId = createList();
            setId(newId);
        }
    }, [router, ready, id]);

    // Update container with word list
    useEffect(() => {
        if (ready && id) {
            updateLocalList(getList(id));
            setlReady();
        }
    }, [id, ready]);

    useEffect(() => {
        if (ready && lReady) {
            updateList(id, list);
        }
    }, [title, words]);

    return (
        <Template wrap title={title || 'Editing list'}>
            <NewListContainer ready={lReady} list={list} updateList={updateLocalList} title={title} updateTitle={updateTitle} words={words} updateWords={updateWords} />
        </Template>
    )
}

export default EditList;
