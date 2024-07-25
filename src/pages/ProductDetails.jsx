import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";


const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [quanityCount, setQuanityCount] = useState(1)

    const { products } = useProducts()

    useEffect(() => {
        setProduct(products.find(item => item.id == id))
    }, [id, products])

    const { title, desc, price, discount, category, img, rating, reviewQuantity, manufacturer, sku, guarantee, deliveryTime, quantity, orders } = product || {}

    return (
        <div className="py-10">
            <p className="bg-[#FEF0E5] text-sm text-secondary-color p-4 rounded-md mb-10">
                <Link className="hover:text-tertiary-color transition-all duration-200" to="/">Home &nbsp;</Link> &gt; &nbsp;
                <span className="capitalize">
                    <Link className="hover:text-tertiary-color transition-all duration-200" to={`/category/${category}`}>{category}</Link>
                </span> &gt; &nbsp;
                <span>{title}</span>
            </p>
            <div className="grid grid-cols-2 gap-4 py-6 bg-white p-5 rounded-md">
                <div className="bg-white border p-5 relative">
                    {
                       (discount > 1) && <span className="px-2 py-1 bg-[#fa3434] absolute left-3 top-3 text-xs text-white rounded-md">{discount}% OFF</span>
                    }
                    <img className="max-w-[520px] max-h-[480px] w-full h-full mx-auto p-2" src={img} alt="" />
                </div>
                <div className="space-y-3">
                    <h2 className="text-3xl font-semibold mb-4">{title}</h2>
                    <div className="flex items-center gap-3">
                        <ul className="inline-block mb-1 relative">
                            <li className={`w-[${rating * 20}%] absolute left-0 top-0 overflow-hidden`}>
                                <img className="h-[14px] max-w-none" src="/src/assets/img/product-img/stars-active.svg" alt="" />
                            </li>
                            <li className="">
                                <img className="h-[14px]" src="/src/assets/img/product-img/starts-disable.svg" alt="" />
                            </li>
                        </ul>
                        <p className="text-xs opacity-60">
                            {reviewQuantity} {reviewQuantity > 1 ? "reviews" : "review"}
                        </p>
                        <p className="text-xs text-[#00b517]">
                            {orders} {orders > 1 ? "orders" : "order"}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <p className="font-semibold price text-xl">{discount < 1 ? parseFloat(price).toFixed(2): (parseFloat(price) - ((parseFloat(price) * discount) / 100)).toFixed(2)}</p>
                        {
                            discount > 1 && <p className="line-through opacity-50 font-semibold text-xl">${parseFloat(price).toFixed(2)}</p>
                        }
                    </div>
                    <p className="text-[15px]">{desc}</p>
                    <div className="space-y-2">
                        <div className="grid grid-cols-[3fr_9fr]">
                            <h5 className="text-[15px] font-semibold">Manufacturer</h5>
                            <p>{manufacturer}</p>
                        </div>
                        <div className="grid grid-cols-[3fr_9fr]">
                            <h5 className="text-[15px] font-semibold">Sku Number</h5>
                            <p>{sku}</p>
                        </div>
                        <div className="grid grid-cols-[3fr_9fr]">
                            <h5 className="text-[15px] font-semibold">Garuntee</h5>
                            <p>{guarantee}</p>
                        </div>
                        <div className="grid grid-cols-[3fr_9fr]">
                            <h5 className="text-[15px] font-semibold">Delivery Time</h5>
                            <p>{deliveryTime}</p>
                        </div>
                        <div className="grid grid-cols-[3fr_9fr]">
                            <h5 className="text-[15px] font-semibold">Availablity</h5>
                            <p>{parseInt(quantity) > 0 ? `In stock (${quantity})` : <span className="text-red-600">Out of stock</span>}</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="inline-flex items-center border rounded-md mt-4">
                            <button onClick={() => setQuanityCount(quanityCount < parseInt(quantity) ? quanityCount + 1 : quanityCount)} className="px-4 py-2 hover:bg-[#ffd3b2] transition-all duration-200">+</button>
                            <span className="py-2 inline-block border-x w-12 text-center">{quanityCount}</span>
                            <button onClick={() => setQuanityCount(quanityCount > 1 ? quanityCount - 1 : 1)} className="px-4 py-2 hover:bg-[#ffd3b2] transition-all duration-200">-</button>
                        </div>
                        <button className="as-primary-btn mt-4">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ProductDetails;