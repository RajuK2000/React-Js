
import './App.css';

import CustomTable from './ClassComponents/table.js';
import CustImag from './ClassComponents/image.js';
import Clist from './ClassComponents/lists.js';
import CusForms from './ClassComponents/Cform.js';

import Forms from './Function Components/form.js';
import Fntable from './Function Components/table.js';
import Fnimage from './Function Components/image.js';
import Fnlist from './Function Components/list.js';
import TableCustom from './Function Components/props/table.js';
import Btn from './Function Components/props/simplebutton/button.js';

//import CustCurosel from './Styling React app/Navbar.js';
//import CardExample from './Styling React app/Images.js';
//import BasicExample from './Styling React app/toast.js';
//import StaticExample from './Styling React app/models.js';
// import ArrayFruits from './ClassComponents/States 02-apr/array.js'; 


var App=(()=>{
    return(
       <>
       {/* <CustCurosel/>
       <CardExample/>
       <div id="exple">
       <BasicExample/>
       <StaticExample/>
       </div> */}
       {/* <ArrayFruits/> */}

       <div id='Compo'>
        <span>
       <Fntable/>
       <Forms/>
       <Fnimage/>
       <Fnlist/>
       </span>
    
       <span>
       <CustomTable/>
       <CusForms/>
       <CustImag/>
       <Clist/>
       </span>
       </div>
        
       </>
    )
})
export default App;