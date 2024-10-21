import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectOption {
  label: string;
  value: string;
}

interface RMSelectProps {
  name: string;
  options: SelectOption[];
  value?: string;  
  onChange: (value: string) => void; 
  disabled?: boolean;
  placeholder?: string;
}

const SelectDropdown = ({
  name,
  options,
  value,
  onChange,
  disabled = false,
  placeholder = "Select...",
}: RMSelectProps): JSX.Element => {
  return (
    <div>
      <Select
        disabled={disabled}
        onValueChange={onChange}
        value={value}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectDropdown;
