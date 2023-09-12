"use client"
import React, { ReactNode, createContext, useContext, useRef, useState } from 'react';
import Cliente from '../domain/entities/Cliente';

interface IProps {
  children: ReactNode;
}

interface ClientContextData {
  client: Cliente | null;
  selectedClient: React.MutableRefObject<Cliente | undefined>
}

const ClientContext = createContext<ClientContextData>({} as ClientContextData);

export default function ClientProvider({ children }: IProps) {
  const selectedClient = useRef<Cliente | undefined>();
  const [client, setClient] = useState<Cliente | null>(null);

  return (
    <ClientContext.Provider value={{ client, selectedClient }}>
      {children}
    </ClientContext.Provider>
  )
}

export function useClient() {
  return useContext(ClientContext);
}