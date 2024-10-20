// src/components/Time/TimePickerInput.tsx
import React from "react";

interface TimePickerInputProps {
  selectedTime: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  label?: string;
}

const TimePickerInput: React.FC<TimePickerInputProps> = ({
  selectedTime,
  isOpen,
  setIsOpen,
  label,
}) => (
  <input
    type="text"
    readOnly
    value={selectedTime}
    onClick={() => setIsOpen(!isOpen)}
    placeholder={label || "Select Time"}
    className="w-full p-2 border rounded bg-gray-50 cursor-pointer"
  />
);

export default TimePickerInput;
