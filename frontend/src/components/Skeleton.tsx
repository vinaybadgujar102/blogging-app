import React from "react";
import { Circle } from "./BlogCard";

const Skeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="p-4 border-b border-slate-200 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>

          <div className="flex justify-center flex-col pl-2 ">
            <Circle />
          </div>
          <div className="pl-2 font-thin text-slate-500 flex justify-center flex-col text-sm">
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
        <div className="text-md font-thin">
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
        <div className="text-slate-400 text-sm font-thin pt-4">
          {" "}
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
