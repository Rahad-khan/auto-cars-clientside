import React from 'react';
import { useParams } from 'react-router-dom';

const ManageProduct = () => {
    const {_id} = useParams();
    return (
        <div>
            <h1>id: {_id}</h1>
        </div>
    );
};

export default ManageProduct;