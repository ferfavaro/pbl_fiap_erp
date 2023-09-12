"use client"
import React, { ReactNode, createContext, useContext, useRef, useState } from 'react';
import Pedido from '../domain/entities/Pedido';

interface IProps {
  children: ReactNode;
}

interface OrderContextData {
  order: Pedido | null;
  selectedOrder: React.MutableRefObject<Pedido | undefined>
}

const OrderContext = createContext<OrderContextData>({} as OrderContextData);

export default function OrderProvider({ children }: IProps) {
  const selectedOrder = useRef<Pedido | undefined>();
  const [order, setOrder] = useState<Pedido | null>(null);

  return (
    <OrderContext.Provider value={{ order, selectedOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

export function useOrder() {
  return useContext(OrderContext);
}