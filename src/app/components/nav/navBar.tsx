import { UserCircle2Icon } from "lucide-react";

export default function NavBar() {
  return (
    <nav className=" flex flex-row h-fit w-full p-3 bg-white">
      <div className="flex flex-row justify-start pl-2 mb-3 items-center text-blackTextColor ">
        <UserCircle2Icon
          className="bg-asideBgHoverColor rounded-full "
          size={34}
        />
        <a className=" text-left items-center pl-3 pt-1 text-blackTextColor text-lg">
          Kaique Ferraz
        </a>
      </div>

      <div className="flex ml-auto mr-0  inset-y-0 right-0 pl-2 mb-3  items-center text-blackTextColor ">
        <a
          href=""
          className="items-center pl-3 pt-1 text-blackTextColor text-lg"
        >
          Sair
        </a>
      </div>
    </nav>
  );
}
