import React from "react";
import RMModalWrapper from "./RMModalWrapper";
import { AlertDialogDescription } from "@/components/ui/alert-dialog";

interface ConfirmModalProps {
  triggerText: string;
  confirmMessage?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  triggerText,
  confirmMessage,
  confirmButtonText = "Yes, Continue",
  cancelButtonText = "Cancel",
  onConfirm,
}) => {
  return (
    <RMModalWrapper
      triggerText={triggerText}
      confirmButtonText={confirmButtonText}
      cancelButtonText={cancelButtonText}
      onConfirm={onConfirm}
    >
      <h2 className="text-lg font-semibold">Are you sure?</h2>
      <AlertDialogDescription>
        This action will permanently delete your account and cannot be undone.
      </AlertDialogDescription>
      <p>{confirmMessage}</p>
    </RMModalWrapper>
  );
};

export default ConfirmModal;
