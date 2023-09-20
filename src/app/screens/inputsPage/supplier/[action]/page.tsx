"use client"
import AddProduct from "@/app/application/usecases/AddProduct";
import AddSupplier from "@/app/application/usecases/AddSupplier";
import EditProduct from "@/app/application/usecases/EditProduct";
import EditSupplier from "@/app/application/usecases/EditSuppler";
import AsideMainPage from "@/app/components/asidemainPage/asideMainPage";
import NavBar from "@/app/components/nav/navBar";
import { useProduct } from "@/app/hooks/useProduct";
import { useSupplier } from "@/app/hooks/useSupplier";
import AxiosAdapter from "@/app/infra/adapters/AxiosAdapter";
import ProductGateway from "@/app/infra/gateways/ProductGateway";
import SupplierGateway from "@/app/infra/gateways/SupplierGateway";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InputsPage({ params }: { params: { action: string } }) {
  const { selectedSupplier } = useSupplier();
  const [email, setEmail] = useState(params.action === "edit" ? selectedSupplier?.current?.nm_email || '' : '');
  const [name, setName] = useState(params.action === "edit" ? selectedSupplier?.current?.nm_fornecedor || '' : '');
  const router = useRouter();

  async function handleSubmit() {
    if (params.action === "edit" && selectedSupplier.current?.id) {
      const newSupplier = await new EditSupplier(new SupplierGateway(new AxiosAdapter())).execute(selectedSupplier.current?.id, email, name)
      setName("");
      setEmail("");
      selectedSupplier.current = null;
    } else if (params.action === "create") {
      const newSupplier = await new AddSupplier(new SupplierGateway(new AxiosAdapter())).execute(email, name);
      setName("");
      setEmail("");
      selectedSupplier.current = null;
    }
    router.push("/screens/listPage/supplier")
  }

  return (
    <div className="flex flex-col   h-screen  w-screen  ">
      <div className="flex flex-1">
        <AsideMainPage />

        <main className="flex-1  h-screen w-screen  bg-mainPageBgColor ">
          <NavBar />
          <div>
            <div className="flex flex-col bg-asideBgColor w-full h-14 p-2 pl-3">
              <h3 className="text-3xl font-bold">Módulo Fornecedor</h3>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2 bg-gray-500">
              <div className="px-4 py-2">
                <label about="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" onChange={(e) => setEmail(e.target.value)} value={email} required />
              </div>
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