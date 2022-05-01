import React from 'react';
import { Link } from 'react-router-dom';
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const ProductCard = ({product}) => {
    const { description, name, picture, price, quantity, supplier, _id } = product;
    console.log(product);
    return (
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <img className="rounded-t-lg" src={picture} alt="" />
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
            <p className="text-gray-700 text-lg font-semibold">
              Price: <span className="text-blue-700">{price}</span>
            </p>
            <p className="text-gray-700 font-semibold">Quantity:{quantity}</p>
            <p className="text-gray-700 text-base font-semibold mb-2">
              Supplier: {supplier}
            </p>
            <p className="text-gray-700 text-base mb-4">
              {description.slice(0, 150)}....
            </p>
            <div className="flex items-center justify-center">
              <Link to={`inventory/${_id}`}>
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  data-mdb-ripple-duration="1s"
                  className=" px-6 py-2.5 bg-blue-600 text-white font-medium  leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center space-x-1"
                >
                  <span>Manage Stock</span>
                  <BsFillArrowRightCircleFill className='w-8'></BsFillArrowRightCircleFill>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;