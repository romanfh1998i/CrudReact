import React from "react";
import CrudForm from "./CrudForm";
import { useEffect, useState } from "react";
import CrudTable from "./CrudTable";
const initialDb=[
    {
    id:1,
    name:"Batman",
    Universe:"DC"
    },
    {
    id:2,
    name:"Superman",
    Universe:"DC"
    },
    {
        id:3,
        name:"Iron man",
        Universe:"Marvel"
        },
        {
            id:4,
            name:"Spiderman",
            Universe:"Marvel"
            }
];
const CrudApp=()=>{
    const [db,setDb]=useState(initialDb);
    const[dataToedit,setdataToedit]=useState(null);
    const createData=(data)=>{
        data.id=Date.now();
       // console.log(data);
        setDb([...db,data])
    };
    const updateData=(data)=>{
        let newData=db.map(el=>el.id===data.id?data:el);
        setDb(newData);
    };
    const deleteData=(id)=>{
        let isDelete=window.confirm(`Estas Seguro de eliminar el registro con el id '${id}' ?`);
        if(isDelete){
            let newData=db.filter(el=>el.id!==id);
            setDb(newData);
        }else{
            return;
        }
    };
    return(
        <div>
            <h2>Crud App</h2>
            <article className="grid-1-2">
                </article>
        <CrudForm createData={createData} updateData={updateData}dataToedit={dataToedit}setdataToedit={setdataToedit}/>
        <CrudTable data={db} setdataToedit={setdataToedit} deleteData={deleteData}/>
        </div>
    )


}

export default CrudApp;