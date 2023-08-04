import React from "react";
import "./btn-oculta.css"
function BtnOcultar({mostrarFormulario}) {



  return (
    <section  className="conteiner-btnocultar">
      <h3 className="titulo-btnocultar">Mi organizacion</h3>
      <img className="btn__imagen" src="/img/btnOcultar.png" alt="ocultar inscripcion" onClick={mostrarFormulario} />
    </section>
  );
}

export default BtnOcultar;
