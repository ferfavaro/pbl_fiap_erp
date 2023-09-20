"use client"
import AddEmployee from "@/app/application/usecases/AddEmployee";
import EditEmployee from "@/app/application/usecases/EditEmployee";
import AsideMainPage from "@/app/components/asidemainPage/asideMainPage";
import NavBar from "@/app/components/nav/navBar";
import { useEmployee } from "@/app/hooks/useEmployee";
import AxiosAdapter from "@/app/infra/adapters/AxiosAdapter";
import EmployeeGateway from "@/app/infra/gateways/EmployeeGateway";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InputsPage({ params }: { params: { action: string } }) {
  const { selectedEmployee } = useEmployee();
  const [name, setName] = useState(params.action === "edit" ? selectedEmployee?.current?.nm_nome || '' : '');
  const [role, setRole] = useState(params.action === "edit" ? selectedEmployee?.current?.ds_funcao || '' : '');
  const [dtAdmission, setDtAdmission] = useState(params.action === "edit" ? selectedEmployee?.current?.dt_admissao || '' : '');
  const [salary, setSalary] = useState(params.action === "edit" ? selectedEmployee?.current?.vl_salario || '' : '');
  const router = useRouter();

  async function handleSubmit() {
    if (params.action === "edit" && selectedEmployee.current?.id) {
      const newEmployee = await new EditEmployee(new EmployeeGateway(new AxiosAdapter())).execute(selectedEmployee.current?.id, name, dtAdmission, salary, role)
      setName("");
      setDtAdmission("");
      setSalary("");
      setRole("");
      selectedEmployee.current = null;
    } else if (params.action === "create") {
      const newEmployee = await new AddEmployee(new EmployeeGateway(new AxiosAdapter())).execute(name, dtAdmission, salary, role);
      setName("");
      setDtAdmission("");
      setSalary("");
      setRole("");
      selectedEmployee.current = null;
    }
    router.push("/screens/listPage/employee")
  }

  return (
    <div className="flex flex-col   h-screen  w-screen  ">
      <div className="flex flex-1">
        <AsideMainPage />

        <main className="flex-1  h-screen w-screen  bg-mainPageBgColor ">
          <NavBar />
          <div>
            <div className="flex flex-col bg-asideBgColor w-full h-14 p-2 pl-3">
              <h3 className="text-3xl font-bold">Módulo Funcionário</h3>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2 bg-gray-500">
              <div className="px-4 py-2">
                <label about="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" onChange={(e) => setName(e.target.value)} value={name} required />
              </div>
              <div className="px-4 py-2">
                <label about="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data de Admissão</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" onChange={(e) => setDtAdmission(e.target.value)} value={dtAdmission} required />
              </div>
              <div className="px-4 py-2">
                <label about="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salário</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" onChange={(e) => setSalary(e.target.value)} value={salary} required />
              </div>
              <div className="px-4 py-2">
                <label about="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Função</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" onChange={(e) => setRole(e.target.value)} value={role} required />
              </div>
              <button type="submit" onClick={() => handleSubmit()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 m-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}