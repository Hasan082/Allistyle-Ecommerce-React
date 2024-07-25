import { useContext } from "react";
import { productContext } from "../Provider/ProductProvider";


const useContextProducts = () => {
    return useContext(productContext);
};

export default useContextProducts;