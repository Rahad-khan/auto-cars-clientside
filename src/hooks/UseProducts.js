import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const getProudcts = async () => {
        const { data } = await axios.get(
          "https://auto-cars-server.herokuapp.com/cars"
        );
        setProducts(data)
      }
      getProudcts();
        }
    , [])
    

    return [products, setProducts]
};

export default useProducts;