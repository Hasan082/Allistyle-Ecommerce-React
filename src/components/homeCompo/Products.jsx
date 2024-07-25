import ProductCard from "../cards/ProductCard";
import useContextProducts from "../../hooks/useContextProducts";
import { Link } from "react-router-dom";


const Products = () => {

    const { recomendedProduct } = useContextProducts()

    return (
        <section className="pb-10">
            <div className="mb-10">
                <h2 className="text-3xl text-secondary-color font-semibold">Recommended items</h2>
            </div>           
            <div className="grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {
                    recomendedProduct?.map(item => <ProductCard key={item.id} item={item} />)
                }
            </div>
            <div className="mt-10 text-center">
                <Link className="as-primary-btn" to="/shop">See All</Link>
            </div>
        </section>
    );
};

export default Products;