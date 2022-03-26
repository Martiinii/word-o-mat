import useOverlay from "./useOverlay";
import { useEffect, useState } from "react";


const useDeleteOverlay = () => {
    const [overlay, showOverlay, hideOverlay, visible, setElement] = useOverlay(null, "max-w-md");
    const [list, setList] = useState({title: 'Untitled list', date: null});
    const [action, setAction] = useState(null);

    const openConfirmation = (list, action) => {
        setList(list);
        setAction(action);
        showOverlay();
    }

    const handleRemove = () => {
        if(action != null) {
            action(`l${list.date}`);
        }

        hideOverlay();
    }

    const element = (
        <>
            <span className="font-extrabold text-3xl my-5">Confirmation needed</span>
            <span className="text-center mb-3">Please confirm, that you really want to remove list named: <b>{list.title}</b>. This action cannot be undone!</span>

            <div className="grid gap-4 max-w-xs w-full">
                <button onClick={handleRemove} className="border-4 border-red-600 bg-red-600 text-white font-semibold rounded-xl p-3 transition-all focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-offset-4">Remove</button>
                <button onClick={hideOverlay} className="border-4 border-orange-500 text-orange-700 font-semibold rounded-xl p-3 hover:bg-orange-500 focus:bg-orange-500 hover:text-white focus:text-white transition-all focus:outline-none focus:ring-4 focus:ring-orange-400 focus:ring-offset-4">Cancel</button>
            </div>
        </>
    );

    useEffect(() => setElement(element), [list]);

    return [overlay, openConfirmation, visible];
}

export default useDeleteOverlay;