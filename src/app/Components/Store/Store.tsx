"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "PUBG Hoodie",
    price: "$39.99",
    image: "https://i.postimg.cc/9MggdkFL/Royal-Blue-14-1200x1200.webp",
  },
  {
    id: 2,
    name: "Gaming Headset",
    price: "$79.99",
    image:
      "https://i.postimg.cc/wjtNMbS6/5afde37c-a70b-4771-95fe-c48452d073a4.png",
  },
  {
    id: 3,
    name: "Mobile Triggers",
    price: "$19.99",
    image: "https://i.postimg.cc/0Qt5p9wh/61-AFEtuary-L.png",
  },
  {
    id: 4,
    name: "PUBG Mousepad",
    price: "$14.99",
    image: "https://i.postimg.cc/1t411w8Y/1704530301.png",
  },
];

export default function BattleGearStore() {
  return (
    <div className="bg-white py-12 px-6 text-[#1D1B38]">
      <h2 className="text-3xl md:text-5xl  font-extrabold text-center mb-8 uppercase">
        Battle Gear Store
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-200 p-4 rounded-lg shadow-lg text-center h-[350px] flex flex-col justify-between"
            style={{
              clipPath: "polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 0% 100%)",
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-lg h-[200px] object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-yellow-500 font-bold">{product.price}</p>
            </div>
            <button className="mt-2 bg-yellow-500 hover:bg-yellow-600 w-full text-black font-bold py-2 rounded-lg">
              Buy Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
