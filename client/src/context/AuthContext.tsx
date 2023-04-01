import { createContext, ReactNode, useContext } from "react";

type AuthContext = {
  admin: boolean;
  user: boolean | null;
  userName: string;
};

const Context = createContext({});

export function useAuth() {
  return useContext(Context) as AuthContext;
}

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  let admin = false;
  let user = true;
  let userName = "patrikzit@seznam.cz";
  return (
    <Context.Provider value={{ admin, user, userName }}>
      {children}
    </Context.Provider>
  );
}
