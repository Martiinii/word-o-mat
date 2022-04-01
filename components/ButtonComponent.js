const ButtonComponent = ({children, className, ...props}) => {
    return (
        <button className={`btn ${className}`} {...props}>{children}</button>
    )
}

export default ButtonComponent;