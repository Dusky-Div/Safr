import PasswordDetailSection from "./PasswordDetailSection";
import PasswordSection from "./PasswordSection";

const MainArea = () => {
  return (
    <div className="flex overflow-auto w-full h-full bg-[#0A0A0A]">
      <PasswordSection />
      <PasswordDetailSection />
    </div>
  );
};

export default MainArea;
