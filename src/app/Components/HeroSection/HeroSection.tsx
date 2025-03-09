import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden bg-black">
      {/* Background Image Collage */}
      <div className="absolute inset-0 flex gap-2">
        {[
          "https://i.postimg.cc/zG0Q4rDv/peakpx-2.jpg",
          "https://i.postimg.cc/YqSYbKPb/peakpx.jpg",
          "https://i.postimg.cc/QNBHtQFx/peakpx-5.jpg",
          "https://i.postimg.cc/gcfr6xhy/peakpx-4.jpg",
          "https://i.postimg.cc/g2LDHXtY/peakpx-6.jpg",
        ].map((src, index) => (
          <div key={index} className="relative w-1/5 h-screen">
            <div className="absolute inset-0 transform skew-x-6">
              <Image
                src={src}
                alt={`Character ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className="opacity-90"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Text & CTA Section */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl  font-extrabold uppercase tracking-wide">
          King of the Battle grounds
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          A fierce gamer dominating the battlegrounds, mastering tactics,
          strategy, and precision for the ultimate Chicken Dinner.
        </p>

        {/* Call-to-Action Button */}
        {/* Cool Call-to-Action Button */}
        <div className="mt-6">
          <a
            href="#our-games"
            className="px-8 py-4 bg-[#1D164A] from-[#5C47DE] to-indigo-600 text-white font-semibold text-lg rounded-full shadow-xl transform hover:scale-105 hover:rotate-3 transition-all duration-300"
          >
            Explore Our Games
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
