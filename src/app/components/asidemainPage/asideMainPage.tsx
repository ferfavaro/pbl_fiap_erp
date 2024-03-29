"use client"
import { MenuIcon, LayoutDashboardIcon, HelpCircleIcon } from "lucide-react";
import { useRouter } from 'next/navigation'

export default function AsideMainPage() {
  const router = useRouter();
  return (
    <aside className=" h-screen w-1/6 rounded-xl">
      <nav className="space-y-4 h-screen justify-center bg-asideBgColor p-1">
        <div className="flex flex-row justify-start pl-2 mb-3 items-center text-WhiteTextColor">
          <a className=" flex items-center"></a>
          <MenuIcon size={52} />

          <h2 onClick={() => router.push("/screens/homepage")} className="flex  items-center text-4xl text-titleFormColor pl-3 font-extrabold font-montSerrat">
            Crio
          </h2>
        </div>

        <div onClick={() => router.push("/screens/homepage")} className="flex flex-row justify-start pl-2 mb-3 items-center text-WhiteTextColor hover:bg-asideBgHoverColor">
          <LayoutDashboardIcon size={52} />
          <a onClick={() => router.push("/screens/homepage")} className=" flex items-center  text-md pl-2">Modulo</a>
        </div>

        <div onClick={() => router.push("/screens/supportPage")} className="flex flex-row justify-start pl-2 mb-3 items-center text-WhiteTextColor hover:bg-asideBgHoverColor">
          <HelpCircleIcon size={52} />

          <a onClick={() => router.push("/screens/supportPage")} className="flex  items-center  text-md pl-2">Suporte</a>
        </div>
      </nav>
    </aside>
  );
}
