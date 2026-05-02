"use client";
import Beams from "@/components/Modules/home/bannar/Beams";

const Banner = () => {
  return (
    <section className="relative w-full h-screen sm:h-screen md:h-screen lg:h-screen overflow-hidden">
      {/* The Background Animation */}
      <Beams
        beamWidth={3}
        beamHeight={30}
        beamNumber={20}
        lightColor="#ff0000"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={30}
      />

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-center leading-[0.9] sm:leading-[0.85]">
          NEXT <br className="hidden sm:block" /> GENERATION
        </h1>
        <p className="text-white/40 mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light px-2 sm:px-0 leading-relaxed">
          Pushing the boundaries of digital interfaces with motion and light.
        </p>
        
        {/* Buttons must have pointer-events-auto to be clickable */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 pointer-events-auto">
          <button className="px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 bg-white text-black rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-gray-200 transition-colors duration-300 active:scale-95">
            Get Started
          </button>
        </div>
      </div>

      {/* Bottom Gradient Fade (Optional - looks pro) */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 lg:h-40 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
};

export default Banner;