import React from 'react';
import FriendCard from './FriendCard';

const FriendsList = () => {
    const friendsArray = ["yo"];

    return (
        <>
            <h3 className='text-2xl'>Your Friends</h3>
            <div className='grid grid-cols-4 gap-5'>
                {
                    friendsArray.map((friend, index) => {
                        return (
                            <FriendCard key={index} />
                        );
                    })
                }
            </div>
        </>
    );
};

export default FriendsList;