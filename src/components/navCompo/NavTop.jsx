import { Link } from "react-router-dom";
import Container from "../shared/Container"

const NavTop = () => {
    return (
        <div className="border-b">
                <Container>
                    <div className="grid sm:grid-cols-2">
                        <ul className="flex text-sm sm:text-base">
                            <li><span className="px-3 py-1 ps-0 block">Hi, <Link className=" hover:text-tertiary-color transition-all" to="/login"> Sign in </Link> or <Link className=" hover:text-tertiary-color transition-all" to="/signup"> Register </Link></span></li>
                            <li><Link className="navlink" to="/products/deals" > Deals </Link></li>
                            <li><Link className="navlink" to="/help" > Help </Link></li>
                        </ul>
                        <ul className="flex sm:justify-end items-center text-sm sm:text-base">
                            <li><Link className="navlink !ps-0" to="/">Wishlist</Link></li>
                            <li><Link className="navlink" to="/shop" > Shop </Link></li>
                            <li><Link className="navlink !pr-0" to="/" > Cart </Link></li>
                        </ul>
                    </div>
                </Container>
            </div>
    );
};

export default NavTop;