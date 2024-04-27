import { Link } from "react-router-dom";
import "./styling.css";
import { useContext } from "react";
import { Datashare } from "./navigationPath";


const NavBar=()=>{

  const {cart,Bcolor,BackColor}=useContext(Datashare);

    return(

        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid" style={{backgroundColor:Bcolor}}>

     <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav" style={{margin:20}}>
        <li className="nav-item" style={{margin:20}}>
         
          <Link to={"/"} className="text">Home</Link>
        </li>
        <li className="nav-item" style={{margin:20}}> 
         
          <Link to={"/contact"} className="text">Contact</Link>
        </li>
        <li className="nav-item" style={{margin:20}}> 
        <Link to={"*"} className="text">About</Link>
        </li>
        <li className="nav-item" style={{margin:20}}> 
        <Link to={"/CartItems" } className="text">Cart {cart.length}</Link>
        </li>
        <li className="nav-item" style={{margin:20}}> 
        <Link className="text" onClick={BackColor}>Theme</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    )
}
export default NavBar