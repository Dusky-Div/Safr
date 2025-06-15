import SideNavListItem from "../atoms/SideNavListItem";
import {
  CreditCard,
  KeyRound,
  Landmark,
  LockKeyholeOpen,
  NotebookPen,
} from "lucide-react";

const SideNavList2 = () => {
  return (
    <div className="flex flex-col h-3/5 px-2">
      <SideNavListItem
        Title={"Passwords"}
        Icon={<LockKeyholeOpen size={18} />}
      />
      <SideNavListItem Title={"Credit Cards"} Icon={<CreditCard size={18} />} />
      <SideNavListItem Title={"Bank Accounts"} Icon={<Landmark size={18} />} />
      <SideNavListItem Title={"API keys"} Icon={<KeyRound size={18} />} />
      <SideNavListItem
        Title={"Secure Notes"}
        Icon={<NotebookPen size={18} />}
      />
    </div>
  );
};

export default SideNavList2;
