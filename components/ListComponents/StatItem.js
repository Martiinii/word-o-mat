const StatItem = ({value, className}) => {
    return (
        <div
            className={`bg-sky-200 px-2 py-2 md:py-3 md:px-5 w-full text-center rounded-full text-md sm:text-xl ${className}`}
        >
        <span>{value}</span>
        </div>
    );
}

export default StatItem;