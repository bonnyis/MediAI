const InterviewResult = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col justify-start  gap-4">
        <div className="">
          <h3 className="text-2xl font-bold text-gray-800">AI 요약 정보</h3>
          <p className="text-gray-400">MediAI가 제공한 문진 요약 정보입니다.</p>
        </div>
        <div className="">
          <h3 className="font-bold">주 증상</h3>
          <p className="text-point text-lg">두통, 어지럼증</p>
        </div>
        <div className="">
          <h3 className="font-bold">증상 기간</h3>
          <p className="text-lg">3일</p>
        </div>
        <div className="">
          <h3 className="font-bold">동반 증상</h3>
          <p className="text-point text-lg">발열, 구토</p>
        </div>
        <div className="">
          <h3 className="font-bold">위험 요인</h3>
          <p className="text-point text-lg">없음</p>
        </div>
      </div>
      <div className="mt-8">
        <div className="border rounded-2xl border-doctor/50  bg-doctor/20 p-6 flex flex-col gap-4">
          <h3 className="text-xl font-bold text-doctor">AI 평가</h3>
          <p className="text-doctor text-base">
            상기도 감염 의심 (위험도 : 낮음)
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterviewResult;
