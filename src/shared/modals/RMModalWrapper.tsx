import React, { ReactNode } from "react";
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
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ReusableModalProps {
  triggerText: string;
  children: React.ReactNode;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  title?: string;
  modalFooter?: ReactNode;
}

const RMModalWrapper: React.FC<ReusableModalProps> = ({
  triggerText,
  children,
  confirmButtonText = "Confirm",
  cancelButtonText = "Cancel",
  onConfirm,
  onCancel,
  title = "Confirmation",
  modalFooter = true,
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
        {modalFooter ? (
          <AlertDialogFooter className="pt-4">
            <AlertDialogCancel onClick={onCancel}>
              {cancelButtonText}
            </AlertDialogCancel>
            <AlertDialogAction onClick={onConfirm}>
              {confirmButtonText}
            </AlertDialogAction>
          </AlertDialogFooter>
        ) : (
          <></>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RMModalWrapper;


