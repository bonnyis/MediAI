"use client";

import type { ReactNode } from "react";
import { create } from "zustand";

export interface AlertOptions {
  title?: ReactNode;
  message: ReactNode;
  buttonText?: ReactNode;
}

export interface ConfirmOptions {
  title?: ReactNode;
  message: ReactNode;
  confirmText?: ReactNode;
  cancelText?: ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface DialogStore {
  alert: AlertOptions | null;
  confirm: ConfirmOptions | null;
  openAlert: (options: AlertOptions) => void;
  closeAlert: () => void;
  openConfirm: (options: ConfirmOptions) => void;
  closeConfirm: (confirmed?: boolean) => void;
}

export const useDialogStore = create<DialogStore>((set, get) => ({
  alert: null,
  confirm: null,
  openAlert: (options) => set({ alert: options, confirm: null }),
  closeAlert: () => set({ alert: null }),
  openConfirm: (options) => set({ confirm: options, alert: null }),
  closeConfirm: (confirmed = false) => {
    const confirm = get().confirm;
    set({ confirm: null });

    if (confirmed) {
      confirm?.onConfirm?.();
    } else {
      confirm?.onCancel?.();
    }
  },
}));
