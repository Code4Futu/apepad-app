import { Information } from "@/common/Information";

const InputHeader = ({
  label,
  tooltip,
}: {
  label: string;
  tooltip?: string;
}) => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-sm font-semibold text-[#EFEFEF]">{label}</span>
      <Information />
    </div>
  );
};

export default InputHeader;
