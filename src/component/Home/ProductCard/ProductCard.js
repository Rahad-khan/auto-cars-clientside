import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to={`inventory/${_id}`}>
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              data-mdb-ripple-duration="1s"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Manage Stock
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;