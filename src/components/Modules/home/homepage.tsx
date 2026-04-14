import Banner from "./banner";
import Navbar from "./navbar/navbar";
import HorizontalSection from "./about/HorizontalSection";

const Homepage = () => {
    return (
        <div className="bg-black">
            <Navbar />
            <Banner />
            <HorizontalSection />
            <div className="h-screen flex items-center justify-center">
              <h2 className="text-white/20">Scroll down to see vertical footer...</h2>
            </div>
        </div>
    );
};

export default Homepage;