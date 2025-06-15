import { useState } from "react";
import { UndoDot, Save } from "lucide-react";
import { useAuth } from "../../../authContext/AuthContext.tsx";

const BankAccountInput = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    type: "bankAccount",
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    branch: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAccountNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    handleChange("accountNumber", value);
  };

  const handleSave = async () => {
    try {
      const payload = {
        firebaseUID: user?.uid,
        entryType: formData.type,
        displayData: {
          bankName: formData.bankName || "Unnamed Bank",
          accountHolderName: formData.accountHolderName || "Unnamed Holder",
        },
        data: {
          accountNumber: formData.accountNumber,
          ifscCode: formData.ifscCode,
          branch: formData.branch,
        },
      };

      const response = await fetch(`${BACKEND_URL}/api/save-bankAccount`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Bank account data saved:", data);
    } catch (error) {
      console.error("Failed to send bank account data:", error);
    }
  };

  return (
    <div className="flex flex-col h-full w-1/2 px-16 py-20 gap-3 border-r border-[#2c2c2c]">
      <p className="text-white text-2xl font-normal px-4 mt-4">
        Bank Account Details
      </p>

      <div className="flex px-3 py-4 gap-3 justify-between border-b border-[#2f2f2f]">
        <input
          value={formData.bankName}
          onChange={(e) => handleChange("bankName", e.target.value)}
          placeholder="Bank Name"
          className="w-full text-white text-lg font-medium bg-transparent border-none outline-none p-0 m-0"
        />
      </div>

      <div className="flex flex-col w-full h-fit pb-3 border-b border-[#2f2f2f]">
        <div className="flex w-full justify-between items-center p-3 rounded-xl">
          <div className="flex flex-col w-fit">
            <p className="text-sm font-normal text-[#656565]">
              Account Holder Name
            </p>
            <input
              value={formData.accountHolderName}
              onChange={(e) =>
                handleChange("accountHolderName", e.target.value)
              }
              placeholder="Account Holder Name"
              className="text-white text-base bg-transparent border-none outline-none p-0 m-0"
            />
          </div>
        </div>

        <div className="flex w-full justify-between items-center p-3 rounded-xl">
          <div className="flex flex-col w-fit">
            <p className="text-sm font-normal text-[#656565]">Account Number</p>
            <input
              type="text"
              value={formData.accountNumber}
              onChange={handleAccountNumberChange}
              placeholder="Account Number"
              className="text-white text-base bg-transparent border-none outline-none p-0 m-0"
            />
          </div>
        </div>

        <div className="flex w-full justify-between items-center p-3 rounded-xl">
          <div className="flex flex-col w-fit">
            <p className="text-sm font-normal text-[#656565]">
              IFSC/SWIFT Code
            </p>
            <input
              value={formData.ifscCode}
              onChange={(e) => handleChange("ifscCode", e.target.value)}
              placeholder="IFSC/SWIFT Code"
              className="text-white text-base bg-transparent border-none outline-none p-0 m-0"
            />
          </div>
        </div>

        <div className="flex w-full justify-between items-center p-3 rounded-xl">
          <div className="flex flex-col w-fit">
            <p className="text-sm font-normal text-[#656565]">Branch</p>
            <input
              value={formData.branch}
              onChange={(e) => handleChange("branch", e.target.value)}
              placeholder="Branch"
              className="text-white text-base bg-transparent border-none outline-none p-0 m-0"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        <button className="flex h-fit w-fit items-center self-center ml-3 gap-1 px-4 py-2 rounded-lg bg-red-500/60 hover:bg-red-500/50">
          <UndoDot color="#ffb2b2" size={16} strokeWidth={2.8} />
          <p className="text-sm text-[#ffb2b2]">Discard</p>
        </button>
        <button
          onClick={handleSave}
          className="flex h-fit w-24 items-center justify-center gap-1 px-4 py-2 rounded-lg hover:bg-blue-500/20 bg-blue-500/30"
        >
          <Save color="#93C5FD" size={16} strokeWidth={2.8} />
          <p className="text-sm text-blue-300">Save</p>
        </button>
      </div>
    </div>
  );
};

export default BankAccountInput;
