import axios from "axios";

const URL = "https://sara7aiti.onrender.com/api/v1";
export function useAPI() {
  const API = axios.create({ baseURL: URL });

  return API;
}
export function useAPIAuth(
  token: string | null = localStorage.getItem("token")
) {
  if (token){
    console.log(token)
    return axios.create({
      baseURL: URL,
      headers: { token: `${token}` },
    });}
}
