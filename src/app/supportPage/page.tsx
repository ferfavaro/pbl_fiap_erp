import AsideMainPage from "../components/asidemainPage/asideMainPage";
import NavBar from "../components/nav/navBar";
import SupportContent from "../components/suportContent/suport";

export default function supportPage() {
  return (
    <div className="flex flex-col   h-screen  w-screen  ">
      <div className="flex flex-1">
        <AsideMainPage />

        <main className="flex-1  h-screen w-screen  bg-mainPageBgColor ">
          <NavBar />
          <SupportContent />
        </main>
      </div>
    </div>
  );
}
