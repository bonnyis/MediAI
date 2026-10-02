"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { X, ChevronLeft } from "lucide-react";
import InterviewStep1 from "./ui/InterviewStep1";
import InterviewStep2 from "./ui/InterviewStep2";

const InterviewModalContent = () => {
  const router = useRouter();
  const step = useSearchParams()?.get("step") || "1";
  const [currentCompoonent, setCurrentComponent] = useState<React.ReactNode>(
    <InterviewStep1 />,
  );
  const handleClose = () => {
    router.replace("/");
  };
  const handleBack = () => {
    switch (step) {
      case "1":
        router.replace("/");
        break;
      default:
        router.replace(`/interview?step=${Number(step) - 1}`);
        break;
    }
  };
  useEffect(() => {
    switch (step) {
      case "1":
        setCurrentComponent(<InterviewStep1 />);
        break;
      case "2":
        setCurrentComponent(<InterviewStep2 />);
        break;
      default:
        setCurrentComponent(<InterviewStep1 />);
        break;
    }
  }, [step]);
  // query parameter step이 없으면 step=1로 리다이렉트
  if (step === null) {
    router.replace("/interview?step=1");
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />

      {/* Modal */}
      <section className="relative z-10 h-[85vh] w-[90%] max-w-5xl rounded-2xl bg-white">
        <div className="relative flex h-20 justify-evenly items-center border-b-amber-50 px-8 shadow-sm">
          {/* 뒤로가기 */}
          <button
            type="button"
            className="flex items-center justify-center"
            onClick={handleBack}
          >
            <ChevronLeft size={28} />
          </button>

          {/* 제목 */}

          <h1 className="w-full text-2xl font-bold text-point">
            AI 문진 서비스
          </h1>

          {/* 닫기 */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-8 flex items-center justify-center"
          >
            <X size={35} />
          </button>
        </div>
        <div className="p-8">
          {/* progressbar */}
          <div className="w-full flex flex-row items-center align-center gap-6">
            <div
              className={`w-[90%] h-4 lg:h-6 border border-gray-300 rounded-lg`}
            >
              <div
                className="h-full rounded-lg bg-point transition-all duration-300"
                style={{ width: `${(Number(step) / 5) * 100}%` }}
              />
            </div>
            <p className="text-sm lg:text-base w-auto text-gray-500">
              {step} / 5
            </p>
          </div>

          {/* 문진 컨텐츠 */}
          <section className="mt-8">{currentCompoonent}</section>

          <div className="mt-8">
            <button
              type="button"
              className="w-full rounded-lg bg-point py-3 text-lg font-bold text-white transition-all duration-300 hover:bg-point/80"
              onClick={() => {
                if (Number(step) < 5) {
                  router.replace(`/interview?step=${Number(step) + 1}`);
                }
              }}
            >
              다음
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const InterviewModalIndex = () => (
  <Suspense fallback={null}>
    <InterviewModalContent />
  </Suspense>
);

export default InterviewModalIndex;
