import { useContext,useState} from "react"
import NavBar from "./NavBar"
import { Datashare} from "./navigationPath"
import "./styling.css"

const CartItems=()=>{

     
     const {cart, setcart,Bcolor}=useContext(Datashare);
     
     
      console.log(cart)

    
    
 // Function to remove an item from the cart
 const removeFromCart = (itemId) => {
    const updatedCart = cart.filter(item => {
        
       return item.id !== itemId
    })
    console.log('updatedCart: ', updatedCart);
       setcart(updatedCart)
    
};
console.log(cart);



    return(
    <div >
    <NavBar />
    <div className="main" style={{backgroundColor:Bcolor}}>
    { 
        cart.length > 0 ?
            cart.map(eachit => (
                <div key={eachit.id} className="main1">
                    <span className="cart">
                    <img src={eachit.thumbnail} height={100} width={100} alt="image"></img>
                    <span>{eachit.description}</span>
                    <button onClick={()=>removeFromCart(eachit.id)}>Remove</button>
                    </span>
                </div>
            ))
            
        :
        <>
        <h2>NO data</h2>
       
        </>
    }
    </div>
   
    
    
</div>


    )
}
export default CartItems