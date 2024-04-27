import axios from "axios"
import { useEffect, useState } from "react"


const api="https://dummyjson.com/products"


const useAxios = (Url=api)=>{
    const [data,setdata]=useState([])
    useEffect(()=>{
      axios.get(Url)
      .then(responce=>{
        console.log('responce: ', responce);

        setdata(responce.data.products)
      })
    },[])
    return [data]
}
export default useAxios