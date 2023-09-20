"use client"
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()

  return (
    <div className="grid grid-cols-3 grid-rows-2 w-auto h-3/4 items-center	ml-6 mr-6 mt-8 gap-10">
      <div className="flex flex-col bg-bgCardModules p-2 rounded-xl">
        <h3 className=" text-xl text-black mb-5 font-bold">
          Cliente/colaborador
        </h3>
        <a onClick={() => router.push("/screens/inputsPage/client/create")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Cadastrar Cliente</a>
        <a onClick={() => router.push("/screens/listPage/client")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Remover Cliente</a>
        <a onClick={() => router.push("/screens/listPage/client")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Editar dados do Cliente</a>
        <a onClick={() => router.push("/screens/listPage/client")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Lista de Clientes</a>
      </div>

      <div className="flex flex-col bg-bgCardModules p-2 rounded-xl">
        <h3 className=" text-xl text-black mb-5 font-bold">
          Estoque
        </h3>
        <a className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md" onClick={() => router.push("/screens/listPage/product")}> Verificar Estoque</a>
        <a onClick={() => router.push("/screens/listPage/product")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Editar Produto</a>
        <a onClick={() => router.push("/screens/inputsPage/product/create")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Adicionar Produto</a>
        <a onClick={() => router.push("/screens/listPage/product")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Remover Produto</a>
      </div>

      <div className="flex flex-col bg-bgCardModules p-2 rounded-xl">
        <h3 className=" text-xl text-black mb-5 font-bold">
          Funcionário
        </h3>
        <a onClick={() => router.push("/screens/inputsPage/employee/create")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Cadastrar Funcionário</a>
        <a onClick={() => router.push("/screens/listPage/employee")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Remover Funcionário</a>
        <a onClick={() => router.push("/screens/listPage/employee")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Editar Dados do Funcionário</a>
        <a onClick={() => router.push("/screens/listPage/employee")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Ver Funcionários</a>
      </div>

      <div className="flex flex-col bg-bgCardModules p-2 rounded-xl">
        <h3 className=" text-xl text-black mb-5 font-bold">
          Fornecedor
        </h3>
        <a onClick={() => router.push("/screens/inputsPage/supplier/create")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Cadastrar Fornecedor</a>
        <a onClick={() => router.push("/screens/listPage/supplier")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Remover Fornecedor</a>
        <a onClick={() => router.push("/screens/listPage/supplier")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Editar Dados do Fornecedor</a>
        <a onClick={() => router.push("/screens/listPage/supplier")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Ver Fornecedor</a>
      </div>


      <div className="flex flex-col bg-bgCardModules p-2 rounded-xl">
        <h3 className=" text-xl text-black mb-5 font-bold">
          Pedido
        </h3>
        <a onClick={() => router.push("/screens/inputsPage/order/create")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Cadastrar Pedido</a>
        <a onClick={() => router.push("/screens/listPage/order")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Remover Pedido</a>
        <a onClick={() => router.push("/screens/listPage/order")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Editar Pedido</a>
        <a onClick={() => router.push("/screens/listPage/order")} className="text-base text-black mb-1 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Ver Pedidos</a>
      </div>
    </div>
  )
}