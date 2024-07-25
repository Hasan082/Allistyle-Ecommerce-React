import bannerbg from "../../assets/img/slide-lg-2.jpg"

const Banner = ({ bannerImg = bannerbg, bannerTitle }) => {
    return (
        <section className="py-10">
            <div className="relative">
                {bannerTitle && <h2 className="text-white text-4xl absolute flex items-center justify-center top-0 left-0 bottom-0 right-0 z-[1] overlay">{bannerTitle}</h2>}
                <img src={bannerImg} alt="Alistyle" className="w-full h-[400px] object-cover object-left-bottom z-0" />
            </div>
        </section>
    );
};

export default Banner;