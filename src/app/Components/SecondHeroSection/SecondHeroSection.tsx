"use client";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-sm font-bold tracking-widest text-[#1D164A] uppercase">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1D1B38] leading-tight mt-2">
            We Dominate <span className="text-[#1D164A]">The Battlefield</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            A professional PUBG player squad mastering strategies, outplaying
            enemies, and securing the Winner Winner Chicken Dinner every time.
          </p>

          <button className="mt-6 px-6 py-3 bg-[#1D164A] text-white font-bold rounded-lg hover:bg-purple-700 transition-all">
            Join My Squad
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center relative mt-12 lg:mt-0">
          <Image
            src="https://i.postimg.cc/mhfx2ftM/peakpx_(3).jpg" // Replace with your actual PUBG-themed image
            alt="PUBG Squad"
            width={500}
            height={300}
            className="rounded-lg shadow-lg h-[400px]"
          />
          {/* Floating PUBG Element */}
          <Image
            src="https://i.postimg.cc/Lsyc70Ft/peakpx-1.jpg" // Replace with an airdrop, loot box, or character
            alt="Airdrop"
            width={150}
            height={150}
            className="absolute -bottom-12 -left-10 h-[150px] px-5 md:px-0"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { number: "5+", label: "Years of Experience" },
          { number: "5000+", label: "Matches Won" },
          { number: "45%", label: "Headshot Accuracy" },
          { number: "20+", label: "Tournaments Played" },
        ].map((stat, index) => (
          <div key={index} className="text-[#1D1B38]">
            <h3 className="text-3xl md:text-4xl font-extrabold">
              {stat.number}
            </h3>
            <p className="text-[#1D164A]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;
