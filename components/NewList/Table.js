import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import useNewTableInput from "./useNewTableInput";
import TableInput from "./TableInput"
import { motion } from "framer-motion";

const Table = ({ words, setWords }) => {
    const [newInput, original, originalInput, translation, translationInput, resetInputs] = useNewTableInput();

    const newestInput = useRef(null);
    const [wasOrig, setWasOrig] = useState(null);


    const addWord = useCallback((orig, trans) => {
        const date = Date.now();
        const id = `w${date}`;
        let temp = { ...words }

        temp.ids.push(id)
        temp[id] = { date, orig, trans };
        setWords(temp);
    }, [words, setWords]);

    const updateOriginal = useCallback((id, newOrig) => {
        let temp = { ...words };
        temp[id].orig = newOrig;
        setWords(temp);

    }, [words, setWords]);

    const updateTranslation = useCallback((id, newTrans) => {
        let temp = { ...words };
        temp[id].trans = newTrans;
        setWords(temp);
    }, [words, setWords]);

    const removeWord = useCallback((id) => {
        let temp = { ...words };
        delete temp[id];

        temp.ids = temp.ids.filter(i => i != id);
        setWords(temp);
    }, [words, setWords]);

    // Add new word
    useEffect(() => {
        if (original.trim() || translation.trim()) {
            addWord(original, translation);
            resetInputs();
            setWasOrig(!!original.trim());
        }
    }, [original, translation, resetInputs, addWord]);


    const elements = useMemo(() => {
        return words.ids.map((id, index, array) => {
            if (index + 1 === array.length) {
                const dynamicProp = {};

                if (wasOrig) {
                    dynamicProp.orgRef = newestInput;
                } else {
                    dynamicProp.transRef = newestInput;
                }

                return (
                    <TableInput
                        date={words[id].date}
                        original={words[id].orig}
                        translation={words[id].trans}

                        setOriginal={updateOriginal}
                        setTranslation={updateTranslation}
                        handleClick={() => { removeWord(`w${words[id].date}`) }}
                        key={words[id].date}
                        {...dynamicProp}

                    />
                )
            } else {
                return (
                    <TableInput
                        date={words[id].date}
                        original={words[id].orig}
                        translation={words[id].trans}

                        setOriginal={updateOriginal}
                        setTranslation={updateTranslation}
                        handleClick={() => { removeWord(`w${words[id].date}`) }}
                        key={words[id].date}
                    />
                )
            }

        });
    }, [words, removeWord, updateOriginal, updateTranslation, wasOrig]);

    // Focus on input
    useEffect(() => {
        if (newestInput.current) {
            newestInput.current.focus();
        }
    }, [original, translation]);


    const variants = {
        hidden: {
            scale: .5,
            opacity: 0,
        },

        visible: {
            transition: {
                duration: .6,
                type: "ease-in-out"
            },
            opacity: 1,
            scale: 1,
        }
    }

    return (

        <motion.div layout className="overflow-x-auto mt-10 overflow-hidden" variants={variants} initial="hidden" animate="visible">
            <motion.table layout className="table-auto border-collapse w-full overflow-hidden">
                <motion.thead layout>
                    <tr>
                        <th className="p-4 border-b-2 border-slate-500 w-16" />
                        <th className="p-4 border-b-2 border-slate-500">Original</th>
                        <th className="p-4 border-b-2 border-slate-500">Translation</th>
                        <th className="p-4 border-b-2 border-slate-500">Creation date</th>
                    </tr>
                </motion.thead>
                <motion.tbody layout>
                    {elements}
                    {newInput}
                </motion.tbody>
            </motion.table>
        </motion.div>

    )
}

export default Table;