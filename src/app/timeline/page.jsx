import TimelineCard from "@/components/TimelineCard";

const TimelinePage = () => {
    return (
        <div>
            <h1 className="text-4xl">Timeline</h1>
            <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1">Filter timeline</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>

            {
                [].map((timeline, index)=>{
                    return(
                        <TimelineCard key={index} />
                    )
                })
            }

        </div>
    );
};

export default TimelinePage;