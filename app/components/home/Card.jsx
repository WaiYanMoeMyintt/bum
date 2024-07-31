import React from "react";
import { cards } from "@/lib/card";
import Image from "next/image";
const Card = () => {
  return (
    <div className="px-4 py-2.5 mt-8 card_title">
      <div className = "text-center">
        <h3 className = "mb-5 text-2xl font-bold">Explore all BumBum has to offer</h3>
      </div>

      <div className="card_content flex items-center justify-center gap-8 flex-wrap">
        {cards &&
          cards.map((card, index) => (
            <div key={index} className = 'bg-white cursor-pointer px-2.5 py-2.5 rounded-md shadow-md hover:shadow-xl transition-shadow'  >
              <Image
                src={card?.source}
                alt={card?.name}
                width={120}
                height={120}
                className = "block w-40 h-40"
              />
                <h3 className = 'flex text-center items-end justify-center'>{card?.name}</h3>
            </div>
          ))}
      </div>

      <div className  = "profile-title mt-8 w-full flex flex-col gap-4 items-center justify-center text-center ">
          <h2 className = "sm:text-2xl lg:text-3xl  font-bold">'Plan makes it easy to go as simple or as complex as you want'</h2>
          <h3 className = "text-xl font-bold">- Elon Musk</h3>
      </div>
    </div>
  );
};

export default Card;
