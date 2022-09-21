/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

type AvatarProps = {
  active: string;
};

const NavigationDots = ({ active }: AvatarProps) => (
  <div className="flex justify-center items-center p-4 pt-0 ">
    {["pg1", "pg2", "pg3", "pg4", "pg5"].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className=" w-2.5 h-2.5 rounded-full bg-neutral-300 m-2 transition duration-400 ease-in-out hover:bg-rose-400 hover:scale-125"
        style={active === item ? { backgroundColor: "#002482" } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
