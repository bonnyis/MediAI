"use client";

import { useDialogStore } from "@/shared/model/dialog-store";
import Alert from "./Alert";
import Confirm from "./Confirm";

const DialogRenderer = () => {
  const alert = useDialogStore((state) => state.alert);
  const confirm = useDialogStore((state) => state.confirm);
  const closeAlert = useDialogStore((state) => state.closeAlert);
  const closeConfirm = useDialogStore((state) => state.closeConfirm);

  if (alert) {
    return (
      <Alert
        open
        title={alert.title}
        message={alert.message}
        buttonText={alert.buttonText}
        onClose={closeAlert}
      />
    );
  }

  if (confirm) {
    return (
      <Confirm
        open
        title={confirm.title}
        message={confirm.message}
        confirmText={confirm.confirmText}
        cancelText={confirm.cancelText}
        onConfirm={() => closeConfirm(true)}
        onCancel={() => closeConfirm(false)}
      />
    );
  }

  return null;
};

export default DialogRenderer;
