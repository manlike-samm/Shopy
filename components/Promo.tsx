import Image from "next/image";
import { images } from "../constants";
const Promo = () => {
  return (
    <div>
      <p className=" text-center ">
        Invite Friends and get 50% off on your next purchase{" "}
        <a className="text-[#00398F]">Invite Now</a>
      </p>
      <div className="grid grid-rows-2">
        <div>
          <Image src={images.ladyInYellow} />
        </div>
      </div>
    </div>
  );
};

export default Promo;
