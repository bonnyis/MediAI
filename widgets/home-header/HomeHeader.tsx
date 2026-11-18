"use client";
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/images/favicon-32x32.png";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { useDialogStore } from "@/shared/model/dialog-store";
const homeHeader = () => {
  const pathname = usePathname();
  const isIntroducePage = pathname === "/introduce";
  const openAlert = useDialogStore((state) => state.openAlert);
  return (
    <header className="h-20 bg-white border-b-white p-8">
      <div className="flex h-full items-center justify-between ">
        <div className="flex h-full w-auto md:w-1/3 items-center">
          <Image src={logoImg} alt="MediAi 로고" />
          <Link href="/">
            <p className="ml-2 text-lg lg:text-xl font-bold text-point">
              AI 문진 보조 서비스
            </p>
          </Link>
        </div>

        <nav className="w-3/4 hidden md:block">
          <ul className="flex items-center justify-end gap-8">
            <li
              className={`min-w-30 text-lg ${isIntroducePage ? "text-point font-bold" : "text-black"}`}
            >
              <Link href="/introduce">서비스 소개</Link>
            </li>
            <li>
              {/* <Link href="/"> */}
              <button
                className="h-12 rounded-md border-white px-6 bg-doctor text-white"
                onClick={() =>
                  openAlert({
                    title: "안내",
                    message: "준비중입니다.",
                    buttonText: "확인",
                  })
                }
              >
                의사 로그인
              </button>
              {/* </Link> */}
            </li>
            <li>
              <Link href="/interview?step=1">
                <button className="h-12 rounded-md border-white px-6 bg-point text-white">
                  문진 시작하기
                </button>
              </Link>
            </li>
          </ul>
        </nav>
        <Menu className="block md:hidden" />
      </div>
    </header>
  );
};

export default homeHeader;
