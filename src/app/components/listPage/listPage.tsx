import { LayoutTemplateIcon, MenuIcon, MenuSquareIcon, PencilIcon, PlusCircleIcon, SearchIcon, Trash2Icon } from "lucide-react";


export default function ListPage() {
  return (
    <div className=" flex flex-col w-6/6  ">
      <div className="flex flex-col bg-asideBgColor w-full h-14 p-2 pl-3">
        <h3 className="text-3xl font-bold">Módulo escolhido</h3>
      </div>

      <div className="flex flex-row w-full bg-mainPageBgColor h-12 p-4">
        <input
          className=" pl-4 relative rounded-xl w-80 h-6 text-black text-sm"
          type="search"
          name="Lista de pesquisa"
          placeholder="Lista de Pesquisa"
        ></input>
        <SearchIcon className=" ml-72 absolute text-black pt-1 " size={24} />

        <div className="flex flex-row justify-end items-center w-4/6 gap-2">
          <MenuIcon className="text-black" />
          <MenuSquareIcon className="text-black" />
          <LayoutTemplateIcon className="text-black mr-6" />
          <PlusCircleIcon className="text-black" />
          <PencilIcon className="text-black" />
          <Trash2Icon className="text-black" />
        </div>
      </div>

      <div className="flex flex-row border-2 border-white border-b-black pl-2 mt-2">
        <span className="text-base text-black pl-1 "> ID |</span>
        <span className="text-base text-black pl-1">Kaique Ferraz |</span>
        <span className="text-base text-black pl-1">Número de telefone |</span>
        <span className="text-base text-black pl-1"> CPF </span>
      </div>

      <div className="flex flex-row border-2 border-white border-b-black pl-2 mt-2">
        <span className="text-base text-black pl-1 "> ID |</span>
        <span className="text-base text-black pl-1">Kaique Ferraz |</span>
        <span className="text-base text-black pl-1">Número de telefone |</span>
        <span className="text-base text-black pl-1"> CPF </span>
      </div>

      <div className="flex flex-row border-2 border-white border-b-black pl-2 mt-2">
        <span className="text-base text-black pl-1 "> ID |</span>
        <span className="text-base text-black pl-1">Kaique Ferraz |</span>
        <span className="text-base text-black pl-1">Número de telefone |</span>
        <span className="text-base text-black pl-1"> CPF </span>
      </div>

      <div className="flex flex-row border-2 border-white border-b-black pl-2 mt-2">
        <span className="text-base text-black pl-1 "> ID |</span>
        <span className="text-base text-black pl-1">Kaique Ferraz |</span>
        <span className="text-base text-black pl-1">Número de telefone |</span>
        <span className="text-base text-black pl-1"> CPF </span>
      </div>

      <div className="flex flex-row border-2 border-white border-b-black pl-2 mt-2">
        <span className="text-base text-black pl-1 "> ID |</span>
        <span className="text-base text-black pl-1">Kaique Ferraz |</span>
        <span className="text-base text-black pl-1">Número de telefone |</span>
        <span className="text-base text-black pl-1"> CPF </span>
      </div>

      <div className="flex flex-row border-2 border-white border-b-black pl-2 mt-2">
        <span className="text-base text-black pl-1 "> ID |</span>
        <span className="text-base text-black pl-1">Kaique Ferraz |</span>
        <span className="text-base text-black pl-1">Número de telefone |</span>
        <span className="text-base text-black pl-1"> CPF </span>
      </div>

      <div className="flex flex-row border-2 border-white border-b-black pl-2 mt-2">
        <span className="text-base text-black pl-1 "> ID |</span>
        <span className="text-base text-black pl-1">Kaique Ferraz |</span>
        <span className="text-base text-black pl-1">Número de telefone |</span>
        <span className="text-base text-black pl-1"> CPF </span>
      </div>
    </div>
  );
}
