import Link from "next/link";
import Button from "./Button";

const ButtonsContainer = ({ date, removeList, className }) => {
    return (
        <div
            className={`flex flex-row items-center gap-2 md:gap-5 md:items-start ${className}`}>
            <Link href={`/edit/l${date}`} passHref><Button edit /></Link>
            <Button learn />
            <Button remove onClick={removeList} />
        </div>
    );
}

export default ButtonsContainer;