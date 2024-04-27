import { useState } from "react"

const useCount= ()=>{

    const [count,setcount]=useState(0)

    const incrementcount=()=>{
        setcount(count+100)
    }
    const decrementcount=()=>{
        setcount(count-100)
    }
    const resetcount=()=>{
        setcount(0)
    }
    return [count,incrementcount,decrementcount,resetcount]
}
export default useCount