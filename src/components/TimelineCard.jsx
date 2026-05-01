import dateFormat from "@/utils/dateFormat";
import Image from "next/image";
import callIcon from '@/assets/call.png';
import textIcon from '@/assets/text.png';
import videoIcon from '@/assets/video.png';

const TimelineCard = ({ timeline }) => {
    const iconObj = {
        "call": callIcon,
        "text": textIcon,
        "video": videoIcon,
    };

    return (
        <div className="flex bg-base-100 p-4">
            <div className="p-3 rounded-full bg-[white] border border-[#F2F2F2] mr-4">
                <div className=''>
                    <Image
                        src={iconObj[timeline.type]}
                        alt={timeline.type}
                        width={40}
                        height={40}
                    />
                </div>
            </div>
            <div className="text-start">
                <div className="text-md grey-text">
                    <span className="green-text text-xl font-medium capitalize">{timeline.type} </span>{` with ${timeline.name}`}
                </div>
                <div className="text-base capitalize font-medium grey-text mt-2">{dateFormat(timeline.date)}</div>
            </div>
        </div>
    );
};

export default TimelineCard;