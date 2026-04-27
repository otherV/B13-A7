import Image from "next/image";
import placeHolder from '@/assets/instagram.png';

const FriendDetailsPage = ({ params }) => {
    return (
        <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1 flex flex-col justify-between">
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
                        <p className="italic">&quot;Former colleague, great mentor&quot;</p>
                        <p>Preferred: email</p>
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
                            <h1 className='text-3xl'>62</h1>
                            <p>Days Since Contact</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body flex flex-col items-center text-center">
                            <h1 className='text-3xl'>30</h1>
                            <p>Goal (Days)</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body flex flex-col items-center text-center">
                            <h1 className='text-3xl'>Feb 27, 2026</h1>
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

                <div className="card bg-base-100 shadow-sm">
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body flex flex-col items-center text-center">
                            <h1 className='text-3xl'>CallICON</h1>
                            <p>Call</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body flex flex-col items-center text-center">
                            <h1 className='text-3xl'>TextICON</h1>
                            <p>Text</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body flex flex-col items-center text-center">
                            <h1 className='text-3xl'>VideoICON</h1>
                            <p>Video</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetailsPage;