// src/components/Time/useTimePicker.ts
import { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";

const useTimePicker = (name: string) => {
  const { control } = useFormContext();
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("12:00 AM");
  const [hour, setHour] = useState("12");
  const [minute, setMinute] = useState("00");
  const [period, setPeriod] = useState("AM");

  const hours = Array.from({ length: 13 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );
  const minutes = Array.from({ length: 61 }, (_, i) =>
    i.toString().padStart(2, "0")
  );

  const togglePeriod = () => {
    setPeriod((prev) => (prev === "AM" ? "PM" : "AM"));
  };

  const handleScroll = (
    ref: React.RefObject<HTMLDivElement>,
    values: string[],
    setter: React.Dispatch<React.SetStateAction<string>>,
    field: any
  ) => {
    if (ref.current) {
      const scrollPosition = ref.current.scrollTop;
      const itemHeight = 56;
      const selectedIndex = Math.round(scrollPosition / itemHeight);
      
      if (selectedIndex >= 0 && selectedIndex < values.length) {
        setter(values[selectedIndex]);
        field.onChange(`${hour}:${minute} ${period}`); // Update the form context
      }
    }
  };

  useEffect(() => {
    const formattedTime = `${hour}:${minute} ${period}`;
    setSelectedTime(formattedTime);
  }, [hour, minute, period]);

  useEffect(() => {
    const hourScrollPosition =
      (hours.indexOf(hour) * (hourRef.current?.scrollHeight ?? 0)) /
      hours.length;
    const minuteScrollPosition =
      (minutes.indexOf(minute) * (minuteRef.current?.scrollHeight ?? 0)) /
      minutes.length;

    hourRef.current?.scrollTo(0, hourScrollPosition);
    minuteRef.current?.scrollTo(0, minuteScrollPosition);
  }, [hour, minute]);

  return {
    control,
    hourRef,
    minuteRef,
    isOpen,
    setIsOpen,
    selectedTime,
    setSelectedTime,
    hour,
    setHour,
    minute,
    setMinute,
    period,
    togglePeriod,
    handleScroll,
    hours,
    minutes
  };
};

export default useTimePicker;
