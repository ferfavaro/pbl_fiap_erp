import AsideMainPage from "../../components/asidemainPage/asideMainPage";
import Dashboard from "../../components/dashboard/dashboard";
import NavBar from "../../components/nav/navBar";

export default function MainPage() {
  return (
    <div className="flex flex-col   h-screen  w-screen  ">
      <div className="flex flex-1">
        <AsideMainPage />

        <main className="flex-1  h-screen w-screen  bg-mainPageBgColor ">
          <NavBar />
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
