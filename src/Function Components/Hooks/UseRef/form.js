
 import { useRef ,useState} from "react"
 import "./form.css"



const UncontroledForm=()=>{
const UserNameRef=useRef("")
const UserPasswordRef=useRef("")


const [UserNam,SetUserName]=useState([])
const [UserPasswor,setUserPassword]=useState([])

const [errorvisible,setErrorvisbile]=useState(false)
const [errorPas,seterrorPas]=useState(false)

const [data,setdata]=useState([])


const handlesubmit=(event)=>{
  event.preventDefault()
  
 const UserName=UserNameRef.current.value
const  UserPassword=UserPasswordRef.current.value
SetUserName(UserName)
setUserPassword(UserPassword)
console.log(data);


if( UserNam.length < 5  && UserPasswor.length < 6 ){
 setErrorvisbile(true)
  seterrorPas(true)
  
}else{
   const obj={name:UserName,Password:UserPassword}
  setdata([...data,obj])
}
console.log(data);
}

  return(
    <>
    <div id="F&T">
      
    <form id="form" onSubmit={handlesubmit}>
    <h2>Log In</h2>
      <label for="userN">UserName : </label>
      <input type="text" id="userN" ref={UserNameRef}></input><br></br>
      <label for="userP">Password : </label>
      <input type="password" id="userP" ref={UserPasswordRef}></input><br></br>
      {errorvisible ? "must above 5 Chars" :" "}<br></br>
      {errorPas ? "must above 5 Chars" :" "}<br></br>
      <input type="submit"></input>
    </form>
    
      <table id="tb">
        <tr>
          <th>Name</th>
          <th>Password</th>
        </tr>
        { 
     data.map((val)=>{  
    const {name,Password}=val
      return(
        <>
        <tr>
        <td>{name}</td>
        <td>{Password}</td>
        </tr>
        </>
      )   
     })
    }   
     </table>
      </div>
    </>
  )
}
export default UncontroledForm