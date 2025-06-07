import { useNavigate } from "react-router-dom";
const AddButtonListItem = ({
  Title,
  Icon,
  Route,
  setAddButtonClicked,
}: any) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (setAddButtonClicked) {
      setAddButtonClicked(false);
    }
    navigate(Route);
  };
  return (
    <button
      onClick={handleClick}
      className="relative group flex w-full text-start justify-start text-sm font-normal text-[#000] hover:text-white hover:bg-[#1d1d1d] py-3 px-5 rounded-xl"
    >
      <div className="flex font-normal text-sm items-center gap-2">
        {Icon}
        <span className="truncate-text">{Title}</span>
      </div>
    </button>
  );
};

export default AddButtonListItem;
