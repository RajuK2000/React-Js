import { useEffect, useState } from "react"



const MouseMove=()=>{

  useEffect(()=>{
  Fun()
  return()=>{
    window.removeEventListener("mousemove",()=>{  //Retrn is stoping the memory leacage
        setX(0)
        setY(0)
    })
  }
  },[])

  const [X,setX]=useState(0)
  const [Y,setY]=useState(0)

  const Fun=()=>{
    window.addEventListener("mousemove",(event)=>{
        setX(event.screenX)
        setY(event.screenY)
       console.log(event)
    })
  }

    return(
    <>
    <p>"Horizontal mouse move":{X}</p>
    <p>"vertical mouse move" :{Y}</p>
    </>
    )
}
export default MouseMove