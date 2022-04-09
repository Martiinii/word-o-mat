import { useState, useEffect, useCallback } from "react";
import useLocalStorage from './useLocalStorage'


const useListStorage = () => {
    const [listRaw, setListRaw, isReady] = useLocalStorage('lists', { ids: [] });
    const [lists, setLists] = useState([]);

    // Returns new list with added empty list
    const pushNewList = useCallback((id, date) => {
        let temp = {...listRaw};
        temp.ids.push(id);
        temp[id] = { title: 'Untitled list', date: date, words: {ids: []} }

        return temp;
    }, [listRaw]);

    // Returns new list with removed list by id
    const removeExistingList = id => {
        let temp = {...listRaw};
        temp.ids = temp.ids.filter(i => i != id);
        delete temp[id];

        return temp;
    }

    // Returns list by id
    const getList = useCallback((id) => {
        if(!listRaw?.ids || !listRaw.ids.includes(id)) return {title: 'Untitled list', date: undefined, words: {ids: []}};
        return listRaw[id];
    }, [listRaw]);

    // Returns all lists
    const getLists = useCallback(() => {
        let lists = [];

        listRaw.ids.forEach(id => {
            lists.push(listRaw[id]);
        })

        return lists;
    }, [listRaw]);

    const createList = useCallback(() => {
        const date = Date.now();
        const id = `l${date}`;

        setListRaw(pushNewList(id, date));
        return id;
    }, [setListRaw, pushNewList]);

    const removeList = id => {
        setListRaw(removeExistingList(id));
    } 

    const updateList = useCallback((id, newList) => {
        if(!id && !newList) return;

        setListRaw(c => {const temp = {...c}; temp[id] = newList; return temp});

    }, [setListRaw]);

    useEffect(() => {
        if(isReady) {
            setLists(getLists());
        }
    }, [isReady, getLists])

    return [isReady, getList, lists, createList, removeList, updateList];
}

export default useListStorage;