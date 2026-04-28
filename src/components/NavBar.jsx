import Link from "next/link";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl"><span>Keen</span><span>Keeper</span></a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/timeline">Timeline</Link>
                    </li>
                    <li>
                        <Link href="/analytics">Stats</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;