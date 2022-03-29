import { useMemo } from "react";
import ContainerMotion from "../ContainerMotion";
import ButtonsContainer from "./ButtonsContainer";
import StatItem from "./StatItem";

const ListItem = ({ title, date, words, removeList, startLearning }) => {
    const dateFormatted = useMemo(() => {
        let d = new Date(date);
        return d.toLocaleDateString();
    }, [date]);

    return (
        <ContainerMotion
            className="grid gap-2 md:gap-6 overflow-auto"
        >
            <h2 className="col-span-2 md:col-auto font-bold text-md sm:text-xl md:text-xl text-center">{title}</h2>
            <StatItem value={`${words.ids.length} ${words.ids.length == 1 ? 'word' : 'words'}`} />
            <StatItem className="row-start-3" value={dateFormatted} />
            <ButtonsContainer className="row-span-2 md:row-auto" date={date} removeList={removeList} startLearning={startLearning} />
        </ContainerMotion>
    );
}

export default ListItem