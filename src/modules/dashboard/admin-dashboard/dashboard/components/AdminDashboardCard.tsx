import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ElementType } from "react";

interface AdminDashboardCardProps {
  title: string;
  number: number;
  icon?: ElementType;
  className?: string;
}

const AdminDashboardCard: React.FC<AdminDashboardCardProps> = ({
  title,
  number,
  icon: Icon,
  className,
}) => {
  return (
    <Card
      className={`h-max ${className} cursor-pointer hover:scale-[1.03] duration-500 h-full`}
    >
      <CardHeader>
        <div className="flex flex-row items-center">
          <div>
            {Icon && <Icon size={35} className="text-4xl text-slate-600" />}
            {/* lucide-react icons use className for styling */}
          </div>
          <div className="w-full">
            <p className="text-6xl font-semibold text-center">{number}</p>
          </div>
        </div>
        <CardTitle className="pt-14">{title}</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default AdminDashboardCard;
