import { Divider } from "@/components/common/Divider";

const FieldHeader = ({ title }: { title: string }) => (
  <div className="flex flex-col gap-3 self-stretch">
    <span className="text-xl font-medium text-[#FCFCFC]">{title}</span>
    <Divider />
  </div>
);

export default FieldHeader;