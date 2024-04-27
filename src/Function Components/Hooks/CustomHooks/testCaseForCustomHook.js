import useAxios from "./useAxios"
import useCount from "./useCount"


const TestCase=()=>{
    const [count,incrementcount,decrementcount]=useCount()
    const [data]=useAxios()
    return(
         <>
        {/* // <h1>{count}</h1>
        // <button onClick={incrementcount}>Increment C</button>
        // <button onClick={decrementcount}>decrement C</button>
        // { */}
            {/* data.map(result=>{
             const {id}=result
             <>
             <h1>{id}</h1>
             </>
             })
        } */}
        
         </>
    )
}
export default TestCase