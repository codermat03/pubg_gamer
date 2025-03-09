/* eslint-disable prefer-const */
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const AboutMe = () => {
  // Animated Stats Counter
  const [stats, setStats] = useState({
    kdRatio: 0,
    tier: "Conqueror",
    totalKills: 0,
    winRate: 0,
  });

  useEffect(() => {
    let interval = setInterval(() => {
      setStats((prevStats) => ({
        kdRatio: Math.min(prevStats.kdRatio + 0.2, 4.8),
        tier: "Conqueror",
        totalKills: Math.min(prevStats.totalKills + 500, 10000),
        winRate: Math.min(prevStats.winRate + 2, 20),
      }));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-r from-[#150E28] via-[#41254B] to-[#632C40] text-white py-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
        {/* Section Title */}
        <p className="text-sm text-purple-400 tracking-widest uppercase font-bold">
          Our Features
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-white leading-tight mt-2">
          A <span className="text-orange-400">Fearless</span> Competitor
        </h2>
        <p className="md:text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
          Mastering the battlefield with strategy, skill, and precision. Every
          match is a new challenge.
        </p>

        {/* Stats Grid */}
        {/* Stats Grid Container - Ensure it has relative positioning */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 text-center">
          {[
            { title: "KD Ratio", value: stats.kdRatio.toFixed(1) },
            { title: "Tier", value: stats.tier },
            { title: "Total Kills", value: `${stats.totalKills}+` },
            { title: "Win Rate", value: `${stats.winRate}%` },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative p-6 bg-opacity-20 border shadow-lg transition-all transform hover:scale-105 border-orange-400 rounded-xl overflow-hidden"
              style={{
                clipPath:
                  "polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 0% 100%)",
                background:
                  "linear-gradient(to bottom, rgba(43,23,59,0.6), rgba(21,14,40,0.9))",
              }}
            >
              <span className="absolute top-4 left-5 text-lg font-extrabold text-gray-400">
                0{index + 1}.
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-6">
                {stat.value}
              </h3>
              <p className="md:text-lg text-orange-300 font-semibold mt-2">
                {stat.title}
              </p>
            </div>
          ))}

          {/* Character Image - Actually Under the Cards */}
          <div className="absolute right-[-50px] bottom-[-180px] lg:right-[-80px] lg:bottom-[-220px] z-[-1]">
            <Image
              src="https://i.postimg.cc/MZnZm1JM/pngfind-com-pubg-logo-png-288175.png"
              alt="Character"
              width={250}
              height={350}
              className="w-[500px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
