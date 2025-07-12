"use client"
//ts-ignore
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";


export default function Home() {

  return (
    <div className="flex w-full h-[100vh]">
      <LeftSideBar></LeftSideBar>
      <RightSideBar></RightSideBar>
    </div>
  );
}
