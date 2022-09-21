import { images } from "../constants";
import Image from "next/image";
const TrendingNow = () => {
  const cards = [
    {
      name: "Womens Denim Jacket",
      brandName: "Brand Name",
      rating: 4.4,
      promoPrice: 700,
      realPrice: 1000,
      image: images.womenDenim,
    },
    {
      name: "Womens Denim Jacket",
      brandName: "Brand Name",
      rating: 4.4,
      promoPrice: 700,
      realPrice: 1000,
      image: images.blackjacket,
    },
    {
      name: "Womens Denim Jacket",
      brandName: "Brand Name",
      rating: 4.4,
      promoPrice: 700,
      realPrice: 1000,
      image: images.blouse,
    },
    {
      name: "Womens Denim Jacket",
      brandName: "Brand Name",
      rating: 4.4,
      promoPrice: 700,
      realPrice: 1000,
      image: images.dress,
    },
    {
      name: "Womens Denim Jacket",
      brandName: "Brand Name",
      rating: 4.4,
      promoPrice: 700,
      realPrice: 1000,
      image: images.body,
    },
  ];

  return (
    <>
      <div className=" p-5 pt-0">
        <p className=" text-2xl p-4 font-semibold tracking-wider">
          Trending Now
        </p>
        <div className="flex ml-4 space-x-4 flex-nowrap overflow-auto">
          {cards.map((card, index) => (
            <div key={index} className="flex-auto w-1/5 shrink-0">
              <Image src={card.image} alt="women Denims" />
              <div className=" mx-2 ">
                <p className=" text-xs font-semibold tracking-wide">
                  {card.name}
                </p>
                <div className=" w-full flex space-x-2 items-start  text-[9px]">
                  <p>{card.brandName} </p>
                  {"  "}
                  <p>{card.rating} ⭐</p>
                </div>
                <div className="mt-2 w-full space-x-2 flex text-xs font-semibold">
                  <p className="">Rs. {card.promoPrice}</p>
                  <p className=" font-normal text-[10px]  line-through text-neutral-400">
                    {" "}
                    Rs. {card.realPrice}
                  </p>
                  <p className=" text-green-500 text-[10px]">(10% off)</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingNow;
