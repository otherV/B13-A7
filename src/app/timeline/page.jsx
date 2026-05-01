"use client";

import { use, useState } from "react";
import { TimelineContext } from "@/context/TimelineContext";
import TimelineCard from "@/components/TimelineCard";

const TimelinePage = () => {
    const { timelineList } = use(TimelineContext);
    const [actType, setActType] = useState("any");

    return (
        <div>
            <h1 className="dark-text font-bold text-5xl">Timeline</h1>
            <select defaultValue="Filter Timeline" className="my-6 select">
                <option disabled={true}>Filter Timeline</option>
                <option onClick={() => setActType("any")}>Any</option>
                <option onClick={() => setActType("call")}>Call</option>
                <option onClick={() => setActType("text")}>Text</option>
                <option onClick={() => setActType("video")}>Video</option>
            </select>

            <div className="w-full flex flex-col gap-6">

                {
                    (actType === "any" ? timelineList : timelineList.filter((a) => a.type === actType)).map((timeline, index) => {
                        return (
                            <TimelineCard key={index} timeline={timeline} />
                        )
                    })
                }

            </div>

        </div>
    );
};

export default TimelinePage;