import SearchBar from "../atoms/SearchBar";
import SideNavAddButton from "../atoms/SideNavAddButton";
import PasswordsList from "../molecules/PasswordsList";

const PasswordSection = () => {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    // Implement search functionality here
  };
  return (
    <div className="flex flex-col h-full w-1/2 border-r border-[#2c2c2c]">
      <p className="text-white text-2xl font-normal px-4 mt-4">Passwords</p>
      <div className="flex w-3/4 h-fit mt-4 self-center gap-2 items-center">
        <SearchBar onSearch={handleSearch} />
        <SideNavAddButton />
      </div>
      <PasswordsList />
    </div>
  );
};

export default PasswordSection;
