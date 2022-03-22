import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React from "react";

const Button = React.forwardRef(({ edit, learn, remove, ...props }, ref) => {
    return (
        <motion.button
            className={`${learn ? 'text-3xl md:text-5xl p-2 md:p-4' : 'text-3xl p-2 md:p-3'} rounded-md md:rounded-xl shadow-black/50 shadow-md ${edit ? 'bg-yellow-400' : learn ? 'bg-green-500' : 'bg-rose-700'}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: .9 }}
            ref={ref}
            {...props}
        >
            {edit
                ? <FontAwesomeIcon className="opacity-60 fa-fw" icon={faPenToSquare} />
                : learn
                    ? <FontAwesomeIcon className="opacity-60 fa-fw" icon={faBook} />
                    : <FontAwesomeIcon className="opacity-60 fa-fw" icon={faTrashCan} />
            }
        </motion.button>
    );

});

export default Button;