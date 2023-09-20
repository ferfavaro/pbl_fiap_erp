"use client"
import React, { ReactNode, createContext, useContext, useRef, useState } from 'react';
import Cliente from '../domain/entities/Cliente';

interface IProps {
  children: ReactNode;
}

interface ClientContextData {
  client: Cliente | null;
  clients: React.MutableRefObject<Cliente[] | null>;
  selectedClient: React.MutableRefObject<Cliente | null>;
  removeClient: (clientId: number) => void;
}

const ClientContext = createContext<ClientContextData>({} as ClientContextData);

export default function ClientProvider({ children }: IProps) {
  const selectedClient = useRef<Cliente | null>(null);
  const [client, setClient] = useState<Cliente | null>(null);
  const clients = useRef<Cliente[]>([]);

  const removeClient = (clientId: number) => {
    clients.current = clients.current?.filter((c) => c.id !== clientId);
  };

  return (
    <ClientContext.Provider value={{ client, clients, selectedClient, removeClient }}>
      {children}
    </ClientContext.Provider>
  )
}

export function useClient() {
  return useContext(ClientContext);
}