"use client"
import React, { ReactNode, createContext, useContext, useRef, useState } from 'react';

interface IProps {
  children: ReactNode;
}

interface UserContextData {
  user: { token: string } | null;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export default function UserProvider({ children }: IProps) {
  const [user, setUser] = useState<{ token: string } | null>(null);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext);
}