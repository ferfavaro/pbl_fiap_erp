"use client"
import AsideMainPage from "../../../components/asidemainPage/asideMainPage";
import NavBar from "../../../components/nav/navBar";
import { LayoutTemplateIcon, MenuIcon, MenuSquareIcon, PencilIcon, PlusCircleIcon, SearchIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect, useReducer } from "react";
import AxiosAdapter from "@/app/infra/adapters/AxiosAdapter";
import Pedido from "@/app/domain/entities/Pedido";
import SupplierGateway from "@/app/infra/gateways/SupplierGateway";
import GetAllSuppliers from "@/app/application/usecases/GetAllSuppliers";
import ListPage from "@/app/components/listPage/supplier/page";
import Fornecedor from "@/app/domain/entities/Fornecedor";
import { useSupplier } from "@/app/hooks/useSupplier";
import { useRouter } from "next/navigation";
import DeleteSupplier from "@/app/application/usecases/DeleteSupplier";


export default function ListPageScreen() {
  const [clickedSupplier, setClickedSupplier] = useState<Fornecedor | null>(null);
  const { selectedSupplier, suppliers, removeSupplier } = useSupplier();
  const router = useRouter();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  async function getAllSuppliers() {
    try {
      const suppliersResponse = await new GetAllSuppliers(new SupplierGateway(new AxiosAdapter())).execute();
      suppliers.current = suppliersResponse;
      forceUpdate();
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = (supplier: Fornecedor) => {
    selectedSupplier.current = supplier;
    setClickedSupplier(supplier);
  };

  async function handleDelete() {
    if (selectedSupplier.current?.id) {
      const deleteClient = await new DeleteSupplier(new SupplierGateway(new AxiosAdapter())).execute(selectedSupplier.current?.id)
      removeSupplier(selectedSupplier.current?.id)
      selectedSupplier.current = null;
      forceUpdate();
    }
  }

  useEffect(() => {
    getAllSuppliers();
  }, []);

  return (
    <div className="flex flex-col   h-screen  w-screen  ">
      <div className="flex flex-1">
        <AsideMainPage />
        <main className="flex-1  h-screen w-screen  bg-bgCardModules ">
          <NavBar />
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
                <Link href={`../../screens/inputsPage/supplier/create`}>
                  <PlusCircleIcon className="text-black" />
                </Link>
                <Link href={`../../screens/inputsPage/supplier/edit`}>
                  <PencilIcon className="text-black" />
                </Link>
                <Trash2Icon onClick={() => handleDelete()} className="text-black" />
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
                {suppliers.current?.map((supplier, index) => (
                  <tr
                    key={index}
                    onClick={() => handleClick(supplier)}
                    className={`cursor-pointer ${selectedSupplier.current?.id === supplier.id ? 'bg-gray-500' : ''}`}
                  >
                    <td className="text-black px-4 py-2">{supplier.id}</td>
                    <td className="text-black px-4 py-2">{supplier.nm_fornecedor}</td>
                    <td className="text-black px-4 py-2">{supplier.nm_email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
