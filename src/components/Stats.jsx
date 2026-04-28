import React from 'react';

const Stats = ({
    totalFriends,
    onTrack,
    needAttention
}) => {
    return (
        <section className='grid grid-cols-4 gap-5'>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body flex flex-col items-center text-center">
                    <h1 className='text-3xl'>{totalFriends}</h1>
                    <p>Total Friends</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body flex flex-col items-center text-center">
                    <h1 className='text-3xl'>{onTrack}</h1>
                    <p>On Track</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body flex flex-col items-center text-center">
                    <h1 className='text-3xl'>{needAttention}</h1>
                    <p>Need Attention</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body flex flex-col items-center text-center">
                    <h1 className='text-3xl'>12</h1>
                    <p>Interactions This Month</p>
                </div>
            </div>
        </section>
    );
};

export default Stats;