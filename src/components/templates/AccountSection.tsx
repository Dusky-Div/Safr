import { useEffect, useState } from "react";
import { useAuth } from "../../authContext/AuthContext.tsx";
import { ChevronsUpDown, CircleHelp, Cog, LogOut } from "lucide-react";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const AccountSection = () => {
  const [firstName, setFName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const auth = useAuth();
  const user = auth?.user;
  const [expanded, setExpanded] = useState<boolean>(false);
  const logout = auth?.logout;

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          console.log(user);
          console.log(user.uid);
          const response = await fetch(`${BACKEND_URL}/api/user/${user.uid}`);

          if (!response.ok) {
            throw new Error("Failed to fetch user");
          }
          const data = await response.json();
          setFName(data.firstName);
          setEmail(data.email);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div className="absolute justify-center flex bottom-8 w-full h-fit">
      <button
        className="flex w-60 h-fit gap-4 justify-between p-4 rounded-3xl bg-[#1d1d1d] backdrop-blur-md shadow-lg"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex gap-2">
          <img
            className="flex w-14 h-14 rounded-full"
            src="https://i.pinimg.com/736x/9d/e5/d2/9de5d2ab40011b354914c778341e3bff.jpg"
            alt=""
          />
          <div className="flex flex-col self-center">
            <p className="text-white text-sm text-left">{firstName}</p>
            <p className="text-[#919191] text-sm font-light text-left underline truncate max-w-28 overflow-hidden whitespace-nowrap">
              {email}
            </p>
          </div>
        </div>
        <div className="flex h-fit w-fit self-center ">
          <ChevronsUpDown color="#b0b0b0" size={18} strokeWidth={2.6} />
        </div>
      </button>
      {expanded && (
        <div className="absolute -top-[168px] left-1/2 -translate-x-1/2 flex-col flex w-60 h-fit px-4 py-4 items-start rounded-3xl bg-[#1d1d1d] shadow-2xl">
          <p className="text-[#b0b0b0] text-sm mb-1 font-normal px-2">
            Your account
          </p>
          <button
            className="flex w-full rounded-xl gap-2 items-center p-2 text-red-600 hover:bg-red-600/40 hover:text-red-300 transition"
            onClick={logout}
          >
            <LogOut size={18} />
            <p className=" text-sm">Logout</p>
          </button>
          <button className="flex w-full rounded-xl gap-2 items-center p-2 hover:bg-white/10 transition">
            <Cog color="white" size={18} />
            <p className="text-white text-sm">Settings</p>
          </button>
          <button className="flex w-full rounded-xl gap-2 items-center p-2 hover:bg-white/10 transition">
            <CircleHelp color="white" size={18} />
            <p className="text-white text-sm">Contact Us</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountSection;
