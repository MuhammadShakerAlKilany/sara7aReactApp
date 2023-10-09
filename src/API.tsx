import axios from 'axios'


const URL = "https://sara7aiti.onrender.com/api/v1"
export  function useAPI() {
    const API =  axios.create({baseURL:URL})
    
    return useAPI
}
export function useAPIAuthor(token:string|null = localStorage.getItem("token")) {
    
    if(token)return axios.create({baseURL:URL,headers:{Authorization:`Bearer ${token}`}})
    
    
    

}
