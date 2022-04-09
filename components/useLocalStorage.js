import { useState, useEffect, useCallback } from "react";

const initialize = (key, initialValue) => {
    try {
        const item = window.localStorage.getItem(key);
        if (item && item !== "undefined") {
            return JSON.parse(item);
        }

        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    } catch (error) {
        console.error(error);
        return initialValue;
    }
};


const useLocalStorage = (key, initialValue) => {
    const [iv] = useState(initialValue);

    const [storedValue, setStoredValue] = useState(initialValue);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setStoredValue(initialize(key, iv))
    }, [key, iv]);

    useEffect(() => {
        setIsReady(true);
    }, []);


    const setValue = useCallback((value) => {
        try {
            setStoredValue(value);
        } catch (error) {
            console.error(error);
        }
    }, [setStoredValue]);

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue])

    return [storedValue, setValue, isReady];
}


export default useLocalStorage;