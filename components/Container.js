import React from 'react';

const Container = React.forwardRef(({ children, className, as, ...props }, ref) => {
    return React.createElement(
        as,
        {
            className: `cont ${className}`,
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