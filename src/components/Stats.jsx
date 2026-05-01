"use client";

import { use } from "react";
import { TimelineContext } from "@/context/TimelineContext";

const Stats = ({
    totalFriends,
    onTrack,
    needAttention
}) => {
    const { timelineList } = use(TimelineContext);
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body flex flex-col items-center text-center">
                    <h1 className='green-text font-semibold text-3xl'>{totalFriends}</h1>
                    <p className="grey-text text-md">Total Friends</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body flex flex-col items-center text-center">
                    <h1 className='green-text font-semibold text-3xl'>{onTrack}</h1>
                    <p className="grey-text text-md">On Track</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body flex flex-col items-center text-center">
                    <h1 className='green-text font-semibold text-3xl'>{needAttention}</h1>
                    <p className="grey-text text-md">Need Attention</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body flex flex-col items-center text-center">
                    <h1 className='green-text font-semibold text-3xl'>{timelineList.length}</h1>
                    <p className="grey-text text-md">Interactions This Month</p>
                </div>
            </div>
        </section>
    );
};

export default Stats;