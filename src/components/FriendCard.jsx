import Image from 'next/image';
import placeHolder from '@/assets/instagram.png';
import Link from 'next/link';

const FriendCard = ({ friend }) => {

    return (
        <Link href={`/friend/${friend.id}`} >
        <div className="cursor-pointer card bg-base-100 shadow-sm">
            <div className="card-body flex flex-col items-center text-center">
                <div className="avatar">
                    <div className="w-24 rounded-full border-2">
                        <Image
                            src={friend.picture}
                            alt={friend.name}
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
                <h1 className='text-3xl capitalize'>{friend.name}</h1>
                <p>{friend.days_since_contact}d ago</p>
                <div className='flex items-center gap-2'>
                    {friend.tags.map((tag, idx) => {
                        return(
                            <span key={idx} className="badge badge-lg bg-[#D1FAE5] text-[#065F46] border-none uppercase">
                            {tag}
                        </span>
                        );
                    })}
                </div>
                <span className="badge badge-lg bg-[#F59E0B] text-base-100 border-none capitalize">
                    {friend.status}
                </span>
            </div>
        </div>
        </Link>
    );
};

export default FriendCard;