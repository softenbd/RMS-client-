import AdminDashboard from "@/modules/dashboard/admin-dashboard/dashboard/AdminDashboard";
import AllMenus from "@/modules/dashboard/admin-dashboard/menu-management/all-menus/AllMenus";
import AllTables from "@/modules/dashboard/admin-dashboard/table-management/all-tables/AllTables";
import Test from "@/modules/test/components/Test";

import { TSidebarPath } from "@/types/sidebar";
import { Home, Inbox, Calendar, Search, Settings } from "lucide-react";

export const adminRoutes: TSidebarPath[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: Home,
    element: <AdminDashboard />,
  },
  {
    name: "Manage Table",
    children: [
      {
        name: "All Tables",
        path: "all-tables",
        element: <AllTables />,
      },
    ],
  },


  {
    name: "Menu Management",
    children: [
      {
        name: "All Menus",
        path: "all-menus",
        element: <AllMenus />,
      },
    ],
  },

  {
    name: "Home",
    path: "/home",
    icon: Home,
    element: <p>Home Page</p>,
  },
  {
    name: "Inbox",
    path: "/inbox",
    icon: Inbox,
    element: <p>Inbox Page</p>,
  },
  {
    name: "Calendar",
    path: "/calendar",
    icon: Calendar,
    element: <p>Calendar Page</p>,
  },
  {
    name: "Search",
    path: "/search",
    icon: Search,
    element: <p>Search Page</p>,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
    element: <p>Settings Page</p>,
  },
  {
    name: "Test",
    path: "/test",
    icon: Settings,
    element: <Test/>,
  },
];
