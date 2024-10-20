import AdminDashboard from "@/modules/dashboard/admin-dashboard/dashboard/AdminDashboard";
import AllTables from "@/modules/dashboard/admin-dashboard/table-management/all-tables/AllTables";

import { TSidebarPath } from "@/types/sidebar";
import { Home, Inbox, Calendar, Search, Settings } from "lucide-react";

export const adminRoutes: TSidebarPath[] = [
  {
    name: "Manage Tables",
    children: [
      {
        name: "All Tables",
        path: "/all-tables",
        element: <p>Create Menu Page</p>, 
      },
      {
        name: "See All Menus",
        path: "/menu-management/all",
        element: <p>All Menus Page</p>, 
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
];
