"use client"
import AddClient from "@/app/application/usecases/AddClient";
import EditClient from "@/app/application/usecases/EditClient";
import AsideMainPage from "@/app/components/asidemainPage/asideMainPage";
import NavBar from "@/app/components/nav/navBar";
import { useClient } from "@/app/hooks/useClient";
import AxiosAdapter from "@/app/infra/adapters/AxiosAdapter";
import ClientGateway from "@/app/infra/gateways/ClientGateway";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InputsPage({ params }: { params: { action: string } }) {
  const { selectedClient } = useClient();
  const [name, setName] = useState(params.action === "edit" ? selectedClient?.current?.name || '' : '');
  const router = useRouter();

  async function handleSubmit() {
    if (params.action === "edit" && selectedClient.current?.id) {
      const newClient = await new EditClient(new ClientGateway(new AxiosAdapter())).execute(selectedClient.current?.id, name)
      setName("");
      selectedClient.current = null;
    } else if (params.action === "create") {
      const newClient = await new AddClient(new ClientGateway(new AxiosAdapter())).execute(name);
      setName("");
      selectedClient.current = null;
    }
    router.push("/screens/listPage/client")
  }

  return (
    <div className="flex flex-col   h-screen  w-screen  ">
      <div className="flex flex-1">
        <AsideMainPage />

        <main className="flex-1  h-screen w-screen  bg-mainPageBgColor ">
          <NavBar />
          <div>
            <div className="flex flex-col bg-asideBgColor w-full h-14 p-2 pl-3">
              <h3 className="text-3xl font-bold">Módulo Cliente</h3>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2 bg-gray-500">
              <div className="px-4 py-2">
                <label about="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" onChange={(e) => setName(e.target.value)} value={name} required />
              </div>
              <button type="submit" onClick={() => handleSubmit()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 m-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}