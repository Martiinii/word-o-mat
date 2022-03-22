import { useState } from "react";

const useInput = ({placeholder, className, defaultValue, ...props}) => {
    const [value, setValue] = useState(defaultValue ?? "");

    const input = (
        <input
            className={`bg-indigo-50 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-indigo-100 focus:ring-offset-4 text-indigo-900 p-1 px-2 font-medium w-36 md:font-medium md:text-lg md:p-2 md:px-4 md:w-fit transition-all ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={e => setValue(e.target.value)}
            {...props}
        />
    );

    return [value, input, setValue];
}

export default useInput;