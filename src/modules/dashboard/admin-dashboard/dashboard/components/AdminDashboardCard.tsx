import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Salad } from "lucide-react";
const AdminDashboardCard = ({ title, number, icon: Icon, className }) => {
  return (
    <Card
      className={`h-max ${className} cursor-pointer hover:scale-[1.03] duration-500 h-full`}
    >
      <CardHeader>
        <div className="flex flex-row items-center">
          <div className="">
            {Icon && <Icon className="text-4xl text-slate-600" size={40} />}
          </div>
          <div className=" w-full">
            <p className="text-6xl font-semibold text-center">{number}</p>
          </div>
        </div>
        <CardTitle className="pt-14">{title}</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
    </Card>
  );
};
export default AdminDashboardCard;
