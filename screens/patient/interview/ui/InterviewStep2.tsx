import { Send } from "lucide-react";
const InterviewStep2 = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 ">
      <div className="w-full ">
        {/* MediAI 질문 */}
        <div className="flex flex-row justify-start items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-point"></div>
          <div className="flex flex-col gap-2">
            <p className="text-point">MediAI</p>
            <div className="border rounded-lg border-gray-300 p-4 bg-gray-300">
              <p className="">증상에 대해 더 자세히 알려주세요.</p>
            </div>
            <p className="text-gray-400 text-sm">오전 10시 20분</p>
          </div>
        </div>
        {/* 이용자 답변 */}
        <div className="flex flex-row-reverse justify-start items-end gap-3 text-right  text-gray-700">
          <div className="flex flex-col gap-2">
            <p className="">userName</p>
            <div className="border rounded-lg border-gray-100 p-4 bg-point/30">
              <p className="text-right">갑자기 일어날 때 어지러워요</p>
            </div>
            <p className="text-gray-400 text-sm">오전 10시 38분</p>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-point"></div>
          <div className="flex flex-col gap-2">
            <p className="text-point">MediAI</p>
            <div className="border rounded-lg border-gray-300 p-4 bg-gray-300">
              <p className="">증상에 대해 더 자세히 알려주세요.</p>
            </div>
            <p className="text-gray-400 text-sm">오전 10시 20분</p>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-start items-end gap-3 text-right  text-gray-700">
          <div className="flex flex-col gap-2">
            <p className="">userName</p>
            <div className="border rounded-lg border-gray-100 p-4 bg-point/30">
              <p className="text-right">갑자기 일어날 때 어지러워요</p>
            </div>
            <p className="text-gray-400 text-sm">오전 10시 38분</p>
          </div>
        </div>
        {/* MediAI 질문 */}
        <div className="flex flex-row justify-start items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-point"></div>
          <div className="flex flex-col gap-2">
            <p className="text-point">MediAI</p>
            <div className="border rounded-lg border-gray-300 p-4 bg-gray-300">
              <p className="">증상에 대해 더 자세히 알려주세요.</p>
            </div>
            <p className="text-gray-400 text-sm">오전 10시 20분</p>
          </div>
        </div>
        {/* 이용자 답변 */}
        <div className="flex flex-row-reverse justify-start items-end gap-3 text-right  text-gray-700">
          <div className="flex flex-col gap-2">
            <p className="">userName</p>
            <div className="border rounded-lg border-gray-100 p-4 bg-point/30">
              <p className="text-right">갑자기 일어날 때 어지러워요</p>
            </div>
            <p className="text-gray-400 text-sm">오전 10시 38분</p>
          </div>
        </div>
      </div>

      {/* 체팅창 */}
      <div className="w-full border rounded-full border-gray-300 p-2">
        <div className="flex flex-row justify-between items-center gap-3 pl-4">
          <input type="text" className="" placeholder="답변을 입력하세요." />
          <button className="bg-point text-white rounded-full p-4">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewStep2;
