import { useState } from "react";
import useContextProducts from "../../hooks/useContextProducts";


const SideBar = ({ handleCategoryFilter, handleResetFilter, handlePriceRange, handleSortAtoZ, handlePriceSorterLowToHigh }) => {

    const { uniqueCategoryFilter, uniqueBrandFilter } = useContextProducts()

    const [catSlide, setCatSlide] = useState(true)
    const [brandSlide, setBrandSlide] = useState(false)
    const [priceSlide, setPriceSlide] = useState(false)
    const [sortSlide, setSortSlide] = useState(false)
    const [showButton, setShowButton] = useState(false)
    

    return (
        <div className="relative">
            <button onClick={() => setShowButton(!showButton)} className="mobile-filter fixed bottom-3 right-3 w-20 h-10 as-primary-btn z-[9999] lg:hidden">Filter</button>
            <aside className={`${showButton ? "showNav" : "hideNav"} sidebar`}>
                <button className="reset-filter" onClick={handleResetFilter}>Reset</button>
                <div className='filter-wrapper'>
                    <div className='category-filter'>
                        <button onClick={() => setCatSlide(!catSlide)} className={`${!catSlide ? "active" : ""} dropdown-toggle font-semibold text-lg`}>Categories</button>
                        <div className={`${catSlide ? "slideDown" : "slideUp"} dropdown-content`}>
                            <ul className="text-sm py-2">
                                {
                                    uniqueCategoryFilter.map(item => <li onClick={() => handleCategoryFilter(item)} className="filter-catgory-style" key={item}>{item}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='brand-filter mt-2'>
                        <button onClick={() => setBrandSlide(!brandSlide)} className={`${!brandSlide ? "active" : ""} dropdown-toggle font-semibold text-lg`}>Brands</button>
                        <div className={`${brandSlide ? "slideDown" : "slideUp"} dropdown-content`}>
                            <ul className="py-2 text-sm leading-[1.8]">
                                {
                                    uniqueBrandFilter.keys().toArray().map((item, index) =>
                                        <li key={index} >
                                            <label className="pl-1 relative block custom-control custom-checkbox" htmlFor={`brand-${index}`} title={item}>
                                                <input className="absolute opacity-0 z-[-1]" type="checkbox" id={`brand-${index}`} value={item} />
                                                <div className="custom-control-label before:absolute ">
                                                    {item.length > 15 ? item.slice(0, 16) + "..." : item}
                                                    <b className="badge badge-pill badge-light float-right">
                                                        {uniqueBrandFilter.values().toArray()[index]}
                                                    </b>
                                                </div>
                                            </label>
                                        </li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="price-filter mt-2">
                        <button onClick={() => setPriceSlide(!priceSlide)} className={`${!priceSlide ? "active" : ""} dropdown-toggle font-semibold text-lg`}>Price</button>
                        <div className={`${priceSlide ? "slideDown" : "slideUp"} dropdown-content`}>
                            <div className="py-2">
                                <div className="price-range-wrapper">
                                    <input onChange={(e)=>handlePriceRange(e.target.value)} className="custom-range" type="range" min={0} max={100} step={10} name="range" />
                                </div>
                                <div className="mt-3">
                                    <form onSubmit={handlePriceRange}>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="text-left">
                                                <label className="mb-1 block">Min</label>
                                                <input className="input-style" placeholder="$0" type="number" min={0} max={999} name="minPrice" />
                                            </div>
                                            <div className="text-right">
                                                <label className="mb-1 block">Max</label>
                                                <input className="input-style" placeholder="$1,000" type="number" min={0} max={1000} name="maxPrice" />
                                            </div>
                                        </div>
                                        <button className="as-primary-btn block w-full mt-4">Apply</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sort-filter mt-2">
                        <button onClick={() => setSortSlide(!sortSlide)} className={`${!sortSlide ? "active" : ""} dropdown-toggle font-semibold text-lg`}>Sort</button>
                        <div className={`${sortSlide ? "slideDown" : "slideUp"} dropdown-content`}>
                            <ul className="text-sm py-2">
                                <li onClick={()=> handleSortAtoZ("atoz")} className="filter-catgory-style">A to Z</li>
                                <li onClick={()=> handleSortAtoZ("ztoa")} className="filter-catgory-style">Z to A</li>
                                <li className="filter-catgory-style">Newest to Oldest</li>
                                <li className="filter-catgory-style">Oldest to Newest</li>
                                <li onClick={() => handlePriceSorterLowToHigh("low")} className="filter-catgory-style">Price: Low to High</li>
                                <li onClick={() => handlePriceSorterLowToHigh("high")} className="filter-catgory-style">Price: High to Low</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default SideBar;