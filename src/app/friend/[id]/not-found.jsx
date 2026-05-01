import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-20">
            <h1 className="dark-text font-bold text-5xl">Friend Not Found</h1>
            <p className="grey-text text-2xl mt-4">This person doesn&apos;t exist in your list.</p>
            <Link href="/" className="btn btn-xl bg-[#244D3F] text-white mt-8">
                Back to Friends
            </Link>
        </div>
    );
};

export default NotFound;