import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";

const TableDetailsOrders = () => {
  const tableData = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className=" flex flex-col mt-4 justify-between h-[calc(100%-100px)]">
      {/* Table */}
      <Table className="min-h-full h-full ">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow className="bg-slate-800 hover:bg-slate-800">
            <TableHead className=" text-white">ITEM</TableHead>
            <TableHead className="text-white">PRICE</TableHead>
            <TableHead className="text-white">QTY</TableHead>
            <TableHead className="text-right text-white">SUBTOTAL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((item) => (
            <TableRow key={item}>
              <TableCell className="font-medium flex flex-row items-center">
                <span className="uppercase">chickend curry</span>
                <span className="">(starter)</span>
              </TableCell>
              <TableCell>$ 130</TableCell>
              <TableCell>1</TableCell>
              <TableCell
                className="text-right flex flex-row items-center gap-2
             justify-end"
              >
                220
                <Trash2 className="text-xl cursor-pointer hover:scale-105 duration-500 text-red-500" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Footer */}
      <div className="mt-5">
        <Button
          size={"lg"}
          className="w-full bg-red-500 hover:bg-red-400 text-2xl py-5 "
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};
export default TableDetailsOrders;
