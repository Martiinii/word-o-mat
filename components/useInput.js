import { useState } from "react";

const useInput = ({ placeholder, className, defaultValue, ...props }) => {
    const [value, setValue] = useState(defaultValue ?? "");

    const input = (
        <input
            className={`in ${className ?? ""}`}
            placeholder={placeholder ?? ""}
            value={value}
            onChange={e => setValue(e.target.value)}
            {...props}
        />
    );

    return [value, input, setValue];
}

export default useInput;