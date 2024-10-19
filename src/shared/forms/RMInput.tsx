
import { Controller } from "react-hook-form";


import InputError from "../ui/inputError";
import { Input } from "@/components/ui/input";
type TInputProps = {
  type?: string;
  name: string;
  label?: string;
  className?: string;
  defaultValue?: any;
  errorObj?: {
    error?: string;
    message?: string;
  };
};

const RMInput = ({ type = 'text', name, label, className, defaultValue, errorObj }: TInputProps) => {
  const { theme } = { theme: "dark" };

  return (
    
    <div>
      <Controller
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Input
            autoComplete="off"
            placeholder={label}
            className={`
              ${className}
              ${
                theme === "dark"
                  ? "bg-[#fff] shadow placeholder:text-[#8f8f8f] placeholder:text-sm border-none hover:bg-[#f7f7f7] focus-within:bg-[#fff]  text-[black] !text-[15px] p-2"
                  : ""
              }
              text-xl`}
            {...field}
            type={type}
            id={name}
          />
        )}
      />
      {errorObj?.error && errorObj?.error === name && <InputError errorText={errorObj?.message} />}
    </div>

  );
};

export default RMInput;
