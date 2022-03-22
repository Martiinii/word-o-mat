import { useState, useEffect, useCallback } from "react";
import useLocalStorage from './useLocalStorage'


const useListStorage = () => {
    const [listRaw, setListRaw, ready] = useLocalStorage('lists', { ids: [] });
    const [lists, setLists] = useState([]);

    // Helpers
    const pushNewList = (id, date) => {
        let temp = {...listRaw};
        temp.ids.push(id);
        temp[id] = { title: 'Untitled list', date: date, words: {ids: []} }

        return temp;
    };

    const removeExistingList = id => {
        let temp = {...listRaw};
        temp.ids = temp.ids.filter(i => i != id);
        delete temp[id];

        return temp;
    }

    const updateLists = () => {
        setLists(getLists());
    }

    // Actual functions
    const getList = id => {
        if(!listRaw?.ids || !listRaw.ids.includes(id)) return {title: 'Untitled list', date: undefined, words: {ids: []}};
        return listRaw[id];
    }

    const getLists = () => {
        let lists = [];

        listRaw.ids.forEach(id => {
            lists.push(listRaw[id]);
        })

        return lists;
    }

    const createList = () => {
        const date = Date.now();
        const id = `l${date}`;

        setListRaw(pushNewList(id, date));
        return id;
    }

    const removeList = id => {
        setListRaw(removeExistingList(id));
    } 

    const updateList = (id, newList) => {
        if(!id && !newList) return;

        let temp = {...listRaw};
        temp[id] = newList;


        setListRaw(temp);
    }

    const getNewestId = () => {
        return listRaw.ids.at(-1);
    }

    useEffect(() => {
        if(ready) {
            updateLists();
        }
    }, [ready, listRaw])

    return [ready, getList, lists, createList, removeList, updateList, getNewestId];
}

export default useListStorage;