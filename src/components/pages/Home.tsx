import SideNav from "../templates/SideNav.tsx";
import PasswordSection from "../templates/PasswordSection.tsx";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div className="flex h-svh">
      <SideNav />
      <div className="flex flex-col w-full">
        <div className="flex overflow-auto w-full h-full bg-[#0A0A0A]">
          <PasswordSection />
          <Outlet />
        </div>
      </div>{" "}
    </div>
  );
};

export default Home;
