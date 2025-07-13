"use client"
import Canvas from "@/components/Drawing";
//ts-ignore
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";
import ToolBar from "@/components/ToolBar";


export default function Home() {

  return (
    <div className="flex w-full h-[100vh]">
      <LeftSideBar></LeftSideBar>
      <ToolBar></ToolBar>
      <RightSideBar></RightSideBar>
      {/* <Canvas></Canvas> */}
    </div>
  );
}
