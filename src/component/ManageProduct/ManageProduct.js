import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ManageProduct = () => {
  const { _id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    const getCarData = async (_id) => {
      const url = `http://localhost:5000/cars/${_id}`;
      const { data } = await axios.get(url);
      setCar(data);
    };
    getCarData(_id);
  }, [_id]);

  // products delivered
  const handleDeliverd = async () => {
    const {quantity, ...rest} = car;
    const updateQuantiy = quantity - 1 ;
    const updatedStock = {quantity:updateQuantiy, ...rest};

      const url = `http://localhost:5000/cars/${_id}`;

    const {data} = await axios.put(url,updatedStock);
    console.log(data)
    if (data.modifiedCount > 0) {
      setCar(updatedStock);
    }
  }
  const { description, name, picture, price, quantity, supplier } = car;
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:w-5/6 rounded-lg bg-white shadow-lg">
          <img
            className="md:w-1/2 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={picture}
            alt=""
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl md:text-2xl font-medium">
              {name}
            </h5>
            <p className="font-semibold text-lg mb-2">Supplier: {supplier}</p>
            <p className="text-gray-700 text-sm mb-2">Price: {price}</p>
            <p className="text-gray-700 text-base mb-2">{description}</p>
            <div>
              <div className="flex items-center justify-start space-x-3 my-3">
                <p>Quantity: {quantity}</p>
                <button
                onClick={handleDeliverd}
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  data-mdb-ripple-duration="1000ms"
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Delivered
                </button>
              </div>
              <Link to="/manageInventory">
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  data-mdb-ripple-duration="1000ms"
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Manage Inventory
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
