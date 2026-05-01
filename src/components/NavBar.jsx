"use client"

import Image from "next/image";
import Link from "next/link";
import logoSm from '@/assets/logo.png';
import { usePathname } from "next/navigation";
import { FaChartLine } from "react-icons/fa6";
import { RiHome2Line } from "react-icons/ri";
import { LuClock3 } from "react-icons/lu";

const NavBar = () => {
    const pathName = usePathname();
    return (
        <div className="navbar bg-base-100 shadow-sm px-20">
            <div className="flex-1">
                <Link href={`/`}>
                    <div className=''>
                        <Image
                            src={logoSm}
                            alt={`logo`}
                            width={141}
                            height={31}
                        />
                    </div>
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 font-semibold text-base">
                    <li>
                        <Link
                            href="/"
                            className={pathName === "/" ? "green-bg text-[white]" : ""}
                        >
                            <span><RiHome2Line /></span> Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/timeline"
                            className={pathName === "/timeline" ? "green-bg text-[white]" : ""}
                        >
                            <span><LuClock3 /></span> Timeline
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/analytics"
                            className={pathName === "/analytics" ? "green-bg text-[white]" : ""}
                        >
                            <span><FaChartLine /></span> Stats
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;