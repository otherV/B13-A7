"use client";

import { use } from "react";
import { TimelineContext } from "@/context/TimelineContext";
import { toast } from "react-toastify";
import callIcon from '@/assets/call.png';
import textIcon from '@/assets/text.png';
import videoIcon from '@/assets/video.png';
import Image from "next/image";

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
        <div className="card bg-base-100 shadow-sm p-5 mt-6">

            <h1 className="font-medium text-xl">Quick Check-In</h1>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
            <div onClick={() => handleClick("call")} className="bg-[#F8FAFC] cursor-pointer card shadow-sm">
                <div className="card-body flex flex-col items-center text-center">
                    <div className=''>
                        <Image
                            src={callIcon}
                            alt={`call`}
                            width={32}
                            height={32}
                        />
                    </div>
                    <p>Call</p>
                </div>
            </div>

            <div onClick={() => handleClick("text")} className="bg-[#F8FAFC] cursor-pointer card shadow-sm">
                <div className="card-body flex flex-col items-center text-center">
                    <div className=''>
                        <Image
                            src={textIcon}
                            alt={`text`}
                            width={32}
                            height={32}
                        />
                    </div>
                    <p>Text</p>
                </div>
            </div>

            <div onClick={() => handleClick("video")} className="bg-[#F8FAFC] cursor-pointer card shadow-sm">
                <div className="card-body flex flex-col items-center text-center">
                    <div className=''>
                        <Image
                            src={videoIcon}
                            alt={`video`}
                            width={32}
                            height={32}
                        />
                    </div>
                    <p>Video</p>
                </div>
            </div>
            </div>

        </div>
    );
};

export default FriendActions;