import { ArrowLongRight } from "@/assets/icons/Icons";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NavLink } from "react-router-dom";

interface TableCardProps {
  table: string | number;
  status: string;
  color?: string;
}

const TableCard: React.FC<TableCardProps> = ({ table, status, color }) => {
  return (
    <NavLink to={"/table/id"}>
      <Card
        className={`group h-full cursor-pointer rounded-lg ${
          color && `${color}`
        }`}
      >
        <CardHeader>
          <CardTitle className="text-white text-3xl font-semibold flex flex-row  justify-between items-center gap-3">
            Table
            <span
              className={`text-4xl font-extrabold bg-white text-orange-500 w-14 flex items-center justify-center rounded-full group-hover:scale-110 duration-300 h-14`}
            >
              {table}
            </span>
          </CardTitle>
          <CardDescription className="pt-16 flex text-lg text-slate-200 gap-3 flex-row items-center">
            Status <ArrowLongRight /> <span className="">{status}</span>
          </CardDescription>
        </CardHeader>
      </Card>
    </NavLink>
  );
};
export default TableCard;
