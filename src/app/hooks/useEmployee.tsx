"use client"
import React, { ReactNode, createContext, useContext, useRef, useState } from 'react';
import Funcionario from '../domain/entities/Funcionario';

interface IProps {
  children: ReactNode;
}

interface EmployeeContextData {
  employee: Funcionario | null;
  selectedEmployee: React.MutableRefObject<Funcionario | undefined>
}

const EmployeeContext = createContext<EmployeeContextData>({} as EmployeeContextData);

export default function EmployeeProvider({ children }: IProps) {
  const selectedEmployee = useRef<Funcionario | undefined>();
  const [employee, setEmployee] = useState<Funcionario | null>(null);

  return (
    <EmployeeContext.Provider value={{ employee, selectedEmployee }}>
      {children}
    </EmployeeContext.Provider>
  )
}

export function useEmployee() {
  return useContext(EmployeeContext);
}