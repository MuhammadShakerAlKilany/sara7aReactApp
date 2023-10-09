import { ReactNode, createContext } from "react";

interface Props {
  children: ReactNode;
}
export const context = createContext({});
export default function Context({ children }: Props) {
  return <context.Provider value={{}}>{children}</context.Provider>;
}
