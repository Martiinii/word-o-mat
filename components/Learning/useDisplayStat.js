import { useEffect, useState } from "react";
import StatItem from "../ListComponents/StatItem"
import ButtonComponent from "../ButtonComponent";

const useDisplayStat = (stats, resetList) => {
    const [stat, setStat] = useState("0 mistakes");


    useEffect(() => {
        let mistakes = stats.amount - stats.total;
        setStat(`${mistakes} ${mistakes == 1 ? "mistake" : "mistakes"}`)
    }, [stats])


    const element = (
        <>
            <span className="text-2xl font-semibold m-3">End of learning!</span>
            <StatItem value={stat} />
            <ButtonComponent className="bg-emerald-400 hover:bg-emerald-500 focus:ring-emerald-400" onClick={resetList}>Learn again</ButtonComponent>
        </>
    )
    
    return [element];
}

export default useDisplayStat;