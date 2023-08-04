import React from "react";
import "./equipos.css"
function Equipos({setdato}) {
  const listaEquipos = [
    "Programacion",
    "Front-end",
    "Data cience",
    "Devops",
    "Ux y Diseños",
    "Movil",
    "Innovacion y gestion",
  ];
  return (
    <>
    <label>Equipo</label>
    <select className="conteiner-select" onChange={(datos)=>setdato(datos.target.value)}>
      <option value="" defaultValue="" hidden>Elejir Equipo</option>
      {listaEquipos.map((equipo, index) => (<option key={index} >{equipo}</option>))}
    </select>
    </>
  );
}

export default Equipos;
