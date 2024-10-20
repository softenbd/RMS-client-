// src/components/Time/RMTimePicker.tsx
import React, { useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";

import TimePickerInput from "./TimePickerInput";
import TimePickerDropdown from "./TimePickerDropdown";
import { RMTimePickerProps } from "./type";
import useTimePicker from "./useTimePicker.hook";
import useClickOutside from "@/hooks/useClickOutside";

const RMTimePicker: React.FC<RMTimePickerProps> = ({ name, label }) => {

    const timeRef = useRef<HTMLDivElement>(null);
  const {
    formState: { errors },
  } = useFormContext();
  const {
    control,
    hourRef,
    minuteRef,
    isOpen,
    setIsOpen,
    selectedTime,
    hour,
    setHour,
    minute,
    setMinute,
    period,
    togglePeriod,
    handleScroll,
    hours,
    minutes,
  } = useTimePicker(name);
  

  useClickOutside(timeRef, () => setIsOpen(false));

  return (
    <div ref={timeRef}>
          <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="relative">
          <TimePickerInput
            selectedTime={selectedTime}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            label={label}
          />
          <TimePickerDropdown
            isOpen={isOpen}
            hourRef={hourRef}
            minuteRef={minuteRef}
            hours={hours}
            minutes={minutes}
            hour={hour}
            setHour={setHour}
            minute={minute}
            setMinute={setMinute}
            period={period}
            togglePeriod={togglePeriod}
            handleScroll={handleScroll}
            field={field}
          />

          {errors && typeof errors[name]?.message === "string" ? (
            <small className="text-red-500">{errors[name]?.message}</small>
          ) : (
            ""
          )}
        </div>
      )}
    />
    </div>
  
  );
};

export default RMTimePicker;
