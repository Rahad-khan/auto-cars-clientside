import React from 'react';
import useProducts from '../../hooks/useProducts';

const ManageInventory = () => {
    const [products] = useProducts();
    return (
        <div>
            products = {products.length}
        </div>
    );
};

export default ManageInventory;