import Banner from "../components/homeCompo/Banner";
import Cta from "../components/homeCompo/Cta";
import Deals from "../components/homeCompo/Deals";
import OverlayCard from "../components/homeCompo/OverlayCard";
import Products from "../components/homeCompo/Products";

const Home = () => {
    
    return (
        <div>
            <Banner />
            <Products />
            <OverlayCard />
            <Deals />
            <Cta />
        </div>
    );
};

export default Home;