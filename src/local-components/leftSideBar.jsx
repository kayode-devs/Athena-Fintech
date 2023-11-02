import Logo from "./logo";
import { NavOnMd } from "./nav";
import User from "./user";

const LeftSideBar = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between relative p-2  border-solid border-2 border-opacity-[.2] border-zinc-50 rounded-[40px]">
      <div className="flex justify-center p-4 w-full">
        <Logo />
      </div>
      <div> 
        <div className="flex justify-center mt-[-2em]">
          <User />
        </div>
        <NavOnMd />
      </div>
      <div className="h-[18%] flex rounded-[30px] p-2  bg-stone-700">
        <div className=""></div>
        <div className="text-sm font-medium">
          <p className="">Get Finance audit now.</p>
          <button className="bg-lime-500 text-white rounded-md px-3 py-1 text-xs">
            Click here
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
