import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // Import VisuallyHidden

interface ReusableModalProps {
  triggerText: string;
  children: React.ReactNode;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  title?: string; // Add title for accessibility
}

const RMModalWrapper: React.FC<ReusableModalProps> = ({
  triggerText,
  children,
  confirmButtonText = "Confirm",
  cancelButtonText = "Cancel",
  onConfirm,
  onCancel,
  title = "Confirmation", 
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="cursor-pointer">
        <Button>{triggerText}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          {/* Hidden but accessible title */}
          <VisuallyHidden>
            <AlertDialogTitle>{title}</AlertDialogTitle>
          </VisuallyHidden>

          {/* Children passed here will be used as modal content */}
          {children}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>
            {cancelButtonText}
          </AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>
            {confirmButtonText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RMModalWrapper;
