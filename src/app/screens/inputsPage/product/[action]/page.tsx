"use client"
import AddProduct from "@/app/application/usecases/AddProduct";
import EditProduct from "@/app/application/usecases/EditProduct";
import AsideMainPage from "@/app/components/asidemainPage/asideMainPage";
import NavBar from "@/app/components/nav/navBar";
import { useProduct } from "@/app/hooks/useProduct";
import AxiosAdapter from "@/app/infra/adapters/AxiosAdapter";
import ProductGateway from "@/app/infra/gateways/ProductGateway";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InputsPage({ params }: { params: { action: string } }) {
  const { selectedProduct } = useProduct();
  const [name, setName] = useState(params.action === "edit" ? selectedProduct?.current?.name || '' : '');
  const [price, setPrice] = useState(params.action === "edit" ? selectedProduct?.current?.price || '' : '');
  const [quantity, setQuantity] = useState(params.action === "edit" ? selectedProduct?.current?.quantity || 0 : 0);
  const router = useRouter();

  async function handleSubmit() {
    if (params.action === "edit" && selectedProduct.current?.id) {
      const newProduct = await new EditProduct(new ProductGateway(new AxiosAdapter())).execute(selectedProduct.current?.id, name, price, quantity)
      setName("");
      setPrice("");
      setQuantity(0);
      selectedProduct.current = null;
    } else if (params.action === "create") {
      const newProduct = await new AddProduct(new ProductGateway(new AxiosAdapter())).execute(name, price, quantity);
      setName("");
      setPrice("");
      setQuantity(0);
      selectedProduct.current = null;
    }
    router.push("/screens/listPage/product")
  }

  return (
    <div className="flex flex-col   h-screen  w-screen  ">
      <div className="flex flex-1">
        <AsideMainPage />

        <main className="flex-1  h-screen w-screen  bg-mainPageBgColor ">
          <NavBar />
          <div>
            <div className="flex flex-col bg-asideBgColor w-full h-14 p-2 pl-3">
              <h3 className="text-3xl font-bold">Módulo Produto</h3>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2 bg-gray-500">
              <div className="px-4 py-2">
                <label about="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" onChange={(e) => setName(e.target.value)} value={name} required />
              </div>
              <div className="px-4 py-2">
                <label about="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preço</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" onChange={(e) => setPrice(e.target.value)} value={price} required />
              </div>
              <div className="px-4 py-2">
                <label about="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantidade</label>
                <input type="number" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" onChange={(e) => setQuantity(Number(e.target.value) || 0)} value={quantity} required />
              </div>
              <button type="submit" onClick={() => handleSubmit()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 m-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}