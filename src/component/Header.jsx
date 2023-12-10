import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <h1 className="m-auto font-bold flex justify-start items-center text-lg w-full bg-slate-200 px-3 py-3 ">
          <span className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-slate-500 text-white">
            Users
          </span>
        </h1>
      </Link>
    </div>
  );
};

export default Header;
