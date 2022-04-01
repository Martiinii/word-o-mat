import useInput from "../useInput";
import { motion } from "framer-motion";

const useNewTableInput = () => {
    const [original, originalInput, setOriginal] = useInput({ placeholder: 'Original' });
    const [translation, translationInput, setTranslation] = useInput({ placeholder: 'Translation' });

    const reset = () => {
        setOriginal('');
        setTranslation('');
    }

    const element = (
        <motion.tr
            layout
            initial={{opacity: 0, scale: .7}}
            animate={{opacity: 1, scale: 1, transition: {duration: .4, delay: .3}}}
        >
            <td className="p-4 border-b border-slate-300" />
            <td className="p-4 border-b border-slate-300">{originalInput}</td>
            <td className="p-4 border-b border-slate-300">{translationInput}</td>
            <td className="p-4 border-b border-slate-300" />
        </motion.tr>
    );

    return [element, original, originalInput, translation, translationInput, reset];
}

export default useNewTableInput;