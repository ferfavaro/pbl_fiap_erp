"use client"
import React, { ReactNode, createContext, useContext, useRef, useState } from 'react';
import Produto from '../domain/entities/Produto';

interface IProps {
  children: ReactNode;
}

interface ProdutoContextData {
  product: Produto | null;
  products: React.MutableRefObject<Produto[] | null>;
  selectedProduct: React.MutableRefObject<Produto | null>;
  removeProduct: (productId: number) => void;
}

const ProductContext = createContext<ProdutoContextData>({} as ProdutoContextData);

export default function ProductProvider({ children }: IProps) {
  const selectedProduct = useRef<Produto | null>(null);
  const [product, setProduct] = useState<Produto | null>(null);
  const products = useRef<Produto[]>([]);

  const removeProduct = (productId: number) => {
    products.current = products.current?.filter((e) => e.id !== productId);
  };

  return (
    <ProductContext.Provider value={{ product, products, selectedProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

export function useProduct() {
  return useContext(ProductContext);
}