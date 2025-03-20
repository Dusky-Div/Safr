import { useAuth } from "../../authContext/AuthContext.tsx";
import { useEffect, useState } from "react";
import SideNav from "../templates/SideNav.tsx";
import TopBar from "../templates/TopBar.tsx";
import MainArea from "../templates/MainArea.tsx";

const Home = () => {
  const auth = useAuth();
  const user = auth?.user;
  const [firstName, setFirstName] = useState<string>("");

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          console.log(user);
          console.log(user.uid);
          const response = await fetch(
            `http://localhost:3000/api/user/${user.uid}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch user");
          }

          const data = await response.json();
          setFirstName(data.firstName);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div className="flex h-svh">
      <SideNav />
      <div className="flex flex-col w-full">
        <TopBar />
        <MainArea />
      </div>{" "}
      {/* <h1>Welcome, {user ? firstName : "Guest"}</h1> */}
    </div>
  );
};

export default Home;
