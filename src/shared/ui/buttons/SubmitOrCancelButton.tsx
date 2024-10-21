import { Button } from "@/components/ui/button";

interface SubmitOrCancelButtonProps {
  onSubmit?: () => void;
  onCancel?: () => void;
  submitText?: string;
}

const SubmitOrCancelButton = ({
  onSubmit,
  onCancel,
  submitText = "Submit",
}: SubmitOrCancelButtonProps) => {
  return (
    <>
      <Button onClick={onSubmit} type="submit">
        {submitText}
      </Button>
      <div onClick={onCancel}>Cancel</div>
    </>
  );
};

export default SubmitOrCancelButton;
