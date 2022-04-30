import axios from "axios";
import { useEffect, useState } from "react";

const UseProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      axios.get('products.json')
      .then(response => {
          const {data} = response
          setProducts(data)
        })
    }, [])
    

    return [products, setProducts]
};

export default UseProducts;