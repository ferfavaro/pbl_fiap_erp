"use client"
import { LayoutTemplateIcon, MenuIcon, MenuSquareIcon, PencilIcon, PlusCircleIcon, SearchIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import Link from 'next/link';
import { useSupplier } from "@/app/hooks/useSupplier";
import Fornecedor from "@/app/domain/entities/Fornecedor";

interface ListProps {
  suppliers: Fornecedor[];
}

const ListPage: React.FC<ListProps> = ({ suppliers }) => {
  const [clickedSupplier, setClickedSupplier] = useState<Fornecedor | null>(null);
  const { selectedSupplier } = useSupplier();

  const handleClick = (supplier: Fornecedor) => {
    selectedSupplier.current = supplier;
    console.log(selectedSupplier.current);
    setClickedSupplier(supplier);
  };

  return (
    <div className="">
      <div className="flex flex-col bg-asideBgColor w-full h-14 p-2 pl-3">
        <h3 className="text-3xl font-bold">Módulo Fornecedor</h3>
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
          <Link href={`../../screens/inputsPage/supplier`}>
            <PlusCircleIcon className="text-black" />
          </Link>
          <PencilIcon className="text-black" />
          <Trash2Icon className="text-black" />
        </div>
      </div>

      <table className="w-full border-b-black">
        <thead>
          <tr className="border-2 border-white border-b-black">
            <th className="text-left text-black px-4 py-2">ID</th>
            <th className="text-black text-left px-4 py-2">Nome</th>
            <th className="text-black text-left px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier, index) => (
            <tr
              key={index}
              onClick={() => handleClick(supplier)}
              className={`cursor-pointer ${selectedSupplier === supplier ? 'bg-gray-500' : ''
                }`}
            >
              <td className="text-black px-4 py-2">{supplier.id}</td>
              <td className="text-black px-4 py-2">{supplier.nm_fornecedor}</td>
              <td className="text-black px-4 py-2">{supplier.nm_email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListPage;
