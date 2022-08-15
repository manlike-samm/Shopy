import Image from "next/image";
import { images } from "../constants";

const Landingpage = () => {
  const categories = ["men", "women", "kids", "shop", "contact us"];
  return (
    <>
      <div className="flex justify-between items-center p-3 bg-white">
        <Image src={images.logo} alt="logo" width="57px" height="48px" />

        <div className=" flex space-x-2 ">
          {categories.map((cat) => (
            <p className=" capitalize">{cat}</p>
          ))}
        </div>

        <div className=" flex items-center relative">
          <input
            className="px-4 py-2 text-xl bg-neutral-50 rounded-lg"
            placeholder="search here"
          />
          <div className=" absolute right-3 top-2.5 ">
            <Image
              src={images.searchIcon}
              alt="searchicon"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="">
            <Image src={images.heart} alt="favorites" />
          </div>
          <div className=" pl-4">
            <Image src={images.cart} alt="cart" />
          </div>
          <div className=" pl-4">
            <Image src={images.avatar} alt="user profile picture" />
          </div>
          <p>Anne Doe</p>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
