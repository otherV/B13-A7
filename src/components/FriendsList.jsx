
import FriendCard from './FriendCard';
import Stats from './Stats';

const FriendsList = async () => {
    const res = await fetch(`http://localhost:3000/data.json`);
    const friendsArray = await res.json();
    const { almost_due, overdue, on_track } = friendsArray.reduce((acc, friend) => {
        acc[friend.status] = (acc[friend.status] || 0) + 1;
        return acc;
    }, {});

    return (
        <>
            <Stats
                totalFriends={friendsArray.length}
                onTrack={on_track}
                needAttention={overdue}
            />
            <hr className="border-2 opacity-6 my-10"></hr>
            <h3 className='dark-text font-semibold text-2xl'>Your Friends</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mt-4'>
                {
                    friendsArray.map((friend, index) => {
                        return (
                            <FriendCard key={index} friend={friend} />
                        );
                    })
                }
            </div>
        </>
    );
};

export default FriendsList;