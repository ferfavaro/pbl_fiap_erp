import AsideMainPage from "../components/asidemainPage/asideMainPage";
import ListPage from "../components/listPage/listPage";
import NavBar from "../components/nav/navBar";

export default function supportPage() {
  return (
    <div className="flex flex-col   h-screen  w-screen  ">
      <div className="flex flex-1">
        <AsideMainPage />

        <main className="flex-1  h-screen w-screen  bg-bgCardModules ">
          <NavBar />

      <ListPage/>
         
        </main>
      </div>
    </div>
  );
}
