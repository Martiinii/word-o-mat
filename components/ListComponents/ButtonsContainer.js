import { useContext } from "react";
import Button from "./Button";
import ListContext from "./ListContext";
import { useRouter } from "next/router";

const ButtonsContainer = ({ list, className }) => {
    const fn = useContext(ListContext);
    const router = useRouter();

    return (
        <div
            className={`flex flex-row items-center gap-2 md:gap-5 md:items-start ${className}`}>
            <Button edit onClick={() => router.push(`/edit/l${list.date}`)} />
            <Button learn onClick={() => fn.showLearnOverlay(`l${list.date}`)} />
            <Button remove onClick={() => fn.showRemoveOverlay(list, () => fn.removeList)} />
        </div>
    );
}

export default ButtonsContainer;