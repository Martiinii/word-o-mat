import ContainerMotion from "../ContainerMotion"
import Table from "./Table";
import useInput from '../useInput';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ButtonComponent from "../ButtonComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

const NewListContainer = ({ ready, title, updateTitle, words, updateWords }) => {
    const [titleInputValue, titleInput, setTitleInput] = useInput({ placeholder: 'Title', className: 'text-center' })

    const [firstLoad, setFirstLoad] = useState(false);

    useEffect(() => {
        if(ready && !firstLoad) {
            setTitleInput(title);
            setFirstLoad(true);
        }
    }, [ready, title, setTitleInput, firstLoad]);

    useEffect(() => {
        updateTitle(titleInputValue)
    }, [titleInputValue, updateTitle]);


    const flipWords = () => {
        let temp = { ...words };
        temp.ids.forEach(id => {
            [temp[id].orig, temp[id].trans] = [temp[id].trans, temp[id].orig];
        });

        updateWords(temp);
    }


    return (
        <ContainerMotion className="max-w-full text-center bg-white p-5">
            <motion.div layout className="flex gap-5 justify-center items-center">
                <div className="flex-1" />
                {titleInput}
                <div className="flex-1 text-left">
                    <ButtonComponent className="text-xl md:text-3xl bg-sky-400 hover:bg-sky-500 focus:ring-sky-400" onClick={flipWords}>
                        <FontAwesomeIcon icon={faRotate} className="opacity-70" />
                    </ButtonComponent>
                </div>
            </motion.div>
            <Table words={words} setWords={updateWords} />
        </ContainerMotion>

    )
}


export default NewListContainer;