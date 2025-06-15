import { useState } from "react";
import { useAuth } from "../../../authContext/AuthContext.tsx";
import {
  Copy,
  EyeClosed,
  ExternalLink,
  Eye,
  UndoDot,
  Save,
} from "lucide-react";

const PasswordInput = () => {
  const { user } = useAuth(); // assumes you use context to get firebaseUID
  const [showPassword, setShowPassword] = useState(false);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [formData, setFormData] = useState({
    type: "password",
    websiteName: "",
    websiteURL: "",
    username: "",
    password: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    if (!user?.uid) {
      console.error("User not authenticated");
      return;
    }

    const payload = {
      firebaseUID: user.uid,
      entryType: formData.type,
      displayData: {
        websiteName: formData.websiteName || "Unnamed Website",
        websiteURL: formData.websiteURL || "",
        username: formData.username || "",
      },
      data: {
        password: formData.password,
      },
    };

    try {
      const response = await fetch(`${BACKEND_URL}/api/save-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to save password");
      }

      const result = await response.json();
      console.log("Password saved successfully:", result);
    } catch (error) {
      console.error("Error saving password:", error);
    }
  };

  return (
    <div className="flex flex-col h-full w-1/2 px-16 py-20 gap-3 border-r border-[#2c2c2c]">
      <p className="text-white text-2xl font-normal px-4 mt-4">
        Password Details
      </p>

      <div className="flex px-3 py-4 gap-3 justify-between border-b border-[#2f2f2f]">
        <div className="flex h-fit w-fit gap-2 items-center">
          <input
            value={formData.websiteName}
            onChange={(e) => handleChange("websiteName", e.target.value)}
            placeholder="Website Name"
            className="w-full max-w-36 text-white text-lg font-medium bg-transparent border-none outline-none p-0 m-0"
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-fit pb-3 border-b border-[#2f2f2f]">
        <div className="flex w-full justify-between items-center p-3 rounded-xl">
          <div className="flex flex-col w-fit">
            <p className="text-sm font-normal text-[#656565]">Username</p>
            <input
              value={formData.username}
              onChange={(e) => handleChange("username", e.target.value)}
              placeholder="Username"
              className="text-white text-base bg-transparent border-none outline-none p-0 m-0"
            />
          </div>
          <button className="flex h-fit w-fit items-center justify-center p-2 rounded-lg bg-[#222222]">
            <Copy color="white" size={14} strokeWidth={2.6} />
          </button>
        </div>

        <div className="flex w-full p-3 items-center justify-between rounded-xl">
          <div className="flex flex-col w-fit">
            <p className="text-sm font-normal text-[#656565]">Password</p>
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Password"
              className="text-white text-base bg-transparent border-none outline-none p-0 m-0 tracking-widest"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="flex h-fit w-fit items-center justify-center p-2 rounded-lg bg-[#222222]"
            >
              {showPassword ? (
                <EyeClosed color="white" size={14} strokeWidth={2.6} />
              ) : (
                <Eye color="white" size={14} strokeWidth={2.6} />
              )}
            </button>
            <button className="flex h-fit w-fit items-center justify-center p-2 rounded-lg bg-[#222222]">
              <Copy color="white" size={14} strokeWidth={2.6} />
            </button>
          </div>
        </div>

        <div className="flex w-full items-center justify-between p-3 rounded-xl">
          <div className="flex flex-col w-fit">
            <p className="text-sm font-normal text-[#656565]">Website</p>
            <input
              value={formData.websiteURL}
              onChange={(e) => handleChange("websiteURL", e.target.value)}
              placeholder="Website URL"
              className="text-[#c5c5c5] underline text-base bg-transparent border-none outline-none p-0 m-0"
            />
          </div>
          <button className="flex h-fit w-fit items-center justify-center p-2 rounded-lg bg-[#222222]">
            <ExternalLink color="white" size={14} strokeWidth={2.6} />
          </button>
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

export default PasswordInput;
