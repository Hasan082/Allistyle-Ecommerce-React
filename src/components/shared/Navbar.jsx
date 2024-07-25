import NavBottom from "../navCompo/NavBottom";
import NavMid from "../navCompo/NavMid";
import NavTop from "../navCompo/NavTop";

const Navbar = () => {
    return (
        <header className="bg-white shadow-md">
            <NavTop />
            <NavMid />
            <NavBottom />
        </header>
    );
};

export default Navbar;