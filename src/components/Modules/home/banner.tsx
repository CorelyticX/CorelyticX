"use client";
import Beams from "@/components/Modules/home/bannar/Beams";

const Banner = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
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
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-4">
        <h1 className="text-white text-6xl md:text-9xl font-bold tracking-tighter text-center leading-[0.9]">
          NEXT <br /> GENERATION
        </h1>
        <p className="text-white/40 mt-8 text-center max-w-lg text-lg md:text-xl font-light">
          Pushing the boundaries of digital interfaces with motion and light.
        </p>
        
        {/* Buttons must have pointer-events-auto to be clickable */}
        <div className="mt-10 pointer-events-auto">
          <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
            Get Started
          </button>
        </div>
      </div>

      {/* Bottom Gradient Fade (Optional - looks pro) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
};

export default Banner;