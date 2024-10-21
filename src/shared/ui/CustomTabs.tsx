import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Tab = {
  label: string;
  value: string;
  content: React.ReactNode;
};

interface CustomTabsProps {
  tabs: Tab[];
  defaultValue?: string;
  onTabChange?: (value: string) => void;
}


// pass [label:"tab1", value:"tab1"]
// get the value in onTabChange handler
const CustomTabs = ({ tabs, defaultValue, onTabChange }: CustomTabsProps) => {
  const [selectedTab, setSelectedTab] = useState(defaultValue || tabs[0]?.value);

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
    if (onTabChange) {
      onTabChange(value); 
    }
  };

  return (
    <Tabs defaultValue={selectedTab} onValueChange={handleTabChange} className="w-full">
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default CustomTabs;
