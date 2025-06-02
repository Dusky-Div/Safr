const SideNavListItem = ({ Title, Icon }: any) => {
  return (
    <button className="relative group flex w-full text-start justify-start text-sm font-normal text-[#b7b7b7] hover:text-white hover:bg-[#1d1d1d] py-3 px-5 rounded-xl">
      <div className="flex font-normal text-base items-center gap-2">
        {Icon}
        <span className="truncate-text">{Title}</span>
      </div>
    </button>
  );
};

export default SideNavListItem;
