import InputHeader from "@/components/inputs/InputHeader";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import TokenForm from "./components/pages/TokenForm/TokenForm";
import AirdropForm from "./components/pages/AirdropForm/AirdropForm";

const Main: React.FC = (props) => {
  const [address, setAddress] = useState<string>("");
  const [isFormDone, setIsFormDone] = useState<boolean>(false);

  return (
    <div className="relative fadein w-full mx-auto text-sm my-6 space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 gap-4 md:gap-6 px-4 md:px-0">
        <span className="text-[32px] font-semibold text-[#FCFCFC] leading-[32px]">
          Create Airdrop
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 md:gap-8 md:p-6 bg-[#1A1D1F] rounded-lg">
        {!isFormDone && (
          <TokenForm
            address={address}
            setAddress={setAddress}
            setIsFormDone={setIsFormDone}
          />
        )}
        {isFormDone && <AirdropForm setIsFormDone={setIsFormDone} />}
      </div>
    </div>
  );
};

export default Main;
