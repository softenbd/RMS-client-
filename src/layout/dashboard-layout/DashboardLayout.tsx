import React from "react";
import { Accordion } from "@/components/ui/accordion";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { NestedMenu } from "./components/NestedMenuItem";
import { SidebarItem } from "./components/SidebarMenuItem";
import { adminRoutes } from "@/routes/adminRoutes";
import { customersRoutes } from "@/routes/customersRoutes";
import { waiterRoutes } from "@/routes/waterRoutes";
import { chefRoutes } from "@/routes/chefRoutes";
import { TSidebarPath } from "@/types/sidebar";
import { ROLE } from "@/shared/constants/global";

// Main DashboardLayout Component
export function DashboardLayout() {
  const role: string = "admin";
  let items = customersRoutes;

  // role based sidebar routes
  switch (role) {
    case ROLE.ADMIN:
      items = adminRoutes;
      break;
    case ROLE.CUSTOMER:
      items = customersRoutes;
      break;

    case ROLE.CHEF:
      items = chefRoutes;
      break;

    case ROLE.WAITER:
      items = waiterRoutes;
      break;

    default:
      items = customersRoutes;
      break;
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>RMS</SidebarGroupLabel>
          <SidebarGroupContent>
            <Accordion type="single" collapsible>
              <RenderMenu items={items} />
            </Accordion>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

// RenderMenu Component (Decides between direct and nested routes)
// src > routes > check route strucutre and conditionally render nested children
const RenderMenu: React.FC<{ items: TSidebarPath[] }> = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        if (item.children) {
          return <NestedMenu key={item.name} item={item} />;
        } else {
          return <SidebarItem key={item.name} item={item} />;
        }
      })}
    </>
  );
};
