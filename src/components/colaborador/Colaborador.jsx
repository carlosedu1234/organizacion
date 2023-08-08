import "./colaborador.css"
import { AiFillCloseCircle } from "react-icons/ai"

const Colaborador = ({colaborador,color,eliminarRegistro}) => {

    const { nombre, puesto, foto, id } = colaborador;
  

    return <div className="colaborador">
        {<AiFillCloseCircle className="eliminar" onClick={()=>eliminarRegistro(id)} />}
        <div className="encabezado" style={{ backgroundColor:color}}>
            <img src={foto} alt="nombre" />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
           
        </div>
    </div>
}

export default Colaborador