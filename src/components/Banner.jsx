import React from 'react';

const Banner = () => {
    return (
        <section id='banner' className='flex flex-col items-center text-center mb-10'>
            <h1 className='dark-text font-bold text-5xl'>Friends to keep close in your life</h1>
            <p className='grey-text mt-4 mb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />relationships that matter most.</p>
            <button className='btn btn-xl bg-[#244D3F] text-[white]'>
                + Add a Friend
            </button>
        </section>
    );
};

export default Banner;