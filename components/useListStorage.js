import { useState, useEffect } from "react";
import useLocalStorage from './useLocalStorage'


const useListStorage = () => {
    const [listRaw, setListRaw, isReady] = useLocalStorage('lists', { ids: [] });
    const [lists, setLists] = useState([]);

    // Returns new list with added empty list
    const pushNewList = (id, date) => {
        let temp = {...listRaw};
        temp.ids.push(id);
        temp[id] = { title: 'Untitled list', date: date, words: {ids: []} }

        return temp;
    };

    // Returns new list with removed list by id
    const removeExistingList = id => {
        let temp = {...listRaw};
        temp.ids = temp.ids.filter(i => i != id);
        delete temp[id];

        return temp;
    }

    // Returns list by id
    const getList = id => {
        if(!listRaw?.ids || !listRaw.ids.includes(id)) return {title: 'Untitled list', date: undefined, words: {ids: []}};
        return listRaw[id];
    }

    // Returns all lists
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

    // Helper function
    const updateLists = () => {
        setLists(getLists());
    }

    useEffect(() => {
        if(isReady) {
            updateLists();
        }
    }, [isReady, listRaw])

    return [isReady, getList, lists, createList, removeList, updateList];
}

export default useListStorage;