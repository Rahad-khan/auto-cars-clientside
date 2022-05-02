import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

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
    if (data.modifiedCount > 0) {
      setCar(updatedStock);
    }
  };
  //Restock product
  const handleStockProduct = async (e) => {
    e.preventDefault();
    const stockNumber = parseInt(e.target.number.value);
    console.log(typeof stockNumber);
    if (stockNumber && stockNumber > 0){
      const { quantity, ...rest } = car;
      const updateQuantiy = parseInt(quantity) + stockNumber;
      const updatedStock = { quantity: updateQuantiy, ...rest };
  
      const url = `http://localhost:5000/cars/${_id}`;
  
      const { data } = await axios.put(url, updatedStock);
      console.log(data);
      if (data.modifiedCount > 0) {
        setCar(updatedStock);
        toast("Restocked Successfully!!")
        e.target.reset();
    }
    } else {
      toast("Please Provide Valid Number")
    }
  };
  const { description, name, picture, price, quantity, supplier } = car;
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:w-5/6 rounded-lg bg-white shadow-lg">
          <img
            className="md:w-1/2 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={picture}
            alt={name}
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
              <form
                onSubmit={handleStockProduct}
                className="flex items-center justify-start space-x-2 flex-col md:flex-row"
              >
                <div className="mb-1 w-full xl:w-96">
                  <label
                    htmlFor="exampleNumber0"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Restock the {name}
                  </label>
                  <input
                    name="number"
                    type="number"
                    className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="exampleNumber0"
                    placeholder="Number input"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="w-full md:w-0">
                  <button
                    type="submit"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    data-mdb-ripple-duration="1000ms"
                    className="mt-2 md:mt-6 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                  >
                    Restock
                  </button>
                </div>
              </form>
              <Link to="/manageInventory">
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  data-mdb-ripple-duration="1000ms"
                  className="mt-2 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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
