import { useEffect } from "react";
import useListStorage from "../useListStorage";
import useLocalStorage from "../useLocalStorage";
import AddCard from "./AddCard";
import ListItem from "./ListItem";

const ListLogic = () => {
    const [ready, getList, lists, createList, removeList] = useListStorage();

    return (
        <>
            {lists.map(list => <ListItem {...list} key={list.date} removeList={() => {removeList(`l${list.date}`)}} />)}
            <AddCard />
        </>
    );
}


export default ListLogic;