import ProcessSection from "./ProcessSection";
import CheckInfoSection from "./CheckInfoSection";
import NoticeSection from "./NoticeSection";

const IntroduceMain = () => {
  return (
    <section className="bg-white h-[calc(100dvh-5rem)]">
      <ProcessSection />
      <CheckInfoSection />
      <NoticeSection />
    </section>
  );
};

export default IntroduceMain;
