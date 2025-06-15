import { useState } from "react";
import { Copy, EyeClosed, Eye, UndoDot, Save } from "lucide-react";
import { useAuth } from "../../../authContext/AuthContext.tsx";

const CreditCardInput = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    type: "creditCard",
    cardHolderName: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [showCVV, setShowCVV] = useState(false);

  const handleChange = (field: string, value: string) => {
    if (field === "cardNumber" || field === "cvv") {
      if (/^\d*$/.test(value)) {
        setFormData((prev) => ({ ...prev, [field]: value }));
      }
    } else if (field === "expiryDate") {
      if (/^\d{0,2}\/?\d{0,2}$/.test(value)) {
        setFormData((prev) => ({ ...prev, [field]: value }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSave = async () => {
    try {
      const payload = {
        firebaseUID: user?.uid,
        entryType: formData.type,
        displayData: {
          cardName: formData.cardName || "Untitled Card",
          cardHolderName: formData.cardHolderName,
        },
        data: {
          cardNumber: formData.cardNumber,
          expiryDate: formData.expiryDate,
          cvv: formData.cvv,
        },
      };

      const response = await fetch(`${BACKEND_URL}/api/save-creditCard`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log("Data sent successfully to backend");
      // Optionally, you can clear the form or redirect the user here
    } catch (error) {
      console.error("Failed to send data to backend:", error);
      // Handle errors, e.g., show a notification to the user
    }
  };

  return (
    <div className="flex flex-col h-full w-1/2 px-16 py-20 gap-3 border-r border-[#2c2c2c]">
      <p className="text-white text-2xl font-normal px-4 mt-4">
        Credit Card Details
      </p>

      <div className="flex px-3 py-4 gap-3 justify-between border-b border-[#2f2f2f]">
        <div className="flex h-fit w-fit gap-2 items-center">
          <input
            value={formData.cardName}
            onChange={(e) => handleChange("cardName", e.target.value)}
            placeholder="Card Name"
            className="w-full text-white text-lg font-medium bg-transparent border-none outline-none p-0 m-0"
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-fit pb-3 border-b border-[#2f2f2f]">
        <div className="flex w-full justify-between items-center p-3 rounded-xl">
          <div className="flex flex-col w-fit">
            <p className="text-sm font-normal text-[#656565]">
              Card Holder Name
            </p>
            <input
              value={formData.cardHolderName}
              onChange={(e) => handleChange("cardHolderName", e.target.value)}
              placeholder="Card Holder Name"
              className="text-white text-base bg-transparent border-none outline-none p-0 m-0"
            />
          </div>
        </div>
        <div className="flex w-full justify-between items-center p-3 rounded-xl">
          <div className="flex flex-col w-fit">
            <p className="text-sm font-normal text-[#656565]">Card Number</p>
            <input
              value={formData.cardNumber}
              onChange={(e) => handleChange("cardNumber", e.target.value)}
              placeholder="Card Number"
              maxLength={16}
              className="text-white text-base bg-transparent border-none outline-none p-0 m-0"
            />
          </div>
        </div>

        <div className="flex w-full justify-between items-center p-3 rounded-xl">
          <div className="flex flex-col w-fit">
            <p className="text-sm font-normal text-[#656565]">
              Expiry Date (MM/YY)
            </p>
            <input
              value={formData.expiryDate}
              onChange={(e) => handleChange("expiryDate", e.target.value)}
              placeholder="MM/YY"
              maxLength={5}
              className="text-white text-base bg-transparent border-none outline-none p-0 m-0"
            />
          </div>
        </div>

        <div className="flex w-full justify-between items-center p-3 rounded-xl">
          <div className="flex flex-col w-fit">
            <p className="text-sm font-normal text-[#656565]">CVV</p>
            <input
              type={showCVV ? "text" : "password"}
              value={formData.cvv}
              onChange={(e) => handleChange("cvv", e.target.value)}
              placeholder="CVV"
              maxLength={3}
              className="text-white text-base bg-transparent border-none outline-none p-0 m-0 tracking-widest"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowCVV(!showCVV)}
              className="flex h-fit w-fit items-center justify-center p-2 rounded-lg bg-[#222222]"
            >
              {showCVV ? (
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

export default CreditCardInput;
