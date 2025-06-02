import SideNav from "../templates/SideNav.tsx";
import MainArea from "../templates/MainArea.tsx";

const Home = () => {
  return (
    <div className="flex h-svh">
      <SideNav />
      <div className="flex flex-col w-full">
        <MainArea />
      </div>{" "}
    </div>
  );
};

export default Home;
