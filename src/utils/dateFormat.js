
const dateFormat = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                });
};

export default dateFormat;