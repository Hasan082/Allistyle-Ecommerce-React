import ProductCard from '../components/cards/ProductCard';
import Banner from '../components/homeCompo/Banner';
import useContextProducts from '../hooks/useContextProducts';
import shopBannerImg from "../assets/img/slide-lg-3.jpg"
import SideBar from '../components/shopCompo/SideBar';
import { useMemo, useState } from 'react';

const Shop = () => {

    const { products } = useContextProducts()

    const [filters, setFilters] = useState({
        category: "",
        minPrice: 0,
        maxPrice: Infinity,
        sort: ''
    })

    const handleCategoryFilter = (catName) => {
        setFilters((prevFilter) => ({ ...prevFilter, category: catName }));
    }

    const handleInputPriceValue = (e) => {
        e.preventDefault();
        const { minPrice, maxPrice } = e.target;
        const min = parseFloat(minPrice.value) || 0;
        const max = parseFloat(maxPrice.value) || Infinity;
        setFilters((prevFilter) => ({ ...prevFilter, minPrice: min, maxPrice: max }))
    };

    const handleSort = (sortType) => {
        setFilters((prevFilter) => ({ ...prevFilter, sort: sortType }))
    }

    const handleResetFilter = () => {
        setFilters({
            category: "",
            minPrice: 0,
            maxPrice: Infinity,
            sort: ''
        })
    }

    const filterSortedProduct = useMemo(()=> {

        let filterProducts = products;

        if(filters.category) {
            filterProducts = filterProducts.filter(item => item.category == filters.category)
        }

        if (filters.minPrice > 0 || filters.maxPrice < Infinity){
            filterProducts = filterProducts.filter(item => {
                const price= parseFloat(item.price), discount = parseFloat(item.discount);
                const finalPrice = discount < 1 ? price : price * (1 - discount / 100);
                return finalPrice >= filters.minPrice && finalPrice <= filters.maxPrice;
            })
        }

        if(filters.sort) {
            filterProducts = filterProducts.sort((a, b) => {
                const priceA = parseFloat(a.price) * (1 - parseFloat(a.discount)/100);
                const priceB = parseFloat(b.price) * (1 - parseFloat(b.discount)/100);
                if(filters.sort === 'atoz') return a.title.localeCompare(b.title);
                else if (filters.sort === 'ztoa') return b.title.localeCompare(a.title);
                else return filters.sort === 'low' ? priceA - priceB : priceB - priceA;
            })
        }

        return filterProducts;

    }, [products, filters])


    return (
        <div className="pb-10">

            <Banner bannerImg={shopBannerImg} bannerTitle={"Shop"} />

            <div className='grid lg:grid-cols-[1fr_4fr] gap-3 items-start'>

                <SideBar
                    handleCategoryFilter={handleCategoryFilter}
                    handleResetFilter={handleResetFilter}
                    handlePriceRange={handleInputPriceValue}
                    handleSortAtoZ={(val) => handleSort(val==="atoz" ? "atoz" : "ztoa")}
                    handlePriceSorterLowToHigh={(val)=> handleSort(val==="low" ? "low" : "high")}
                />

                <section>
                    <div className="grid xs:grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                        {
                            filterSortedProduct.map(item => <ProductCard key={item.id} item={item} />)
                        }
                    </div>

                </section>
            </div>

        </div>

    );
};

export default Shop;