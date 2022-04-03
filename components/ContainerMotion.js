import { motion } from 'framer-motion';
import React from 'react';

const ContainerMotion = ({ children, className, ...props }) => {
    return (
        <motion.div
            layout
            className={`cont ${className ?? ""}`}
            initial={{scale: 1, opacity: 0}}
            animate={{opacity: 1}}
            exit={{scale: .5, opacity: 0}}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export default ContainerMotion;