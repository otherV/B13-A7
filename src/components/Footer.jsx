import React from 'react';
import Image from 'next/image';
import logoXL from '@/assets/logo-xl.png';
import fbIcon from '@/assets/facebook.png';
import xIcon from '@/assets/twitter.png';
import instaIcon from '@/assets/instagram.png';

const Footer = () => {
    return (
        <div className='green-bg text-base-100'>
            <div className='container mx-auto max-w-7/10'>
                <div className='flex flex-col items-center gap-3 mt-20 mb-4'>
                    <div className="">
                        <Image
                            src={logoXL}
                            alt={`logo`}
                            width={412}
                            height={61}
                        />
                    </div>
                    <p className='text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <div className='mt-6'>
                        <p className='text-xl font-medium text-center mb-4'>Social Links</p>
                        <div className='flex gap-3'>
                            <a className='rounded-full' href="">
                                <Image
                                    src={instaIcon}
                                    alt={`instagram`}
                                    width={40}
                                    height={40}
                                />
                            </a>
                            <a className='rounded-full' href="">
                                <Image
                                    src={fbIcon}
                                    alt={`facebook`}
                                    width={40}
                                    height={40}
                                />
                            </a>
                            <a className='rounded-full' href="">
                                <Image
                                    src={xIcon}
                                    alt={`twitter-x`}
                                    width={40}
                                    height={40}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="border-2 opacity-6 my-10"></hr>
                <div className='text-[#fafafa] flex flex-col md:flex-row justify-between items-center mb-8 gap-10'>
                    <p className=''>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                        <a className='' href="">Privacy Policy</a>
                        <a className='' href="">Terms of Service</a>
                        <a className='' href="">Cookies</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;