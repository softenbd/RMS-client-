import SectionHeading from "@/shared/ui/SectionHeading";

const TableDetailsSidebar = ({ className }: { className: string }) => {
  const tips = [5, 10, 15, 20];
  return (
    <div className={`border-l border-l-slate-300 px-4 ${className}`}>
      <div className=" border-b  border-b-slate-300 py-3">
        <SectionHeading className="">payable amount</SectionHeading>
        <div className="py-2 flex flex-row justify-between items-center">
          <h2 className="text-orange-500 text-xl">$ 38,50</h2>
          <div className="flex flex-row items-center gap-2">
            <p className="text-gray-500">logo</p>
            <p className="uppercase">GUESS: </p>
            <span className="text-orange-500 font-semibold text-xl">2</span>
          </div>
        </div>
      </div>
      {/* Tips */}
      <div className="flex flex-row py-4 border-b border-b-slate-300 items-center gap-4">
        <h4 className="uppercase text-base font-medium">ADD TIPS</h4>
        {tips.map((tip) => (
          <div
            key={tip}
            className="p-2 cursor-pointer font-medium rounded-md text-black text-lg bg-gray-100"
          >
            $ {tip}
          </div>
        ))}
      </div>
      {/* Card  */}
      <div className="py-5 px-4 flex flex-row  border-y border-y-gray-300  gap-5 justify-between items-center bg-slate-200 text-black">
        <h3 className="text-base">ADD CASH RECEIVED</h3>
        <div className="relative">
          <span className="absolute left-1 text-2xl top-1/2 -translate-y-1/2">
            $
          </span>
          <input
            type="number"
            className="bg-transparent text-2xl max-w-40 py-2 pl-5 border-b border-b-slate-800 outline-none"
          />
        </div>
      </div>
    </div>
  );
};
export default TableDetailsSidebar;
