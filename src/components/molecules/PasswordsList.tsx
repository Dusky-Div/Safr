import { useEffect, useState } from "react";
import VaultItem from "../atoms/VaultItem.tsx";
import { useAuth } from "../../authContext/AuthContext.tsx";

interface VaultEntry {
  _id: string;
  firebaseUID: string;
  entryType: string;
  displayData: any; // Will vary per type
  updatedAt: string;
}

const PasswordsList = () => {
  const { user } = useAuth();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [vaultData, setVaultData] = useState<VaultEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${BACKEND_URL}/api/vault?firebaseUID=${user?.uid}`,
          { credentials: "include" }
        );
        const result = await res.json();
        const allEntries: VaultEntry[] = result.data;

        if (!Array.isArray(allEntries)) {
          console.error("Expected array from backend but got:", result.data);
          return;
        }

        console.log("Fetched entries:", allEntries); // 👈 add this line

        const formatted = allEntries
          .filter((entry) => entry.entryType && entry.updatedAt)
          .map((item) => ({
            ...item,
            updatedAt: new Date(item.updatedAt).toISOString(),
          }));

        formatted.sort(
          (a, b) =>
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );

        setVaultData(formatted);
      } catch (err) {
        console.error("Failed to fetch vault data", err);
      }
    };

    if (user?.uid) fetchData();
  }, [user?.uid]);

  return (
    <div className="flex flex-col h-fit w-full overflow-auto mt-4">
      <div className="data flex flex-col">
        {vaultData.map((item) => (
          <VaultItem key={item._id} entry={item} />
        ))}
      </div>
    </div>
  );
};

export default PasswordsList;
