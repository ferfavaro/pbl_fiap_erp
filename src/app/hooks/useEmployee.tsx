"use client"
import React, { ReactNode, createContext, useContext, useRef, useState } from 'react';
import Funcionario from '../domain/entities/Funcionario';

interface IProps {
  children: ReactNode;
}

interface EmployeeContextData {
  employee: Funcionario | null;
  employees: React.MutableRefObject<Funcionario[] | null>;
  selectedEmployee: React.MutableRefObject<Funcionario | null>
  removeEmployee: (employeeId: number) => void;
}

const EmployeeContext = createContext<EmployeeContextData>({} as EmployeeContextData);

export default function EmployeeProvider({ children }: IProps) {
  const selectedEmployee = useRef<Funcionario | null>(null);
  const [employee, setEmployee] = useState<Funcionario | null>(null);
  const employees = useRef<Funcionario[]>([]);

  const removeEmployee = (employeeId: number) => {
    employees.current = employees.current?.filter((e) => e.id !== employeeId);
  };

  return (
    <EmployeeContext.Provider value={{ employee, employees, selectedEmployee, removeEmployee }}>
      {children}
    </EmployeeContext.Provider>
  )
}

export function useEmployee() {
  return useContext(EmployeeContext);
}