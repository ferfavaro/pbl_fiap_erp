import AsideMainPage from "@/app/components/asidemainPage/asideMainPage";
import NavBar from "@/app/components/nav/navBar";

export default function inputsPage() {
    return (
      <div className="flex flex-col   h-screen  w-screen  ">
        <div className="flex flex-1">
          <AsideMainPage />
  
          <main className="flex-1  h-screen w-screen  bg-mainPageBgColor ">
            <NavBar />
          </main>
        </div>
      </div>
    );
  }