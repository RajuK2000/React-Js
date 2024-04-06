import { Component } from "react";


class CusForms extends Component{
    render(){
        return(
            <>
            <h3>Forms</h3>
            <form>
                <label for="Fname">FName : </label>
                <input type="text" id="Fname"></input><br></br>
                <label for="Lname">LName : </label>
                <input type="text" id="Lname"></input><br></br>
                <input type="submit"></input>
            </form>
            </>
        )
    }
}

export default CusForms;