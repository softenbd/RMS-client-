import { Button } from "@/components/ui/button";
import { testSchema } from "@/schema/example";
import RMDatePicker from "@/shared/forms/RMDatePicker";
import RMForm from "@/shared/forms/RMForm";
import RMInput from "@/shared/forms/RMInput";
import RMSelect from "@/shared/forms/RMSelect";
import RMTextArea from "@/shared/forms/RMTextArea";
import RMTimePicker from "@/shared/forms/time/RMTimePicker";

import { zodResolver } from "@hookform/resolvers/zod";


const options = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
  { value: "five", label: "Five" },
  { value: "six", label: "Six" },
  { value: "seven", label: "Seven" },
  { value: "eight", label: "Eight" },
];

const Test = () => {
  const handleTestForm = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <RMForm onSubmit={handleTestForm}  resolver={zodResolver(testSchema)} >
        <div className="grid sm:grid-cols-2 gap-3 w-full ">
        <RMInput name="input" placeholder="test-input"/>
        <RMSelect placeholder="test-select" name="select" options={options} />
        <RMDatePicker name="date"/>
        <RMTimePicker name="time" label="time"/>
        <RMTextArea name="text-area" placeholder="message"/>
        </div>
        <Button type="submit">submit</Button>
      </RMForm>
    </div>
  );
};

export default Test;
