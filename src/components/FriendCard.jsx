import Image from 'next/image';
import React from 'react';
import placeHolder from '@/assets/instagram.png';

const FriendCard = () => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body flex flex-col items-center text-center">
                <div className="avatar">
                    <div className="w-24 rounded-full border-2">
                        <Image src={placeHolder} alt={`friend`} />
                    </div>
                </div>
                <h1 className='text-3xl capitalize'>David Kim</h1>
                <p>62d ago</p>
                <span className="badge badge-lg bg-[#D1FAE5] text-[#065F46] border-none uppercase">
                    WORK
                </span>
                <span className="badge badge-lg bg-[#F59E0B] text-base-100 border-none capitalize">
                    WORK
                </span>
            </div>
        </div>
    );
};

export default FriendCard;