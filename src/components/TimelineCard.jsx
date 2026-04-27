
const TimelineCard = () => {
    return (
        <div className="flex">
            <div className="p-3 rounded-full bg-[white] border border-[#F2F2F2] mr-4">ICON</div>
            <div className="text-start">
                <div className="text-lg font-medium text-dark">TITLE</div>
                <div className="text-xs uppercase font-semibold text-grey mt-2">DATE-TIME</div>
            </div>
        </div>
    );
};

export default TimelineCard;