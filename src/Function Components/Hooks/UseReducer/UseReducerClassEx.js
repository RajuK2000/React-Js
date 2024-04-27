import { useReducer } from "react"


const reducerFunction=(state,action)=>{
    switch(action.type){
        case "IncrementAge":
            return {...state,age:state.age+2}
        case "DecrementAge":
            return {...state,age:state.age-2}
        case "IncrementSal":
            return {...state,sal:state.sal+20000}
        case "marrialStatus":
            return {...state,marrial:"Yes"}
        case "Todo":
            return {...state,todo:[...state.todo,"new todo"]}
        default :
            return state
    }
        
    
}

const initialState={
    name:"Raju",
    age:23,
    sal:30000,
    count:25,
    marrial:"NO",
    todo:[]
}
const UseReducerEx1=()=>{

    const [currentValue,dispatchFunction]=useReducer(reducerFunction,initialState)
    console.log('currentValue: ', currentValue);

    const IncreAge=()=>{
        const action={
            type:"IncrementAge"
        }
        dispatchFunction(action)
    }
    const DecreAge=()=>{
        const action={
            type:"DecrementAge"
        }
        dispatchFunction(action)
    }
    const IncreSal=()=>{
        const action={
            type:"IncrementSal"
        }
        dispatchFunction(action)
    }
    const MarStatus=()=>{
        const action={
            type:"marrialStatus"
        }
        dispatchFunction(action)
    }
    const AddTodo=()=>{
        const action={
            type:"Todo"
        }
        dispatchFunction(action)
    }

    return(
        <>
        <h2>{currentValue.age}</h2>
        <h1>{currentValue.sal}</h1>
        <h1>{currentValue.marrial}</h1>
        <h1>{currentValue.todo}</h1>
        <button onClick={IncreAge}>Increment Age</button>
        <button onClick={DecreAge}>Decrement Age</button>
        <button onClick={IncreSal}>Increment salary</button>
        <button onClick={MarStatus}>Marial status</button>
        <button onClick={AddTodo}>Add Todo</button>
        </>
    )
}
export default UseReducerEx1