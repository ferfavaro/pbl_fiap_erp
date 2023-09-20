"use client"
import AsideMainPage from "../../../components/asidemainPage/asideMainPage";
import NavBar from "../../../components/nav/navBar";
import { LayoutTemplateIcon, MenuIcon, MenuSquareIcon, PencilIcon, PlusCircleIcon, SearchIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import Produto from "@/app/domain/entities/Produto";
import React, { useState, useEffect, useReducer } from "react";
import GetAllProducts from "@/app/application/usecases/GetAllProducts";
import ProductGateway from "@/app/infra/gateways/ProductGateway";
import AxiosAdapter from "@/app/infra/adapters/AxiosAdapter";
import ProductProvider from "@/app/hooks/useProduct";
import Cliente from "@/app/domain/entities/Cliente";
import GetAllClients from "@/app/application/usecases/GetAllClients";
import ClientGateway from "@/app/infra/gateways/ClientGateway";
import { useClient } from "@/app/hooks/useClient";
import { useRouter } from "next/navigation";
import DeleteClient from "@/app/application/usecases/DeleteClient";


export default function ListPageScreen() {
  const [clickedClient, setClickedClient] = useState<Cliente | null>(null);
  const { selectedClient, clients, removeClient } = useClient();
  const router = useRouter();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  async function getAllClients() {
    try {
      const clientsResponse = await new GetAllClients(new ClientGateway(new AxiosAdapter())).execute();
      clients.current = clientsResponse;
      forceUpdate();
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = (client: Cliente) => {
    selectedClient.current = client;
    setClickedClient(client);
  };

  async function handleDelete() {
    if (selectedClient.current?.id) {
      const deleteClient = await new DeleteClient(new ClientGateway(new AxiosAdapter())).execute(selectedClient.current?.id)
      removeClient(selectedClient.current?.id)
      selectedClient.current = null;
      forceUpdate();
    }
  }

  useEffect(() => {
    getAllClients();
  }, []);

  return (
    <div className="flex flex-col   h-screen  w-screen  ">
      <div className="flex flex-1">
        <AsideMainPage />
        <main className="flex-1  h-screen w-screen  bg-bgCardModules ">
          <NavBar />
          <div className="">
            <div className="flex flex-col bg-asideBgColor w-full h-14 p-2 pl-3">
              <h3 className="text-3xl font-bold">Módulo Cliente</h3>
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
                <Link href={`../../screens/inputsPage/client/create`}>
                  <PlusCircleIcon className="text-black" />
                </Link>
                <Link href={`../../screens/inputsPage/client/edit`}>
                  <PencilIcon className="text-black" />
                </Link>
                <Trash2Icon onClick={() => handleDelete()} className="text-black" />
              </div>
            </div>

            <table key={Math.random()} className="w-full border-b-black">
              <thead>
                <tr className="border-2 border-white border-b-black">
                  <th className="text-left text-black px-4 py-2">ID</th>
                  <th className="text-black text-left px-4 py-2">Nome</th>
                </tr>
              </thead>
              <tbody>
                {clients.current?.map((client, index) => (
                  <tr
                    key={index}
                    onClick={() => handleClick(client)}
                    className={`cursor-pointer ${selectedClient.current?.id === client.id ? 'bg-gray-500' : ''}`}
                  >
                    <td className="text-black px-4 py-2">{client.id}</td>
                    <td className="text-black px-4 py-2">{client.name}</td>
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
