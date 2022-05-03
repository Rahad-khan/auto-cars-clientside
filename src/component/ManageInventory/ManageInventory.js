import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const ManageInventory = () => {
  const [products, setProducts] = useProducts();

  const handleDeleteCars = async (id) => {
    const isDelete = window.confirm("Are you really want to delete this item?");
    if (isDelete) {
      console.log(id);
      const url = `https://auto-cars-server.herokuapp.com/cars/${id}`;

      const { data } = await axios.delete(url);
      if (data?.deletedCount > 0) {
        const rest = products.filter((product) => product._id !== id);
        setProducts(rest);
      }
    }
  };

  return (
    <div className="md:w-11/12 mx-auto w-full my-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
            {products.map((product) => (
              <tr
                key={product._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {product?.name}
                </th>
                <td className="px-6 py-4">{product?.supplier}</td>
                <td className="px-6 py-4">{product?.quantity}</td>
                <td className="px-6 py-4">{product?.price}</td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => handleDeleteCars(product._id)}
                    type="button"
                    className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        <Link className="flex items-center justify-center my-5 p-2 md:p-0" to="/addItem">
          <button
            type="button"
            className="w-full md:w-1/2  inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium hover:text-white hover:border-white leading-normal uppercase rounded hover:bg-blue-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Add New Item
          </button>
        </Link>
    </div>
  );
};

export default ManageInventory;
