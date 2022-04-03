const StatItem = ({ value, className }) => {
    return (
        <div
            className={`stat ${className ?? ""}`}
        >
            <span>{value}</span>
        </div>
    );
}

export default StatItem;