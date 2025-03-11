import React from "react";

const tournaments = [
  {
    title: "Kill Challenge #1",
    date: "March 20, 2025",
    prize: "$500",
  },
  {
    title: "Battle Royale Tournament",
    date: "March 25, 2025",
    prize: "$1000",
  },
  {
    title: "Scrim Night Showdown",
    date: "March 30, 2025",
    prize: "$750",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-16 bg-white text-[#1D1B38]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1D1B38] mb-12 uppercase tracking-wider">
          Upcoming Events & Tournaments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tournaments.map((event, index) => (
            <div
              key={index}
              className="relative bg-gray-200 border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-all duration-300 ease-in-out mx-5"
              style={{
                clipPath:
                  "polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 0% 100%)",
              }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                {event.title}
              </h3>
              <p className="text-lg text-gray-600 mb-2">Date: {event.date}</p>
              <p className="text-lg text-gray-600 mb-4">
                Prize Pool: {event.prize}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
