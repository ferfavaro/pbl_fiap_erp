"use client"
import React, { ReactNode, createContext, useContext, useRef, useState } from 'react';
import Pedido from '../domain/entities/Pedido';

interface IProps {
  children: ReactNode;
}

interface OrderContextData {
  order: Pedido | null;
  orders: React.MutableRefObject<Pedido[] | null>;
  selectedOrder: React.MutableRefObject<Pedido | null>
  removeOrder: (orderId: number) => void;
}

const OrderContext = createContext<OrderContextData>({} as OrderContextData);

export default function OrderProvider({ children }: IProps) {
  const selectedOrder = useRef<Pedido | null>(null);
  const [order, setOrder] = useState<Pedido | null>(null);
  const orders = useRef<Pedido[]>([]);

  const removeOrder = (orderId: number) => {
    orders.current = orders.current?.filter((e) => e.id !== orderId);
  };

  return (
    <OrderContext.Provider value={{ order, orders, selectedOrder, removeOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

export function useOrder() {
  return useContext(OrderContext);
}