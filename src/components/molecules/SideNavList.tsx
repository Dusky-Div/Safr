import SideNavListItem from "../atoms/SideNavListItem";
import {
  CreditCard,
  Fingerprint,
  GalleryVerticalEnd,
  KeyRound,
  Landmark,
  LockKeyholeOpen,
  Wifi,
} from "lucide-react";

const SideNavList = () => {
  return (
    <div className="flex flex-col h-3/5 px-2">
      <SideNavListItem
        Title={"All Items"}
        Icon={<GalleryVerticalEnd size={18} color="#a0cc00" />}
      />
      <SideNavListItem
        Title={"Passwords"}
        Icon={<LockKeyholeOpen size={18} color="#FF5733" />}
      />
      <SideNavListItem
        Title={"WI-FI"}
        Icon={<Wifi size={18} strokeWidth={2.2} color="#83c760" />}
      />
      <SideNavListItem
        Title={"Credit Cards"}
        Icon={<CreditCard size={18} color="#90d5ff" />}
      />
      <SideNavListItem
        Title={"Bank Accounts"}
        Icon={<Landmark size={18} color="#d4a1fe" />}
      />
      <SideNavListItem
        Title={"Passkeys"}
        Icon={<KeyRound size={18} color="#FFC733" />}
      />
      <SideNavListItem
        Title={"Security Questions"}
        Icon={<Fingerprint size={18} color="#08a4a7" />}
      />
    </div>
  );
};

export default SideNavList;
