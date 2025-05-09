import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext);

import { ReactNode } from "react";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);

      // if (
      //   (firebaseUser && window.location.pathname === "/login") ||
      //   window.location.pathname === "/signup"
      // ) {
      //   navigate("/");
      // }
    });

    return () => unsubscribe();
  }, [navigate]);

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
