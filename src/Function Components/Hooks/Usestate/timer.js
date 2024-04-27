import { useEffect, useState } from "react"

const Timer=()=>{

   const [secounds,setcount]=useState(0)
   const [Msecounds,Mssetcount]=useState(0)
   // useEffect(()=>{
   //    timer()
   // },[])

   const starttimer=()=>{
     setInterval(()=>{
        setcount((prevtime)=>prevtime+1)
     },1000)

     
   }
   const startsecounds=()=>{
      setInterval(()=>{
         Mssetcount((prevtime)=>prevtime+1)
      },100)
      
    }
    const timer=()=>{
    startsecounds()
    starttimer()
    
    }

    return(
     <>
     <h1 style={{color:secounds<=10 ? "red" : "green"}}>{secounds}:{Msecounds}</h1>
     <button onClick={()=>timer()}>Start</button>
     {/* <button onClick={()=>stoptimer()}>Stop</button> */}
     </>
    )
}
export default Timer