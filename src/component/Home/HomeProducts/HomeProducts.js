import React from 'react';
import UseProducts from '../../../hooks/UseProducts';
import ProductCard from '../ProductCard/ProductCard';

const HomeProducts = () => {
    const [products] = UseProducts();
    const lastSixProducts = products.slice(-6);
    return (
        <div className='my-10'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    lastSixProducts.map(product => <ProductCard
                    key={product._id}
                    product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default HomeProducts;