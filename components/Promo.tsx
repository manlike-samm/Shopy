import Image from "next/image";
import { images } from "../constants";
import NavigationDots from "./NavigationDots";
const Promo = () => {
  return (
    <div className="w-full h-screen">
      <p className=" text-center w-full p-2 ">
        Invite Friends and get 50% off on your next purchase{" "}
        <a className="text-[#00398F]">Invite Now</a>
      </p>
      <div className="h-[85%]">
        <div className="h-full flex">
          <div className="relative h-full w-[60%]">
            <Image src={images.ladyInYellow} layout="fill" alt="" />
          </div>
          <div className="h-full w-[40%] relative flex flex-col justify-center items-center">
            <Image src={images.rect} layout="fill" alt="background" />
            <div className="absolute text-center text-2xl text-neutral-600">
              <div className="w-[70%] m-auto">
                <Image src={images.prada} alt="" />
              </div>
              <p className="mt-6 m-2">Big Fashion Festival</p>
              <p>50% - 80% off</p>
              <button className="mt-4 text-lg tracking-wider border rounded-lg border-black px-6 py-1 ">
                Explore
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <NavigationDots active="pg1" />
        </div>
      </div>
    </div>
  );
};

export default Promo;
