import React from "react";

const DigitalServices = () => {
  const services = [
    {
      title: "UC (Unknown Cash) Selling",
      description:
        "PUBG’s in-game currency for buying skins, Royale Pass, etc.",
    },
    {
      title: "Account Boosting",
      description: "Helping players rank up faster.",
    },
    {
      title: "Custom Room Hosting",
      description: "Exclusive matches with custom rules.",
    },
    {
      title: "Coaching & Training",
      description: "Pro tips and strategies for beginners.",
    },
    {
      title: "Kill Challenges & Tournaments",
      description: "Players pay to enter and win prizes.",
    },
    {
      title: "In-Game Skins & Items",
      description: "Trading rare gun skins, outfits, parachutes, etc.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#1D164A] via-[#2768AB] to-[#1D164A] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-orange-500 mb-12 uppercase tracking-wider">
          Digital Services & In-Game Items
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative  from-black to-gray-900 border border-white rounded-lg shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-all duration-300 ease-in-out mx-5"
              style={{
                clipPath:
                  "polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 0% 100%)",
              }}
            >
              <span className="absolute -top-3 left-4 text-sm text-gray-400 font-semibold">
                0{index + 1}.
              </span>
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-lg mb-4 text-gray-300 text-center">
                {service.description}
              </p>
              <button className="bg-orange-500 text-black px-6 py-2 rounded-full hover:bg-orange-400 transition duration-300 ease-in-out font-bold">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalServices;
