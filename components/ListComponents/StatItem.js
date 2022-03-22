const StatItem = ({value}) => {
    return (
        <div
            className="bg-sky-200 py-3 px-5 w-full text-center rounded-full text-md sm:text-xl"
        >
        <span>{value}</span>
        </div>
    );
}

export default StatItem;