import React, { useState, KeyboardEvent, ChangeEvent } from "react";

interface CoolSearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<CoolSearchBarProps> = ({
  placeholder = "Search passwords, websites, notes",
  onSearch,
}) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="relative w-full self-center">
      <input
        type="text"
        className="flex w-full py-3 px-3 rounded-lg text-sm bg-[#212121] text-white font-normal placeholder-white/60
                   backdrop-blur-md focus:outline-none
                   transition duration-300 shadow-md"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBar;
