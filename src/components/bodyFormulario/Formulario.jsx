import React, { useState } from "react";
import "./formulario.css";
import IngresarDatos from "../IngresarDatos";
import Equipos from "../equipos/Equipos";
import BtnCrear from "../button/BtnCrear";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const obtenerDatos = (e) => {
    e.preventDefault();
    let datos = {
      nombre,
      puesto,
      foto,
      equipo
    };

    console.log(datos);
  };

  return (
    <section>
      <div>
        <form className="forfumalario-conteiner" onSubmit={obtenerDatos}>
          <IngresarDatos
            id="nombre"
            title="Nombre"
            required
            setdato={setNombre}
          />
          <IngresarDatos
            id="puesto"
            title="Puesto"
            required
            setdato={setPuesto}
          />
          <IngresarDatos
            id="foto"
            title="Foto"
            required
            setdato={setFoto}
          />
          <Equipos setdato={setEquipo}/>
          <BtnCrear />
        </form>
      </div>
    </section>
  );
}

export default Formulario;
