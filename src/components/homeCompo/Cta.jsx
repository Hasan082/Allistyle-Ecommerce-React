import { Link } from "react-router-dom";


const Cta = () => {
    return (
        <section className="bg-secondary-color text-white block md:grid md:grid-cols-[8fr_4fr] px-5 sm:px-7 md:px-10 py-4 sm:py-7 md:py-10 mb-10">
            <div className="text-center md:text-left">
                <h2 className="text-[25px] sm:text-[40px]">Looking for fashion?</h2>
                <p>Popular items, discounts and free shipping</p>
            </div>
            <div className="text-center md:text-right block my-5 md:my-0">
                <Link to="/" className="as-outline-btn inline-block">Learn More</Link>
            </div>
        </section>
    );
};

export default Cta;