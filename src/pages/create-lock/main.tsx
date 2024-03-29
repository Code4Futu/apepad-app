import YourLockForm from "./components/pages/YourLockForm/YourLockForm";

const Main: React.FC = (props) => {
  return (
    <div className="relative fadein w-full mx-auto text-sm my-6 space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 gap-4 md:gap-6 px-4 md:px-0">
        <span className="text-[32px] font-semibold text-[#FCFCFC] leading-[32px]">
          Create Your Lock
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 md:gap-8 md:p-6 bg-[#1A1D1F] rounded-lg">
        <YourLockForm />
      </div>
    </div>
  );
};

export default Main;
