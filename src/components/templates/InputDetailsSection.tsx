import { useState } from "react";
const InputDetailsSection = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="relative flex flex-col h-full w-1/2 border-r gap-2 border-[#2c2c2c]">
      <button
        className="flex p-4 rounded-2xl border border-[#b0b0b0] text-white h-fit w-fit self-center my-auto"
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        Click Here
      </button>
      {clicked && (
        <p className="absolute left-1/2 -translate-x-1/2 bottom-72 text-white">
          Teri ma ki chut
        </p>
      )}
    </div>
  );
};

export default InputDetailsSection;
