import { motion } from 'framer-motion';
import React from 'react';

const ContainerMotion = ({ children, noPadding, className, ...props }) => {
    return (
        <motion.div
            layout
            className={`bg-white m-2 md:m-5 ${noPadding || 'p-3 md:p-5'} rounded-xl md:rounded-3xl shadow-black/50 shadow-lg w-fit font-medium ${className}`}
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