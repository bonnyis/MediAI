import type { Metadata } from "next";
import { Nanum_Gothic, Inter } from "next/font/google";
import "./globals.css";

const nanumGothic = Nanum_Gothic({
  variable: "--font-nanum-gothic",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});
const InterSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});
export const metadata: Metadata = {
  title: "MediAI - AI 문진 보조 서비스",
  description: "AI와 함께하는 문진 보조 서비스로 원활한 진료를 도와드립니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${(nanumGothic.variable, InterSans.variable)} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=dehaze,menu_open"
        />
      </head>
      <body className="">{children}</body>
    </html>
  );
}
