import {

    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from "@/components/ui/accordion";
  import {
    SidebarMenu
  } from "@/components/ui/sidebar";
import { SidebarItem } from "./SidebarMenuItem";
import { TSidebarPath } from "@/types/sidebar";


export const NestedMenu: React.FC<{ item: TSidebarPath }> = ({ item }) => (
    <AccordionItem key={item.name} value={item.name}>
      <AccordionTrigger className="text-[15px] pl-3 text-gray-600 hover:no-underline">
        {item.name}
      </AccordionTrigger>
      <AccordionContent>
        <SidebarMenu>
          {item.children?.map((child) => (
            <SidebarItem key={child.path} item={child} />
          ))}
        </SidebarMenu>
      </AccordionContent>
    </AccordionItem>
  );