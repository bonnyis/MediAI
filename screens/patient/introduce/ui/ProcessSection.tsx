import { ChevronRight } from "lucide-react";
const ProcessSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-blue-50 p-4 sm:p-10">
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        <span className="text-point">AI 문진</span>은 이렇게 진행됩니다
      </h1>
      <div className="mt-5 grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-12">
        <div className="relative flex h-full flex-col items-center gap-5 rounded-lg bg-white p-4 shadow-md">
          <div className="w-8 h-8 rounded-full bg-point flex items-center justify-center text-white font-bold">
            1
          </div>
          <p className="text-xl">증상 입력</p>
          <p className="text-center font-light text-gray-600">
            어디가 불편한지 현재 느끼고 있는 증상을 자유롭게 입력해주세요.
          </p>
          <ChevronRight
            aria-hidden="true"
            className="absolute -right-8 top-1/2 hidden -translate-y-1/2 xl:block"
          />
        </div>
        <div className="relative flex h-full flex-col items-center gap-5 rounded-lg bg-white p-4 shadow-md">
          <div className="w-8 h-8 rounded-full bg-point flex items-center justify-center text-white font-bold">
            2
          </div>
          <p className="text-xl">AI 문진 진행</p>
          <p className="text-center font-light text-gray-600">
            AI가 입력한 내용을 바탕으로 추가 질문을 진행하여 필요한 정보를
            확인합니다.
          </p>
          <ChevronRight
            aria-hidden="true"
            className="absolute -right-8 top-1/2 hidden -translate-y-1/2 xl:block"
          />
        </div>
        <div className="flex h-full flex-col items-center gap-5 rounded-lg bg-white p-4 shadow-md">
          <div className="w-8 h-8 rounded-full bg-point flex items-center justify-center text-white font-bold">
            3
          </div>
          <p className="text-xl">문진 내용 정리</p>
          <p className="text-center font-light text-gray-600">
            문진 내용을 체계적으로 정리하여 의료진이 빠르게 확인할 수 있도록
            돕습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
