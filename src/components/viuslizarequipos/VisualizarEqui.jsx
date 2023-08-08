import React, { useState } from 'react'
import hexToRgba from 'hex-to-rgba';
import "./visualizarequi.css"
import Colaborador from '../colaborador/Colaborador';
function VisualizarEqui({colaborador,equipos,eliminarRegistro}) {
    const {titulo,colorFondoS}=equipos;
    const [color,setColor]=useState(colorFondoS);
    const colorFondo=hexToRgba(color,0.4)

    const cambioColor=(color)=>{
    setColor(color.target.value);     
  
    }
  return (
    <>
   {colaborador.length> 0 &&
    <section className="conteiner" style={{backgroundColor:colorFondo}}>
        <input className="posicion__color" type="color" value={color} onChange={cambioColor}/>
      
        <h3>{titulo}</h3>
      <section className='conteiner-visualizar' >
      {colaborador.map((datos,index)=><Colaborador eliminarRegistro={eliminarRegistro} key={index} color={color} colaborador={datos}/>)} 
    </section>

    </section>}
    </>
  )
}

export default VisualizarEqui
