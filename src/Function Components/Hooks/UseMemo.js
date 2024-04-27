import { useMemo, useState } from "react"


const UseMemoExam=()=>{

const [count,setcount]=useState(10)
const [age,setage]=useState(10)

 useMemo(()=>{
      
      for(let i=0;i<=2;i++){
    // console.log(i)              
      }
      console.log("Rendering...")

},[count])

const increceage=(()=>{
    setage(age+10)
})
const incrececount=(()=>{
    setcount(count+10)
})

    return(
        <>
        <h1>{count}</h1>
        <h1>{age}</h1>
        <button onClick={increceage}>increceage</button>
        <button onClick={incrececount}>incrececount</button>

        </>
    )
}
export default UseMemoExam