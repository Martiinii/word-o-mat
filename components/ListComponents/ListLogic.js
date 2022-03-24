import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import useListStorage from "../useListStorage";
import useLocalStorage from "../useLocalStorage";
import AddCard from "./AddCard";
import ListItem from "./ListItem";

const ListLogic = () => {
    const [ready, getList, lists, createList, removeList] = useListStorage();

    return (
        <motion.div
            layout
            className="flex flex-wrap gap-1 md:gap-5 p-5 justify-center items-center"
        >
            <AnimatePresence>
                {lists.map(list => <ListItem {...list} key={list.date} removeList={() => { removeList(`l${list.date}`) }} />)}
                <AddCard />
            </AnimatePresence>
            
        </motion.div>
    );
}


export default ListLogic;