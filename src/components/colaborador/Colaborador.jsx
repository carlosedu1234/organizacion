import "./colaborador.css"
/* import { AiFillCloseCircle } from "react-icons/ai" */

const Colaborador = ({colaborador,equipos}) => {

    const { nombre, puesto, foto, equipo } = colaborador;
    const  {colorFondoS } = equipos;

    console.log(equipo)
    
    return <div className="colaborador">
        {/* <AiFillCloseCircle className="eliminar" onClick={eliminarColaborador} /> */}
        <div className="encabezado" style={{ backgroundColor:colorFondoS}}>
            <img src={foto} alt="nombre" />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador