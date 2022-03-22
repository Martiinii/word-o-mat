import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Container from "../Container";

const AddCard = () => {
    return (
        <Link href={`/edit/new`} passHref>
            <Container as="a" className="group text-6xl">
                <FontAwesomeIcon className="m-5 text-sky-600 group-hover:text-sky-700 transition-all" icon={faPlus} />
            </Container>
        </Link>
    );
}

export default AddCard;