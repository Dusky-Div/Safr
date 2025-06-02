import { Plus } from "lucide-react";
const SideNavAddButton = () => {
  return (
    <button className="flex gap-1 items-center justify-center text-[#000] bg-[#fffefa] hover:bg-[#c8c8c8] w-fit p-3 rounded-xl font-medium text-sm">
      <div className="flex">
        <Plus size={24} strokeWidth={2.2} />
      </div>
    </button>
  );
};

export default SideNavAddButton;
