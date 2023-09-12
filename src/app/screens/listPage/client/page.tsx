"use client"
import AsideMainPage from "../../../components/asidemainPage/asideMainPage";
import NavBar from "../../../components/nav/navBar";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import Produto from "@/app/domain/entities/Produto";
import React, { useState, useEffect } from "react";
import GetAllProducts from "@/app/application/usecases/GetAllProducts";
import ProductGateway from "@/app/infra/gateways/ProductGateway";
import AxiosAdapter from "@/app/infra/adapters/AxiosAdapter";
import ProductProvider from "@/app/hooks/useProduct";
import ListPage from "@/app/components/listPage/client/page";
import Cliente from "@/app/domain/entities/Cliente";


export default function ListPageScreen() {
  const [clients, setClients] = useState<Cliente[]>([]);

  async function getAllClients() {
    try {
      const products = await new GetAllProducts(new ProductGateway(new AxiosAdapter())).execute();
      setClients(clients);
    } catch (error) {
      console.log(error);
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
          <ListPage clients={clients} />
        </main>
      </div>
    </div>
  );
}
