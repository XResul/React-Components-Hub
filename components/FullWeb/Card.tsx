import Image from "next/image";
import React from "react";

const images = [
  { id: 1, src: "/doga1.jpg", title: "Doğa 1" },
  { id: 2, src: "/doga2.jpg", title: "Doğa 2" },
  { id: 3, src: "/doga3.jpg", title: "Doğa 3" },
];

const Card = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {images.map((img) => (
        <Image
          key={img.id}
          src={img.src}
          alt={img.title}
          width={120}
          height={120}
        />
      ))}
    </div>
  );
};

export default Card;
