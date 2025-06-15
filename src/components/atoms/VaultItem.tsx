import { ChevronRight } from "lucide-react";

interface VaultItemProps {
  entry: {
    entryType: string;
    displayData: any;
    updatedAt: string;
  };
}

const VaultItem: React.FC<VaultItemProps> = ({ entry }) => {
  if (!entry || !entry.entryType || !entry.displayData) {
    console.error("Invalid entry passed to VaultItem:", entry);
    return null;
  }

  const { entryType, displayData, updatedAt } = entry;

  let primary = "";
  let secondary = "";
  let logo = "";
  let tag = entryType.toUpperCase();

  switch (entryType) {
    case "password":
      primary = displayData.websiteName;
      secondary = displayData.username;
      logo =
        displayData.logoURL ||
        "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png";
      break;
    case "creditCard":
      primary = displayData.cardName;
      secondary = displayData.cardHolderName;
      logo = "💳";
      break;

    case "bankAccount":
      primary = displayData.bankName;
      secondary = displayData.accountHolderName;
      logo = "🏦";
      break;
    case "apiKey":
      primary = displayData.serviceName;
      secondary = displayData.serviceName;
      logo = "🔑";
      break;
    case "secureNote":
      primary = displayData.title;
      secondary = "••••••••••";
      logo = "📝";
      break;
    default:
      primary = "Unknown Entry";
      secondary = "N/A";
      logo = "❓";
  }

  return (
    <div className="container flex w-full h-fit px-4 py-3 text-sm text-white border-b border-[#2c2c2c] hover:bg-[#2c2c2c] transition-colors ease-in-out">
      <div className="flex w-2/5 h-fit self-center">
        {logo.startsWith("http") ? (
          <img
            className="w-12 h-12 rounded-xl bg-white"
            src={logo}
            alt="logo"
          />
        ) : (
          <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center text-xl font-bold">
            {logo}
          </div>
        )}
        <div className="flex flex-col pl-2 self-center">
          <p className="flex">{primary}</p>
          <p className="text-[#b0b0b0] text-xs uppercase">{tag}</p>
        </div>
      </div>

      <div className="flex w-2/5 text-[#b0b0b0]">
        <p className="self-center">{secondary}</p>
      </div>
      <div className="flex w-1/5 self-center text-[#b0b0b0]">
        <p className="w-fit">{new Date(updatedAt).toDateString()}</p>
      </div>
      <div className="flex h-fit w-4 self-center">
        <ChevronRight strokeWidth={2.6} color="gray" />
      </div>
    </div>
  );
};

export default VaultItem;
