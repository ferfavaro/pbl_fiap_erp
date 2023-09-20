"use client"
import AsideMainPage from "../../../components/asidemainPage/asideMainPage";
import NavBar from "../../../components/nav/navBar";
import { LayoutTemplateIcon, MenuIcon, MenuSquareIcon, PencilIcon, PlusCircleIcon, SearchIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect, useReducer } from "react";
import AxiosAdapter from "@/app/infra/adapters/AxiosAdapter";
import GetAllOrders from "@/app/application/usecases/GetAllOrders";
import OrderGateway from "@/app/infra/gateways/OrderGateway";
import Pedido from "@/app/domain/entities/Pedido";
import ListPage from "@/app/components/listPage/order/page";
import { useRouter } from "next/navigation";
import { useOrder } from "@/app/hooks/useOrder";
import DeleteOrder from "@/app/application/usecases/DeleteOrder";


export default function ListPageScreen() {
  const [clickedOrder, setClickedOrder] = useState<Pedido | null>(null);
  const { selectedOrder, orders, removeOrder } = useOrder();
  const router = useRouter();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  async function getAllOrders() {
    try {
      const ordersResponse = await new GetAllOrders(new OrderGateway(new AxiosAdapter())).execute();
      orders.current = ordersResponse;
      forceUpdate();
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = (order: Pedido) => {
    selectedOrder.current = order;
    setClickedOrder(order);
  };

  async function handleDelete() {
    if (selectedOrder.current?.id) {
      const deleteClient = await new DeleteOrder(new OrderGateway(new AxiosAdapter())).execute(selectedOrder.current?.id)
      removeOrder(selectedOrder.current?.id)
      selectedOrder.current = null;
      forceUpdate();
    }
  }

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div className="flex flex-col   h-screen  w-screen  ">
      <div className="flex flex-1">
        <AsideMainPage />
        <main className="flex-1  h-screen w-screen  bg-bgCardModules ">
          <NavBar />
          <div className="">
            <div className="flex flex-col bg-asideBgColor w-full h-14 p-2 pl-3">
              <h3 className="text-3xl font-bold">Módulo Pedido</h3>
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
                <Link href={`../../screens/inputsPage/order/create`}>
                  <PlusCircleIcon className="text-black" />
                </Link>
                <Link href={`../../screens/inputsPage/order/edit`}>
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
                  <th className="text-black text-left px-4 py-2">Data</th>
                  <th className="text-black text-left px-4 py-2">Valor</th>
                  <th className="text-black text-left px-4 py-2">ID do Cliente</th>
                </tr>
              </thead>
              <tbody>
                {orders.current?.map((order, index) => (
                  <tr
                    key={index}
                    onClick={() => handleClick(order)}
                    className={`cursor-pointer ${selectedOrder.current?.id === order.id ? 'bg-gray-500' : ''}`}
                  >
                    <td className="text-black px-4 py-2">{order.id}</td>
                    <td className="text-black px-4 py-2">{order.ds_pedido}</td>
                    <td className="text-black px-4 py-2">{order.dt_pedido}</td>
                    <td className="text-black px-4 py-2">{order.vl_pedido}</td>
                    <td className="text-black px-4 py-2">{order.id_cliente}</td>
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
