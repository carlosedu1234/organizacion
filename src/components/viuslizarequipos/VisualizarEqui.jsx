import React from 'react'
import "./visualizarequi.css"
import Colaborador from '../colaborador/Colaborador';
function VisualizarEqui({colaborador,equipos}) {
    const {titulo,colorFondoP,colorFondoS}=equipos;
   console.log(colaborador.length);
  return (
    <>
   {colaborador.length> 0 &&
    <section className="conteiner" style={{backgroundColor:colorFondoP}}>
      <h3 style={{borderColor:colorFondoS}}>{titulo}</h3>
      <section className='conteiner-visualizar' style={{backgroundColor:colorFondoP}}>
      {colaborador.map((datos,index)=><Colaborador key={index} equipos={equipos} colaborador={datos}/>)} 
    </section>
    </section>}
    </>
  )
}

export default VisualizarEqui
