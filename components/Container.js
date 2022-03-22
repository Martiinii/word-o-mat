import React from 'react';

const Container = React.forwardRef(({ children, className, as, ...props }, ref) => {
    return React.createElement(
        as,
        {
            className: `bg-white m-2 p-3 md:m-5 md:p-5 rounded-xl md:rounded-3xl shadow-black/50 shadow-lg w-fit font-medium ${className}`,
            ref: ref,
            ...props
        },
        children
    );
})

Container.defaultProps = {
    as: "div"
}

export default Container;