import { Waypoints } from "lucide-react";
import SideNavList from "../molecules/SideNavList";
import AccountSection from "./AccountSection";

const SideNav = () => {
  return (
    <div className="relative flex flex-col w-96 h-full bg-[#111111] border-r border-[#2c2c2c]">
      <div className="flex flex-col items-center gap-1 text-white text-center justify-center py-12 font-semibold text-2xl">
        <div className="flex gap-1 text-3xl font-questrial">
          <button className="flex self-center">
            <Waypoints color="gold" />
          </button>
          <button>Safr.</button>
        </div>
        <div className="flex text-xs leading-none font-light text-[#b7b7b7]">
          {/* <p>for the forgetful legends.</p> */}
          <p>Keep it tight. Keep it Safr.</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex relative text-[#555555] border-b border-[#3b3b3b] mx-6 my-3">
          <p className="flex absolute bg-[#111111] px-1 -bottom-2 left-2 text-[12px] font-bold">
            Saved
          </p>
        </div>
        <SideNavList />
      </div>
      <AccountSection />
    </div>
  );
};

export default SideNav;
