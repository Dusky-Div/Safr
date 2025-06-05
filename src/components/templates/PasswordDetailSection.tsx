import { useState } from "react";
import {
  Copy,
  Edit,
  ExternalLink,
  Eye,
  EyeClosed,
  Pin,
  Save,
  Star,
  Trash2,
  UndoDot,
} from "lucide-react";

const PasswordDetailSection = () => {
  const initialData = {
    websiteName: "GitHub",
    websiteURL: "github.com",
    logoURL:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    username: "divyansh-code",
    password: "supersecret123",
    updated: "1 day ago",
  };

  const [formData, setFormData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="flex flex-col h-full w-1/2 px-16 py-20 gap-3 border-r border-[#2c2c2c]">
      <p className="text-white text-2xl font-normal px-4 mt-4">Saved Details</p>

      <div className="flex px-3 py-4 gap-3 justify-between border-b border-[#2f2f2f]">
        <div className="flex h-fit w-fit gap-2 items-center">
          <img className="w-12 h-12 rounded-xl" src={formData.logoURL} alt="" />
          {isEditing ? (
            <input
              value={formData.websiteName}
              onChange={(e) => handleChange("websiteName", e.target.value)}
              className="w-full max-w-36 text-white text-lg font-medium bg-transparent border-none outline-none p-0 m-0"
            />
          ) : (
            <p
              className="text-white max-w-36 truncate text-lg font-medium"
              title={formData.websiteName}
            >
              {formData.websiteName}
            </p>
          )}
        </div>
        <div className="flex gap-1 items-center">
          <button className="flex h-fit w-fit items-center justify-center p-2 rounded-lg hover:bg-[#222222]">
            <Star color="white" size={18} strokeWidth={2.6} />
          </button>
          <button className="flex h-fit w-fit items-center justify-center p-2 rounded-lg hover:bg-[#222222]">
            <Pin color="white" size={18} strokeWidth={2.6} />
          </button>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex h-fit w-24 items-center justify-center gap-1 px-4 py-2 rounded-lg hover:bg-blue-500/20 bg-blue-500/30"
          >
            {isEditing ? (
              <Save color="#93C5FD" size={16} strokeWidth={2.8} />
            ) : (
              <Edit color="#93C5FD" size={16} strokeWidth={2.8} />
            )}

            <p className="text-sm text-blue-300">
              {isEditing ? "Save" : "Edit"}
            </p>
          </button>
          <button className="flex h-fit w-fit items-center justify-center p-2 rounded-lg bg-red-500/60 hover:bg-red-500/50">
            <Trash2 color="#FFB2B2" size={18} strokeWidth={2.6} />
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full h-fit pb-3 border-b border-[#2f2f2f]">
        {/* Username Field */}
        <div className="flex w-full justify-between items-center p-3 rounded-xl">
          <div className="flex flex-col w-fit">
            <p
              className={`text-sm font-normal ${
                isEditing ? "text-[#358cef]" : "text-[#656565]"
              }`}
            >
              Username
            </p>
            {isEditing ? (
              <input
                value={formData.username}
                onChange={(e) => handleChange("username", e.target.value)}
                className="text-white text-base bg-transparent border-none outline-none p-0 m-0"
              />
            ) : (
              <p className="text-white">{formData.username}</p>
            )}
          </div>
          <button className="flex h-fit w-fit items-center justify-center p-2 rounded-lg bg-[#222222]">
            <Copy color="white" size={14} strokeWidth={2.6} />
          </button>
        </div>

        {/* Password Field */}
        <div className="flex w-full p-3 items-center justify-between rounded-xl">
          <div className="flex flex-col w-fit">
            <p
              className={`text-sm font-normal ${
                isEditing ? "text-[#358cef]" : "text-[#656565]"
              }`}
            >
              Password
            </p>
            {isEditing ? (
              <input
                type="text"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                className="text-white text-base bg-transparent border-none outline-none p-0 m-0 tracking-widest"
              />
            ) : (
              <p className="text-white tracking-widest">
                {showPassword ? formData.password : "• • • • • • • •"}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            {!isEditing && (
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
            )}
            <button className="flex h-fit w-fit items-center justify-center p-2 rounded-lg bg-[#222222]">
              <Copy color="white" size={14} strokeWidth={2.6} />
            </button>
          </div>
        </div>

        {/* Website Field */}
        <div className="flex w-full items-center justify-between p-3 rounded-xl">
          <div className="flex flex-col w-fit">
            <p
              className={`text-sm font-normal ${
                isEditing ? "text-[#358cef]" : "text-[#656565]"
              }`}
            >
              Website
            </p>
            {isEditing ? (
              <input
                value={formData.websiteURL}
                onChange={(e) => handleChange("websiteURL", e.target.value)}
                className="text-[#c5c5c5] underline text-base bg-transparent border-none outline-none p-0 m-0"
              />
            ) : (
              <p className="text-[#c5c5c5] underline">{formData.websiteURL}</p>
            )}
          </div>
          <button className="flex h-fit w-fit items-center justify-center p-2 rounded-lg bg-[#222222]">
            <ExternalLink color="white" size={14} strokeWidth={2.6} />
          </button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex flex-col w-full h-fit">
        <div className="flex flex-col p-3">
          <p className="text-[#656565] text-sm font-normal">Created</p>
          <p className="text-[#c5c5c5] text-sm">Yesterday at 4:07 AM</p>
        </div>
        <div className="flex flex-col p-3">
          <p className="text-[#656565] text-sm font-normal">Last Modified</p>
          <p className="text-[#c5c5c5] text-sm">2 hours ago</p>
        </div>
      </div>

      {/* Discard Button (conditionally shown) */}
      {isEditing && (
        <button className="flex h-fit w-fit items-center self-center ml-3 gap-1 px-4 py-2 rounded-lg bg-red-500/60 hover:bg-red-500/50">
          <UndoDot color="#ffb2b2" size={16} strokeWidth={2.8} />
          <p className="text-sm text-[#ffb2b2]">Discard changes</p>
        </button>
      )}
    </div>
  );
};

export default PasswordDetailSection;
