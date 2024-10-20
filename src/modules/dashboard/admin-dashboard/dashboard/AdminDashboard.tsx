import { Button } from "@/components/ui/button";
import AdminDashboardCard from "./components/AdminDashboardCard";
import { adminDashboardData } from "@/shared/constants/adminDashboard.constant";
import {
  Salad,
  MessageCircleMore,
  HandCoins,
  // FileUser,
  BadgePoundSterling,
  UsersRound,
  UserRound,
  BookUser,
} from "lucide-react";

const AdminDashboard = () => {
  const card = [1, 2, 3, 4, 5, 6];
  return (
    <div className="p-5  min-h-[calc(100vh-40px)] overflow-y-auto max-h-[calc(100vh-40px)] ">
      <div className=" grid grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-5 mt-5 items-stretch">
        <AdminDashboardCard
          title={"Running Table"}
          number={30}
          icon={Salad}
          className={"bg-card-soft-pink"}
        />
        <AdminDashboardCard
          title={"Help-Request form"}
          number={20}
          icon={MessageCircleMore}
          className={"bg-card-soft-blue"}
        />
        <AdminDashboardCard
          title={"Today Total Sales"}
          number={20}
          icon={HandCoins}
          className={"bg-card-soft-green"}
        />
        <AdminDashboardCard
          title={"Today Total Customer"}
          number={20}
          icon={BookUser}
          className={"bg-card-soft-gray"}
        />
        <AdminDashboardCard
          title={"This Month Total Sales"}
          number={20}
          icon={BadgePoundSterling}
          className={"bg-card-soft-yellow"}
        />
        <AdminDashboardCard
          title={"This Month Total Customer"}
          number={20}
          icon={UserRound}
          className={"bg-card-soft-beige"}
        />
      </div>
    </div>
  );
};
export default AdminDashboard;
