import axios  from "axios";
import { Component } from "react";
import "./apicalls.css";

class ProductList extends Component{

  state={
    products:[],
    filteredProducts:[]
}
componentDidMount(){
    this.fetchdata()
  
}
 fetchdata=async()=>{
const result= await axios.get("https://dummyjson.com/products")
 const result1 = result.data.products.map((val)=>{
  const data={...val,count:0,totalprice:0}
  return data
 })
this.setState({
    products : result1
  })
   console.log(result1)
}


   addCount = (event)=>{
    const result=this.state.products.map((value)=>{
      if(event==value.id){
        value.count+=1
        value.totalprice=value.count*value.price
        return value
      }
      else{
        return value
      }
    })
    this.setState(
        {
            products:result
        }
    )
   }
   removeCount = (remove)=>{
    const result1=this.state.products.map((remvalue)=>{
      if(remvalue.count>0){
        
      if(remove==remvalue.id){
        remvalue.count-=1
        remvalue.totalprice=remvalue.count*remvalue.price
        return remvalue
      }else{
        return remvalue
      } 
    }
    else{
      return remvalue
    }
    })
    this.setState(
        {
            products: result1
        }
    )
   }
   resetCount=(reset)=>{
    const result2=this.state.products.map(resvalue=>{
      if(reset===resvalue.id){
        resvalue.count=0
        resvalue.totalprice=resvalue.count*resvalue.price

        return resvalue

      }
      else{
        return resvalue
      }
    })
    this.setState(
      {
        products:result2
      }
    )
   }
   deleteCard=(del)=>{
    const result3=this.state.products.filter(delvalue=>{
    return del!=delvalue.id
    })
    this.setState({
      products:result3
    })
   } 
   LtH=()=>{
      const result4=this.state.products.sort((a,b)=>a.price-b.price)
      this.setState({
      products:result4
     })
   }
   HtL=()=>{
    const result5=this.state.products.sort((a,b)=>b.price-a.price)
    this.setState({
      products:result5
    })
   }
   filtered=()=>{
     const filteredProduct = this.state.products.filter(product => product.price >= 100 && product.price <= 500)
     this.setState({
      products : filteredProduct
     })
   }
   filtered11=()=>{
    const filteredProduct = this.state.products.filter(product => product.price >= 500 && product.price <= 1500)
    this.setState({
     products : filteredProduct
    })
  }
  totalprices=()=>{
    const prices=this.state.products.reduce((a,b)=>a+b.totalprice,0)
     return prices
    }
  
  

    render(){
        return(  
          <>
          <div id="filters">
                <button onClick={()=> this.LtH()}>Low to High</button>
                <button onClick={()=> this.HtL()}>High to Low</button>
                <button onClick={()=> this.filtered()}>100 to 500</button>
                <button onClick={()=> this.filtered11()}>500 to 1500</button><br></br>
                </div>
                <button id="btn">Total price : ₹ {this.totalprices()}</button>
         <div id="list">
        
         {
          this.state.products.map(eachObj=>{
            const {title,description,thumbnail,totalprice,count,price} = eachObj
            return(
          <div id="card">
              
              <h3>{title}</h3>
              <h3>{description}</h3>
              <img src={thumbnail} alt="img" width={300} height={200}></img>
              <h3>₹{price}</h3>

              <div>
              <button>Total: ₹{totalprice}</button>
              </div>
              <button onClick={()=> this.addCount(eachObj.id)}>+</button>
              <button> Count: {count} </button>
              <button onClick={()=> this.removeCount(eachObj.id)}>-</button><br></br>
              <button onClick={()=> this.resetCount(eachObj.id)}>Reset</button><br></br>
              <button onClick={()=>this.deleteCard(eachObj.id)}>Delete Card</button>
            </div>
            )
          })
          
         }
        
        </div>
           
         </> 
        )
    }
}
export default ProductList