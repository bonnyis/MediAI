import { CircleHelp, X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect } from "react";

interface ConfirmProps {
  open?: boolean;
  title?: ReactNode;
  message?: ReactNode;
  confirmText?: ReactNode;
  cancelText?: ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Confirm = ({
  open = true,
  title = "확인",
  message = "이 작업을 진행하시겠습니까?",
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  onCancel,
}: ConfirmProps) => {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCancel?.();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="확인 창 닫기"
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"
        onClick={onCancel}
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        aria-describedby="confirm-message"
        className="relative z-10 w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]"
      >
        <button
          type="button"
          aria-label="닫기"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-blue-50 hover:text-point"
          onClick={onCancel}
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div className="flex flex-col items-center px-7 pb-7 pt-8 text-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-point">
            <CircleHelp size={28} aria-hidden="true" />
          </div>

          <h2 id="confirm-title" className="text-xl font-bold text-gray-800">
            {title}
          </h2>
          <p
            id="confirm-message"
            className="mt-3 break-keep text-sm leading-6 text-gray-600"
          >
            {message}
          </p>

          <div className="mt-7 grid w-full grid-cols-2 gap-3">
            <button
              type="button"
              className="h-12 rounded-lg border border-gray-200 bg-white text-base font-bold text-gray-600 transition-colors hover:bg-gray-50"
              onClick={onCancel}
            >
              {cancelText}
            </button>
            <button
              type="button"
              className="h-12 rounded-lg bg-point text-base font-bold text-white transition-colors hover:bg-point/90"
              onClick={onConfirm}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Confirm;
