import { useState } from "react"

const Usestateex2=()=>{
    const [fruits,setfruits]=useState(["apple","mango"])

    const addfruit=()=>{
       const newfruit=[...fruits,"Banana"]
        setfruits(newfruit)
    }
    const remfruit=()=>{
        const removefruit=["fruits"]
        setfruits(removefruit)
    }
    
    return(
        <>
        <h2>{fruits}</h2>
        <h1 onClick={()=>addfruit()}>Addfruit</h1>
        <button onClick={()=>remfruit()}>removefruit</button>
        </>
    )

}
export default Usestateex2