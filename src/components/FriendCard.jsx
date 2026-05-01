import Image from 'next/image';
import Link from 'next/link';

const FriendCard = ({ friend }) => {

    return (
        <Link href={`/friend/${friend.id}`} >
        <div className="cursor-pointer card bg-base-100 shadow-sm h-full p-6">
            <div className="card-body flex flex-col items-center text-center">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <Image
                            src={friend.picture}
                            alt={friend.name}
                            width={80}
                            height={80}
                        />
                    </div>
                </div>
                <h1 className='dark-text font-semibold text-xl capitalize mt-3'>{friend.name}</h1>
                <p className='grey-taxt text-xs mt-2'>{friend.days_since_contact}d ago</p>
                <div className='flex items-center gap-2 mt-2'>
                    {friend.tags.map((tag, idx) => {
                        return(
                            <span key={idx} className="badge badge-lg bg-[#D1FAE5] text-[#065F46] border-none font-medium uppercase">
                            {tag}
                        </span>
                        );
                    })}
                </div>
                <span className={`badge badge-lg ${friend.status === `almost_due` ? `bg-[#F59E0B]` : (friend.status === `on_track` ? `bg-[#244D3F]` : `bg-[#EF4444]`)} text-base-100 border-none capitalize mt-2 font-medium`}>
                    {friend.status === "on_track" ? friend.status.split("_").join("-") : friend.status.split("_").join(" ")}
                </span>
            </div>
        </div>
        </Link>
    );
};

export default FriendCard;