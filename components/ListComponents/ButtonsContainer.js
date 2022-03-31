import Link from "next/link";
import Button from "./Button";

const ButtonsContainer = ({ date, removeList, startLearning, className }) => {
    return (
        <div
            className={`flex flex-row items-center gap-2 md:gap-5 md:items-start ${className}`}>
            <Link href={`/edit/l${date}`} passHref><Button edit /></Link>
            <Button learn onClick={() => startLearning(`l${date}`)} />
            <Button remove onClick={removeList} />
        </div>
    );
}

export default ButtonsContainer;