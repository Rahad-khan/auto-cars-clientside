import React from 'react';
import useProducts from '../../../hooks/useProducts';
import ProductCard from '../ProductCard/ProductCard';

const HomeProducts = () => {
    const [products] = useProducts();
    const lastSixProducts = products.slice(-6);
    return (
      <div className="my-10">
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-10">
          <span className='border-b-2 pb-2 border-red-400'>
            Inven<span className="text-red-800">Tory</span>
          </span>
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {lastSixProducts.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    );
};

export default HomeProducts;