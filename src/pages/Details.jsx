import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { removeItem } from "../features/users/userSlice";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Details = () => {
  const [visible, setVisible] = useState(false);
  const { id } = useParams();
  const { users } = useSelector((state) => state.users);
  const user = users.find((item) => item.id == id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    dispatch(removeItem(id));
    navigate("/");
  };

  return (
    <div className=" border border-slate-300 p-5 flex flex-col justify-between m-auto px-10 w-[50%] mt-10 rounded-md ">
      <h1 className="py-3">
        <span className="font-bold mr-2 ">Name:</span> {user.name}
      </h1>
      <p>
        <span className="font-bold py-3 mr-2">Age:</span>
        {user.age &&
          new Date().getFullYear() - new Date(user.age).getFullYear()}
      </p>
      <p className="flex items-center cursor-pointer gap-1 relative">
        <span className="font-bold py-3">Abilities:</span>
        <span onClick={() => setVisible(!visible)}>
          {visible ? <FaChevronDown /> : <FaChevronUp />}
        </span>
      </p>
      {visible && (
        <p className=" bg-slate-100 p-3 w-full flex items-center">
          {user.abilities}
        </p>
      )}
      <hr />
      <div className="flex justify-start items-center gap-2 mt-5">
        <button
          onClick={() => handleDelete(user.id)}
          className="bg-red-400 p-2 rounded-full text-white hover:bg-red-500 "
        >
          <MdDelete />
        </button>
        <Link to={`/edit/${user.id}`}>
          <button className="bg-blue-400 p-2 rounded-full text-white hover:bg-blue-700 ">
            <CiEdit />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
