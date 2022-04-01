import useOverlay from "./useOverlay";
import { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";

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
            <span className="text-center font-extrabold text-3xl my-5">Confirmation needed</span>
            <span className="text-center">Please confirm, that you really want to remove list named: <b>{list.title}</b>.</span>
            <span className="mb-3">This action cannot be undone!</span>

            <div className="grid gap-4 max-w-xs w-full">
                <ButtonComponent onClick={handleRemove} className="bg-red-600 text-white hover:bg-red-700 focus:ring-red-400 ">Remove</ButtonComponent>
                <ButtonComponent onClick={hideOverlay} className="bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-400">Cancel</ButtonComponent>
            </div>
        </>
    );

    useEffect(() => setElement(element), [list]);

    return [overlay, openConfirmation, visible];
}

export default useDeleteOverlay;