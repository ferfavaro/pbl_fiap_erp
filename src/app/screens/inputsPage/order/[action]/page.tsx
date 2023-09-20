"use client"
import AddOrder from "@/app/application/usecases/AddOrder";
import EditOrder from "@/app/application/usecases/EditOrder";
import AsideMainPage from "@/app/components/asidemainPage/asideMainPage";
import NavBar from "@/app/components/nav/navBar";
import { useOrder } from "@/app/hooks/useOrder";
import AxiosAdapter from "@/app/infra/adapters/AxiosAdapter";
import OrderGateway from "@/app/infra/gateways/OrderGateway";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InputsPage({ params }: { params: { action: string } }) {
  const { selectedOrder } = useOrder();
  const [description, setDescription] = useState(params.action === "edit" ? selectedOrder?.current?.ds_pedido || '' : '');
  const [dtOrder, setDtOrder] = useState(params.action === "edit" ? selectedOrder?.current?.dt_pedido || '' : '');
  const [value, setValue] = useState(params.action === "edit" ? selectedOrder?.current?.vl_pedido || '' : '');
  const [idClient, setIdClient] = useState(params.action === "edit" ? selectedOrder?.current?.id_cliente || 0 : 0);
  const router = useRouter();

  async function handleSubmit() {
    if (params.action === "edit" && selectedOrder.current?.id) {
      const newOrder = await new EditOrder(new OrderGateway(new AxiosAdapter())).execute(selectedOrder.current?.id, description, dtOrder, value, idClient)
      setDescription("");
      setDtOrder("");
      setValue("");
      setIdClient(0);
      selectedOrder.current = null;
    } else if (params.action === "create") {
      const newOrder = await new AddOrder(new OrderGateway(new AxiosAdapter())).execute(description, dtOrder, value, idClient);
      setDescription("");
      setDtOrder("");
      setValue("");
      setIdClient(0);
      selectedOrder.current = null;
    }
    router.push("/screens/listPage/order")
  }

  return (
    <div className="flex flex-col   h-screen  w-screen  ">
      <div className="flex flex-1">
        <AsideMainPage />

        <main className="flex-1  h-screen w-screen  bg-mainPageBgColor ">
          <NavBar />
          <div>
            <div className="flex flex-col bg-asideBgColor w-full h-14 p-2 pl-3">
              <h3 className="text-3xl font-bold">Módulo Pedido</h3>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2 bg-gray-500">
              <div className="px-4 py-2">
                <label about="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrição</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" onChange={(e) => setDescription(e.target.value)} value={description} required />
              </div>
              <div className="px-4 py-2">
                <label about="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data do Pedido</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" onChange={(e) => setDtOrder(e.target.value)} value={dtOrder} required />
              </div>
              <div className="px-4 py-2">
                <label about="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valor</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" onChange={(e) => setValue(e.target.value)} value={value} required />
              </div>
              <div className="px-4 py-2">
                <label about="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID do Cliente</label>
                <input type="number" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" onChange={(e) => setIdClient(Number(e.target.value) || 0)} value={idClient} required />
              </div>
              <button type="submit" onClick={() => handleSubmit()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 m-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}