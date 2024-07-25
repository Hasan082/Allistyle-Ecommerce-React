import { useEffect, useState } from "react";


const useProducts = () => {

    const [productLoading, setProductLoading] = useState(false)
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        setProductLoading(true)
        fetch("/products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setProductLoading(false)
            })
    }, [])

    return {products, productLoading};
};

export default useProducts;