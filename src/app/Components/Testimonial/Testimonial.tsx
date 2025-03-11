"use client";

import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400">
          PUBG PRO PLAYER ENDORSEMENTS
        </h2>
        <p className="text-lg text-gray-400 mt-2">
          What the community, teammates, and sponsors say
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-yellow-500"
            style={{
              clipPath: "polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 0% 100%)",
            }}
          >
            <div className="text-left">
              <p className="text-2xl font-semibold text-yellow-400">
                "Unmatched precision and leadership!"
              </p>
              <p className="mt-3 text-gray-300">
                “His strategic plays and reflexes are on another level. Always
                the clutch player in intense moments.”
              </p>
            </div>
            <div className="mt-6 flex items-center space-x-4">
              <Image
                src="https://i.postimg.cc/jqX2r4zB/person3.jpg"
                width={50}
                height={50}
                className="rounded-full"
                alt="Teammate 1"
              />
              <div>
                <p className="font-bold text-white">Chris 'Viper' Johnson</p>
                <p className="text-sm text-gray-400">Pro Teammate</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-yellow-500"
            style={{
              clipPath: "polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 0% 100%)",
            }}
          >
            <div className="text-left">
              <p className="text-2xl font-semibold text-yellow-400">
                "Top-tier esports ambassador!"
              </p>
              <p className="mt-3 text-gray-300">
                “A true role model in the PUBG community. His influence and
                gameplay inspire the next generation of players.”
              </p>
            </div>
            <div className="mt-6 flex items-center space-x-4">
              <Image
                src="https://i.postimg.cc/13z9Px9q/person1.jpg"
                width={50}
                height={50}
                className="rounded-full"
                alt="Sponsor"
              />
              <div>
                <p className="font-bold text-white">Lisa Morgan</p>
                <p className="text-sm text-gray-400">Esports Brand Manager</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-yellow-500"
            style={{
              clipPath: "polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 0% 100%)",
            }}
          >
            <div className="text-left">
              <p className="text-2xl font-semibold text-yellow-400">
                "A legend in the making!"
              </p>
              <p className="mt-3 text-gray-300">
                “Watching his gameplay is like witnessing a masterclass in PUBG.
                His sniping and game sense are unparalleled.”
              </p>
            </div>
            <div className="mt-6 flex items-center space-x-4">
              <Image
                src="https://i.postimg.cc/0ydjY1Nb/5.jpg"
                width={50}
                height={50}
                className="rounded-full"
                alt="Fan"
              />
              <div>
                <p className="font-bold text-white">Jake 'Shadow' Rogers</p>
                <p className="text-sm text-gray-400">
                  PUBG Fan & Content Creator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
