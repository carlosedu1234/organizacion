import React from "react";

function IngresarDatos({ id, title, required,setdato }) {

  const placeholder = `${title}...`;
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        placeholder={placeholder}
        required={required}
        onChange={(e) => {setdato(e.target.value) }}
      />
    </div>
  );
}

export default IngresarDatos;
