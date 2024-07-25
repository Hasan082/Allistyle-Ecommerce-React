import { Link } from "react-router-dom";


const DealCard = ({item}) => {

    const {id,title, discount, price, img} = item || {}
    

    return (
        <div className="bg-white p-3 hover:shadow-md transition-all duration-200 rounded-md relative">
            <span className="px-2 py-1 bg-[#fa3434] absolute left-3 top-3 text-xs text-white rounded-md">{discount}% OFF</span>
            <Link to={`/product/${id}`}>
                <img src={img} alt={title} />
            </Link>
            <div>
                <Link className="mb-1 capitalize block hover:text-tertiary-color hover:transition-all duration-300" to={`/product/${id}`}>{title}</Link>
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-lg">${price-((price * discount)/100)}</span>
                    <span className="line-through">${price}</span>
                </div>
            </div>
        </div>
    );
};

export default DealCard;