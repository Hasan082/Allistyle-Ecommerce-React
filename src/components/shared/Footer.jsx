import { Link } from "react-router-dom";
import Container from "../../components/shared/Container"


const Footer = () => {
    return (
        <footer className="bg-secondary-color py-16">
            <Container>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-[4fr_2fr_2fr_4fr] text-white pb-6 border-b border-[#1A3286]">
                    <div className="">
                        <h3 className="text-lg font-semibold mb-2">Contact us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem.</p>
                        <address className="text-sm mt-4">
                            <p>542 Fake Street, Cityname 10021 <br /> Netheerlends</p>
                            <p><b>Email: </b><a className="hover:text-tertiary-color transition-all duration-200" href="mailto:info@example.com">info@example.com</a></p>
                            <p><b>Phone: </b><a className="hover:text-tertiary-color transition-all duration-200" href="tel:8000600730">(800) 060-0730</a></p>
                            <p>Mon-Sat 10:00pm - 7:00pm</p>
                        </address>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Information</h3>
                        <ul className="text-sm">
                            <li><Link className="navlink !ps-0" to="/">About us</Link></li>
                            <li><Link className="navlink !ps-0" to="/">Career</Link></li>
                            <li><Link className="navlink !ps-0" to="/">Find a store</Link></li>
                            <li><Link className="navlink !ps-0" to="/">Rules and terms</Link></li>
                            <li><Link className="navlink !ps-0" to="/">Sitemap</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semi !ps-0bold mb-2">My Account</h3>
                        <ul className="text-sm">
                            <li><Link className="navlink !ps-0" to="/">Contact us</Link></li>
                            <li><Link className="navlink !ps-0" to="/">Money refund</Link></li>
                            <li><Link className="navlink !ps-0" to="/">Order status</Link></li>
                            <li><Link className="navlink !ps-0" to="/">Shipping info</Link></li>
                            <li><Link className="navlink !ps-0" to="/">Open dispute</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem.</p>

                        <form className="flex flex-col sm:flex-row gap-3 mt-4 justify-start items-start">
                            <input type="text" placeholder="Email" name="" className="w-full flex-1 sm:flex-auto bg-white px-3 py-2 rounded-md" />
                            <button className="as-primary-btn inline-block transition-all duration-200 hover:opacity-80">Subscribe</button>
                        </form>
                    </div>
                </div>
            </Container>
            <div className="text-center pt-5">
                <p className="text-white text-sm">
                    <Link to="/">Privacy Policy</Link> - <Link to="/">Terms of Use</Link> - <Link to="/">User Information Legal Enquiry Guide</Link>
                </p>
                <p className="text-white text-xs">&copy; 2024 Alistyle, All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;