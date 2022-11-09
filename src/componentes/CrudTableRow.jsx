
import React from "react";
const CrudTableRow=({el,setdataToedit,deleteData})=>{
    let{name, Universe,id}=el;
    return(
             <tr>
                        <td>{name}</td>
                        <td>{Universe}</td>
                        <td>
                            <button onClick={()=>setdataToedit(el)}> Editar</button>
                            <button onClick={()=>deleteData(id)}>Eliminar</button>
                        </td>
                    </tr>
        
    )
}
export default CrudTableRow;