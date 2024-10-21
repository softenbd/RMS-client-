
import SearchBar from "@/shared/ui/SearchBar";
import SelectDropdown from "@/shared/ui/SelectDropdown";
import { useState } from "react";
import AddTable from "./AddTable";
import { menuCategories } from "@/data/demoData";


const MenuHeader = () => {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  console.log({ category });
  console.log({ searchTerm });
  return (
    <header className="grid mt-4 px-3 md:grid-cols-3 gap-3 items-center w-full">
      <div>
        <SelectDropdown
          options={menuCategories}
          onChange={setCategory}
          name="category"
          placeholder="category"
        />
      </div>
      <div>
        <SearchBar placeholder="SearchMenu" onChange={setSearchTerm} />
      </div>
      <AddTable />
    </header>
  );
};

export default MenuHeader;
