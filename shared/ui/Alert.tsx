import { AlertCircle, X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect } from "react";

interface AlertProps {
  open?: boolean;
  title?: ReactNode;
  message: ReactNode;
  buttonText?: ReactNode;
  onClose?: () => void;
}

const Alert = ({
  open = true,
  title = "안내",
  message = "안내 메시지를 확인해주세요.",
  buttonText = "확인",
  onClose,
}: AlertProps) => {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="안내 창 닫기"
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <section
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="alert-title"
        aria-describedby="alert-message"
        className="relative z-10 w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]"
      >
        <button
          type="button"
          aria-label="닫기"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-blue-50 hover:text-point"
          onClick={onClose}
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div className="flex flex-col items-center px-7 pb-7 pt-8 text-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-point">
            <AlertCircle size={28} aria-hidden="true" />
          </div>

          <h2 id="alert-title" className="text-xl font-bold text-gray-800">
            {title}
          </h2>
          <p
            id="alert-message"
            className="mt-3 break-keep text-sm leading-6 text-gray-600"
          >
            {message}
          </p>

          <button
            type="button"
            className="mt-7 h-12 w-full rounded-lg bg-point text-base font-bold text-white transition-colors hover:bg-point/90"
            onClick={onClose}
          >
            {buttonText}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Alert;
