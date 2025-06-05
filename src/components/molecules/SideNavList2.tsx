import SideNavListItem from "../atoms/SideNavListItem";
import {
  CreditCard,
  Fingerprint,
  KeyRound,
  Landmark,
  LockKeyholeOpen,
  NotebookPen,
  Wifi,
} from "lucide-react";

const SideNavList2 = () => {
  return (
    <div className="flex flex-col h-3/5 px-2">
      <SideNavListItem
        Title={"Passwords"}
        Icon={<LockKeyholeOpen size={18} />}
      />
      <SideNavListItem
        Title={"WI-FI"}
        Icon={<Wifi size={18} strokeWidth={2.2} />}
      />
      <SideNavListItem Title={"Credit Cards"} Icon={<CreditCard size={18} />} />
      <SideNavListItem Title={"Bank Accounts"} Icon={<Landmark size={18} />} />
      <SideNavListItem Title={"Passkeys"} Icon={<KeyRound size={18} />} />
      <SideNavListItem
        Title={"Security Questions"}
        Icon={<Fingerprint size={18} />}
      />
      <SideNavListItem
        Title={"Secure Notes"}
        Icon={<NotebookPen size={18} />}
      />
    </div>
  );
};

export default SideNavList2;
