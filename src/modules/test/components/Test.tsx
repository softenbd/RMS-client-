import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // Import VisuallyHidden

import {
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { testSchema } from "@/schema/example";
import RMDatePicker from "@/shared/forms/RMDatePicker";
import RMForm from "@/shared/forms/RMForm";
import RMInput from "@/shared/forms/RMInput";
import RMSelect from "@/shared/forms/RMSelect";
import RMTextArea from "@/shared/forms/RMTextArea";
import RMTimePicker from "@/shared/forms/time/RMTimePicker";
import ConfirmModal from "@/shared/modals/ConfirmModal";
import RMModalWrapper from "@/shared/modals/RMModalWrapper";

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

  // const handleConfirmDelete = () => {
  //   console.log("delete");
  // };

  return (
    <div>
      <RMForm onSubmit={handleTestForm} resolver={zodResolver(testSchema)}>
        <div className="grid sm:grid-cols-2 gap-3 w-full ">
          <RMInput name="input" placeholder="test-input" />
          <RMSelect placeholder="test-select" name="select" options={options} />
          <RMDatePicker name="date" />
          <RMTimePicker name="time" label="time" />
          <RMTextArea name="text-area" placeholder="message" />
        </div>
        <div className="flex gap-3">
          <Button type="submit">submit</Button>

         
          <ConfirmModal
            triggerText="leave this group"
            onConfirm={() => console.log("Leave")}
          />
        </div>
      </RMForm>
    </div>
  );
};

export default Test;
