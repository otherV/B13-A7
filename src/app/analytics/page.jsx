"use client";

import { use } from "react";

import { TimelineContext } from "@/context/TimelineContext";
import Chart from '@/components/Chart';

const AnalyticsPage = () => {
    const { timelineList } = use(TimelineContext);
    const countZ = timelineList.reduce(
        (acc, itm) => {
            if (itm.type === "call") acc["call"]++;
            if (itm.type === "text") acc["text"]++;
            if (itm.type === "video") acc["video"]++;
            return acc;
        },
        { "call": 0, "text": 0, "video": 0 }
    );
    const data = [
        { name: 'Call', value: countZ.call, fill: '#244d3f' },
        { name: 'Text', value: countZ.text, fill: '#7f37f5' },
        { name: 'Video', value: countZ.video, fill: '#37a163' },
    ];

    return (
        <div>
            <h1 className="text-4xl">
                Friendship Analytics
            </h1>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className="card-actions justify-start">
                        <h1 className="text-xl">
                            By Interaction Type
                        </h1>
                    </div>
                    <div className="w-full flex flex-row justify-center">
                        <div className="w-1/3">
                        <Chart data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPage;