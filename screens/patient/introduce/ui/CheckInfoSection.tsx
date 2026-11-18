import {
  Users,
  Syringe,
  CalendarDays,
  ClipboardPlus,
  Pill,
} from "lucide-react";
const CheckInfoSection = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center p-10 gap-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        어떤 정보를 확인하나요?
      </h1>
      <div className="mt-5 grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <div className="flex flex-col items-center gap-5 p-4 border-0 rounded-lg shadow-md ">
          <div className="w-15 h-15 rounded-full bg-blue-200 flex items-center justify-center text-white font-bold">
            <Syringe color="blue" />
          </div>
          <p className="text-xl">주 증상</p>
          <p className="text-center font-light text-gray-600">
            현재 가장 불편한 증상을 확인합니다.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 p-4 border-0 rounded-lg shadow-md ">
          <div className="w-15 h-15 rounded-full bg-blue-200 flex items-center justify-center text-white font-bold">
            <CalendarDays color="blue" />
          </div>
          <p className="text-xl">증상 기간</p>
          <p className="text-center font-light text-gray-600">
            언제부터 시작되었는지 확인합니다.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 p-4 border-0 rounded-lg shadow-md ">
          <div className="w-15 h-15 rounded-full bg-blue-200 flex items-center justify-center text-white font-bold">
            <Users color="blue" />
          </div>
          <p className="text-xl">동반 증상</p>
          <p className="text-center font-light text-gray-600">
            함꼐 나타나는 증상이 있는지 확인합니다.
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 p-4 border-0 rounded-lg shadow-md ">
          <div className="w-15 h-15 rounded-full bg-blue-200 flex items-center justify-center text-white font-bold">
            <ClipboardPlus color="blue" />
          </div>
          <p className="text-xl">기본 질환</p>
          <p className="text-center font-light text-gray-600">
            과거 병력 및 기존 질환을 확인합니다.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 p-4 border-0 rounded-lg shadow-md ">
          <div className="w-15 h-15 rounded-full bg-blue-200 flex items-center justify-center text-white font-bold">
            <Pill color="blue" />
          </div>
          <p className="text-xl">복용 약물</p>
          <p className="text-center font-light text-gray-600">
            현재 복용 중인 약물이 있는지 확인합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckInfoSection;
