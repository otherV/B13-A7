import './globals.css'
import { Geist } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata = {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist.',
}

export default function GlobalNotFound() {
    return (
        <html
            lang="en"
            data-theme="light"
            className={`${geistSans.variable} h-full antialiased`}
        >
            <body className="bg-[#F8FAFC] min-h-screen flex flex-col justify-center items-center text-center gap-5">
                <h1 className='text-5xl'>404 - Page Not Found</h1>
                <h1 className='text-5xl'>This page does not exist!</h1>
            </body>
        </html>
    )
}