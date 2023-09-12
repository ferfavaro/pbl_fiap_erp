"use client"
import AsideMainPage from "../../../components/asidemainPage/asideMainPage";
import NavBar from "../../../components/nav/navBar";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import GetAllProducts from "@/app/application/usecases/GetAllProducts";
import ProductGateway from "@/app/infra/gateways/ProductGateway";
import AxiosAdapter from "@/app/infra/adapters/AxiosAdapter";
import GetAllOrders from "@/app/application/usecases/GetAllOrders";
import OrderGateway from "@/app/infra/gateways/OrderGateway";
import Pedido from "@/app/domain/entities/Pedido";
import ListPage from "@/app/components/listPage/order/page";


export default function ListPageScreen() {
  const [orders, setOrders] = useState<Pedido[]>([]);

  async function getAllOrders() {
    try {
      const orders = await new GetAllOrders(new OrderGateway(new AxiosAdapter())).execute();
      setOrders(orders);
    } catch (error) {
      console.log(error);
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
          <ListPage orders={orders} />
        </main>
      </div>
    </div>
  );
}
