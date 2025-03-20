import { Plus } from "lucide-react";
const SideNavAddButton = () => {
  return (
    <button className="flex gap-1 items-center justify-center text-[#b7b7b7] hover:text-white hover:bg-[#1d1d1d] w-fit py-3 px-4 rounded-xl font-medium text-sm">
      <div className="flex">
        <Plus size={20} strokeWidth={2.2} />
      </div>
      <div className="flex">New Chat</div>
    </button>
  );
};

export default SideNavAddButton;
