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
        <a onClick={() => router.push("/screens/inputsPage/client")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Cadastrar usuário</a>
        <a className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Remover usuário</a>
        <a className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Editar dados do usuário</a>
        <a className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Lista de usuários</a>
      </div>

      <div className="flex flex-col bg-bgCardModules p-2 rounded-xl">
        <h3 className=" text-xl text-black mb-5 font-bold">
          Estoque
        </h3>
        <a className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md" onClick={() => router.push("/screens/listPage/product")}> Verificar Estoque</a>
        <a className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Gráfico de Entrada/Saída</a>
        <a onClick={() => router.push("/screens/inputsPage/product")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Adicionar Produto</a>
        <a onClick={() => router.push("/screens/listPage/product")} className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Remover Produto</a>
      </div>

      <div className="flex flex-col bg-bgCardModules p-2 rounded-xl">
        <h3 className=" text-xl text-black mb-5 font-bold">
          Funcionário
        </h3>
        <a className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Cadastrar Funcionário</a>
        <a className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Remover Funcionário</a>
        <a className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Editar Dados do Funcionário</a>
        <a className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Ver Funcionários</a>
      </div>


      <div className="flex flex-col bg-bgCardModules p-2 rounded-xl">
        <h3 className=" text-xl text-black mb-5 font-bold">
          Pedido
        </h3>
        <a className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Cadastrar Pedido</a>
        <a className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Remover Pedido</a>
        <a className="text-base text-black mb-4 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Editar Pedido</a>
        <a className="text-base text-black mb-1 font-semibold pl-1 h-8 bg-mainPageBgColor rounded-md"> Ver Pedidos</a>
      </div>
    </div>
  )
}