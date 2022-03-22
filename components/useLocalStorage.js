import { useState, useEffect, useCallback } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(initialValue);
    const [ready, setReady] = useState(false);

    const initialize = (key) => {
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
    }

    useEffect(() => {
        setStoredValue(initialize(key));
    }, []);

    useEffect(() => {
        setReady(true);
    }, []);


    const setValue = useCallback((value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }

    }, [key, setStoredValue]);


    return [storedValue, setValue, ready];
}


export default useLocalStorage;