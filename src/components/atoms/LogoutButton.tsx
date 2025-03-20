import { useAuth } from "../../authContext/AuthContext.tsx";
import { LogOut } from "lucide-react";
const LogoutButton = () => {
  const auth = useAuth();
  const logout = auth?.logout;
  const user = auth?.user;
  return (
    user && (
      <button
        onClick={logout}
        className="absolute bottom-10 flex gap-2 p-4 w-fit self-center text-[#e05353] hover:text-[#fff] hover:bg-[#1d1d1d] rounded-xl font-medium text-sm"
      >
        <LogOut size="20" strokeWidth={2.2} />
        <p>Logout</p>
      </button>
    )
  );
};

export default LogoutButton;
