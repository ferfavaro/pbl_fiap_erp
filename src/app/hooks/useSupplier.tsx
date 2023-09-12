"use client"
import React, { ReactNode, createContext, useContext, useRef, useState } from 'react';
import Fornecedor from '../domain/entities/Fornecedor';

interface IProps {
  children: ReactNode;
}

interface SupplierContextData {
  supplier: Fornecedor | null;
  selectedSupplier: React.MutableRefObject<Fornecedor | undefined>
}

const SupplierContext = createContext<SupplierContextData>({} as SupplierContextData);

export default function SupplierProvider({ children }: IProps) {
  const selectedSupplier = useRef<Fornecedor | undefined>();
  const [supplier, setSupplier] = useState<Fornecedor | null>(null);

  return (
    <SupplierContext.Provider value={{ supplier, selectedSupplier }}>
      {children}
    </SupplierContext.Provider>
  )
}

export function useSupplier() {
  return useContext(SupplierContext);
}