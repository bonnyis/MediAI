"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { X, ChevronLeft } from "lucide-react";

const InterviewModal = () => {
  const router = useRouter();
  const [progress, setProgress] = useState(1);
  const handleClose = () => {
    router.back();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />

      {/* Modal */}
      <section className="relative z-10 h-[85vh] w-[90%] max-w-5xl rounded-2xl bg-white">
        <div className="relative flex h-20 justify-evenly items-center border-b-amber-50 px-8 shadow-sm">
          {/* 뒤로가기 */}
          <button type="button" className="flex items-center justify-center">
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
          <div className="w-full flex flex-col items-center gap-2">
            <p className={`w-full h-6 border border-gray-300 rounded-lg `}>
              <div
                className="h-full rounded-lg bg-point transition-all duration-300"
                style={{ width: `${(progress / 5) * 100}%` }}
              />
            </p>
            <p className="">{progress} / 5</p>
          </div>

          {/* 문진 컨텐츠 */}
          <p className="mt-4">문진 내용을 여기에 넣습니다.</p>
        </div>
      </section>
    </div>
  );
};

export default InterviewModal;
