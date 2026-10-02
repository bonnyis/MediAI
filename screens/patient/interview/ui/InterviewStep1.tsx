const InterviewStep1 = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-5">
        <p className="text-2xl font-bold">어디가 불편하신가요?</p>

        <p className="font-light text-gray-600 line-clamp-3">
          현재 가장 불편한 증상과 언제부터 시작되었는지 입력해주세요.
        </p>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="symptom" className="text-sm font-medium">
              증상
            </label>
            <input
              type="text"
              id="symptom"
              name="symptom"
              placeholder="예: 두통, 복통, 발열 등"
              className="w-full rounded-md border border-gray-300 p-2 focus:border-point focus:ring focus:ring-point/50 h-20"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="duration" className="text-sm font-medium">
              증상 시작 시기
            </label>
            <input
              type="text"
              id="duration"
              placeholder="예: 2일 전, 1주 전 등"
              className="w-full rounded-md border border-gray-300 p-2 focus:border-point focus:ring focus:ring-point/50 "
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewStep1;
