import { Zap } from "lucide-react";
const RefactrButton = () => {
  return (
    <button className="flex w-fit h-fit self-center items-center gap-1 px-5 py-3 m-3 bg-[#fffff7] rounded-2xl">
      <Zap />
      <p className="flex text-lg font-medium">Refactr</p>
    </button>
  );
};

export default RefactrButton;
