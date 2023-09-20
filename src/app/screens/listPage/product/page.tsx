"use client"
import AsideMainPage from "../../../components/asidemainPage/asideMainPage";
import NavBar from "../../../components/nav/navBar";
import { LayoutTemplateIcon, MenuIcon, MenuSquareIcon, PencilIcon, PlusCircleIcon, SearchIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import Produto from "@/app/domain/entities/Produto";
import React, { useState, useEffect, useReducer } from "react";
import GetAllProducts from "@/app/application/usecases/GetAllProducts";
import ProductGateway from "@/app/infra/gateways/ProductGateway";
import AxiosAdapter from "@/app/infra/adapters/AxiosAdapter";
import ProductProvider, { useProduct } from "@/app/hooks/useProduct";
import { useRouter } from "next/navigation";
import DeleteProduct from "@/app/application/usecases/DeleteProduct";


export default function ListPageScreen() {
  const [clickedProduct, setClickedProduct] = useState<Produto | null>(null);
  const { selectedProduct, products, removeProduct } = useProduct();
  const router = useRouter();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  async function getAllProducts() {
    try {
      const productsResponse = await new GetAllProducts(new ProductGateway(new AxiosAdapter())).execute();
      products.current = productsResponse;
      forceUpdate();
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = (product: Produto) => {
    selectedProduct.current = product;
    setClickedProduct(product);
  };

  async function handleDelete() {
    if (selectedProduct.current?.id) {
      const deleteClient = await new DeleteProduct(new ProductGateway(new AxiosAdapter())).execute(selectedProduct.current?.id)
      removeProduct(selectedProduct.current?.id)
      selectedProduct.current = null;
      forceUpdate();
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="flex flex-col   h-screen  w-screen  ">
      <div className="flex flex-1">
        <AsideMainPage />
        <main className="flex-1  h-screen w-screen  bg-bgCardModules ">
          <NavBar />
          <div className="">
            <div className="flex flex-col bg-asideBgColor w-full h-14 p-2 pl-3">
              <h3 className="text-3xl font-bold">Módulo Produto</h3>
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
                <Link href={`../../screens/inputsPage/product/create`}>
                  <PlusCircleIcon className="text-black" />
                </Link>
                <Link href={`../../screens/inputsPage/product/edit`}>
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
                  <th className="text-black text-left px-4 py-2">Valor</th>
                  <th className="text-black text-left px-4 py-2">Quantidade</th>
                </tr>
              </thead>
              <tbody>
                {products.current?.map((product, index) => (
                  <tr
                    key={index}
                    onClick={() => handleClick(product)}
                    className={`cursor-pointer ${selectedProduct.current?.id === product.id ? 'bg-gray-500' : ''}`}
                  >
                    <td className="text-black px-4 py-2">{product.id}</td>
                    <td className="text-black px-4 py-2">{product.name}</td>
                    <td className="text-black px-4 py-2">{product.price}</td>
                    <td className="text-black px-4 py-2">{product.quantity}</td>
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
