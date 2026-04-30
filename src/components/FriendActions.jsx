"use client";

import { use } from "react";
import { TimelineContext } from "@/context/TimelineContext";
import { toast } from "react-toastify";

const FriendActions = ({ name }) => {
    const { setTimelineList } = use(TimelineContext)

    const handleClick = (actionType) => {
        setTimelineList((a) => [...a,
        {
            "id": a.length,
            "name": name,
            "type": actionType,
            "date": new Date().toISOString().split('T')[0],
        }
        ]);
        toast.success(`${actionType} with ${name}`);
    }

    return (
        <div className="card bg-base-100 shadow-sm grid grid-cols-3 gap-5 p-5">

            <div onClick={() => handleClick("call")} className="cursor-pointer card bg-base-100 shadow-sm border-2">
                <div className="card-body flex flex-col items-center text-center">
                    <h1 className='text-3xl'>CallICON</h1>
                    <p>Call</p>
                </div>
            </div>

            <div onClick={() => handleClick("text")} className="cursor-pointer card bg-base-100 shadow-sm">
                <div className="card-body flex flex-col items-center text-center">
                    <h1 className='text-3xl'>TextICON</h1>
                    <p>Text</p>
                </div>
            </div>

            <div onClick={() => handleClick("video")} className="cursor-pointer card bg-base-100 shadow-sm">
                <div className="card-body flex flex-col items-center text-center">
                    <h1 className='text-3xl'>VideoICON</h1>
                    <p>Video</p>
                </div>
            </div>

        </div>
    );
};

export default FriendActions;