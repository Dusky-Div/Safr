import InputDetailsSection from "./InputDetailsSection";
import PasswordSection from "./PasswordSection";

const MainArea = () => {
  return (
    <div className="flex overflow-auto w-full h-full bg-[#0A0A0A]">
      <PasswordSection />
      <InputDetailsSection />
    </div>
  );
};

export default MainArea;
