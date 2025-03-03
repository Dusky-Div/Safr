import { useAuth } from "../../components/AuthContext.tsx";
import { useEffect, useState } from "react";

const Home = () => {
  const auth = useAuth();
  const user = auth?.user;
  const logout = auth?.logout;
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
    <div>
      <div>
        <h1>Welcome, {user ? firstName : "Guest"}</h1>
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={() => (window.location.href = "/login")}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
