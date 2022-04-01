import { AnimatePresence, motion } from "framer-motion";
import useListStorage from "../useListStorage";
import AddCard from "./AddCard";
import ListItem from "./ListItem";
import { ListProvider } from "./ListContext";

const ListLogic = ({ showRemoveOverlay, showLearnOverlay }) => {
    const [ready, getList, lists, createList, removeList] = useListStorage();

    return (
        <motion.div
            layout
            className="flex flex-wrap gap-1 md:gap-5 p-5 justify-center items-center"
        >
            <ListProvider value={{showRemoveOverlay, showLearnOverlay, removeList}}>
                <AnimatePresence>
                    {lists.map(list => <ListItem list={list} key={list.date} />)}
                    <AddCard />
                </AnimatePresence>
            </ListProvider>
        </motion.div>
    );
}


export default ListLogic;