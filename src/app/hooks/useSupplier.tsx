"use client"
import React, { ReactNode, createContext, useContext, useRef, useState } from 'react';
import Fornecedor from '../domain/entities/Fornecedor';

interface IProps {
  children: ReactNode;
}

interface SupplierContextData {
  supplier: Fornecedor | null;
  selectedSupplier: React.MutableRefObject<Fornecedor | null>
  suppliers: React.MutableRefObject<Fornecedor[] | null>;
  removeSupplier: (supplierId: number) => void;
}

const SupplierContext = createContext<SupplierContextData>({} as SupplierContextData);

export default function SupplierProvider({ children }: IProps) {
  const selectedSupplier = useRef<Fornecedor | null>(null);
  const [supplier, setSupplier] = useState<Fornecedor | null>(null);
  const suppliers = useRef<Fornecedor[]>([]);

  const removeSupplier = (supplierId: number) => {
    suppliers.current = suppliers.current?.filter((s) => s.id !== supplierId);
  };

  return (
    <SupplierContext.Provider value={{ supplier, suppliers, selectedSupplier, removeSupplier }}>
      {children}
    </SupplierContext.Provider>
  )
}

export function useSupplier() {
  return useContext(SupplierContext);
}