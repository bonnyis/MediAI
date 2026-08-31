import HomeHeader from "@/widgets/home-header/HomeHeader";

const layout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeHeader />
      <main className="flex-1">
        {children}

        {/* overlay modal */}
        {modal}
      </main>
    </div>
  );
};

export default layout;
