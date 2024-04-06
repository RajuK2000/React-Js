
import { EmployeeData } from "./tabledata";
import { Tablerow } from "./tableRow";

function TableCustom (){
    return(
        <>
        <table>
            <tr>
                <th>name</th>
                <th>age</th>
                <th>salary</th>
                <th>Location</th>
            </tr>
            {
           EmployeeData.map((empdata)=>{
                return(
                   <Tablerow data={empdata} Ae={"Love"} jj={"ajakk"}/>
                )
           })
        }
        </table>
        </>
    )
}
export default TableCustom;