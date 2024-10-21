
import { Button } from "@/components/ui/button";
import { testSchema } from "@/schema/example";
import RMDatePicker from "@/shared/forms/RMDatePicker";
import RMForm from "@/shared/forms/RMForm";
import RMInput from "@/shared/forms/RMInput";
import RMSelect from "@/shared/forms/RMSelect";
import RMTextArea from "@/shared/forms/RMTextArea";
import RMTimePicker from "@/shared/forms/time/RMTimePicker";
import ConfirmModal from "@/shared/modals/ConfirmModal";


import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import SelectDropdown from "@/shared/ui/SelectDropdown";
import CustomTabs from "@/shared/ui/CustomTabs";
import SearchBar from "@/shared/ui/SearchBar";

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

  const handleTabChange = (value: string) => {
    console.log("Selected Tab:", value);
  };

  // const handleConfirmDelete = () => {
  //   console.log("delete");
  // };
  const tabData = [
    {
      label: "Account",
      value: "account",
      content: "Manage your account settings here.",
    },
    {
      label: "Password",
      value: "password",
      content: "Change your password here.",
    },
    {
      label: "Setting",
      value: "setting",
      content: "Manage your setting",
    },
  ];

  const [selectedValue, setSelectedValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  console.log(searchTerm);

  return (
    <div className="pb-80">
      <RMForm onSubmit={handleTestForm} resolver={zodResolver(testSchema)}>
        <div className="grid sm:grid-cols-2 gap-3 w-full ">
          <RMInput name="input" placeholder="test-input" />
          <RMSelect placeholder="test-select" name="select" options={options} />
          <RMDatePicker name="date" />
          <RMTimePicker name="time" label="time" />
          <RMTextArea name="text-area" placeholder="message" />
        </div>
        <div className="flex gap-3">
          <Button className="bg-primary-" type="submit">
            submit
          </Button>
          <ConfirmModal
            triggerText="Confirm Modal"
            onConfirm={() => console.log("Leave")}
          />
        </div>
      </RMForm>
      <br />
      <h3>Select out of Form</h3>
      <SelectDropdown
        name="exampleSelect"
        options={options}
        value={selectedValue}
        onChange={setSelectedValue}
        placeholder="Select Dropdown without form"
      />
      <br />
      <h3>Tabs</h3>
      <br />
      <CustomTabs
        tabs={tabData}
        defaultValue="account"
        onTabChange={handleTabChange}
      />

      <br />
      <h3>Search bar</h3>
      <SearchBar onChange={setSearchTerm} />
    </div>
  );
};

export default Test;
