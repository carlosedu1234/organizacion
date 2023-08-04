import React from "react";
import "./equipos.css"
import { listaEquiPlantilla } from "../../Datos/datosEquipo";
function Equipos({setdato}) {
  
  return (
    <>
    <label>Equipo</label>
    <select className="conteiner-select" onChange={(datos)=>setdato(datos.target.value)}>
      <option value="" defaultValue="" hidden>Elejir Equipo</option>
      {listaEquiPlantilla.map((equipo, index) => (<option key={index} >{equipo.titulo}</option>))}
    </select>
    </>
  );
}

export default Equipos;
