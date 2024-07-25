import Container from "../shared/Container"
import { Link } from "react-router-dom";

const NavBottom = () => {
    return (
        <nav className="border-t border-b py-2">
            <Container>
                <ul className="flex gap-1 sm:gap-2 flex-wrap text-sm sm:text-base">
                    <li>
                        <Link className="navlink" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="navlink" to="/category/electronic/">Electronic</Link>
                    </li>
                    <li>
                        <Link className="navlink" to="/category/clothes/">Clothes</Link>
                    </li>
                    <li>
                        <Link className="navlink" to="/category/luxury/">Luxury</Link>
                    </li>
                    <li>
                        <Link className="navlink" to="/category/interior/">Interior</Link>
                    </li>
                    <li>
                        <Link className="navlink" to="/category/accessories/">Accessories</Link>
                    </li>
                    <li>
                        <Link className="navlink" to="/products/deals">Deals</Link>
                    </li>
                    <li>
                        <Link className="navlink" to="/products/under-fifty">Under $50</Link>
                    </li>
                </ul>
            </Container>

        </nav>
    );
};

export default NavBottom;