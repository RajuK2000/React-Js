import NavBar from "./NavBar"
import "./styling.css"

const Contact =()=>{
    return(
        <>
        <NavBar/>
        <h2>Contact me</h2>
        <p id="for">
        <form id="forms">
          <lable for="Uname">UserName : </lable>
          <input type="text" id="Uname"></input>
          <lable for="Email">Email : </lable>
          <input type="email" id="Email"></input>
          <lable for="pass">Password :  </lable>
          <input type="password" id="pass"></input>
          <input type="submit"></input>
        </form>
        </p>
        </>
    )
}
export default Contact