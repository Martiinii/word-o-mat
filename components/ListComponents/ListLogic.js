import { AnimatePresence, motion } from "framer-motion";
import useListStorage from "../useListStorage";
import AddCard from "./AddCard";
import ListItem from "./ListItem";

const ListLogic = ({showOverlay}) => {
    const [ready, getList, lists, createList, removeList] = useListStorage();

    return (
        <motion.div
            layout
            className="flex flex-wrap gap-1 md:gap-5 p-5 justify-center items-center"
        >
            <AnimatePresence>
                {lists.map(list => <ListItem {...list} key={list.date} removeList={() => showOverlay(list, () => removeList)} />)}
                <AddCard />
            </AnimatePresence>
            
        </motion.div>
    );
}


export default ListLogic;