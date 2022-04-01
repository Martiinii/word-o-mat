import { useMemo } from "react";
import ContainerMotion from "../ContainerMotion";
import ButtonsContainer from "./ButtonsContainer";
import StatItem from "./StatItem";

const ListItem = ({ list }) => {
    const dateFormatted = useMemo(() => {
        let d = new Date(list.date);
        return d.toLocaleDateString();
    }, [list.date]);

    return (
        <ContainerMotion
            className="grid gap-2 md:gap-6 overflow-auto"
        >
            <h2 className="col-span-2 md:col-auto font-bold text-md sm:text-xl md:text-xl text-center">{list.title}</h2>
            <StatItem value={`${list.words.ids.length} ${list.words.ids.length == 1 ? 'word' : 'words'}`} />
            <StatItem className="row-start-3" value={dateFormatted} />
            <ButtonsContainer className="row-span-2 md:row-auto" list={list} />
        </ContainerMotion>
    );
}

export default ListItem