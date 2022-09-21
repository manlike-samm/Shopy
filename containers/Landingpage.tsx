import { Navbar, Promo, TrendingNow } from "../components";

const Landingpage = () => {
  return (
    <div className="flex-col flex justify-center ">
      <Navbar />
      <Promo />
      <TrendingNow />
    </div>
  );
};

export default Landingpage;
