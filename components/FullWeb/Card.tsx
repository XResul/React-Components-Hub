import Image from "next/image";
import React from "react";

const images = [
  { id: 1, src: "/doga1.jpg", title: "Doğa 1" },
  { id: 2, src: "/doga2.jpg", title: "Doğa 2" },
  { id: 3, src: "/doga3.jpg", title: "Doğa 3" },
  { id: 4, src: "/doga4.jpg", title: "Doğa 4" },
  { id: 5, src: "/doga5.jpg", title: "Doğa 5" },
];

const Card = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((img) => (
        <div
          key={img.id}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
        >
          <div className="relative w-full h-48">
            <Image
              src={img.src}
              alt={img.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-3">
            <h2 className="text-gray-800 font-semibold text-lg">{img.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
