import { Shield, Info, Siren } from "lucide-react";
const NoticeSection = () => {
  return (
    <div className="lg:min-h-45 grid grid-cols-1 justify-center items-center gap-4 bg-blue-50 p-10 lg:grid-cols-[3fr_7fr]">
      <div className="flex items-center gap-4 ml-4">
        <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-blue-200 text-white">
          <Shield />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-point">안내 사항</h2>
          <p className="font-light text-gray-600">
            MediAi는 의료진의 진단을 대체하지 않습니다.
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md flex-col lg:flex-row">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50">
            <Info color="blue" />
          </div>
          <p className="font-light text-gray-600">
            본 서비스는 증상에 대한 문진과 정보 정리를 돕는 보조 서비스입니다.
          </p>
        </div>
        <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md flex-col lg:flex-row">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50">
            <Siren color="red" />
          </div>
          <p className="font-light text-gray-600">
            응급 상황에서는 즉시 의료기간을 방문하거나 119에 연락하시기
            바랍니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoticeSection;
