const { Component } = require("react");

class ArrayFruits extends Component{
  
     state={
        issub:false,
        text:"Subscribe",
        text1:"Subscribed"
     }
     CustSubscribe=()=>{
      this.setState({
         issub:!this.state.issub
      })

        }
     
        render(){
        return(
           <>
           <button onClick={this.CustSubscribe}>{this.state.issub}</button>
          
           </>
        )
    }
}
export default ArrayFruits