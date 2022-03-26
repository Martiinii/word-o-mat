import { useState, useEffect } from "react";


const useScrollLock = (lock) => {
    const [scrollLocked, setScrollLocked] = useState(lock || false);

    useEffect(() => {
        document.body.style.overflow = scrollLocked ? "hidden" : "auto";

        return () => (document.body.style.overflow = "auto");
    }, [scrollLocked])

    return [scrollLocked, setScrollLocked];
}

export default useScrollLock;