"use client"
import AsideMainPage from "../../../components/asidemainPage/asideMainPage";
import NavBar from "../../../components/nav/navBar";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import GetAllProducts from "@/app/application/usecases/GetAllProducts";
import ProductGateway from "@/app/infra/gateways/ProductGateway";
import AxiosAdapter from "@/app/infra/adapters/AxiosAdapter";
import ProductProvider from "@/app/hooks/useProduct";
import Cliente from "@/app/domain/entities/Cliente";
import Funcionario from "@/app/domain/entities/Funcionario";
import ListPage from "@/app/components/listPage/employee/page";
import EmployeeGateway from "@/app/infra/gateways/EmployeeGateway";
import GetAllEmployees from "@/app/application/usecases/GetAllEmployees";


export default function ListPageScreen() {
  const [employees, setEmployees] = useState<Funcionario[]>([]);

  async function getAllEmployees() {
    try {
      const employees = await new GetAllEmployees(new EmployeeGateway(new AxiosAdapter())).execute();
      setEmployees(employees);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllEmployees();
  }, []);

  return (
    <div className="flex flex-col   h-screen  w-screen  ">
      <div className="flex flex-1">
        <AsideMainPage />
        <main className="flex-1  h-screen w-screen  bg-bgCardModules ">
          <NavBar />
          <ListPage employees={employees} />
        </main>
      </div>
    </div>
  );
}
