import { useState } from "react";

const useDynamicStat = ({ className } = {}) => {
    const [children, setChildren] = useState();

    const element = (
        <div className={`stat ${className ?? ""}`}>
            <span>{children}</span>
        </div>
    )

    return [element, setChildren];

}

export default useDynamicStat;