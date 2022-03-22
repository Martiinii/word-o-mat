import Container from "../Container"
import Table from "./Table";
import useInput from '../useInput';
import { useEffect } from "react";

const NewListContainer = ({ ready, list, updateList, title, updateTitle, words, updateWords }) => {
    const [titleInputValue, titleInput, setTitleInput] = useInput({ placeholder: 'Title', className: 'text-center' })

    useEffect(() => {
        setTitleInput(title);
    }, [ready]);

    useEffect(() => {
        updateTitle(titleInputValue);
    }, [titleInputValue]);


    return (
        <Container className="max-w-full text-center">
            {titleInput}
            <Table words={words} setWords={updateWords} />
        </Container>
    )
}


export default NewListContainer;