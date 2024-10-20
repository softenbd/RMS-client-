
import { Controller } from "react-hook-form";
import { TFormSelectProps } from "./types";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RMSelect = ({
  name,
  options,
  defaultValue,
  disabled,
  placeholder,
}: TFormSelectProps): JSX.Element => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <div>
          <Select
            disabled={disabled}
            onValueChange={field.onChange}
            value={field.value} 
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </div>
      )}
    />
  );
};

export default RMSelect;
