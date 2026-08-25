import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/images/favicon-32x32.png";
import { Menu } from "lucide-react";
const homeHeader = () => {
  return (
    <header className="h-20 bg-white border-b-white p-8">
      <div className="flex h-full items-center justify-between ">
        <div className="flex h-full w-auto md:w-1/3 items-center">
          <Link href="/">
            <Image src={logoImg} alt="MediAi 로고" />
          </Link>

          <p className="ml-2 text-lg lg:text-xl font-bold text-point">
            AI 문진 보조 서비스
          </p>
        </div>

        <nav className="w-3/4 hidden md:block">
          <ul className="flex items-center justify-end gap-8">
            <li>서비스 소개</li>
            <li>의사 로그인</li>
            <li>
              <button className="h-12 rounded-md border-white px-6 bg-point text-white">
                문진 시작하기
              </button>
            </li>
          </ul>
        </nav>
        <Menu className="block md:hidden" />
      </div>
    </header>
  );
};

export default homeHeader;
