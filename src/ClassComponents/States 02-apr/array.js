const { Component } = require("react")

class ArrayFruits extends Component{
  
     state={
        issub:false,
        text:"Subscribe",
        text1:"Subscribed",
        fruits:["apple","banana","mango"]
     }
     CustSubscribe=()=>{
      this.setState({
         issub:!this.state.issub
      })

        }
      addfruits=()=>{
         const newfruit=[this.setState,"newfruit"]
         this.setState({
           fruits:newfruit
         })
      }
       
     
        render(){
        return(
           <>
           <button onClick={this.CustSubscribe} style={{color : this.state.issub ? "red":"green"}}  >{this.state.issub ?this.state.text1:this.state.text}</button>
         
           {
            this.state.issub ?
         
            <h3> welcome user</h3>
               :
            <h3>Pleace Subscribe</h3>
            
           }
           <button onClick={this.setState.fruits}>Addfruits</button>
           {
           this.state.fruits
           }
           </>
           
           
        )
    }
}
export default ArrayFruits