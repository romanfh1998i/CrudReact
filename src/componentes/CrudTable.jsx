import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable=({data,setdataToedit,deleteData})=>{
    return(
        <div>
            <h3>Tabla de datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Universo</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                 {data.length===0 ? (<tr><td colSpan="3"></td>Sin Datos</tr>):(data.map((el) =>
                    <CrudTableRow key={el.id}el={el} setdataToedit={setdataToedit} deleteData={deleteData}/>))}
                </tbody>
            </table>
        </div>
    )
   
}
export default CrudTable;