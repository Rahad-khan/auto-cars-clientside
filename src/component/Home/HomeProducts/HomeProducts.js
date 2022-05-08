import React, { useEffect, useState } from 'react';
import Loading from '../../Loading/Loading';
import ProductCard from '../ProductCard/ProductCard';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://auto-cars-server.herokuapp.com/cars")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    const firstSixProducts = products.slice(0,6);
    return (
      <div className="my-10">
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-10">
          <span className='border-b-2 pb-2 border-red-400'>
            Inven<span className="text-red-800">Tory</span>
          </span>
        </h1>
        {
         (products.length === 0) && <Loading/>
        }
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {firstSixProducts.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    );
};

export default HomeProducts;