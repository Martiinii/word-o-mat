import { useMemo, useState } from "react";

const useInput = ({ placeholder, className, defaultValue, ...props }) => {
    const [value, setValue] = useState(defaultValue ?? "");

    const input = useMemo(() => {
        return (
            <input
                className={`in ${className ?? ""}`}
                placeholder={placeholder ?? ""}
                value={value}
                onChange={e => setValue(e.target.value)}
                {...props}
            />
        )
    }, [className, placeholder, value, props]);

    return [value, input, setValue];
}

export default useInput;