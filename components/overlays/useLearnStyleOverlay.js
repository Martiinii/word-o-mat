import useOverlay from "./useOverlay";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";


const useLearnStyleOverlay = () => {
    const router = useRouter();
    const [overlay, showOverlay, hideOverlay, visible, setElement] = useOverlay(null);
    const [id, setId] = useState('');

    const showLearnOverlay = id => {
        setId(id);
        showOverlay();
    }

    const element = (
        <>
            <span className="text-center font-extrabold text-3xl my-5">Choose learning style</span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <IconButton icon={faLayerGroup} className="bg-yellow-400 hover:bg-amber-400 focus:ring-yellow-400 shadow-yellow-800/60" onClick={() => router.push(`/learn/flashcards/${id}`)}>
                    <span>Flashcards</span>
                </IconButton>

                <IconButton icon={faKeyboard} className="bg-sky-400 hover:bg-sky-500 focus:ring-sky-300 shadow-sky-800/60" onClick={() => router.push(`/learn/typing/${id}`)}>
                    <span>Typing</span>
                </IconButton>
            </div>
        </>
    );


    useEffect(() => setElement(element), [id]);

    return [overlay, showLearnOverlay, hideOverlay];
}


const IconButton = ({ icon, children, className, onClick }) => {
    return (
        <button className={`p-3 md:p-5 rounded-xl flex flex-col gap-4 items-center justify-center transition-all focus:outline-none focus:ring-4 focus:ring-offset-4 shadow-md ${className}`} onClick={onClick}>
            <FontAwesomeIcon className="text-5xl" fixedWidth icon={icon} />
            {children}
        </button>
    );
}

export default useLearnStyleOverlay;