import { Link } from "react-router-dom";
import ProductCard from "../components/cards/ProductCard";
import useContextProducts from "../hooks/useContextProducts";


const ProductsUnderFifty = () => {

    const { productUnderFifty } = useContextProducts()

    return (
        <section className="py-6">
            <p className="bg-[#FEF0E5] text-sm text-secondary-color p-4 rounded-md">
                <Link className="hover:text-tertiary-color transition-all duration-200" to="/">Home &nbsp;</Link> &gt; &nbsp;
                <span className="capitalize"> Under $50 Products</span>
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 pt-6">
                {
                    productUnderFifty?.map(item => <ProductCard key={item.id} item={item} />)
                }
            </div>
        </section>
    );
};

export default ProductsUnderFifty;