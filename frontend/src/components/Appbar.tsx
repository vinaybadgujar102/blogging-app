import React from "react";
import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4 cursor-pointer">
      <Link to="/blogs" className="flex flex-col justify-center">
        Blog
      </Link>
      <div>
        <Avatar name="Vinay" size={"big"} />
      </div>
    </div>
  );
};

export default Appbar;
