import { ReactNode, createContext, useState } from "react";

interface Props {
  children: ReactNode;
}
export const context = createContext<{isSignin?:boolean,setIsSignin?:React.Dispatch<React.SetStateAction<boolean>>}>({});
export default function Context({ children }: Props) {
  let [isSignin, setIsSignin] = useState(
    localStorage.getItem("token") != undefined
  );
  return (
    <context.Provider value={{ isSignin ,setIsSignin}}>
      {children}
    </context.Provider>
  );
}
