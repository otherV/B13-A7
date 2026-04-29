import FriendActions from "@/components/FriendActions";
import Image from "next/image";
import dateFormat from "@/utils/dateFormat";

const FriendDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:3000/data.json`);
    const friendsArray = await res.json();
    const friendDetails = friendsArray.find((friend) => friend.id === Number(id));

    return (
        <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1 flex flex-col justify-between">
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body flex flex-col items-center text-center">
                        <div className="avatar">
                            <div className="w-24 rounded-full border-2">
                                <Image
                                    src={friendDetails.picture}
                                    alt={friendDetails.name}
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </div>
                        <h1 className='text-3xl capitalize'>{friendDetails.name}</h1>
                        <p>{friendDetails.days_since_contact}d ago</p>
                        <span className="badge badge-lg bg-[#F59E0B] text-base-100 border-none capitalize">
                            {friendDetails.status}
                        </span>
                        <div className='flex items-center gap-2'>
                            {friendDetails.tags.map((tag, idx) => {
                                return (
                                    <span key={idx} className="badge badge-lg bg-[#D1FAE5] text-[#065F46] border-none uppercase">
                                        {tag}
                                    </span>
                                );
                            })}
                        </div>
                        <p className="italic">&quot;{friendDetails.bio}&quot;</p>
                        <p>{friendDetails.email}</p>
                    </div>
                </div>
                <div className="cardActions flex flex-col justify-between">
                    <button className='btn btn-xl'>
                        Snooze 2 weeks
                    </button>
                    <button className='btn btn-xl'>
                        Archive
                    </button>
                    <button className='btn btn-xl'>
                        Delete
                    </button>
                </div>
            </div>
            <div className="col-span-2">
                <div className='friendStats grid grid-cols-4 gap-5'>
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body flex flex-col items-center text-center">
                            <h1 className='text-3xl'>{friendDetails.days_since_contact}</h1>
                            <p>Days Since Contact</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body flex flex-col items-center text-center">
                            <h1 className='text-3xl'>{friendDetails.goal}</h1>
                            <p>Goal (Days)</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body flex flex-col items-center text-center">
                            <h1 className='text-3xl'>{
                                dateFormat(friendDetails.next_due_date)
                            }</h1>
                            <p>Next Due</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <div className="card-actions justify-between">
                            <h1 className="text-xl">
                                Relationship Goal
                            </h1>
                            <button className="btn btn-square btn-sm">
                                Edit
                            </button>
                        </div>
                        <p>
                            Connect every
                            <span>30 days</span>
                        </p>
                    </div>
                </div>

                <FriendActions name={friendDetails.name} />
            </div>
        </div>
    );
};

export default FriendDetailsPage;