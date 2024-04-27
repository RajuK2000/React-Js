import { useNavigate } from "react-router-dom"
import NavBar from "./NavBar"

const Invalid=()=>{
    const logIn=useNavigate()
 
    const Back=()=>{
       logIn("/")
    }
    return(
        <>
        <NavBar/>
        <p>Loading Data</p>
        <button onClick={Back}>Back to Home</button>
        </>
    )
}
export default Invalid