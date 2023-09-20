"use client"
import { UserCircle2Icon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className=" flex flex-row h-fit w-full p-3 bg-white">
      <div className="flex flex-row justify-start pl-2 mb-3 items-center text-blackTextColor ">
        <UserCircle2Icon
          className="bg-asideBgHoverColor rounded-full "
          size={34}
        />
      </div>

      <div className="flex ml-auto mr-0  inset-y-0 right-0 pl-2 mb-3  items-center text-blackTextColor ">
        <a
          onClick={() => router.push("/screens/loginPage")}
          className="items-center pl-3 pt-1 text-blackTextColor text-lg"
        >
          Sair
        </a>
      </div>
    </nav>
  );
}
