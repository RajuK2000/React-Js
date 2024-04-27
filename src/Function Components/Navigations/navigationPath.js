import { createContext, useState } from "react"
import CartItems from "./CartItems"
import Contact from "./ContactTab"
import HomeTab from "./Home"
import Invalid from "./InvalidTav"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Alert } from "bootstrap"


export const Datashare  = createContext();   //it is using to create globally we can use data and DataShare used to which data we can share its shows.

const NavPath=()=>{

    const [cart,setcart]=useState([]);
    // const [Bcolor,setBcolor]=useState("black")
    const [Bcolor,setBcolor]=useState("white");

    const BackColor=()=>{
        setBcolor("yellow")
    }

    const AddCart=(eachitems)=>{
       
       const result = cart.find((item)=>{
            return item.id===eachitems.id
        })
            if(result){
               alert("Item Already Exit")
            }else{
                setcart([...cart,eachitems])
            } 
    }
       // console.log(eachitems.id)
    
    // Cart and AddCart we use it globlly when we need using useContext Hook..
    return(
 
       <Datashare.Provider value={{cart,AddCart,setcart,BackColor,Bcolor}}>
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomeTab}></Route>
            <Route path="/contact" Component={Contact}></Route>
            <Route path="*" Component={Invalid}></Route>
            <Route path="/CartItems" Component={CartItems}></Route>
        </Routes>
        </BrowserRouter>
        </Datashare.Provider>
    )
}

export default NavPath

