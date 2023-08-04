import { useState } from 'react';
import './App.css';
import Formulario from './components/bodyFormulario/Formulario';
import BtnOcultar from './components/btn-ocultar/BtnOcultar';
import Header from './components/header/Header';
import VisualizarEqui from './components/viuslizarequipos/VisualizarEqui';
import { listaEquiPlantilla } from './Datos/datosEquipo';

function App() {

  const [mostrar, setMostrar] = useState(false)
  const [colaborador,setColaborador]=useState([])

const obtenerDatosC=(datos)=>{
  setColaborador([...colaborador,datos])
}

  return (
    <div className="App">
      <Header />
      {mostrar && <Formulario setColaborador={obtenerDatosC}/>}
      <BtnOcultar mostrarFormulario={() => setMostrar(!mostrar)}/>
      {listaEquiPlantilla.map(datos => 
      <VisualizarEqui key={datos.titulo} colaborador={colaborador.filter(equipo=>equipo.equipo===datos.titulo)} equipos={datos}/>)}
    </div>
  );
}

export default App;
