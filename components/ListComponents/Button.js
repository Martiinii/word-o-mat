import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import ButtonComponent from "../ButtonComponent";

const Button = ({ edit, learn, remove, ...props }) => {

    return (
        <ButtonComponent
            className={`${learn ? 'text-2xl md:text-5xl p-1 md:p-4' : 'text-2xl md:text-3xl p-1 md:p-3'} min-h-full md:min-h-fit ${edit ? 'bg-yellow-400 hover:bg-yellow-500 shadow-yellow-700/40 focus:ring-yellow-400' : learn ? 'bg-green-500 hover:bg-green-600 shadow-green-900/40 focus:ring-green-500' : 'bg-rose-700 hover:bg-rose-800 shadow-rose-900/40 focus:ring-rose-700'}`}
            {...props}
        >
            {edit
                ? <FontAwesomeIcon className="opacity-60 fa-fw" icon={faPenToSquare} />
                : learn
                    ? <FontAwesomeIcon className="opacity-60 fa-fw" icon={faBook} />
                    : <FontAwesomeIcon className="opacity-60 fa-fw" icon={faTrashCan} />
            }

        </ButtonComponent>
    );
}

export default Button;