import Banner from "./banner";
import Navbar from "./navbar/navbar";
import AboutSection from "./about/AboutSection";
import WhatWeBuild from "./servicePage/WhatWeBuild";
import WhyChoose from "./why-choose/WhyChoose";
import DevelopmentProcess from "./process/DevelopmentProcess";
import TechStack from "./tech/TechStack";
import FeaturedProjects from "./projects/FeaturedProjects";
import Industries from "./industries/Industries";
import ClientMetrics from "./metrics/ClientMetrics";
import Testimonials from "./testimonials/Testimonials";
import FAQ from "./faq/FAQ";
import ContactCTA from "./contact/ContactCTA";

const Homepage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#030014] font-sans text-white selection:bg-purple-500/30">
      <Navbar />
      <main className="w-full">
        <Banner />
        <AboutSection />
        <WhatWeBuild />
        <WhyChoose />
        <DevelopmentProcess />
        <TechStack />
        <FeaturedProjects />
        <Industries />
        <ClientMetrics />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
    </div>
  );
};

export default Homepage;
