"use client"
import AsideMainPage from "../../../components/asidemainPage/asideMainPage";
import NavBar from "../../../components/nav/navBar";
import { LayoutTemplateIcon, MenuIcon, MenuSquareIcon, PencilIcon, PlusCircleIcon, SearchIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect, useReducer } from "react";
import AxiosAdapter from "@/app/infra/adapters/AxiosAdapter";
import Funcionario from "@/app/domain/entities/Funcionario";
import EmployeeGateway from "@/app/infra/gateways/EmployeeGateway";
import GetAllEmployees from "@/app/application/usecases/GetAllEmployees";
import { useEmployee } from "@/app/hooks/useEmployee";
import { useRouter } from "next/navigation";
import DeleteEmployee from "@/app/application/usecases/DeleteEmployee";

export default function ListPageScreen() {

  const [clickedEmployee, setClickedEmployee] = useState<Funcionario | null>(null);
  const { selectedEmployee, employees, removeEmployee } = useEmployee();
  const router = useRouter();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  async function getAllEmployees() {
    try {
      const employeesResponse = await new GetAllEmployees(new EmployeeGateway(new AxiosAdapter())).execute();
      employees.current = employeesResponse;
      forceUpdate();
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = (employee: Funcionario) => {
    selectedEmployee.current = employee;
    setClickedEmployee(employee);
  };

  async function handleDelete() {
    if (selectedEmployee.current?.id) {
      const deleteClient = await new DeleteEmployee(new EmployeeGateway(new AxiosAdapter())).execute(selectedEmployee.current?.id)
      removeEmployee(selectedEmployee.current?.id)
      selectedEmployee.current = null;
      forceUpdate();
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
          <div className="">
            <div className="flex flex-col bg-asideBgColor w-full h-14 p-2 pl-3">
              <h3 className="text-3xl font-bold">Módulo Funcionário</h3>
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
                <Link href={`../../screens/inputsPage/employee/create`}>
                  <PlusCircleIcon className="text-black" />
                </Link>
                <Link href={`../../screens/inputsPage/employee/edit`}>
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
                  <th className="text-black text-left px-4 py-2">Data de Admissão</th>
                  <th className="text-black text-left px-4 py-2">Salário</th>
                  <th className="text-black text-left px-4 py-2">Função</th>
                </tr>
              </thead>
              <tbody>
                {employees.current?.map((employee, index) => (
                  <tr
                    key={index}
                    onClick={() => handleClick(employee)}
                    className={`cursor-pointer ${selectedEmployee.current?.id === employee.id ? 'bg-gray-500' : ''}`}
                  >
                    <td className="text-black px-4 py-2">{employee.id}</td>
                    <td className="text-black px-4 py-2">{employee.nm_nome}</td>
                    <td className="text-black px-4 py-2">{employee.dt_admissao}</td>
                    <td className="text-black px-4 py-2">{employee.vl_salario}</td>
                    <td className="text-black px-4 py-2">{employee.ds_funcao}</td>
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
