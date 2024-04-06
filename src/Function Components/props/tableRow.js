

export const Tablerow=(props)=>{
    console.log(props)
     const {data,Ae,jj}=props;
           return(
            <tr>
                {/* <td>{props.data.name}</td>
                <td>{props.data.age}</td>
                <td>{props.data.salary}</td>
                <td>{props.data.location}</td> */}
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.salary}</td>
                <td>{data.location}</td>
                <td>{Ae}</td>
                <td>{jj}</td>
            </tr>
           )
}