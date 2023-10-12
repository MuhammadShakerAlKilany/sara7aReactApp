import { Massage } from "./Massage";

export interface Reducer {
  isSignin: {
    isSignin: boolean;
  };
  massage: {
    massagesArr: Massage[];
    isLoading:boolean;
  };
}