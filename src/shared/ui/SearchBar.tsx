import { Search } from "lucide-react";
import { ChangeEvent, useState } from "react";

interface SearchBarProps {
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onChange, placeholder = "Search" }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onChange(value);
  };

  return (
    <div className=" px-2 border  focus-within:border-gray-400 rounded-lg transition-all duration-200 flex items-center gap-2">
      <Search className="size-5 text-gray-500" />
      <SearchInput
        value={searchTerm}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;

import { InputHTMLAttributes } from "react";
import { Input } from "@/components/ui/input";

const SearchInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Input
      {...props}
      className="h-10 w-full !p-0 rounded-md !border-none bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
};
