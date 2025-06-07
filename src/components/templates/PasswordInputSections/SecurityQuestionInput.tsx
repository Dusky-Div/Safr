import { useState } from "react";
import { UndoDot, Save } from "lucide-react";

const SecurityQuestionInput = () => {
  const [formData, setFormData] = useState({
    type: "securityQuestion",
    serviceName: "",
    question: "",
    answer: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col h-full w-1/2 px-16 py-20 gap-3 border-r border-[#2c2c2c]">
      <p className="text-white text-2xl font-normal px-4 mt-4">
        Security Question Details
      </p>
      <div className="flex px-3 py-4 gap-3 justify-between border-b border-[#2f2f2f]">
        <div className="flex h-fit w-fit gap-2 items-center">
          <input
            value={formData.serviceName}
            onChange={(e) => handleChange("serviceName", e.target.value)}
            placeholder="Service Name"
            className="w-full text-white text-lg font-medium bg-transparent border-none outline-none p-0 m-0"
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-fit pb-3 border-b border-[#2f2f2f]">
        <div className="flex w-full justify-between items-center p-3 rounded-xl">
          <div className="flex flex-col w-fit">
            <p className="text-sm font-normal text-[#656565]">Question</p>
            <input
              value={formData.question}
              onChange={(e) => handleChange("question", e.target.value)}
              placeholder="Security Question"
              className="text-white text-base bg-transparent border-none outline-none p-0 m-0"
            />
          </div>
        </div>

        <div className="flex w-full justify-between items-center p-3 rounded-xl">
          <div className="flex flex-col w-fit">
            <p className="text-sm font-normal text-[#656565]">Answer</p>
            <input
              value={formData.answer}
              onChange={(e) => handleChange("answer", e.target.value)}
              placeholder="Answer"
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
        <button className="flex h-fit w-24 items-center justify-center gap-1 px-4 py-2 rounded-lg hover:bg-blue-500/20 bg-blue-500/30">
          <Save color="#93C5FD" size={16} strokeWidth={2.8} />

          <p className="text-sm text-blue-300">Save</p>
        </button>
      </div>
    </div>
  );
};

export default SecurityQuestionInput;
