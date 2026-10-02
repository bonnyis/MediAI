"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { X, ChevronLeft } from "lucide-react";
import InterviewStep1 from "./ui/InterviewStep1";
import InterviewStep2 from "./ui/InterviewStep2";
import InterviewStep3 from "./ui/IterviewStep3";
import InterviewResult from "./ui/InterviewResult";

const InterviewModalContent = () => {
  const router = useRouter();
  const step = useSearchParams()?.get("step") || "1";
  const [medicalStep] = useState<number>(3);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
      case "result":
        router.replace(`/interview?step=${medicalStep}`);
        break;
      default:
        router.replace(`/interview?step=${Number(step) - 1}`);
        break;
    }
  };
  const handleNext = () => {
    if (Number(step) < medicalStep) {
      router.replace(`/interview?step=${Number(step) + 1}`);
    } else if (Number(step) === medicalStep) {
      router.replace(`/interview?step=result`);
    }
  };
  // #TODO: 일반 로그인은 소셜로그인 연동으로 (환자)
  // #TODO: 의사로그인했을 때만 의사 문진페이지로 이동하도록 (의사) -> 의사대시보드 메뉴에 관리자 등록하는 폼 만들기!
  useEffect(() => {
    switch (step) {
      case "1":
        setCurrentComponent(<InterviewStep1 />);
        break;
      case "2":
        setCurrentComponent(<InterviewStep2 />);
        break;
      case "3":
        setCurrentComponent(<InterviewStep3 />);
        break;
      case "result":
        setCurrentComponent(<InterviewResult />);
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
      <section className="relative z-10 h-[85vh] w-[90%] max-w-5xl rounded-2xl bg-white overflow-y-auto">
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
          {step != "result" && (
            <div className="w-full flex flex-row items-center align-middle justify-between gap-6">
              <div
                className={`w-[93%] h-4 lg:h-6 border border-gray-300 rounded-lg`}
              >
                <div
                  className="h-full rounded-lg bg-point transition-all duration-300"
                  style={{ width: `${(Number(step) / medicalStep) * 100}%` }}
                />
              </div>
              <p className="text-sm lg:text-base w-auto text-gray-500">
                {step} / {medicalStep}
              </p>
            </div>
          )}

          {/* 문진 컨텐츠 */}
          <section className="mt-8">{currentCompoonent}</section>
          {step && step !== "result" && (
            <div className="mt-8">
              <button
                type="button"
                className="w-full rounded-lg bg-point py-3 text-lg font-bold text-white transition-all duration-300 hover:bg-point/80"
                onClick={handleNext}
                disabled={Number(step) === medicalStep && isLoading}
              >
                {Number(step) === 3
                  ? isLoading
                    ? "로딩 중..."
                    : "결과 확인하기"
                  : "다음"}
              </button>
            </div>
          )}
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
