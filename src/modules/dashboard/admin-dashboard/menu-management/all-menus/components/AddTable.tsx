import { Button } from "@/components/ui/button";
import { CreateTableSchema } from "@/schema/table.schema";
import RMForm from "@/shared/forms/RMForm";
import RMInput from "@/shared/forms/RMInput";
import { FormSubmitHandler } from "@/shared/forms/types";
import RMModalWrapper from "@/shared/modals/RMModalWrapper";
import { zodResolver } from "@hookform/resolvers/zod";

const AddTable = () => {
  const handleAddTable: FormSubmitHandler = (data) => {
    
    console.log(data);
    
  };

  return (
    <div className=" justify-self-end">
      <RMModalWrapper
        modalFooter={false}
        triggerText="Add Table"
        confirmButtonText="Create"
      >
        <h3 className="text-[28px] pb-3">Create Table</h3>
        <RMForm onSubmit={handleAddTable} resolver={zodResolver(CreateTableSchema)}>
          <RMInput
            type="number"
            name="tableNumber"
            placeholder="Table Number"
          />
          <RMInput type="number" name="capacity" placeholder="Capacity" />
          <div className="text-end pt-3"> 
            <Button>Create</Button>
          </div>
        </RMForm>
      </RMModalWrapper>
    </div>
  );
};

export default AddTable;

