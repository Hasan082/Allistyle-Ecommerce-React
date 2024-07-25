import ProductCard from '../components/cards/ProductCard';
import Banner from '../components/homeCompo/Banner';
import useContextProducts from '../hooks/useContextProducts';
import shopBannerImg from "../assets/img/slide-lg-3.jpg"
import SideBar from '../components/shopCompo/SideBar';
import { useEffect, useState } from 'react';

const Shop = () => {

    const { products } = useContextProducts()
   
    const [newProducts, setNewProducts] = useState([])

    useEffect(()=>{
        setNewProducts([...products])
    },[products])
    
    const handleCategoryFilter = (catName) => {
        if(catName){
            setNewProducts(products.filter(item=> item.category == catName));
        }
    }

     
    const handlePriceRange = (price) => {
        if(price > 0){
            setNewProducts(products.filter(item=> item.discount < 1 ? (item.price > price) : (((item.price - (item.price * item.discount)/100)) > price)));
        }
    }

    //HANDLE FOR RANGE SLIDE PRICE FILTER LOW TO HIGH============
    const handlePriceSorterLowToHigh = (val) => {
        const calculateDiscountedPrice = (product) => {
            let price = parseFloat(product.price);
            let discount = parseFloat(product.discount);
            return price - (discount < 1 ? 0 : (price * discount) / 100);
        };
    
        const sortedProducts = [...products].sort((a, b) => {
            let priceA = calculateDiscountedPrice(a);
            let priceB = calculateDiscountedPrice(b);
            return val === "low" ? priceA - priceB : priceB - priceA;
        });
    
        setNewProducts(sortedProducts);
    };
    

    //HANDLE FOR INPUT PRICE FILTER==========
    const handleInputPriceValue = (e) => {
        e.preventDefault();
        const form = e.target, 
            min = form.minPrice.value,
            max = form.maxPrice.value;
        setNewProducts(products.filter(item=> {
            let price = item.price,
                discount = item.discount,
                postDiscount = (price - (price * discount)/100);
            return discount < 1 ? (price >= min && price <= max) : postDiscount >= min && (postDiscount <= max);
        })
    )}

    //RESET FILTER HANDLE======
    const handleResetFilter = () => {
        setNewProducts([...products])
    }

    

    
    return (
        <div className="pb-10">

            <Banner bannerImg={shopBannerImg} bannerTitle={"Shop"} />

            <div className='grid lg:grid-cols-[1fr_4fr] gap-3 items-start'>

                <SideBar handleCategoryFilter={handleCategoryFilter} handleResetFilter={handleResetFilter} handlePriceRange={handlePriceRange} handlePriceSorterLowToHigh={handlePriceSorterLowToHigh} handleInputPriceValue={handleInputPriceValue}  />

                <section>
                    <div className="grid xs:grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                        {
                            newProducts.map(item => <ProductCard key={item.id} item={item} />)
                        }
                    </div>

                </section>
            </div>

        </div>

    );
};

export default Shop;