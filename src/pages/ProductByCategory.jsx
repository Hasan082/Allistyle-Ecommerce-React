import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/cards/ProductCard";
import useProducts from "../hooks/useProducts";


const ProductByCategory = () => {
    const { category } = useParams()
    
    const [catProducts, setCatProducts] = useState([])

    const { products } = useProducts()

    useEffect(() => {
        setCatProducts(products?.filter(item => item.category == category))
    }, [category, products])


    return (
        <div className="py-6">
            <p className="bg-[#FEF0E5] text-sm text-secondary-color p-4 rounded-md">
                <Link className="hover:text-tertiary-color transition-all duration-200" to="/">Home &nbsp;</Link> &gt; &nbsp;
                <span className="capitalize"> {category}</span>
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 pt-6">
                {
                    catProducts.map(item => <ProductCard key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default ProductByCategory;