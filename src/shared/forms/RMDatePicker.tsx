// import { Form, DatePicker } from "antd";
// import { Controller } from "react-hook-form";
// import React from "react";
// import dayjs, { Dayjs } from "dayjs";
// import InputError from "../ui/inputError";

// type TDatePickerProps = {
//   name: string;
//   label?: string;
//   defaultValue?: string; // Make defaultValue optional
//   errorObj?: {
//     error?: string;
//     message?: string;
//   };
// };

// const DDatePicker: React.FC<TDatePickerProps> = ({ name, label, defaultValue, errorObj }) => {
//   // Convert the defaultValue string to a Dayjs object if provided
//   const defaultDate: Dayjs | undefined = defaultValue ? dayjs(defaultValue) : undefined;

//   return (
//     <Form.Item className="mb-5">
//       <Controller
//         name={name}
//         render={({ field }) => (
//           <DatePicker

//             defaultValue={defaultDate} // Use the Dayjs object or undefined
//             className="custom-picker-placeholder-style p-2 bg-[#343434be] border-none text-white placeholder:text-[#8f8f8f] hover:bg-[#3f3f3fbe] focus-within:bg-[#343434be]"
//             style={{ width: "100%" }}
//             size="large"
//             {...field}
//             id={name}
//             placeholder={label}
//           />
//         )}
//       />
//       {errorObj?.error && errorObj?.error === name && <InputError errorText={errorObj?.message} />}
//     </Form.Item>
//   );
// };

// export default DDatePicker;

import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar"; // Adjust import as necessary
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import InputError from "../ui/inputError"; // Adjust import as necessary
import dayjs from "dayjs";

type TDatePickerProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  errorObj?: {
    error?: string;
    message?: string;
  };
};

const RMDatePicker: React.FC<TDatePickerProps> = ({
  name,
  label,
  defaultValue,
  errorObj,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-5">
      <label className="block mb-2">{label}</label>
      <Controller
        name={name}
        defaultValue={defaultValue ? dayjs(defaultValue).toISOString() : ""}
        render={({ field: { onChange, value, ...fields } }) => (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                onClick={() => setOpen(!open)}
                className="w-full justify-start text-left font-normal"
              >
                {value ? dayjs(value).format("YYYY-MM-DD") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                {...fields}
                mode="single"
                selected={value ? new Date(value) : undefined}
                onSelect={(selectedDate) => {
                  if (selectedDate) {
                    onChange(selectedDate.toISOString());
                  }
                  setOpen(false); // Close the popover after selection
                }}
                className="rounded-md border"
              />
            </PopoverContent>
          </Popover>
        )}
      />
      {/* {errors[name] && <InputError errorText={errors[name]?.message} />}
      {errorObj?.error && errorObj?.error === name && (
        <InputError errorText={errorObj?.message} />
      )} */}
    </div>
  );
};

export default RMDatePicker;
