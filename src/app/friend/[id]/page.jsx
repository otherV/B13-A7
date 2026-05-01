import FriendActions from "@/components/FriendActions";
import Image from "next/image";
import dateFormat from "@/utils/dateFormat";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiArchive } from "react-icons/fi";
import { PiBellSimpleZBold } from "react-icons/pi";

const FriendDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:3000/data.json`);
    const friendsArray = await res.json();
    const friendDetails = friendsArray.find((friend) => friend.id === Number(id));

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-1 flex flex-col justify-between">
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body flex flex-col items-center text-center">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <Image
                                    src={friendDetails.picture}
                                    alt={friendDetails.name}
                                    width={80}
                                    height={80}
                                />
                            </div>
                        </div>
                        <h1 className='dark-text font-semibold text-xl capitalize mt-3'>{friendDetails.name}</h1>
                        <span className={`badge badge-lg ${friendDetails.status === `almost_due` ? `bg-[#F59E0B]` : (friendDetails.status === `on_track` ? `bg-[#244D3F]` : `bg-[#EF4444]`)} text-base-100 border-none capitalize font-medium my-2`}>
                            {friendDetails.status === "on_track" ? friendDetails.status.split("_").join("-") : friendDetails.status.split("_").join(" ")}
                        </span>
                        <div className='flex items-center gap-2'>
                            {friendDetails.tags.map((tag, idx) => {
                                return (
                                    <span key={idx} className="badge badge-lg bg-[#D1FAE5] text-[#065F46] border-none font-medium uppercase">
                                        {tag}
                                    </span>
                                );
                            })}
                        </div>
                        <p className="grey-text italic font-medium text-md my-3">&quot;{friendDetails.bio}&quot;</p>
                        <p className="grey-text text-sm">{friendDetails.email}</p>
                    </div>
                </div>
                <div className="text-base dark-text font-medium cardActions flex flex-col justify-between gap-2 mt-4">
                    <button className='btn btn-xl bg-base-100'>
                       <span><PiBellSimpleZBold /></span>   Snooze 2 weeks
                    </button>
                    <button className='btn btn-xl bg-base-100'>
                       <span><FiArchive /></span>   Archive
                    </button>
                    <button className='btn btn-xl bg-base-100 text-[#EF4444]'>
                       <span><FaRegTrashAlt /></span>   Delete
                    </button>
                </div>
            </div>
            <div className="lg:col-span-2">
                <div className='friendStats grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body flex flex-col items-center text-center">
                            <h1 className='green-text font-semibold text-3xl'>{friendDetails.days_since_contact}</h1>
                            <p className="grey-text text-lg">Days Since Contact</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body flex flex-col items-center text-center">
                            <h1 className='green-text font-semibold text-3xl'>{friendDetails.goal}</h1>
                            <p className="grey-text text-lg">Goal (Days)</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body flex flex-col items-center text-center">
                            <h1 className='green-text font-semibold text-3xl'>{
                                dateFormat(friendDetails.next_due_date)
                            }</h1>
                            <p className="grey-text text-lg">Next Due</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm mt-6">
                    <div className="card-body">
                        <div className="card-actions justify-between">
                            <h1 className="green-text font-medium text-xl">
                                Relationship Goal
                            </h1>
                            <button className="btn btn-square btn-sm">
                                Edit
                            </button>
                        </div>
                        <p className="grey-text text-lg mt-4">
                            Connect every
                            <span className="font-bold dark-text"> {friendDetails.goal} days</span>
                        </p>
                    </div>
                </div>

                <FriendActions name={friendDetails.name} />
            </div>
        </div>
    );
};

export default FriendDetailsPage;