import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
const Home = () => {
  const { users } = useSelector((state) => state.users);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 m-auto w-[90%]">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                Ability
              </th>

              <th scope="col" className="px-6 py-3">
                <span className="sr-only">see</span>
              </th>
            </tr>
          </thead>
          {users.map((user) => {
            return (
              <tbody>
                <tr
                  key={user.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {user.name}
                  </th>
                  <td className="px-6 py-4">
                    {" "}
                    {user.age &&
                      new Date().getFullYear() -
                        new Date(user.age).getFullYear()}
                  </td>
                  <td className="px-6 py-4">{user.abilities}</td>

                  <td className="px-6 py-4 text-right">
                    <Link
                      to={`/detail/${user.id}`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      see
                    </Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>

      <div>
        <Link to="/add">
          <button className="p-5 rounded-full bg-green-500 hover:scale-110 fixed bottom-2 left-2">
            <FaPlus />
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
