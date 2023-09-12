"use client"
import { LayoutTemplateIcon, MenuIcon, MenuSquareIcon, PencilIcon, PlusCircleIcon, SearchIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import Link from 'next/link';
import { useEmployee } from "@/app/hooks/useEmployee";
import Funcionario from "@/app/domain/entities/Funcionario";

interface ListProps {
  employees: Funcionario[];
}

const ListPage: React.FC<ListProps> = ({ employees }) => {
  const [clickedEmployee, setClickedEmployee] = useState<Funcionario | null>(null);
  const { selectedEmployee } = useEmployee();

  const handleClick = (employee: Funcionario) => {
    selectedEmployee.current = employee;
    console.log(selectedEmployee.current);
    setClickedEmployee(employee);
  };

  return (
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
          <Link href={`../../screens/inputsPage/employee`}>
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
            <th className="text-black text-left px-4 py-2">Data de Admissão</th>
            <th className="text-black text-left px-4 py-2">Salário</th>
            <th className="text-black text-left px-4 py-2">Função</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr
              key={index}
              onClick={() => handleClick(employee)}
              className={`cursor-pointer ${selectedEmployee === employee ? 'bg-gray-500' : ''
                }`}
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
  );
}

export default ListPage;
