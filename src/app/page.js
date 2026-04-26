import Banner from "@/components/Banner";
import FriendsList from "@/components/FriendsList";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <Stats />
      <hr className="border-2 opacity-6"></hr>
      <FriendsList />
    </>
  );
}
