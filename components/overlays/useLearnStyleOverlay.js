import useOverlay from "./useOverlay";
import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import ButtonComponent from "../ButtonComponent";


const useLearnStyleOverlay = () => {
    const router = useRouter();
    const [overlay, showOverlay, hideOverlay, visible, setElement] = useOverlay(null);
    const [id, setId] = useState('');

    const showLearnOverlay = id => {
        setId(id);
        showOverlay();
    }

    const element = useMemo(() => {
        return (
            <>
                <span className="text-center font-extrabold text-3xl my-5">Choose learning style</span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <IconButton icon={faLayerGroup} className="bg-yellow-400 hover:bg-amber-400 focus:ring-yellow-400 shadow-yellow-800/60" onClick={() => router.push(`/learn/flashcards/${id}`)}>
                        <span className="opacity-80">Flashcards</span>
                    </IconButton>

                    <IconButton icon={faKeyboard} className="bg-sky-400 hover:bg-sky-500 focus:ring-sky-300 shadow-sky-800/60" onClick={() => router.push(`/learn/typing/${id}`)}>
                        <span className="opacity-80">Typing</span>
                    </IconButton>
                </div>
            </>
        )
    }, [router, id]);


    useEffect(() => { setElement(element) }, [setElement, element]);

    return [overlay, showLearnOverlay, hideOverlay];
}


const IconButton = ({ icon, children, className, onClick }) => {
    return (
        <ButtonComponent className={`md:p-5 flex flex-col gap-4 items-center justify-center font-bold ${className}`} onClick={onClick}>
            <FontAwesomeIcon className="text-5xl opacity-70" fixedWidth icon={icon} />
            {children}
        </ButtonComponent>
    );
}

export default useLearnStyleOverlay;