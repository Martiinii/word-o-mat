import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useMemo } from "react";

const ExistingInput = ({ original, setOriginal, translation, setTranslation, date, handleClick, orgRef, transRef }) => {

    const localOriginalChange = e => {
        setOriginal(`w${date}`, e.target.value);
    }

    const localTranslationChange = e => {
        setTranslation(`w${date}`, e.target.value);
    }

    const dateFormatted = useMemo(() => {
        let d = new Date(date);
        return d.toLocaleDateString();
    }, [date]);

    return (
        <motion.tr
            initial={{opacity: 0, scale: .7}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: .3}}
            layout
        >
            <motion.td className="border-b p-1 border-slate-300">
                <button onClick={handleClick} className="bg-red-600 text-white p-3 px-4 rounded-xl shadow-slate-400/50 shadow hover:bg-red-700 transition-all focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2 duration-300">
                    <FontAwesomeIcon icon={faClose} />
                </button>
            </motion.td>

            <motion.td className="p-4 border-b border-slate-300">
                <input
                    placeholder="Original"
                    value={original}
                    className="bg-indigo-50 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-indigo-100 focus:ring-offset-4 text-indigo-900 p-1 px-2 font-medium w-36 md:font-medium md:text-lg md:p-2 md:px-4 md:w-fit transition-all"
                    onChange={localOriginalChange}
                    ref={orgRef}
                />
            </motion.td>

            <motion.td className="p-4 border-b border-slate-300">
                <input
                    placeholder="Translation"
                    value={translation}
                    className="bg-indigo-50 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-indigo-100 focus:ring-offset-4 text-indigo-900 p-1 px-2 font-medium w-36 md:font-medium md:text-lg md:p-2 md:px-4 md:w-fit transition-all"
                    onChange={localTranslationChange}
                    ref={transRef}
                />
            </motion.td>

            <motion.td className="p-4 border-b border-slate-300">{dateFormatted}</motion.td>
        </motion.tr>
    );
}

export default ExistingInput;