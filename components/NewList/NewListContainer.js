import ContainerMotion from "../ContainerMotion"
import Table from "./Table";
import useInput from '../useInput';
import { useEffect } from "react";
import { motion } from "framer-motion";

const NewListContainer = ({ ready, title, updateTitle, words, updateWords }) => {
    const [titleInputValue, titleInput, setTitleInput] = useInput({ placeholder: 'Title', className: 'text-center' })

    useEffect(() => {
        setTitleInput(title);
    }, [ready]);

    useEffect(() => {
        updateTitle(titleInputValue);
    }, [titleInputValue]);


    return (
        <ContainerMotion className="max-w-full text-center bg-white p-5">
            <motion.div layout>
                {titleInput}
            </motion.div>
                <Table words={words} setWords={updateWords} />
        </ContainerMotion>

    )
}


export default NewListContainer;