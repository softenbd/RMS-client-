// src/components/Time/TimePickerDropdown.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ChevronUp, ChevronDown } from "lucide-react";

interface TimePickerDropdownProps {
  isOpen: boolean;
  hourRef: React.RefObject<HTMLDivElement>;
  minuteRef: React.RefObject<HTMLDivElement>;
  hours: string[];
  minutes: string[];
  hour: string;
  setHour: React.Dispatch<React.SetStateAction<string>>;
  minute: string;
  setMinute: React.Dispatch<React.SetStateAction<string>>;
  period: string;
  togglePeriod: () => void;
  handleScroll: (
    ref: React.RefObject<HTMLDivElement>,
    values: string[],
    setter: React.Dispatch<React.SetStateAction<string>>,
    field: any
  ) => void;
  field: any;
}

const TimePickerDropdown: React.FC<TimePickerDropdownProps> = ({
  isOpen,
  hourRef,
  minuteRef,
  hours,
  minutes,
  hour,
  setHour,
  minute,
  setMinute,
  period,
  togglePeriod,
  handleScroll,
  field,
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="absolute top-12 z-10 w-full bg-white rounded-lg shadow-lg p-4 sm:w-80"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center space-x-2 text-gray-600 mb-4">
          <Clock className="w-5 h-5" />
          <h2 className="text-lg font-semibold">Select Time</h2>
        </div>
        <div className="flex space-x-2">
          {/* Hour Picker */}
          <div className="relative w-full">
            <div
              ref={hourRef}
              className="h-32 overflow-y-scroll"
              onScroll={() => handleScroll(hourRef, hours, setHour, field)}
            >
              {hours.map((h) => (
                <div key={h} className={`h-14 flex items-center justify-center ${h === "13" ? "opacity-0" : "pt-0"}`}>
                  {h}
                </div>
              ))}
            </div>
            <ChevronUp className="absolute top-2 left-1/2 transform -translate-x-1/2 text-gray-400" />
            <ChevronDown className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-gray-400" />
          </div>

          {/* Minute Picker */}
          <div className="relative w-full">
            <div
              ref={minuteRef}
              className="h-32 overflow-y-auto"
              onScroll={() => handleScroll(minuteRef, minutes, setMinute, field)}
            >
              {minutes.map((m) => (
                <div key={m} className={`h-14 flex items-center justify-center ${m === "60" ? "opacity-0" : "pt-0"}`}>
                  {m}
                </div>
              ))}
            </div>
          </div>

          {/* Period (AM/PM) Picker */}
          <div
            className="w-full bg-gray-50 rounded-md text-gray-600 flex items-center justify-center cursor-pointer"
            onClick={() => {
              togglePeriod();
              field.onChange(`${hour}:${minute} ${period === "AM" ? "PM" : "AM"}`);
            }}
          >
            {period}
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default TimePickerDropdown;
