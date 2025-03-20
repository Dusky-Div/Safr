// import SideNavDropdownMenu from "../component-lib/SideNavDropDown";
const SideNavListItem = ({ Title }: any) => {
  return (
    <button className="relative group flex w-60 text-start justify-start text-sm font-normal text-[#b7b7b7] hover:text-white hover:bg-[#1d1d1d] p-3 rounded-xl">
      <div className="text-ellipsis overflow-hidden whitespace-nowrap">
        <span className="truncate-text">{Title}</span>
      </div>
      {/* <SideNavDropdownMenu /> */}
    </button>
  );
};

export default SideNavListItem;
