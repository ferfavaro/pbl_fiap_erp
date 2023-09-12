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
import ListPage from "@/app/components/listPage/product/page";


export default function ListPageScreen() {
  const [products, setProducts] = useState<Produto[]>([]);

  async function getAllProducts() {
    try {
      const products = await new GetAllProducts(new ProductGateway(new AxiosAdapter())).execute();
      setProducts(products);
    } catch (error) {
      console.log(error);
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
          <ListPage products={products} />
        </main>
      </div>
    </div>
  );
}
