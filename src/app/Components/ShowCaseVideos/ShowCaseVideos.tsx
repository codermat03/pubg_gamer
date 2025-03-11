"use client";
import React from "react";

const videos = [
  { id: "V-M4mgFw57s" },
  { id: "c7lBFiEszEM" },
  { id: "ol2Cvgtvrhk" },
  { id: "AkortbwEZlg" },
  { id: "sVau5qXKeFY" },
  { id: "FZiilmOBbQk" },
];

const ShowcaseVideos: React.FC = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="text-center py-10">
        <p className="text-purple-600 text-sm sm:text-base lg:text-lg uppercase font-semibold">
          Latest Videos
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-gray-900 leading-tight mt-2">
          My YouTube Videos
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-5 md:px-6 lg:px-0">
        <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${videos[0].id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              clipPath: "polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 0% 100%)",
              background:
                "linear-gradient(to bottom, rgba(43,23,59,0.6), rgba(21,14,40,0.9))",
            }}
          ></iframe>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          {videos.slice(1, 3).map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              style={{
                clipPath:
                  "polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 0% 100%)",
                background:
                  "linear-gradient(to bottom, rgba(43,23,59,0.6), rgba(21,14,40,0.9))",
              }}
            >
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 md:px-6 lg:px-0 mt-6">
        {videos.slice(3).map((video) => (
          <div key={video.id} className=" rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${video.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                clipPath:
                  "polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 0% 100%)",
                background:
                  "linear-gradient(to bottom, rgba(43,23,59,0.6), rgba(21,14,40,0.9))",
              }}
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseVideos;
