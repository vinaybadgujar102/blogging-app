import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4 cursor-pointer">
      <Link to="/blogs" className="flex flex-col justify-center">
        Blog
      </Link>
      <div>
        <Link to={"/publish"}>
          <button
            type="button"
            className="mr-8 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            New
          </button>
        </Link>
        <Avatar name="Vinay" size={"big"} />
      </div>
    </div>
  );
};

export default Appbar;
