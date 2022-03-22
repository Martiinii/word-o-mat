import { useMemo } from "react";
import Container from "../Container";
import ButtonsContainer from "./ButtonsContainer";
import StatItem from "./StatItem";

const ListItem = ({ title, date, words, removeList }) => {
    const dateFormatted = useMemo(() => {
        let d = new Date(date);
        return d.toLocaleDateString();
    }, [date]);


    return (
        <Container className="flex flex-col gap-5 items-center">
            <h2 className="font-bold text-md sm:text-xl md:text-xl text-center">{title}</h2>
            <StatItem value={`${words.ids.length} ${words.ids.length == 1 ? 'word' : 'words'}`} />
            <StatItem value={dateFormatted} />
            <ButtonsContainer date={date} removeList={removeList} />
        </Container>
    );
}

export default ListItem