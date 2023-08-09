"use client"
import React, { ReactNode, createContext, useContext, useRef, useState } from 'react';
import Produto from '../domain/entities/Produto';

interface IProps {
  children: ReactNode;
}

interface ProdutoContextData {
  produto: Produto | null;
  selectedProduct: React.MutableRefObject<Produto | undefined>
}

const ProductContext = createContext<ProdutoContextData>({} as ProdutoContextData);

export default function ProductProvider ({ children }: IProps) {
  const selectedProduct = useRef<Produto | undefined>();
  const [produto, setProduto] = useState<Produto | null>(null);

  return (
    <ProductContext.Provider value={{ produto, selectedProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

export function useProduct() {
  return useContext(ProductContext);
}