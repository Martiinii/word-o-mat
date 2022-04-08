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
            const valueToStore = value instanceof Function ? value(storedValue) : value;

            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }

    }, [key, setStoredValue, storedValue]);


    return [storedValue, setValue, isReady];
}


export default useLocalStorage;