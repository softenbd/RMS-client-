import { Button } from "@/components/ui/button";
import { testSchema } from "@/schema/example";
import RMDatePicker from "@/shared/forms/RMDatePicker";
import RMForm from "@/shared/forms/RMForm";
import RMSelect from "@/shared/forms/RMSelect";
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
        <div className="grid grid-cols-2 gap-8 p-2 w-full justify-between">
        <RMSelect placeholder="select" name="select" options={options} />
        <RMDatePicker name="date"/>
        </div>
        <Button type="submit">submit</Button>
      </RMForm>
    </div>
  );
};

export default Test;


