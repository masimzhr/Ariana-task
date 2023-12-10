import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../features/users/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Edit = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => state.users);
  const user = users.find((user) => user.id == id);
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [selectedAbilities, setSelectedAbilities] = useState([]);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const abilities = [
    "HTML/",
    "CSS/",
    "JavaScript/",
    "React/",
    "Redux/",
    "TypeScript/",
  ];

  useEffect(() => {
    if (user) {
      setUserName(user.name);
      setUserAge(user.age);
      setSelectedAbilities(user.abilities || []);
    }
  }, [user]);

  const handleCheckboxChange = (ability) => {
    const updatedAbilities = [...selectedAbilities];
    const index = updatedAbilities.indexOf(ability);

    if (index !== -1) {
      updatedAbilities.splice(index, 1);
    } else {
      updatedAbilities.push(ability);
    }

    setSelectedAbilities(updatedAbilities);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(
      editUser({
        id: user.id,
        name: userName,
        age: userAge,
        abilities: selectedAbilities,
      })
    );
    navigate("/");
  };

  return (
    <div className="py-10">
      <form
        onSubmit={handleEdit}
        className="flex flex-col m-auto border border-slate-200 w-[50%] p-8 rounded-md"
      >
        <input
          required
          placeholder="Name"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="bg-slate-200 p-2 rounded-sm outline-none  border-slate-500 w-full m-auto mt-2"
        />

        <input
          required
          id="birthday"
          className="bg-slate-200 p-2 rounded-sm outline-none border-slate-500 w-full m-auto mt-2"
          type="date"
          value={userAge}
          onChange={(e) => setUserAge(e.target.value)}
        />

        <div
          onClick={() => setVisible(!visible)}
          className="  bg-slate-200 p-2 rounded-sm outline-none border-slate-500 w-full m-auto mt-2 flex justify-between items-center z-10"
        >
          Abilities
          <span>
            {visible ? (
              <FaChevronDown className="cursor-pointer" />
            ) : (
              <FaChevronUp className="cursor-pointer" />
            )}
          </span>
        </div>
        {visible && (
          <div className="bg-slate-200 p-2 rounded-sm outline-none border-slate-500 w-full m-auto mt-2">
            {abilities.map((ability) => (
              <div key={ability} className="mb-2 ">
                <input
                  type="checkbox"
                  value={ability}
                  checked={selectedAbilities.includes(ability)}
                  onChange={() => handleCheckboxChange(ability)}
                />
                <span className="ml-2">{ability}</span>
              </div>
            ))}
          </div>
        )}

        <button
          className="bg-green-500 rounded-md w-[30%] m-auto mt-4 text-white font-bold py-2"
          type="submit"
        >
          save
        </button>
      </form>
    </div>
  );
};

export default Edit;
