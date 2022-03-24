import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ContainerMotion from "../ContainerMotion";

const AddCard = () => {
    return (
        <ContainerMotion>
        <Link href={`/edit/new`} passHref>
            <a className="group text-6xl">
                <FontAwesomeIcon className="m-5 text-sky-600 group-hover:text-sky-700 transition-all" icon={faPlus} />
            </a>
        </Link>
        </ContainerMotion>
    );
}

export default AddCard;