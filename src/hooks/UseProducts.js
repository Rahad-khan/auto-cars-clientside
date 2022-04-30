import axios from "axios";
import { useEffect, useState } from "react";

const UseProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProduct = async () =>{
           const {data} = await axios.get('products.json')
                setProducts(data)
        }
        getProduct();
    }, [])
    

    return [products, setProducts]
};

export default UseProducts;