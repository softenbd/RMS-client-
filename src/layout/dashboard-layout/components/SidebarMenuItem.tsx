
import React from "react";
import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { TSidebarPath } from "@/types/sidebar";


// SidebarMenuItem Component (Direct route)
export const SidebarItem: React.FC<{ item: TSidebarPath }> = ({ item }) => {
    // Cast item.icon to the appropriate type
    const Icon = item.icon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
    return (
      <SidebarMenuItem key={item.name} className="list-none">
        <SidebarMenuButton asChild className="hover:bg-[#F4F4F5] py-6">
          <Link to={item.path || "#"} className="flex items-center gap-2 p-2">
            {item.icon && <Icon className="w-5 h-5" />}
            <span>{item.name}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };
  