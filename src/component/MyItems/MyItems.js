import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';
import auth from "../../firebase.init";
import { AiFillDelete } from "react-icons/ai";


const MyItems = () => {
  const navigate = useNavigate();
  const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);
    const {email} = user;
  useEffect(() => {
    if(email){
        const loadDataByUser = async () => {
           const url = `https://auto-cars-server.herokuapp.com/myitems?email=${email}`; 
           try {
            const { data } = await axios.get(url, {
              headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            });
            setMyItems(data);
           } catch(error) {
              if(error.response.status === 401 || error.response.status === 403){
                signOut(auth);
                navigate('/login')
              }
           }
           
        }
        loadDataByUser();
    }
  }, [email, navigate])

    const handleDeleteCars = async (id) => {
      const isDelete = window.confirm(
        "Are you really want to delete this item?"
      );
      if (isDelete) {
        console.log(id);
        const url = `https://auto-cars-server.herokuapp.com/cars/${id}`;

        const { data } = await axios.delete(url);
        if (data?.deletedCount > 0) {
          const rest = myItems.filter((product) => product._id !== id);
          setMyItems(rest);
        }
      }
    };

    return (
      <div className="md:w-4/5 p-4 md:p-0 mx-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
          <h1 className="text-center text-2xl mb-4 font-semibold">
            This Is Your Added Item Dear {user?.displayName}
          </h1>

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Car name
                </th>
                <th scope="col" className="px-6 py-3">
                  Supplier
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {myItems.map((item) => (
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {item?.name}
                  </th>
                  <td className="px-6 py-4">{item?.supplier}</td>
                  <td className="px-6 py-4">{item?.quantity}</td>
                  <td className="px-6 py-4">{item?.price}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDeleteCars(item._id)}
                      type="button"
                      className="flex items-center px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                      <span>Delete</span> <AiFillDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {myItems.length === 0 && (
          <div className="flex items-center justify-center my-10">
            <div className="flex justify-center">
              <div className="block p-6 rounded-lg shadow-lg bg-red-300 max-w-sm">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                  No items Added In your List
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  Add Items First By Clicking Below Button Please...
                </p>
                <Link to="/addItem">
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Add Item
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default MyItems;