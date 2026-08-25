import Image from "next/image";
import illurst from "@/public/images/illur.png";
import { ArrowRight } from "lucide-react";
const MainBanner = () => {
  return (
    <div className="main-bg h-[calc(100dvh-5rem)] overflow-hidden relative">
      <div className="p-12 xl:p-32 flex flex-col gap-8">
        <div className="text-xl/normal md:text-3xl/relaxed font-bold line-">
          <p className="">AI가 도와주는</p>
          <p className="">똑똑한 문진, </p>
          <p className="">
            <span className="text-point">더 빠르고 정확한</span> 치료의 시작
          </p>
        </div>
        <div className="text-gray-700 font-normal ">
          <p className="">AI가 증상을 꼼꼼히 질문하고 요약하여</p>
          <p className="">의료인의 진료를 더 효율적으로 돕습니다.</p>
        </div>
        <div className="flex gap-4 text-lg flex-col md:flex-row">
          <button className="h-12 rounded-md border-white px-6 bg-point text-white flex gap-2 justify-between items-center">
            문진 시작하기
            <ArrowRight size={18} />
          </button>

          <button className="h-12 rounded-md px-6 bg-white">의사 로그인</button>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-4/5 md:bottom-[5.5%] md:right-[8.33%] md:w-11/12 lg:w-5/12">
        <Image
          src={illurst}
          alt={"AI문진 일러스트"}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default MainBanner;
