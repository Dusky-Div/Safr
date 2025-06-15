import {
  CreditCard,
  KeyRound,
  Landmark,
  LockKeyholeOpen,
  NotebookPen,
  Plus,
} from "lucide-react";
import SearchBar from "../atoms/SearchBar";
import PasswordsList from "../molecules/PasswordsList";
import { useState } from "react";
import AddButtonListItem from "../atoms/AddButtonListItem";
const PasswordSection = () => {
  const [addButtonClicked, setAddButtonClicked] = useState(false);
  const handleAddButtonClick = () => {
    setAddButtonClicked((prev) => !prev);
  };
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };
  return (
    <div className="flex flex-col h-full w-1/2 border-r border-[#2c2c2c]">
      <p className="text-white text-2xl font-normal px-4 mt-4">Passwords</p>
      <div className="relative flex w-3/4 h-fit mt-4 self-center gap-2 items-center">
        <SearchBar onSearch={handleSearch} />
        <button
          className="flex gap-1 items-center justify-center text-[#000] bg-[#fffefa] hover:bg-[#c8c8c8] w-fit p-3 rounded-xl font-medium text-sm"
          onClick={handleAddButtonClick}
        >
          <div className="flex">
            <Plus size={24} strokeWidth={2.2} />
          </div>
        </button>
        {addButtonClicked && (
          <div className="absolute top-full mt-1 right-0 w-fit bg-[#fffefa] p-1 rounded-2xl shadow-lg">
            <div className="flex flex-col h-fit w-fit">
              <AddButtonListItem
                Title={"Passwords"}
                Icon={<LockKeyholeOpen size={18} />}
                Route="/enter-password-details"
                setAddButtonClicked={setAddButtonClicked}
              />
              <AddButtonListItem
                Title={"Credit Cards"}
                Icon={<CreditCard size={18} />}
                Route="/enter-card-details"
                setAddButtonClicked={setAddButtonClicked}
              />
              <AddButtonListItem
                Title={"Bank Accounts"}
                Icon={<Landmark size={18} />}
                Route="/enter-bank-details"
                setAddButtonClicked={setAddButtonClicked}
              />
              <AddButtonListItem
                Title={"API keys"}
                Icon={<KeyRound size={18} />}
                Route="/enter-api-details"
                setAddButtonClicked={setAddButtonClicked}
              />
              <AddButtonListItem
                Title={"Secure Notes"}
                Icon={<NotebookPen size={18} />}
                Route="/enter-note-details"
                setAddButtonClicked={setAddButtonClicked}
              />
            </div>
          </div>
        )}
      </div>
      <PasswordsList />
    </div>
  );
};

export default PasswordSection;
