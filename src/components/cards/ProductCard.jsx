import { Link, matchPath, useLocation } from "react-router-dom";


const ProductCard = ({ item }) => {

    const { id, title, price, discount, rating, category, img } = item || {}
    const location = useLocation()


    return (
        <div className="bg-white p-3 hover:shadow-md transition-all duration-200 rounded-md relative">
            {
                (discount > 1) && <span className="px-2 py-1 bg-[#fa3434] absolute left-3 top-3 text-xs text-white rounded-md">{discount}% OFF</span>
            }
            <Link to={`/product/${id}`}>
                <img src={img} alt={title} />
            </Link>
            <div>
                <ul className="inline-block mb-1 relative">
                    <li className={`w-[${rating * 20}%] absolute left-0 top-0 overflow-hidden`}>
                        <img className="h-[14px] max-w-none" src="/src/assets/img/product-img/stars-active.svg" alt="" />
                    </li>
                    <li className="">
                        <img className="h-[14px]" src="/src/assets/img/product-img/starts-disable.svg" alt="" />
                    </li>
                </ul>
                <Link className={`${location.pathname.includes("category") ? "pointer-events-none" : ""} capitalize block text-sm mb-1 cursor-pointer`} to={`category/${category}`}>{category}</Link>
                <Link className="mb-1 inline-block hover:text-tertiary-color hover:transition-all duration-300" to={`/product/${id}`}>{title}</Link>
                <div className="flex gap-2">
                    <p className="font-semibold price text-lg">{discount < 1 ? parseFloat(price).toFixed(2) : (parseFloat(price) - ((parseFloat(price) * discount) / 100)).toFixed(2)}</p>
                    {
                        discount > 1 && <p className="line-through opacity-50 font-semibold text-lg">${parseFloat(price).toFixed(2)}</p> 
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductCard;