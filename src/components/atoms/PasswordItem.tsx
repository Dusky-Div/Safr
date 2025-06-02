import { ChevronRight } from "lucide-react";

interface PasswordItemProps {
  data: {
    websiteName: string;
    websiteURL: string;
    logoURL: string;
    username: string;
    updated: string;
  };
}

const PasswordItem: React.FC<PasswordItemProps> = ({ data }) => {
  return (
    <div className="container flex w-full h-fit px-4 py-3 text-sm text-white border-b border-[#2c2c2c] hover:bg-[#2c2c2c] transition-colors ease-in-out">
      <div className="flex w-2/5 h-fit self-center">
        <img
          className="w-12 rounded-xl bg-white"
          src={data.logoURL}
          alt={`${data.websiteName} logo`}
        />
        <div className="flex flex-col pl-2 self-center">
          <p className="flex">{data.websiteName}</p>
          <p className="text-[#b0b0b0] underline">{data.websiteURL}</p>
        </div>
      </div>

      <div className="flex w-2/5 text-[#b0b0b0]">
        <p className="self-center">{data.username}</p>
      </div>
      <div className="flex w-1/5 self-center text-[#b0b0b0]">
        <p className="w-fit">{data.updated}</p>
      </div>
      <div className="flex h-fit w-4 self-center">
        <ChevronRight strokeWidth={2.6} color="gray" />
      </div>
    </div>
  );
};

export default PasswordItem;
