import Image from "next/image";
import { images } from "../constants";

const Landingpage = () => {
  const categories = ["Men", "Women", "Kids", "Shop", "Contact us"];
  return (
    <>
      <div className="flex justify-between items-center space-x-10 p-3 bg-white">
        <Image src={images.logo} alt="logo" width="57px" height="48px" />

        <div className=" flex space-x-4 ">
          {categories.map((cat, index) => (
            <p key={index}>{cat}</p>
          ))}
        </div>
        <div className="flex w-[40%]">
          <div className="flex items-center relative w-full mr-6">
            <input
              className="px-4 py-2 bg-neutral-50 rounded-lg w-full"
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
            <div></div>
          </div>
          <div className=" w-[80%] flex justify-end space-x-3 items-center">
            <div className="">
              <Image src={images.heart} alt="favorites" />
            </div>
            <div className=" pl-4">
              <Image src={images.cart} alt="cart" />
            </div>
            <div className=" pl-4">
              <Image src={images.avatar} alt="user profile picture" />
            </div>
            <p className=" whitespace-nowrap">Anne Doe</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
