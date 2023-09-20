"use client"
import { LayoutTemplateIcon, MenuIcon, MenuSquareIcon, PencilIcon, PlusCircleIcon, SearchIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import Link from 'next/link';
import { useOrder } from "@/app/hooks/useOrder";
import Pedido from "@/app/domain/entities/Pedido";

interface ListProps {
  orders: Pedido[];
}

const ListPage: React.FC<ListProps> = ({ orders }) => {
  const [clickedOrder, setClickedOrder] = useState<Pedido | null>(null);
  const { selectedOrder } = useOrder();

  const handleClick = (order: Pedido) => {
    selectedOrder.current = order;
    setClickedOrder(order);
  };

  return (
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
          <Link href={`../../screens/inputsPage/order`}>
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
            <th className="text-black text-left px-4 py-2">Data</th>
            <th className="text-black text-left px-4 py-2">Valor</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={index}
              onClick={() => handleClick(order)}
              className={`cursor-pointer ${selectedOrder === order ? 'bg-gray-500' : ''
                }`}
            >
              <td className="text-black px-4 py-2">{order.id}</td>
              <td className="text-black px-4 py-2">{order.ds_pedido}</td>
              <td className="text-black px-4 py-2">{order.dt_pedido}</td>
              <td className="text-black px-4 py-2">{order.vl_pedido}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListPage;
