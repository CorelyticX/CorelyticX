import Banner from "./banner";
import Navbar from "./navbar/navbar";
import HorizontalSection from "./about/HorizontalSection";
import Services from "./servicePage/Services";

const Homepage = () => {
    return (
        <div className="bg-black">
            <Navbar />
            <Banner />
            <HorizontalSection />
            <Services />
        </div>
    );
};

export default Homepage;