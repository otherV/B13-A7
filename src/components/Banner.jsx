import React from 'react';

const Banner = () => {
    return (
        <section id='banner' className='flex flex-col items-center text-center'>
            <h1 className='text-4xl'>Friends to keep close in your life</h1>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />relationships that matter most.</p>
            <button className='btn btn-xl'>
                Add a Friend
            </button>
        </section>
    );
};

export default Banner;