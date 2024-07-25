import overlaybg1 from "../../assets/img/overlay-1.jpg"
import overlaybg2 from "../../assets/img/overlay-2.jpg"

const OverlayCard = () => {
    return (
        <section className="grid md:grid-cols-2 gap-8 pb-10">
            <div style={{ backgroundImage: `url(${overlaybg1})`}} className="w-full min-h-[320px] bg-cover bg-center p-5 sm:p-8 relative z-[1] overlay">
                <h2 className="text-white text-3xl mb-3">Big Deal on Clothes</h2>
                <p className="text-white max-w-[490px]">This is a wider card with text below and Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab quae nihil praesentium impedit libero possimus id vero</p>
                <button className="as-primary-btn !bg-white !text-secondary-color mt-4 transition-all duration-200 hover:opacity-80">Discover</button>
            </div>
            <div style={{ backgroundImage: `url(${overlaybg2})` }} className="w-full min-h-[320px] bg-cover bg-center p-5 sm:p-8 relative z-[1] overlay">
                <h2 className="text-white text-3xl mb-3">Great Bundle for You</h2>
                <p className="text-white max-w-[490px]">Card with text below and Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab quae nihil praesentium impedit libero possimus id vero</p>
                <button className="as-primary-btn !bg-white !text-secondary-color mt-4 transition-all duration-200 hover:opacity-80">Discover</button>
            </div>
        </section>
    );
};

export default OverlayCard;