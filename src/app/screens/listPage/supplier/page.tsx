"use client"
import AsideMainPage from "../../../components/asidemainPage/asideMainPage";
import NavBar from "../../../components/nav/navBar";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import AxiosAdapter from "@/app/infra/adapters/AxiosAdapter";
import Pedido from "@/app/domain/entities/Pedido";
import SupplierGateway from "@/app/infra/gateways/SupplierGateway";
import GetAllSuppliers from "@/app/application/usecases/GetAllSuppliers";
import ListPage from "@/app/components/listPage/supplier/page";


export default function ListPageScreen() {
  const [suppliers, setSuppliers] = useState<Pedido[]>([]);

  async function getAllSuppliers() {
    try {
      const suppliers = await new GetAllSuppliers(new SupplierGateway(new AxiosAdapter())).execute();
      setSuppliers(suppliers);
    } catch (error) {
      console.log(error);
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
          <ListPage suppliers={suppliers} />
        </main>
      </div>
    </div>
  );
}
