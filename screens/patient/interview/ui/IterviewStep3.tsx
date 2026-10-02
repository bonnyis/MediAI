import { Check } from "lucide-react";
const InterviewStep3 = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 ">
      <div className="w-24 h-24 rounded-full bg-point text-white flex items-center justify-center">
        <Check size={50} />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          문진이 완료되었습니다.
        </h2>
        <p className="text-gray-600 mt-2">MediAI가 내용을 요약하고 있어요.</p>
      </div>
      {/* <div className="w-full flex flex-col gap-3 items-center justify-center text-gray-700">
        <div className="flex justify-between items-center w-full ">
          <p className="font-medium">문진 내용 요약</p>
          <p className="w-10 h-10 border border-gray-200 rounded-full bg-doctor text-white flex items-center justify-center">
            <Check />
          </p>
        </div>
        <div className="flex justify-between items-center w-full ">
          <p className="font-medium">문진 내용 요약</p>
          <p className="w-10 h-10 border border-gray-200 rounded-full bg-doctor/20 text-doctor flex items-center justify-center">
            <Check />
          </p>
        </div>
        <div className="flex justify-between items-center w-full align-center">
          <p className="font-medium">문진 내용 요약</p>
          <p className="w-10 h-10 border border-gray-200 rounded-full bg-doctor/20 text-doctor flex items-center justify-center">
            <Check />
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default InterviewStep3;
