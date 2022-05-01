import React from "react";
import "./CardOrder.css";

const CarOrder = () => {
  return (
    <div id="order-car">
      <h1 className="text-center text-3xl md:text-5xl font font-semibold text-white mb-10 pt-5">
        VEHICLE PRE-ORDER
      </h1>
      <div>
        <div className="flex justify-center items-center space-x-10">
          <div className="flex justify-center">
            <div
              className="block p-5 md:py-14 md:px-12  rounded-lg shadow-lg max-w-sm"
              style={{
                background:
                  "linear-gradient(to right,rgba(254,226,2,.9),rgba(255,162,0,.9))",
              }}
            >
              <h5 className="text-gray-900 md:text-2xl leading-tight font-bold mb-2">
                Order a Japanese Vehicle
              </h5>
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                data-mdb-ripple-duration="1000ms"
                className="block px-6 py-3 mt-6 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-auto"
              >
                Pre Order Now !
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div
              className="block p-5 md:py-14 md:px-12  rounded-lg shadow-lg max-w-sm"
              style={{
                background:
                  "linear-gradient(to right,rgba(0,173,239),rgba(9,136,225))",
              }}
            >
              <h5 className="text-gray-900 md:text-2xl leading-tight font-bold mb-2">
                Order a European Vehicle
              </h5>
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                data-mdb-ripple-duration="1000ms"
                className="block px-6 py-3 mt-6 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-auto"
              >
                Pre Order Now !
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarOrder;
