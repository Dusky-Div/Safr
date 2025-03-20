import { Search } from "lucide-react";
const SideNavSearchButton = () => {
  return (
    <button className="flex items-center justify-center text-[#b7b7b7] hover:text-white hover:bg-[#1d1d1d] w-fit py-3 px-3 rounded-xl font-medium text-sm border border-[#2a2a2a] hover:border-[#1d1d1d]">
      <div className="flex">
        <Search size={20} strokeWidth={2.2} />
      </div>
    </button>
  );
};

export default SideNavSearchButton;
