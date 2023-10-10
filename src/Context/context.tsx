import { ReactNode, createContext, useState } from "react";

interface Props {
  children: ReactNode;
}
export const context = createContext<{isSignin?:boolean}>({});
export default function Context({ children }: Props) {
  let [isSignin, setIsSignin] = useState(
    localStorage.getItem("token") != undefined
  );
  return (
    <context.Provider value={{ isSignin }}>
      {children}
    </context.Provider>
  );
}
