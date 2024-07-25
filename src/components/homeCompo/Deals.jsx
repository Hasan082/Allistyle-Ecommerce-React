import DealCard from "../cards/DealCard";
import useContextProducts from "../../hooks/useContextProducts";


const Deals = () => {

    const {discountedProduct} = useContextProducts()

    return (
        <section className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pb-10 h-[10]">
            {
                discountedProduct.map(item=><DealCard key={item.id} item={item}></DealCard>)
            }
        </section>
    );
};

export default Deals;