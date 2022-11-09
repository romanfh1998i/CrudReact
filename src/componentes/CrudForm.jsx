import { useEffect, useState } from "react";
import React from "react";
const initialForm={
    name:"",
    Universe:"",
    id:null,

}

const CrudForm=({createData,updateData,dataToedit,setdataToedit})=>{
    const [form,setForm]=useState(initialForm);
    useEffect(()=>{if(dataToedit){setForm(dataToedit)}
    else{
        setForm(initialForm);
    }}
    ,[dataToedit])
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!form.name|| !form.Universe){
            alert("Datos incompletos");
            return;

        }
        if(form.id===null){
            createData(form);
    }else{
        updateData(form);
    }
    handleReset();
}
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    }
    const handleReset=(e)=>{
        setForm(initialForm);
        setdataToedit(null);
    }
    return(
        <div>
            <h3>{dataToedit?"Editar":"Agregar"}
            </h3>
        <form onSubmit={handleSubmit}>
            <input type="text"name="name"placeholder="nombre" onChange={handleChange} value={form.name}/>
            <input type="text"name="Universe"placeholder="Universo" onChange={handleChange} value={form.Universe}/>
            <input type="submit" value ="Enviar"/>
            <input type="reset" value="Limpiar" onClick={handleReset}/>
            </form>
        </div>
    )
}
export default CrudForm;