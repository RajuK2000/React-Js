import { useState } from "react"


const Usestateex=()=>{
   
    const [count,setcount]=useState(10)

    const Change=(value,type)=>{
        if(type==="Increment"){
            setcount(count+value)
        }else if(type==="Decrement"){
            if(count>0){
            setcount(count-value)
            }
        }else{
            setcount(10)
        }
    }

    return (
        <>
        <h2>{count}</h2>
        <button onClick={()=>Change(10,"Increment")}>Increment</button>
        <button onClick={()=>Change(10,"Decrement")}>Decrement</button>
        <button onClick={()=>Change()}>Reset</button>
        </>
    )
}
export default Usestateex