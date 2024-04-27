import axios from "axios"
import NavBar from "./NavBar"
import { useContext, useEffect, useState } from "react"
import "./styling.css"
import { Datashare } from "./navigationPath"
import useAxios from "../Hooks/CustomHooks/useAxios"


    const HomeTab=()=>{
        const [data]=useAxios("https://dummyjson.com/products")
        console.log(data.products)
    
        const {AddCart,Bcolor}=useContext(Datashare)

        // const [data,setdata]=useState([])

       
  
//     useEffect( () => {
//         ProductList()
//     },[])
//  const ProductList= async ()=>{
//         try{
//         const result=await axios.get("https://dummyjson.com/products")
//         setdata(result.data.products)
        
//         }catch{
//             <h1>No products</h1>
//         }
//     }
   
    

    return(
        <>
        <NavBar/>
        <div id="main" style={{backgroundColor:Bcolor}}>
         {  
                 data.length>0
                 ?

                data.map(eachObj => {
                const {title,description,thumbnail,price,id} = eachObj
                 return( 
                
                   <div id="sub" key={id}>
                   <h3>{title}</h3> 
                   <h3>{description}</h3>
                   <img src={thumbnail} alt="imge" id="img1"></img>
                   <h3>Price : {price}</h3>
                   <button onClick={()=>AddCart(eachObj)}>Add Cart:</button>
                   </div>
                   
                   
                 )
            })
            :
            <h1>Loading....</h1>
            
         }
          </div> 
        </>
    )
}
export default HomeTab