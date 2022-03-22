import Link from "next/link";
import Button from "./Button";

const ButtonsContainer = ({ date, removeList }) => {
    return (
        <div
            className="flex flex-col items-center gap-2 md:gap-5 md:flex-row md:items-start">
            <Link href={`/edit/l${date}`} passHref><Button edit /></Link>
            <Button learn />
            <Button remove onClick={removeList} />
        </div>
    );
}

export default ButtonsContainer;