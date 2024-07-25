import { useState } from "react";
import Container from "../shared/Container"
import logo from "../../assets/img/logo.svg"
import { Link } from "react-router-dom";
import useContextProducts from "../../hooks/useContextProducts";

const NavMid = () => {

    const [shopby, setShopby] = useState(false);

    const {uniqueBrandFilter} = useContextProducts()

    return (
        <div className="">
            <Container>
                <div className="flex items-center flex-wrap gap-4 py-3">
                    <Link to="/"><img src={logo} alt="Alistyle" className="max-w-[170px]" /></Link>
                    <div className="relative hidden sm:block">
                        <button onClick={() => setShopby(!shopby)} className={`${shopby && "bg-[#FBD3B2]"} font-semibold border hover:border-secondary-color px-5 py-2 rounded-md transition-all duration-300`}>Shop By</button>
                        {
                            shopby && <div className="flex flex-col gap-1 py-2 absolute z-50 top-[42px] border bg-white rounded-md">
                                {
                                    uniqueBrandFilter.keys().toArray().map((item, index)=><button key={index} onClick={() => setShopby(false)} className="shopby" href="#">Brand / {item}</button>)
                                }
                                {/* <a onClick={() => setShopby(false)} className="shopby" href="#">Consumer Electronics / Home Appliances </a>
                                <a onClick={() => setShopby(false)} className="shopby" href="#">Machinery / Mechanical Parts / Tools </a>
                                <a onClick={() => setShopby(false)} className="shopby" href="#">Auto / Transportation</a>
                                <a onClick={() => setShopby(false)} className="shopby" href="#">Apparel / Textiles / Timepieces </a>
                                <a onClick={() => setShopby(false)} className="shopby" href="#">Home &amp; Garden / Construction / Lights </a>
                                <a onClick={() => setShopby(false)} className="shopby" href="#">Beauty &amp; Personal Care / Health </a> */}
                            </div>
                        }
                    </div>
                    <div className="flex-auto">
                        <form className="flex flex-wrap sm:flex-nowrap gap-3">
                            <input type="text" placeholder="Search" className="rounded-md py-2 px-3 border-2 border-tertiary-color w-full" />
                            <button type="submit" className="as-primary-btn transition-all duration-200 hover:opacity-80">Search</button>
                            <button className="as-outline-btn !text-secondary-color !border-secondary-color !py-2">Advance</button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NavMid;