import SideNavListItem from "../atoms/SideNavListItem";
import { GalleryVerticalEnd, Pin, Star } from "lucide-react";

const SideNavList1 = () => {
  return (
    <div className="flex flex-col h-fit px-2">
      <SideNavListItem
        Title={"All Items"}
        Icon={<GalleryVerticalEnd size={18} />}
      />
      <SideNavListItem Title={"Favorites"} Icon={<Star size={18} />} />
      <SideNavListItem
        Title={"Pinned"}
        Icon={<Pin size={18} strokeWidth={2.2} />}
      />
    </div>
  );
};

export default SideNavList1;
