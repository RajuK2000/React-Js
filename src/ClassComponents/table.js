import { Component } from "react";


class CustomTable extends Component{
render(){
    return(
        <>
        <h2>Class Component</h2>
        <h3>Table</h3>
        <table>
        <tr>
          <th>SI.no</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        <tr>
          <td>1.</td>
          <td>Raj</td>
          <td>24</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>2.</td>
          <td>Ram</td>
          <td>25</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>3.</td>
          <td>Ani</td>
          <td>18</td>
          <td>Female</td>
        </tr>
      </table>
      </>
    )
}
}
export default CustomTable;