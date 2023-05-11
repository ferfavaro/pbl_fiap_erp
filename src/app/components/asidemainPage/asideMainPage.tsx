import { MenuIcon, LayoutDashboardIcon, HelpCircleIcon } from "lucide-react";


export default function AsideMainPage() {
  return (
    <aside className="h-screen w-1/6 rounded-xl bg-white">
      <nav className="space-y-4 h-screen justify-center bg-asideBgColor p-1">
        <div className="flex flex-row justify-start pl-2 mb-3 items-center text-WhiteTextColor">
          <a className=" flex items-center"></a>
          <MenuIcon size={52} />

          <h2 className="flex  items-center text-4xl text-titleFormColor pl-3 font-extrabold font-montSerrat">
            Crio
          </h2>
        </div>

        <div className="flex flex-row justify-start pl-2 mb-3 items-center text-WhiteTextColor hover:bg-asideBgHoverColor">
          <LayoutDashboardIcon size={52} />
          <a className=" flex items-center  text-md pl-2">Modulo</a>
        </div>

        <div className="flex flex-row justify-start pl-2 mb-3 items-center text-WhiteTextColor hover:bg-asideBgHoverColor">
          <HelpCircleIcon size={52} />

          <a className="flex  items-center  text-md pl-2">Suporte</a>
        </div>
      </nav>
    </aside>
  );
}
