import SectionHeading from "@/shared/ui/SectionHeading";
import { Clock5, HandPlatter } from "lucide-react";

const TableDetailsHeader = () => {
  return (
    <div className="py-3 border-b flex flex-row justify-between">
      <SectionHeading  >
        Order #12564878
      </SectionHeading>
      <div className="flex flex-row items-center gap-10">
        <div className="flex flex-row items-center gap-2">
          <HandPlatter size={20} className="text-slate-500" />
          <h4 className="text-base font-medium">Table: </h4>
          <span className="text-orange-600 font-bold text-lg">1</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Clock5 size={20} className="text-slate-500" />
          <h4 className="text-base font-medium">Table: </h4>
          <span className="text-orange-600 font-bold text-lg">20:02 PM</span>
        </div>
      </div>
    </div>
  );
};
export default TableDetailsHeader;
